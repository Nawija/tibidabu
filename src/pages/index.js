import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsSlajdy {
                edges {
                    node {
                        img {
                            gatsbyImageData(width: 1536, height: 500)
                        }
                    }
                }
            }

            allDatoCmsProjekty(sort: { position: ASC }) {
                edges {
                    node {
                        slug
                        title
                        data
                        img {
                            gatsbyImageData(height: 120)
                        }
                    }
                }
            }
        }
    `);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 3600,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [isDragging, setIsDragging] = useState(false);
    const settingsCircle = {
        beforeChange: () => {
            setIsDragging(true);
        },
        afterChange: () => {
            setIsDragging(false);
        },
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const handleLinkClick = (event) => {
        if (isDragging) {
            event.preventDefault();
        }
    };

    return (
        <>
            <Layout>
                <div className="mx-auto text-center w-full bg-gray-100">
                    <Slider {...settings}>
                        {data.allDatoCmsSlajdy.edges.map(({ node }) => (
                            <GatsbyImage
                                loading="eager"
                                className="min-h-[14rem] max-w-screen-2xl rounded-lg"
                                imgClassName="min-h-[14rem]"
                                image={getImage(node.img)}
                                alt="lancuckiesady"
                            />
                        ))}
                    </Slider>
                </div>

                <div className="max-w-7xl mx-auto py-4 lg:py-20">
                    <Slider
                        className=" text-center max-w-screen-xl mx-auto w-[140%] md:w-full"
                        {...settingsCircle}
                    >
                        {data.allDatoCmsProjekty.edges.map(({ node }) => (
                            <Link
                                onClick={handleLinkClick}
                                to={"/" + node.slug}
                                className="py-4"
                            >
                                <div className="py-8 mx-auto w-max">
                                    <GatsbyImage
                                        loading="eager"
                                        draggable="false"
                                        image={getImage(node.img)}
                                        alt={
                                            node.title + "- projekt seovileo.pl"
                                        }
                                    />
                                </div>
                                <div className="mx-12">
                                    <div className="flex items-center justify-between pt-2">
                                        <p className="font-medium">
                                            {node.title}
                                        </p>
                                        <p className="font-medium text-red-600">
                                            1500zł
                                        </p>
                                    </div>
                                    <p className="text-start pb-2 text-sm">
                                        {node.data}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </Layout>
        </>
    );
};

export default IndexPage;

export const Head = () => (
    <Seo title="Seovileo" description="Przygotuj się na prawdziwą rewolucję" />
);
