"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Viewport = "mobile" | "tablet" | "desktop";

interface ViewportContextType {
  viewport: Viewport;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  showDesktopWarning: boolean;
}

const ViewportContext = createContext<ViewportContextType | undefined>(
  undefined,
);

export const ViewportProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [viewport, setViewport] = useState<Viewport>("desktop");

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewport("mobile");
      } else if (width < 1024) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
      }
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const value: ViewportContextType = {
    viewport,
    isMobile: viewport === "mobile",
    isTablet: viewport === "tablet",
    isDesktop: viewport === "desktop",
    showDesktopWarning: viewport !== "desktop",
  };

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error("useViewport must be used within ViewportProvider");
  }
  return context;
};
