"use-client";

import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";
import { SparklesCore } from './ui/sparkles';

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


function HeroSection() {

    const words = [
        {
          text: "Welcome",
        },
        {
          text: "to",
        },
        {
          text: "Master",
        },
        {
          text: "the",
        },
        {
          text: "art",
        },
        {
          text: "of",
        },
        {
          text: "music",
        },
        {
          text: "Aceternity.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];

    return (
        <>
            <div className='h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0  '>
                
                <Spotlight
                    className="-top-60 left-10 md:left-60 md:-top-20"
                    fill="white"
                />

                <h1 className=" text-4xl mt-10 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    {/* Master the art of music */}
                    <TypewriterEffectSmooth words={words} />
                </h1>

                <p className="mt-10 font-bold text-start text-base md:text-lg text-neutral-300 max-w-lg mx-auto mb-20">
                    Dive into our comprehensive music courses and transform your musical journey today.
                    Whether you're a beginner or looking to refine your skills,
                    join us to unlock your true potential.
                </p>

                {/* this is for background dotted sparkles */}
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>

                <div className='mt-40 font-bold'>
                    <Link href={"/courses"} >

                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 "
                        >
                            Explore courses
                        </Button>

                    </Link>

                </div>

            </div>

        </>
    )
}

export default HeroSection