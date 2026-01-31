import { motion } from "framer-motion"
import { SparklesPreview } from "../ui/sparkles";
// import { GlowCard } from "../ui/glowcard";
import { DotPattern } from "../ui/dotted-glow-background";

export default function Hero() {
  return (
    <section className="static z-0 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sparkling Background */}   
      <SparklesPreview className="absolute inset-0 -z-10 w-full h-full mb-48">
        <div className="relative z-10 text-center px-6">
          
          <motion.div
            initial={{ opacity: 1, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Joemar Questadio
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-300">
                A passionate Web Developer focused on clean, user-friendly interfaces and seamless system integrations.
              </p>
            
          </motion.div>
        </div>
      </SparklesPreview> 
      <DotPattern className="fixed inset-0">
   
      </DotPattern>
        
    </section>
  )
}