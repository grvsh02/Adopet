import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const PageLinkContainer = styled.div`
  a {
    background-image: linear-gradient(
            to right,
            #6a9b30,
            #6a9b30 50%,
            #000 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
  }

  a:before {
    content: '';
    background: #6a9b30;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background-position: 0;
  }

  a:hover::before {
    width:100%;
  }
`

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [modal, setModal] = useState(false);

    const handleDelete = () => {
        setModal(false);
    }

    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 0 ? setStickyClass('fixed') : setStickyClass('relative');
        }
    };

    return (
        <nav className={`py-2 z-40 bg-white w-full fixed`}>
            <div className="md:w-11/12 w-full md:px-0 px-3 mx-auto">
                <div className="flex items-center justify-between h-16">
                    <div className="flex gap-4 items-center">
                        {/*<img className="h-[50px] w-[100px]" src={""} alt="tree" />*/}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to="/"
                                    className=" hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    <PageLinkContainer>
                                        <a>Home</a>
                                    </PageLinkContainer>
                                </Link>

                                <Link
                                    to="/"
                                    className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    <PageLinkContainer>
                                        <a>Blogs</a>
                                    </PageLinkContainer>
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    <PageLinkContainer>
                                        <a>About Us</a>
                                    </PageLinkContainer>
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    <PageLinkContainer>
                                        <a>Membership</a>
                                    </PageLinkContainer>
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    <PageLinkContainer>
                                        <a>Contact</a>
                                    </PageLinkContainer>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link to="/">
                        <div className="hidden md:block hover:bg-button-primary px-4 py-1 rounded-xl">
                            <PageLinkContainer>
                                <button onClick={() => setModal(true)} className="">Donate</button>
                            </PageLinkContainer>
                        </div>
                    </Link>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>

                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden transition-all" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
                            <Link
                                to="/"
                                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                <PageLinkContainer>
                                    <a>Home</a>
                                </PageLinkContainer>
                            </Link>
                            <Link
                                to="/"
                                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                <PageLinkContainer>
                                    <a>Blogs</a>
                                </PageLinkContainer>
                            </Link>
                            <Link
                                to="/"
                                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                <PageLinkContainer>
                                    <a>About Us</a>
                                </PageLinkContainer>
                            </Link>
                            <Link
                                to="/"
                                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                <PageLinkContainer>
                                    <a>Membership</a>
                                </PageLinkContainer>
                            </Link>
                            <Link
                                to="/"
                                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                <PageLinkContainer>
                                    <a>Contact</a>
                                </PageLinkContainer>
                            </Link>
                            <Link
                                to="/profile/neo"
                                className="hover:bg-primary-base bg-button-primary text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                <PageLinkContainer>
                                    <button className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Donate</button>
                                </PageLinkContainer>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
export default Navbar;
