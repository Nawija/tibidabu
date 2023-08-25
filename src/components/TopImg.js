import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const TopImg = ({ head }) => {
    return (
        <section className="relative">
            <StaticImage
                className="min-h-[11rem]"
                loading="eager"
                quality={100}
                src="../images/shero.jpg"
                alt="tło tibidabu"
            />
            <p className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold w-max text-white">
                {head}
            </p>
        </section>
    );
};

export default TopImg;
