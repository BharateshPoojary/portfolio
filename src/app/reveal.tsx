"use  client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}
const Reveal = ({ children, width = "fit-content" }: Props) => {
  const Revealref = useRef(null);
  const isInView = useInView(Revealref, { once: true });
  const mainControl = useAnimation();
  const slideControl = useAnimation();
  useEffect(() => {
    // console.log(isInView);
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView]);
  return (
    <div style={{ position: "relative", overflow: "hidden" }} ref={Revealref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
