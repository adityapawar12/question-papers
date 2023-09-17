"use client";
import { Suspense, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "usehooks-ts";

import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";

const years: Array<number> = [
  2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
];

const Papers = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2023);
  const mobile = useMediaQuery("(max-width: 768px)");
  const tablet = useMediaQuery("(min-width: 768px)");
  const desktop = useMediaQuery("(min-width: 1024)");

  return (
    <div>
      <h3 className="text-xl font-semibold">YEAR</h3>
      <Swiper
        slidesPerView={desktop ? 10 : tablet ? 5 : mobile ? 3 : 3}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {years.map((year: number, index) => (
          <SwiperSlide
            key={year}
            className={`${
              selectedYear === year ? "bg-emerald-400" : "bg-emerald-100"
            } w-auto text-center text-lg py-2 px-4 mx-2 rounded-full ${
              years.length === index && "mr-20"
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center my-4">
        <Suspense fallback={"loading..."}>
          <iframe
            src="https://drive.google.com/file/d/1A-Zctda6M7tBReUah0zzinOVhtcIwFyI/preview"
            className="rounded-xl max-w-screen-lg w-[320px] sm:w-[640px] md:w-[768px] lg:w-[1024px]"
            title="Async & Performance"
            width={desktop ? "1024" : tablet ? "768" : mobile ? "320" : "320"}
            height="600"
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Papers;
