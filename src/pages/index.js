import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profile1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Button1, Button2 } from "@/components/Buttons";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Transitioneffects from "@/components/Transitioneffects";
import Hireme from "@/components/Hireme";

const Home = () => {
  return (
    <>
      <Head>
        <title>Alok Yadav</title>
      </Head>
      <Transitioneffects />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px)50vw,50vw"
                src={profilePic}
                alt="tony-stark"
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Coding Your Dreams into Reality"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
              />
              <p className="my-4 text-base  font-medium md:text-sm sm:text-xs">
                Welcome to my portfolio! I&apos;m a skilled web developer who
                designs and develops modern, responsive websites using HTML,
                CSS, JavaScript, React.js, Next.js and Tailwindcss. My focus on
                user experience ensures that every website I create is visually
                appealing and intuitive. Please view my portfolio to see
                examples of my work. Thank you
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center gap-3">
                <Link
                  href="/alok_frontend_resume.pdf"
                  target={"_blank"}
                  download={true}
                >
                  <Button1 name="Resume" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/alok-yadav-809904237/"
                  target={"_blank"}
                >
                  <Button2 name="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
        <div className="absolute right-8  bottom-8 inline-block w-24 md:hidden xl:-bottom-20">
          <Image src={lightBulb} alt="light bulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
};

export default Home;
