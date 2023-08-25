import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/TopImg";
import { Link } from "gatsby";

const AdminPage = () => {
    return (
        <Layout>
            <TopImg head="Witaj Tibidabu" />
            <p className="py-12 font-bold text-center">Panel Administracyjny</p>
            <Link
                to="https://tibidabu.admin.datocms.com/editor"
                className=" relative flex items-center justify-center py-2 font-medium bg-[#5271FF] text-white px-4 rounded-lg w-max mx-auto"
            >
                Panel CMS
            </Link>
        </Layout>
    );
};

export default AdminPage;

export const Head = () => <Seo title="" siteUrl="" description="" />;
