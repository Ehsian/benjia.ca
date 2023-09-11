"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Hi, I'm Ben!
                    </h1>
                    <p className="text-stone-300 text-lg lg:text-xl mb-4">
                        <TextAnimationComponent />
                        <br/>
                        Welcome to my website!
                    </p>
                    <div>
                        <button className="rounded-full mb-4 px-6 py-3 mr-4 bg-white hover:bg-stone-300 text-black">View My Resume</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#b6a5a5] w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] relative">
                        <Image
                            className="rounded-full relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[350px] lg:h-[350px]"
                            src="/images/hero-img.jpg"
                            alt="Me :P"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
            <div className="pt-6 sm:pt-12 lg:pt-36">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-white">Quick Links</h2>
                <div className="mx-auto flex justify-center gap-12 pt-4">
                    <a href="mailto:benjia279@gmail.com"><img src="/images/email-icon.svg" width="48px"/></a>
                    <a href="https://www.github.com/Ehsian"><img src="/images/github-icon.svg"/></a>
                    <a href="https://www.linkedin.com/in/Ehsian/"><img src="/images/linkedin-icon.svg"/></a>
                </div>
            </div>
        </section>
    )
}

const TextAnimationComponent = () => {
    return (
      <TypeAnimation
        sequence={[
          'I am a 2nd year student at UBC.', 1500,
          'I am majoring in Statistics.', 1500,
          'I am a classical music enthusiast.', 1500,
          'I enjoy playing video games.', 1500,
          'I enjoy playing piano.', 1500,
          'I enjoy taking long walks to explore Vancouver.', 1500,
          'I enjoy learning about software.', 1000,
          'I enjoy learning about music theory.', 1000,
          'I enjoy learning about new technologies.', 1000,
          'I enjoy learning about science.', 1000,
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={70}
        style={{display: 'inline-block' }}
        repeat={Infinity}
      />
    );
  };

export default Hero