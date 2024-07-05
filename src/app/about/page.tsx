'use client';

import React from 'react'

import { Vortex } from "@/components/ui/vortex";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

function page() {
    return (
        <div className=" rounded-md  h-[60rem] w-full overflow-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center mt-30">
                    About Us
                </h2>
                <TypewriterEffectSmooth words={words} />
            </Vortex>
        </div>

    )
}

export default page