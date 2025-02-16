"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface InventoryItem {
  id: number;
  name: string;
  price: string;
  stock: number;
}

const inventoryItems = [
  { id: 1, name: "Luxury Sedan", price: "$45,000", stock: 5 },
  { id: 2, name: "SUV", price: "$35,000", stock: 8 },
  { id: 3, name: "Electric Vehicle", price: "$55,000", stock: 3 },
  { id: 4, name: "Sports Car", price: "$65,000", stock: 2 },
];

const aiResponses = [
  "Based on current inventory, I recommend highlighting our Luxury Sedan. We have 5 in stock, perfect for customers looking for a high-end driving experience.",
  "Our SUV inventory is strong with 8 units available. This is ideal for families or those seeking versatile vehicles for various lifestyles.",
  "Electric Vehicles are trending. With 3 in stock, we can emphasize their eco-friendly benefits and cutting-edge technology to interested customers.",
  "Our limited stock of 2 Sports Cars creates an opportunity for exclusivity marketing. We can target enthusiasts looking for a unique driving experience.",
];

export default function MVPSection() {
  const [selectedItem, setSelectedItem] = useState(inventoryItems[0]);
  const [aiResponse, setAiResponse] = useState(aiResponses[0]);

  const handleItemClick = (item: InventoryItem) => {
    setSelectedItem(item);
    setAiResponse(aiResponses[item.id - 1]);
  };

  return (
    <section className="bg-gray-950/[98%] py-16">
      <div className="container max-w-5xl 2xl:max-w-6xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[42px] 2xl:text-5xl font-bold mb-4 2xl:mb-6 text-gray-200">
            Tailored to{" "}
            <span className="inline text-blue-500">Your Inventory</span>.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our AI doesn&apos;t just respond—it <b>understands</b> your
            business. Watch how it <b>personalizes</b> its recommendations based
            on your <b>existing inventory data</b>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-900/50 bg-transparent p-6 rounded-xl h-full">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              Your Inventory
            </h3>
            <div className="space-y-2">
              {inventoryItems.map((item) => (
                <Button
                  key={item.id}
                  variant={selectedItem.id === item.id ? "default" : "outline"}
                  className={clsx(
                    "w-full justify-start text-left bg-gray-200",
                    selectedItem.id === item.id &&
                      "bg-blue-600 hover:bg-blue-600 border-none  text-gray-300"
                  )}
                  onClick={() => handleItemClick(item)}
                >
                  <span>{item.name}</span>
                  <span className="ml-auto">{item.stock} in stock</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 bg-transparent p-6 rounded-xl h-full">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              AI Response
            </h3>
            <div className="bg-blue-700 p-4 rounded-md">
              <motion.p
                key={selectedItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="text-gray-300"
              >
                {aiResponse}
              </motion.p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            size={"lg"}
            className="bg-gray-200 hover:bg-blue-700 text-gray-950 hover:text-gray-200 font-semibold py-2 px-6 rounded-md transition-all duration-300 text-base"
          >
            <Link href={"#demo"} scroll={true}>
              See How It Works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
