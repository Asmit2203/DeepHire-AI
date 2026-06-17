import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="text-center">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 inline-flex rounded-full border border-zinc-800 px-5 py-2 text-zinc-400"
      >
        Deep Learning + Generative AI
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl text-6xl font-bold tracking-tight md:text-7xl"
      >
        Resume Intelligence,
        <br />
        Powered by AI.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-8 max-w-3xl text-xl text-zinc-400"
      >
        Analyze resumes using DistilBERT and Gemini AI to uncover ATS
        insights, identify skill gaps, and receive personalized career
        recommendations.
      </motion.p>

    </div>
  );
}

export default Hero;