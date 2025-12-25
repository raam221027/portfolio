import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950" />

      {/* Optional noise / texture later */}
      {/* <div className="absolute inset-0 -z-10 bg-[url('/noise.png')] opacity-20" /> */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 max-w-3xl"
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
    </section>
  )
}
