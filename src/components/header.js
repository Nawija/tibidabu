import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FiPhoneOutgoing } from "react-icons/fi";

const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!showMenu);
    const closeMenu = () => setMenu(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <header
            className={`
                    z-50 mx-auto sticky w-full top-0 text-center transition-[padding]
            ${navbar ? "py-1" : "py-2 lg:py-5"}`}
        >
            <div
                className="h-full w-full mx-auto absolute top-0 z-10 transition-colors duration-300
bg-white lg:bg-white/90 lg:backdrop-blur-xl shadow-lg"
            />
            <nav
                className={`max-w-screen-2xl mx-auto px-4 flex flex-col items-center justify-between w-full transition-colors duration-100 -z-20 ${
                    showMenu ? "bg-white" : ""
                }`}
            >
                <div className="flex items-center justify-between w-full z-20">
                    <Link
                        onClick={closeMenu}
                        to="/"
                        className="flex items-center justify-center"
                        title="Logo"
                        aria-label="Logo"
                    >
                        <div className="h-auto w-36 lg:w-42 ">
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                loading="eager"
                                placeholder="blurred"
                                src="../images/favicon.png"
                                alt="logo"
                            />
                        </div>
                    </Link>
                    <div className="flex items-center justify-center space-x-3 lg:space-x-6 text-gray-800">
                        <ul
                            className={`absolute h-max w-full top-[99%] left-0 lg:static lg:flex space-y-6 lg:space-y-0 items-center justify-center lg:space-x-4 transition-all text-lg lg:text-base ${
                                showMenu
                                    ? "bg-white shadow-xl py-6"
                                    : " -translate-y-[50%] scale-0 lg:scale-100 lg:-translate-y-[0]"
                            }`}
                        >
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    to="/o-nas"
                                    aria-label="O Nas"
                                    title="O Nas"
                                    className="p-2 font-medium"
                                >
                                    O Nas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/oferta"
                                    onClick={closeMenu}
                                    aria-label="Oferta"
                                    title="Oferta"
                                    className="p-2 font-medium"
                                >
                                    Oferta
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    to="/galeria"
                                    aria-label="Galeria"
                                    title="Galeria"
                                    className="p-2 font-medium"
                                >
                                    Galeria
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    to="/kontakt"
                                    aria-label="Kontakt"
                                    title="Kontakt"
                                    className="p-2 font-medium"
                                >
                                    Kontakt
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={closeMenu}
                                    to="tel:727708275"
                                    aria-label="zadzwoń"
                                    title="Zadzwoń"
                                    className=" relative flex items-center justify-center py-2 font-medium bg-[#5271FF] text-white px-4 rounded-lg w-max mx-auto"
                                >
                                    <FiPhoneOutgoing className="mr-2" />
                                    <span>727 708 275</span>
                                    <div className="absolute right-0 top-0 bg-pink-400 h-2 w-2 animate-ping rounded-full" />
                                </Link>
                            </li>
                        </ul>
                        <button
                            aria-label="Menu"
                            onClick={handleMenu}
                            className="lg:hidden p-2.5 transition-colors z-50"
                        >
                            <div
                                className={`w-5 h-1 transition bg-gray-800 rounded-2xl m-1 ${
                                    showMenu ? "translate-y-2 rotate-45" : ""
                                }`}
                            />
                            <div
                                className={`w-3 h-1 transition bg-gray-800 rounded-2xl m-1 ${
                                    showMenu ? "opacity-0" : ""
                                }`}
                            />
                            <div
                                className={`w-5 h-1 transition bg-gray-800 rounded-2xl m-1 ${
                                    showMenu ? "-translate-y-2 -rotate-45" : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
