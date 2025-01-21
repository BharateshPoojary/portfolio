"use  client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}
const Reveal = ({ children }: Props) => {
  const Revealref = useRef(null);
  const isInView = useInView(Revealref, { once: true });
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    // console.log(isInView);
    if (isInView) {
      slideControl.start("visible");
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <div style={{ position: "relative", overflow: "hidden" }} ref={Revealref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 35 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControl}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            backdropFilter: "blur(10px)", // Apply blur effect
            background: "white", // Semi-transparent black
            zIndex: 20,
          }}
        />
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
