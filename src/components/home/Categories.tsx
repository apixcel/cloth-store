"use client";
import { productCategories } from "@/mock/productCategory";
import { IProductCategory } from "@/types/product";
import { getRandomInteger } from "@/utils/getRandomInteger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SectionHeading from "../ui/sectionHeading";
import { bgImageStyle, categorySliderSettings } from "./homeUtils";
const Categories = () => {
  const nextSlides = () => {
    // slider settings =>{ nextArrow: <span id="next" className="invisible" />}
    const nextBtn = document.getElementById("next");
    if (!nextBtn) return;
    nextBtn.click();
  };
  const prevSlides = () => {
    // slider settings =>{ prevArrow: <span id="prev" className="invisible" />}
    const prevBtn = document.getElementById("prev");
    if (!prevBtn) return;
    prevBtn.click();
  };

  const collectiondata = [
    {
      _id: "1",
      name: "Winter Collection",
      image: "/img/img-2.jpg",
    },
    {
      _id: "2",
      name: "Summer Collection",
      image: "/img/img-3.jpg",
    },
    {
      _id: "3",
      name: "All Time Collection",
      image: "/img/img-2.jpg",
    },
  ];

  return (
    <section className="mt-[50px] w-full">
      <SectionHeading text="Top Categories" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {/* <div className="flex flex-wrap gap-[20px]"> */}
        {collectiondata?.map((collection, i) => {
          return (
            <div
              key={collection._id}
              className={`  flex flex-col justify-end text-white relative roundedCustom ${
                i === 1 ? "mt-[10px] h-[420px]" : "h-[400px]"
              }`}
            >
              <div
                className={`  flex flex-col justify-end text-white relative roundedCustom h-[400px]`}
                style={{
                  backgroundImage: `url(${collection.image})`,
                  ...bgImageStyle,
                  transition: "0.5s",
                }}
              >
                <div className="absolute bg-black/50 w-full h-[400px] roundedCustom"></div>
                <div className="py-[40px] pl-[20px] z-10">
                  <p className=" text-[24px] font-semibold ">
                    {collection.name}
                  </p>
                  <small className=" text-[12px] font-medium tracking-wider">
                    Large Collection
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
