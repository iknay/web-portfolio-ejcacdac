"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useViewport } from "../../providers/ViewportProvider";

const DesktopOnlyWarning = () => {
  const { showDesktopWarning, viewport } = useViewport();

  return (
    <AnimatePresence>
      {showDesktopWarning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-9999 bg-background flex items-center justify-center p-8 max-h-screen"
        >
          <div className="max-w-md text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-6xl"
            >
              💻
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold"
            >
              Desktop Experience Required
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              This portfolio is best viewed on a desktop screen for the optimal
              experience.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground space-y-2"
            >
              <p>
                Current device:{" "}
                <span className="font-semibold capitalize">{viewport}</span>
              </p>
              <p>
                Please switch to a desktop device or resize your browser window
                to at least 1024px wide.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopOnlyWarning;
