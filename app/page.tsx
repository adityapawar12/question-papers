"use client";

import Navbar from "@/components/shared/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Papers from "./_components/papers";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-6">
        <div className="max-w-screen-lg w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] flex justify-between p-4">
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
