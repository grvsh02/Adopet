import logo from "../assets/Adopet logo white.png"
import styled from "@emotion/styled";

export const PageLinkContainer = styled.div`
  a {
    background-image: linear-gradient(
            to right,
            #6a9b30,
            #6a9b30 50%,
            #ffffff 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    margin-top: 2px;
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

const Footer = () => {
    return (
        <footer className="bg-[#212121] py-14 text-white">
            <div className="md:w-11/12 w-full md:px-0 px-3 mx-auto">
                <div
                    className="grid place-items-center sm:text-left text-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    <img src={logo} alt="Grant canyon" className="w-90 h-34"/>
                    <div className="sm:mt-0 mt-14">
                        <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">company</h1>
                        <ul>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">About Us</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Contact Us</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Socials</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Blogs</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Supporters</a>
                                </PageLinkContainer>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">browser</h1>
                        <ul>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Experts</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Organizations</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Funding</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Awards</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Donors</a>
                                </PageLinkContainer>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">connect</h1>
                        <ul>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Twitter</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Facebook</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Linkedin</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Youtube</a>
                                </PageLinkContainer>
                            </li>
                            <li>
                                <PageLinkContainer>
                                    <a href="#">Reddit</a>
                                </PageLinkContainer>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;