"use client";
import Button from "@/components/Button";
import { skills } from "@/constants";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AboutMe = () => {
  const technologies = Object.keys(skills);
  return (
    <div className="flex flex-col justify-center p-5 min-h-screen mt-[9rem] w-full">
      <div className="flex justify-between px-10">
        <div className="max-w-xl">
          <h3
            className={"text-xl sm:text-2xl md:text-3xl mb-3 font-semibold"}
          >
            Who the hell is Gourav?
          </h3>

          {/* Bio */}
          <p className="text-text-accent mb-4 text-lg">
            Hey! I&apos;m <strong>Gourav Malviya</strong>, a self-taught full-stack web developer currently pursuing a BCA from the University of Kota (Class of 2026).
            I specialize in crafting modern, scalable web apps using the <strong>MERN stack</strong> and <strong>Next.js</strong>, and I&apos;m diving deep into <strong>blockchain technology</strong> next.
            <br /><br />
            I enjoy building side projects, exploring tech trends, and turning ideas into live applications that actually solve problems. Always learning, always building — that's the vibe.
          </p>
        </div>

        <div className="hidden md:block">
          <Image
            src="/gourav.png"
            alt="Gourav Malviya"
            width={300} height={300}
            className="rounded-full max-w-[300px]"
          />
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-col px-10 mt-14">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 font-semibold">Technologies I use</h3>

        {/* tech stack */}
        <div className="w-full space-y-5 mt-2">
          {technologies.map((tech) => (
            <div key={tech} className="space-y-2">
              <h4 className="dark:text-text-secondary font-semibold">{tech.toUpperCase()}</h4>

              <div className="flex gap-3 flex-wrap">
                {skills[tech].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Button
                      variant="ghost"
                      className="text-xl sm:text-3xl p-2"
                    >
                      {skill.icon}
                      <span className="text-sm">{skill.name}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid place-content-center mt-10 mb-5">
        <Link href="/contact">
          <Button variant='outline' className='group/link'>
            Contact me
            <FaArrowRight className='group-hover/link:translate-x-1 text-sm transition-all ease-in duration-150'/>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
