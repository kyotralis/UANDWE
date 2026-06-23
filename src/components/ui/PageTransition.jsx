import { motion } from "framer-motion";
import { useNavigationType } from "react-router-dom";

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.18,
};

export default function PageTransition({ children }) {
  const navType = useNavigationType(); // "PUSH" | "POP" | "REPLACE"

  // POP  = browser back/forward button → slide from LEFT
  // PUSH = link click (forward)        → slide from RIGHT
  const isBack = navType === "POP";

  const pageVariants = {
    initial: {
      opacity: 0,
      x: isBack ? -40 : 40,   // back ← left,  forward → right
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: isBack ? 40 : -40,   // exit opposite direction
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
