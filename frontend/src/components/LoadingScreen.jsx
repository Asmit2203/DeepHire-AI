import { motion } from "framer-motion";

function LoadingScreen() {
  const steps = [
    "Extracting Resume",
    "Analyzing Skills",
    "Calculating ATS Score",
    "Generating Career Roadmap",
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] text-white">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
        className="mb-10 h-20 w-20 rounded-full border-4 border-zinc-800 border-t-white"
      />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-10 text-5xl font-bold"
      >
        Analyzing Resume...
      </motion.h1>

      <div className="space-y-5">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.4,
            }}
            className="text-lg text-zinc-300"
          >
            ✓ {step}
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default LoadingScreen;