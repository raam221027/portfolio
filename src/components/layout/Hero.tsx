import { motion } from "framer-motion"
import { SparklesPreview } from "../ui/sparkles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Sparkling Sparkling */}
      <SparklesPreview className="absolute inset-0 -z-10 w-full h-full">
        <div className="relative z-10 text-center px-6 w-full max-w-full">
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
            A passionate Web Developer focused on clean, user-friendly interfaces and seamless system integrations.
             
            </p>
            {/* Buttons moved to Header */}
          </motion.div>
        </div>
      </SparklesPreview>

      

    </section>
    
  )
}


