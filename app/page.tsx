"use client";

import Navbar from "@/components/shared/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Papers from "./_components/papers";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const questionPapersRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar />
      <div className={`w-full relative text-right flex justify-center`}>
        <Image
          src={"/edu-pic.jpg"}
          alt="Education Picture"
          width={1920}
          height={1080}
          className="h-[40rem] w-full object-cover"
        ></Image>
        <h1 className="text-emerald-700 max-sm:right-4 max-lg:right-10 text-5xl md:text-6xl lg:text-8xl w-[1024px] absolute top-36 md:top-20 flex justify-end flex-col max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg font-sans font-bold">
          Start Your <br /> Learning <br /> Journey <br />
          With Us.
          <button
            className={`text-base md:text-xl lg:text-2xl rounded-lg md:rounded-xl mt-2 md:mt-4 bg-emerald-400 text-white p-2 md:p-4 block self-end`}
            onClick={() => {
              if (questionPapersRef.current) {
                questionPapersRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }
            }}
          >
            Get Question Papers
          </button>
        </h1>
      </div>
      <div ref={questionPapersRef} className="flex justify-center">
        <div className="max-w-screen-lg w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] flex justify-between">
          <Tabs
            className="max-w-screen-lg w-full sm:w-[640px] md:w-[768px] lg:w-[1024px]"
            defaultValue="marathi"
          >
            <TabsList className="max-w-screen-lg w-full sm:w-[640px] md:w-[768px] lg:w-[1024px]">
              <TabsTrigger className="w-full" value="marathi">
                MARATHI
              </TabsTrigger>
              <TabsTrigger className="w-full" value="english">
                ENGLISH
              </TabsTrigger>
            </TabsList>
            <TabsContent value="marathi">
              <div className="h-auto w-full p-4">
                <Papers />
              </div>
            </TabsContent>
            <TabsContent value="english">
              <div className="h-auto w-full p-4">
                <Papers />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
