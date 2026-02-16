"use client";

import React from "react";
import TopNavbar from "../components/custom/navbar/TopNavbar";
import BottomNavbar from "../components/custom/navbar/BottomNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollThreshold } from "../hooks/useScrollThreshold";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const showBottomNav = useScrollThreshold({ threshold: 250 });

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar - Fades out on scroll */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showBottomNav ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showBottomNav ? "none" : "auto" }}
        className="sticky top-0 z-50"
      >
        <TopNavbar />
      </motion.div>

      <div className="flex flex-col px-12 pb-20 gap-36">{children}</div>

      <AnimatePresence>
        {showBottomNav && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 w-fit -translate-x-1/2 left-1/2 z-50"
          >
            <BottomNavbar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
