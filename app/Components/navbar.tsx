import React, {useState} from 'react';
import 'aos/dist/aos.css';
import {Link} from 'react-scroll';
import {RiMenu4Line, RiCloseLine} from 'react-icons/ri';
import {RxHamburgerMenu} from 'react-icons/rx'
function Navbar() {
    const [isMenuOpen,
        setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="py-10 px-20 flex justify-between md:mb-12 " data-aos="zoom-down"
        data-aos-duration="1500">
            <div className="md:hidden">
                <button className="outline-none mobile-menu-button " onClick={toggleMenu}>
                    {isMenuOpen
                        ? (<RiCloseLine className="text-3xl text-gray-600"/>)
                        : (<RxHamburgerMenu className="text-3xl text-gray-600"/>)}
                </button>
            </div>

            <div className="hidden md:flex md:flex-row md:gap-20 text-xl cursor-pointer">
                <Link
                    className="hover:text-teal-600"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={1000}>
                    Education
                </Link>
                <Link
                    className="hover:text-teal-600"
                    to="languages"
                    spy={true}
                    smooth={true}
                    offset={-350}
                    duration={1000}>
                    Languages
                </Link>
                <Link
                    className="hover:text-teal-600"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}>
                    Projects
                </Link>
            </div>

            <ul className="flex items-center ml-auto">
                <li>
                    <a
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                        href="https://drive.google.com/file/d/1uCYNfzjvmC1uIAtMKSQyafk9F0xBZUsR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="zoom-down"
                        data-aos-duration="1500">
                        Resume
                    </a>
                </li>
            </ul>

            {isMenuOpen && (
                <div
                    className="md:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
                    <div
                        className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <Link
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={1000}
                                    onClick={toggleMenu}>
                                    Education
                                </Link>
                                <Link
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    to="languages"
                                    spy={true}
                                    smooth={true}
                                    offset={-350}
                                    duration={1000}
                                    onClick={toggleMenu}>
                                    Languages
                                </Link>
                                <Link
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={1000}
                                    onClick={toggleMenu}>
                                    Projects
                                </Link>
                            </div>
                            <button className="text-gray-500 hover:text-gray-600" onClick={toggleMenu}>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
