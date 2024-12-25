"use client";

import React, { useState } from "react";

export const PasswordPrompt = () => {
  const [password, setPassword] = useState("");
  const [incorrect, setIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const req = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (req.status !== 200) {
      setIncorrect(true);
      setLoading(false);
    } else {
      window.location.reload();
    }
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
