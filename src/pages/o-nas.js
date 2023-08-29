import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/TopImg";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const ONasPage = () => {
    return (
        <Layout>
            <TopImg head="O Nas" />
            <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div class="mb-10 md:mb-16">
                        <h2 class="mb-4 text-center text-2xl font-bold text-[#5271ff] md:mb-6 lg:text-3xl">
                            Our Team by the numbers
                        </h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
                        <div class="flex flex-col items-center md:p-4">
                            <div class="text-xl font-bold text-green-600 sm:text-2xl md:text-3xl">
                                200
                            </div>
                            <div class="text-sm font-semibold sm:text-base">
                                People
                            </div>
                        </div>

                        <div class="flex flex-col items-center md:p-4">
                            <div class="text-xl font-bold text-green-600 sm:text-2xl md:text-3xl">
                                500+
                            </div>
                            <div class="text-sm font-semibold sm:text-base">
                                People
                            </div>
                        </div>

                        <div class="flex flex-col items-center md:p-4">
                            <div class="text-xl font-bold text-green-600 sm:text-2xl md:text-3xl">
                                1000+
                            </div>
                            <div class="text-sm font-semibold sm:text-base">
                                Customers
                            </div>
                        </div>

                        <div class="flex flex-col items-center md:p-4">
                            <div class="text-xl font-bold text-green-600 sm:text-2xl md:text-3xl">
                                A couple
                            </div>
                            <div class="text-sm font-semibold sm:text-base">
                                Coffee breaks
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="max-w-screen-xl mx-auto py-10">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="relative lg:w-1/2">
                        <StaticImage
                            imgClassName="rounded-[50px] shadow-xl"
                            quality={100}
                            src="../images/x1.jpg"
                        />
                        <div className="bg-[#FF5151] w-20 h-20 md:w-32 md:h-32 rounded-full round  absolute bottom-0 right-0 -z-20 translate-y-1/2 translate-x-1/2" />
                        <div className="border-[#19C0B6] border-2 border-dashed w-32 h-32 md:w-52 md:h-52 rounded-full round  absolute bottom-0 right-0 -z-20 translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                        <div className="relative pl-5 mb-3">
                            <h2 className="text-lg font-bold">
                                Why do we use it??
                            </h2>
                            <div className="absolute rounded-lg top-0 left-0 bg-[#5271FF] h-full w-2.5" />
                        </div>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like).
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
                        <div className="bg-[#FF5151] w-20 h-20 md:w-32 md:h-32 rounded-full  absolute bottom-0 left-0 -z-20 translate-y-1/2 -translate-x-1/2" />
                        <div className="border-[#19C0B6] border-2 border-dashed w-32 h-32 md:w-52 md:h-52 rounded-full  absolute bottom-0 left-0 -z-20 translate-y-1/2 -translate-x-1/2" />
                    </div>
                    <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                        <div className="relative pl-5 mb-3">
                            <h2 className="text-lg font-bold">
                                Why do we use it??
                            </h2>
                            <div className="absolute rounded-lg top-0 left-0 bg-[#19C0B6] h-full w-2.5" />
                        </div>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="relative lg:w-1/2">
                        <StaticImage
                            quality={100}
                            imgClassName="rounded-[50px]"
                            src="../images/x3.jpg"
                        />
                        <div className="bg-[#FF5151] lg:hidden w-20 h-20 md:w-32 md:h-32 rounded-full  absolute bottom-0 left-0 -z-20 translate-y-1/2 translate-x-1/2" />
                        <div className="border-[#19C0B6] lg:hidden border-2 border-dashed w-32 h-32 md:w-52 md:h-52 rounded-full  absolute bottom-0 right-0 -z-20 translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                        <div className="relative pl-5 mb-3">
                            <h2 className="text-lg font-bold">
                                Why do we use it??
                            </h2>
                            <div className="absolute rounded-lg top-0 left-0 bg-[#5271FF] h-full w-2.5" />
                        </div>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </p>
                    </div>
                </div>
            </section>
            <section class="text-gray-700 body-font overflow-hidden max-w-screen-xl mx-auto pl-2">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">
                                    CATEGORY
                                </span>
                                <span class="mt-1 text-gray-500 text-sm">
                                    12 Jun 2019
                                </span>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                                    Bitters hashtag waistcoat fashion axe chia
                                    unicorn
                                </h2>
                                <p class="leading-relaxed">
                                    Glossier echo park pug, church-key sartorial
                                    biodiesel vexillologist pop-up snackwave
                                    ramps cornhole. Marfa 3 wolf moon party
                                    messenger bag selfies, poke vaporware
                                    kombucha lumbersexual pork belly polaroid
                                    hoodie portland craft beer.
                                </p>
                                <a class="text-[#5271FF] inline-flex items-center mt-4">
                                    Learn More
                                    <svg
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">
                                    CATEGORY
                                </span>
                                <span class="mt-1 text-gray-500 text-sm">
                                    12 Jun 2019
                                </span>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                                    Meditation bushwick direct trade taxidermy
                                    shaman
                                </h2>
                                <p class="leading-relaxed">
                                    Glossier echo park pug, church-key sartorial
                                    biodiesel vexillologist pop-up snackwave
                                    ramps cornhole. Marfa 3 wolf moon party
                                    messenger bag selfies, poke vaporware
                                    kombucha lumbersexual pork belly polaroid
                                    hoodie portland craft beer.
                                </p>
                                <a class="text-[#5271FF] inline-flex items-center mt-4">
                                    Learn More
                                    <svg
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">
                                    CATEGORY
                                </span>
                                <span class="text-sm text-gray-500">
                                    12 Jun 2019
                                </span>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                                    Woke master cleanse drinking vinegar salvia
                                </h2>
                                <p class="leading-relaxed">
                                    Glossier echo park pug, church-key sartorial
                                    biodiesel vexillologist pop-up snackwave
                                    ramps cornhole. Marfa 3 wolf moon party
                                    messenger bag selfies, poke vaporware
                                    kombucha lumbersexual pork belly polaroid
                                    hoodie portland craft beer.
                                </p>
                                <a class="text-[#5271FF] inline-flex items-center mt-4">
                                    Learn More
                                    <svg
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ONasPage;

export const Head = () => <Seo title="O Nas" siteUrl="" />;
