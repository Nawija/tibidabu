import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <>
            <Layout>
                <div className="mx-auto text-center overflow-hidden relative text-white max-w-[1800px]">
                    <div>
                        <StaticImage
                            loading="eager"
                            className="min-h-[22rem]"
                            quality={100}
                            placeholder="dominantColor"
                            src="../images/hero.jpg"
                        />
                    </div>
                    <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
                        <p className=" bg-[#19C0B6] py-1.5 px-3 lg:py-2 lg:px-4 text-base tracking-wider lg:text-lg font-medium w-max rounded-lg">
                            WITAJ W TIBIDABU
                        </p>
                        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold w-max">
                            Zajęcia Dla Dzieci
                        </h1>
                    </div>
                    <div className="text-gray-800 mt-6">
                        <h2 className="text-2xl font-bold">
                            Nasza
                            <br />
                            <span className="text-[#5271FF]">Oferta</span>
                        </h2>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Tibidabu" description="" />;
