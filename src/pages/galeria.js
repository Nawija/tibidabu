import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/TopImg";
import GaleriaImg from "../components/GaleriaImg";


const Galeria = () => {

    return (
        <Layout>
            <TopImg head="Galeria" />
            <GaleriaImg />
        </Layout>
    );
};

export const Head = () => <Seo title="Galeria" />;

export default Galeria;