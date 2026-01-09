import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora background (fills full viewport) */}
      <AuroraBackground className="absolute inset-0 -z-10">
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Joemar Questadio
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Web Developer focused on clean UI, system integration,
              and building practical solutions with modern tools.
            </p>
            {/* Buttons moved to Header */}
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  )
}


