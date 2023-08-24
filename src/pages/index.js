import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <>
            <Layout>
                <div className="mx-auto text-center overflow-hidden relative text-white max-w-[1700px]">
                    <StaticImage
                        loading="eager"
                        imgClassName="xl:rounded-2xl hidden sm:flex"
                        className="hidden sm:flex"
                        quality={100}
                        placeholder="dominantColor"
                        src="../images/hero.jpg"
                    />

                    <StaticImage
                        loading="eager"
                        quality={100}
                        imgClassName="sm:hidden flex"
                        className="sm:hidden flex"
                        placeholder="dominantColor"
                        src="../images/shero.jpg"
                    />
                    <div className="absolute top-[45%] lg:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
                        <p className=" bg-[#19C0B6] py-1.5 px-3 lg:py-2 lg:px-4 text-base tracking-wider lg:text-lg font-medium w-max rounded-lg">
                            WITAJ W TIBIDABU
                        </p>
                        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold w-max">
                            Zajęcia Dla Dzieci
                        </h1>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Tibidabu" description="" />;
