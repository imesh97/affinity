"use client";

import { toast } from "sonner";
import React, { useState } from "react";

export const PasswordPrompt = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const req = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (req.status !== 200) {
      toast.error("Incorrect password.");
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-200">
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-neutral-100 text-neutral-800 px-2 py-2 rounded-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-all px-4 py-2 rounded-sm font-semibold">
          Unlock
        </button>
      </form>
    </div>
  );
};
