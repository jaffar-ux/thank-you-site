"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FirstScreen from "@/components/FirstScreen";
import SecondScreen from "@/components/SecondScreen";
import ThirdScreen from "@/components/ThirdScreen";
import FourthScreen from "@/components/FourthScreen";
import HugOverlay from "@/components/HugOverlay";
import RestartOverlay from "@/components/RestartOverlay";

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showHugOverlay, setShowHugOverlay] = useState(false);
  const [showRestartOverlay, setShowRestartOverlay] = useState(false);

  const screens = [
    <FirstScreen key="first" onNext={() => handleNext()} />,
    <SecondScreen key="second" onNext={() => handleNext()} />,
    <ThirdScreen key="third" onNext={() => handleNext()} />,
    <FourthScreen key="fourth" onShowOverlay={() => setShowHugOverlay(true)} />,
  ];

  const handleNext = () => {
    setCurrentScreen((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentScreen(0);
    setShowHugOverlay(false);
    setShowRestartOverlay(false);
  };

  const handleHugClose = () => {
    setShowHugOverlay(false);
    setShowRestartOverlay(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200">
      <div className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      <HugOverlay show={showHugOverlay} onClose={handleHugClose} />
      <RestartOverlay show={showRestartOverlay} onRestart={handleRestart} />

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-[13px] text-black/80 pointer-events-none z-40 font-light"
      >
      
      </motion.div>
    </div>
  );
}
