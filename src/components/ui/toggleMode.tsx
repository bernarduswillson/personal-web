"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ToggleMode = (): JSX.Element => {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState("light");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          setTheme(mode);
          setMode((prev) => (prev === "dark" ? "light" : "dark"));
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {mode === "dark" ? <MoonIcon className={`${isHovered ? 'rotate-180' : 'rotate-0'} transform transition-all duration-500 ease-in-out w-6 h-6`} /> : <SunIcon className={`${isHovered ? 'rotate-90' : 'rotate-0'} transform transition-all duration-500 ease-in-out w-6 h-6`} />}
      </Button>
    </div>
  );
};

export default ToggleMode;
