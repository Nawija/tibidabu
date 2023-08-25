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
                </div>
                <div className="text-gray-800 text-center pb-12 max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-bold">
                        Nasza
                        <br />
                        <span className="text-[#5271FF]">Oferta</span>
                    </h2>
                    <div className="flex items-center justify-center pt-24 text-start">
                        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
                            <div className="pb-10 pl-12">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                            <div className="pb-10">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                            <div className="pb-10 pl-12">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-16">
                            <StaticImage
                                quality={100}
                                placeholder="dominantColor"
                                src="../images/dzieci.jpg"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
                            <div className="pb-10">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                            <div className="pb-10 pl-12">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                            <div className="pb-10">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="max-w-screen-xl mx-auto pt-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2">
                            <StaticImage quality={100} src="../images/x1.jpg" />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                            <h2 className="text-lg font-bold pb-2">
                                Why do we use it?
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy. Various versions have
                                evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the
                                like).
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2 lg:order-1">
                            <StaticImage quality={100} src="../images/x2.jpg" />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                            <h2 className="text-lg font-bold pb-2">
                                Why do we use it?
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy. Various versions have
                                evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the
                                like).
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2">
                            <StaticImage quality={100} src="../images/x3.jpg" />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                            <h2 className="text-lg font-bold pb-2">
                                Why do we use it?
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy. Various versions have
                                evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the
                                like).
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Tibidabu" description="" />;
