import React from "react";
import Marquee from "react-fast-marquee";

const brandIcons = [
  "/brands/dhl.png",
  "/brands/fedex.png",
  "/brands/ups.png",
  "/brands/maersk.png",
  "/brands/nipost.png",
];

export const BrandsCarousel = () => {
  const logos = [...brandIcons, ...brandIcons]; // Repeat twice

  return (
    <section id="brands" className="bg-gray-100 py-12">
      <h2 className="text-center text-2xl font-bold mb-8 text-gray-700">
        Trusted by Leading Brands
      </h2>

      <Marquee speed={50} gradient={false}>
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Brand logo"
            className="mx-8 w-28 h-auto grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </Marquee>
    </section>
  );
};
