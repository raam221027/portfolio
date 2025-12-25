import React from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-2 px-6 flex justify-between items-right bg-transparent">
      {/* Right: navigation */}
      <nav>
        <div className="flex gap-4 items-center">
          <Button size="sm">About Me</Button>
          <Button size="sm" variant="outline">Projects</Button>
          <Button size="sm" variant="outline">Certificates</Button>
          <Button size="sm" variant="outline">Contact Me</Button>
        </div>
      </nav>
    </header>
  )
}
