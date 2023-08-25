import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <>
            <Layout>
                <div className="mx-auto text-center overflow-hidden relative text-white max-w-[1800px]">
                    <div>
                        <StaticImage
                            loading="eager"
                            className="min-h-[25rem]"
                            quality={100}
                            placeholder="blurred"
                            src="../images/hero.jpg"
                        />
                    </div>
                    <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
                        <p className=" bg-[#19C0B6] py-1.5 px-3 lg:py-2 lg:px-4 text-base tracking-wider lg:text-lg font-medium w-max rounded-lg">
                            WITAJ W TIBIDABU
                        </p>
                        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold w-max">
                            Zajęcia Dla Dzieci
                        </h1>
                    </div>
                </div>
                <div className="text-gray-800 text-center lg:pb-12 max-w-screen-xl mx-auto">
                    <h2 className="text-xl lg:text-3xl font-bold">
                        Nasza
                        <br />
                        <span className="text-[#5271FF]">Oferta</span>
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center pt-10 lg:pt-24 text-start">
                        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
                            <div className="py-5 lg:pb-10 lg:px-0 px-10 lg:pl-12">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                            <div className="py-5 lg:px-0 px-10 lg:pb-10">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                            <div className="py-5 lg:pb-10 lg:px-0 px-10 lg:pl-12">
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
                        <div className="w-full px-16 py-2">
                            <StaticImage
                                quality={100}
                                placeholder="dominantColor"
                                src="../images/dzieci.jpg"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
                            <div className="py-5 lg:pb-10 lg:px-0 px-10">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                            <div className="py-5 lg:pb-10 lg:px-0 px-10 lg:pl-12">
                                <h3 className="font-bold">Why do we use it?</h3>
                                <div className="h-[2px] w-[10%] bg-[#5271FF] rounded-lg my-2" />
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum
                                </p>
                            </div>
                            <div className="py-5 lg:pb-10 lg:px-0 px-10">
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

                <section className="max-w-screen-2xl mx-auto pb-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="relative lg:w-1/2">
                            <StaticImage
                                imgClassName="rounded-[50px] shadow-xl"
                                quality={100}
                                src="../images/x1.jpg"
                            />
                            <div className="bg-[#FF5151] w-32 h-32 rounded-full round  absolute bottom-0 right-0 -z-20 translate-y-1/2 translate-x-1/2" />
                            <div className="border-[#19C0B6] border-2 border-dashed w-52 h-52 rounded-full round  absolute bottom-0 right-0 -z-20 translate-y-1/2 translate-x-1/2" />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                            <div className="relative pl-5 mb-3">
                                <h2 className="text-lg font-bold">
                                    Why do we use it??
                                </h2>
                                <div className="absolute rounded-lg top-0 left-0 bg-[#5271FF] h-full w-2.5" />
                            </div>
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
                        <div className="lg:w-1/2 lg:order-1 relative">
                            <StaticImage
                                quality={100}
                                imgClassName="rounded-[50px]"
                                src="../images/x2.jpg"
                            />
                            <div className="bg-[#FF5151] w-32 h-32 rounded-full  absolute bottom-0 left-0 -z-20 translate-y-1/2 -translate-x-1/2" />
                            <div className="border-[#19C0B6] border-2 border-dashed w-52 h-52 rounded-full  absolute bottom-0 left-0 -z-20 translate-y-1/2 -translate-x-1/2" />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                            <div className="relative pl-5 mb-3">
                                <h2 className="text-lg font-bold">
                                    Why do we use it??
                                </h2>
                                <div className="absolute rounded-lg top-0 left-0 bg-[#19C0B6] h-full w-2.5" />
                            </div>
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
                            <StaticImage
                                quality={100}
                                imgClassName="rounded-[50px]"
                                src="../images/x3.jpg"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                            <div className="relative pl-5 mb-3">
                                <h2 className="text-lg font-bold">
                                    Why do we use it??
                                </h2>
                                <div className="absolute rounded-lg top-0 left-0 bg-[#5271FF] h-full w-2.5" />
                            </div>
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
                <div className="relative mx-auto text-center py-8">
                    <StaticImage quality={100} src="../images/tlo.jpg" />
                    <p className="text-white text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
                        Zadzwoń do nas!
                        <br /> + 48 727 708 275
                    </p>
                </div>
                <section className="relative  py-12">
                    <div className="max-w-screen-xl flex flex-col items-start justify-center mx-auto">
                        <div className="px-12 pb-6">
                            <div className="relative pl-5 mb-3">
                                <h2 className="text-2xl font-bold">
                                    Where does it come from? - dla dziecka
                                </h2>
                                <div className="absolute rounded-lg top-0 left-0 bg-[#5271FF] h-full w-2.5" />
                            </div>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                                Lorem Ipsum comes from sections 1.10.32 and
                                1.10.33 of "de Finibus Bonorum et Malorum" (The
                                Extremes of Good and Evil) by Cicero, written in
                                45 BC. This book is a treatise on the theory of
                                ethics, very popular during the Renaissance. The
                                first line of Lorem Ipsum, "Lorem ipsum dolor
                                sit amet..", comes from a line in section
                                1.10.32
                            </p>
                        </div>
                        <div className="px-12 pb-6">
                            <div className="relative pl-5 mb-3">
                                <h2 className="text font-bold">
                                    Where does it come from? - dla dziecka
                                </h2>
                                <div className="absolute rounded-lg top-1/2 -translate-y-1/2 left-0 bg-[#19C0B6] h-3 w-3" />
                            </div>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                                Lorem Ipsum comes from sections 1.10.32 and
                                1.10.33 of "de Finibus Bonorum et Malorum" (The
                                Extremes of Good and Evil) by Cicero, written in
                                45 BC. This book is a treatise on the theory of
                                ethics, very popular during the Renaissance. The
                                first line of Lorem Ipsum, "Lorem ipsum dolor
                                sit amet..", comes from a line in section
                                1.10.32
                            </p>
                        </div>
                        <div className="px-12 pb-6">
                            <div className="relative pl-5 mb-3">
                                <h2 className="text font-bold">
                                    Where does it come from? - dla dziecka
                                </h2>
                                <div className="absolute rounded-lg top-1/2 -translate-y-1/2 left-0 bg-[#19C0B6] h-3 w-3" />
                            </div>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                                Lorem Ipsum comes from sections 1.10.32 and
                                1.10.33 of "de Finibus Bonorum et Malorum" (The
                                Extremes of Good and Evil) by Cicero, written in
                                45 BC. This book is a treatise on the theory of
                                ethics, very popular during the Renaissance. The
                                first line of Lorem Ipsum, "Lorem ipsum dolor
                                sit amet..", comes from a line in section
                                1.10.32
                            </p>
                        </div>
                    </div>
                    <div className="border-[#19C0B6] border-2 border-dashed w-52 h-52 rounded-full  absolute bottom-0 left-0 -z-20 -translate-x-1/2" />
                    <div className="border-[#19C0B6] border-2 border-dashed w-80 h-80 rounded-full  absolute top-1/4 right-0 -z-20 translate-x-1/2" />
                </section>
            </Layout>
        </>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Tibidabu" description="" />;
