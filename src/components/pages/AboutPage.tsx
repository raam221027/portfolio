import React from "react"
import { Compare } from "@/components/ui/compare";

export default function AboutPage() {
  return (
  <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-5">
      <Compare
        firstImage="./profile1.png"   // path to your first image
        secondImage="./skills.png"  // path to your second image
        initialSliderPercentage={50}
        slideMode="hover"                   // "hover" or "drag"
        showHandlebar={true}
        autoplay={false}
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
      />
    </div>
  )
}

