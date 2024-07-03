'use client';

import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import courseData from '@/data/music_courses.json'
import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

interface Courses {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string

}

function page() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36 ]">



            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">

                <div className="w-full absolute inset-0 overflow-hidden">
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

                All courses ({courseData.courses.length})
            </h1>

            {/* <div className=" flex flex-wrap justify-center gap-8"> */}

            <div className=" grid md:grid-cols-3">
                {courseData.courses.map((course: Courses) => (

                    <div key={course.id}>

                        <CardContainer className="inter-var m-4">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {course.title}
                                </CardItem>

                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {course.description}
                                </CardItem>

                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={course.image}
                                        width="100"
                                        height="50"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={course.title}
                                    />
                                </CardItem>

                                <div className="flex justify-between items-center mt-20">

                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Try now →
                                    </CardItem>

                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Sign up
                                    </CardItem>

                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>

                ))}

                {/* </div> */}
            </div>

        </div>
    )
}

export default page