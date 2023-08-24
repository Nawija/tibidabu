import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
    return (
        <Layout>
            <p className="py-12 font-bold">Hello 404</p>
        </Layout>
    );
};

export default NotFoundPage;

export const Head = () => (
    <Seo
        title="Nie znaleziono strony | Error 404"
        siteUrl="https://seovileo.pl/404"
    />
);
