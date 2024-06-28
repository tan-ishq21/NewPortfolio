import { AnimatePresence, Variants, motion } from "framer-motion";
export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#333",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-accent stroke-accent"
      >
        {/* Background circle */}
        <motion.circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill="#f0f0f0" 
          stroke="#fff" 
          strokeWidth="3"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
        
        {/* Letter T */}
        <motion.text 
          x="50%" 
          y="50%" 
          fontFamily="Arial, Helvetica, sans-serif" 
          fontSize="60" 
          fill="#333" 
          textAnchor="middle" 
          dominantBaseline="central" 
          fontWeight="bold"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        >
          T
        </motion.text>
        
        {/* Shadow for depth */}
        <motion.text 
          x="52%" 
          y="52%" 
          fontFamily="Arial, Helvetica, sans-serif" 
          fontSize="60" 
          fill="rgba(0, 0, 0, 0.2)" 
          textAnchor="middle" 
          dominantBaseline="central" 
          fontWeight="bold"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        >
          T
        </motion.text>
      </motion.svg>
    </AnimatePresence>
  );
}
