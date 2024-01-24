"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ToggleMode = (): JSX.Element => {
  const { setTheme, resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(resolvedTheme);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMode(resolvedTheme);
    setLoading(false);
  }, [resolvedTheme]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          const newMode = mode === "dark" ? "light" : "dark";
          setTheme(newMode);
          setMode(newMode);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {mode === "dark" ? (
            <SunIcon
              className={`${isHovered ? "rotate-90" : "rotate-0"} transform transition-all duration-500 ease-in-out w-6 h-6`}
            />
          ) : (
            <MoonIcon
              className={`${isHovered ? "rotate-180" : "rotate-0"} transform transition-all duration-500 ease-in-out w-6 h-6`}
            />
          )}
        </motion.div>
      </Button>
    </div>
  );
};

export default ToggleMode;
