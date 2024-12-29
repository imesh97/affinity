import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { navLinks } from "@/constants";
import ShimmerButton from "./ui/shimmer-button";

export default function MobileNavbar() {
  return (
    <Drawer>
      <DrawerTrigger asChild className="">
        <Button variant="ghost" className="lg:hidden">
          <Menu size={48} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-gray-950 border-gray-900">
        <DrawerHeader className="text-gray-900">
          <DrawerTitle className="my-1">
            <Logo />
          </DrawerTitle>
          <DrawerDescription className="text-center mx-auto text-gray-500 tracking-wide">
            Automation that drives sales.
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <div className="flex flex-col space-y-3 mb-3">
            {navLinks.map((link) => (
              <DrawerClose asChild key={link.href} className="text-center">
                <Link
                  href={`#${link.href}`}
                  scroll={true}
                  className="text-gray-300 hover:text-blue-400 font-semibold tracking-wide transition-colors">
                  {link.name}
                </Link>
              </DrawerClose>
            ))}
          </div>
          <DrawerClose asChild>
            <ShimmerButton
              type="submit"
              className="flex mx-auto w-1/2 md:w-1/3 font-bold tracking-widest text-sm text-gray-100 uppercase"
              background="#3b82f6"
              borderRadius="10px"
              shimmerSize="0.1em">
              Book a Demo
            </ShimmerButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
