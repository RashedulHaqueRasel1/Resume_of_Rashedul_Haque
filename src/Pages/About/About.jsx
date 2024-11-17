import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import 'animate.css';
import about from './../../assets/About_Animation.json'
import Lottie from "lottie-react";



const About = () => {


    return (
        <div className="bg-[#1F1F24] lg:mb-10 relative ">




            {/* Background Shape */}
            <div className="absolute  justify-end items-center bg-cover bg-center hidden lg:flex">
                <Lottie animationData={about} loop={true} className=" object-cover opacity-15  z-10 " />
            </div>




            <div className="relative flex justify-center">
                {/* Background Text */}
                <h1 className="absolute inset-0 flex justify-center mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700 opacity-10">
                    ABOUT ME
                </h1>

                {/* Foreground Text */}
                <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-[48px] sm:mt-[58px] md:mt-[68px]">
                        Know Me More
                    </h2>
                    <div className="flex justify-center mt-2">
                        <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-primary"></div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-6">
                {/* Left Side */}
                <div className="flex flex-col lg:flex-row items-center justify-between text-red-600 mt-10 lg:mt-40 p-6 lg:p-10">
                    {/* Text Content */}
                    <div className="text-white w-full lg:w-3/5 mb-10 lg:mb-0">
                        <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4 animate__fadeInDown">
                            I'm <span className="text-primary text-opacity-80">Rashedul Haque Rasel,</span> a Web Developer
                        </h1>
                        <p className="text-white text-opacity-65 text-lg lg:text-xl h-full">
                            I am a dedicated web developer with expertise in both front-end and back-end technologies. My aim is to create innovative, user-friendly applications, enhance user experiences, and drive business growth while aspiring to lead and continuously learn in a dynamic environment.
                            <br /><br />
                            My technical skills extend to backend integration using Express.js and MongoDB, allowing me to develop comprehensive and robust web solutions. Additionally, I am proficient in implementing secure authentication systems with Firebase, ensuring data security and privacy for users.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-2/5 ml-0 lg:ml-10">
                        <div className="bg-[#1F1F24] p-6 rounded-lg text-white">
                            <div className="space-y-3">
                                <p className="text-lg font-bold">Name: <span className="font-normal text-primary text-opacity-65">Rashedul Haque Rasel</span></p>
                                <hr className="w-full lg:w-60" />
                                <p className="text-lg font-bold">Education: <span className="font-normal text-opacity-80 text-white"> BBA (Accounting)</span></p>
                                <hr className="w-full lg:w-60" />
                                <p className="text-lg font-bold">Email:
                                    <span className="font-normal text-primary text-opacity-65">
                                        <a href="mailto:rashedulhaquerasel1@gmail.com" className="hover:underline"> rashedulhaquerasel1@gmail.com</a>
                                    </span>
                                </p>
                                <hr className="w-full lg:w-80" />
                                <p className="text-lg font-bold">From: <span className="font-normal text-opacity-60 text-white">Savar, Dhaka, Bangladesh</span></p>
                                <hr className="w-full lg:w-64" />
                            </div>

                            {/* Social Links */}
                            <div className="mt-6">
                                <div className="flex space-x-6">
                                    <NavLink to={'https://www.linkedin.com/in/rashedul-haque-rasel1/'} className="inline-flex items-center justify-center p-2    text-base font-bold leading-6 text-primary  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-prtext-primary hover:bg-primary hover:outline-none  hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 cursor-pointer">
                                        <RiLinkedinFill className="text-xl" />
                                    </NavLink>

                                    <NavLink to={'https://github.com/RashedulHaqueRasel1'} className="inline-flex items-center justify-center p-2   ml-6 text-base font-bold leading-6 text-primary  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-prtext-primary hover:bg-primary hover:outline-none  hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 ">
                                        <BsGithub className="text-xl" />
                                    </NavLink>

                                    <NavLink to={'https://www.facebook.com/Rashedul.haque.Rase1'} className="inline-flex items-center justify-center p-2   ml-6 text-base font-bold leading-6 text-primary  border-transparent rounded-full md:w-auto outline outline-offset-2 outline-1 outline-prtext-primary hover:bg-primary hover:outline-none  hover:text-white   focus:ring-offset-2 focus:ring-indigo-600 ">
                                        <FaFacebookF className="text-xl" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;
