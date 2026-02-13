"use client";

import { useState, useEffect } from "react";

interface UseScrollThresholdOptions {
  threshold?: number;
  initialValue?: boolean;
}

export const useScrollThreshold = (
  options: UseScrollThresholdOptions = {},
): boolean => {
  const { threshold = 300, initialValue = false } = options;
  const [isScrolled, setIsScrolled] = useState(initialValue);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};
