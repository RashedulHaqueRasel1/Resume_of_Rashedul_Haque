import { useState } from "react";
import { FaArrowRight, FaCommentDots, FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Project = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isProject1, setIsProject1] = useState(false);


    return (
        <div className="bg-[#1F1F24] w-full h-screen  bg-cover bg-center relative ">

            <div>




                <div className="relative flex justify-center">
                    {/* Background Text */}
                    <h1 className="absolute inset-0 flex justify-center mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700 opacity-10">
                        My Work
                    </h1>

                    {/* Foreground Text */}
                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-[48px] sm:mt-[58px] md:mt-[68px]">
                            Project
                        </h2>
                        <div className="flex justify-center mt-2">
                            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-primary"></div>
                        </div>
                    </div>
                </div>


                {/* Project */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-8 mx-auto container">


                    <div className="  p-4 ">

                        <div className="hover:border  ">
                            <div className='relative overflow-hidden group cursor-pointer' onClick={() => setIsProject1(true)}>

                                {/* Image */}
                                <img src={"https://i.postimg.cc/505g29cH/image.png"} alt={""} className="w-full h-80 object-cover mb-2 transition-transform duration-700 ease-in-out group-hover:scale-105 rounded-lg " />

                            </div>

                            <div className="flex  gap-2  text-sm mb-2 mt-2">
                                <span className="border p-2 text-white rounded-xl">React JS</span>
                                <span className="border p-2 text-white rounded-xl">Node.js</span>
                                <span className="border p-2 text-white rounded-xl">MongoDB</span>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-3xl hover:text-primary cursor-pointer font-bold text-white mt-2 ml-1" onClick={() => setIsProject1(true)}>Love Link Matrimony</h1>
                                    <p className="text-white text-opacity-65  ml-2 leading-relaxed mt-1 ">
                                        Love Link is an online matrimony platform for finding life partners. Features include profile filters, success stories, and a user dashboard for managing profiles and contact requests. Sign up at Love Link to start your journey towards finding love.
                                    </p>
                                </div>
                                <div className="bg-white p-2 h-10 w-10  rounded-full shadow-lg hover:text-primary hover:bg-primary cursor-pointer mr-4">
                                    <div
                                        className="inline-block"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        onClick={() => setIsProject1(true)}
                                    >
                                        {isHovered ? (
                                            <FaArrowRight className="text-2xl text-white " />
                                        ) : (
                                            <MdOutlineArrowOutward className="text-2xl" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Project1 the modal using document.getElementById('ID').showModal() method */}
                        {isProject1 && (
                            <div className="fixed inset-0 flex items-center justify-center z-10">
                                <div className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm animate-fadeIn"></div>
                                <div className="relative w-[900px] bg-[#1F1F24] text-white   rounded-2xl border-none shadow-lg z-20 animate-fadeIn">

                                    <div className="text-3xl mt-4 text-center font-bold">Love Link Matrimony</div>
                                    <div className="flex  p-6">
                                        <div className=" w-2/4">
                                            <img src={'https://i.postimg.cc/505g29cH/image.png'} alt="" className="w-full   object-cover mb-2 transition-transform duration-700 ease-in-out group-hover:scale-105 rounded-lg" />
                                        </div>

                                        <div className="w-2/4   pl-6 pr-2">
                                            <h1 className="text-2xl font-semibold">Project Info:</h1>
                                            <p className="text-white text-opacity-65 text-lg lg:text-[18px] leading-relaxed mt-2">
                                                Love Link is an online matrimony platform for finding life partners. Features include profile filters, success stories, and a user dashboard for managing profiles and contact requests. Sign up at Love Link to start your journey towards finding love.
                                            </p>
                                            <h1 className="text-2xl font-semibold mt-2">Features :</h1>
                                            <ul>
                                                <li>Stripe Payment</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsProject1(false)}
                                        aria-label="close"
                                        className="absolute top-3 right-2 text-gray-500 hover:text-black transition-transform transform hover:scale-110"
                                    >
                                        ❌
                                    </button>
                                </div>
                            </div>
                        )}


                    </div>




                </div>
            </div>

        </div>
    );
};

export default Project;