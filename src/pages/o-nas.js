import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/TopImg";
import { Link } from "gatsby";

const ONasPage = () => {
    return (
        <Layout>
            <TopImg head="O Nas" />
            <p className="py-12 font-bold text-center">Hello 404</p>
            <Link
                to="/"
                aria-label="Powrót Strona Główna"
                title="Strona Główna"
                className=" relative flex items-center justify-center py-2 font-medium bg-[#5271FF] text-white px-4 rounded-lg w-max mx-auto"
            >
                Strona Główna
            </Link>
        </Layout>
    );
};

export default ONasPage;

export const Head = () => <Seo title="O Nas" siteUrl="" />;
