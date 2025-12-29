import React from "react"
import { Button } from "@/components/ui/button"

export default function Header({ navigate }: { navigate: (path: string) => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-3 px-6 flex justify-center items-center bg-black/50 backdrop-blur-sm border-b border-white/10">
      {/* Center: navigation */}
      <nav>
        <div className="flex gap-4 items-center ">
          <Button size="sm" onClick={() => navigate("/")}>All</Button>
          <Button size="sm" onClick={() => navigate("/about")}>About Me</Button>
          <Button size="sm" onClick={() => navigate("/projects")}>Projects</Button>
          <Button size="sm" onClick={() => navigate("/certificates")}>Certificates</Button>
          <Button size="sm" onClick={() => navigate("/contact")}>Contact Me</Button>
        </div>
      </nav>
    </header>
  )
}
