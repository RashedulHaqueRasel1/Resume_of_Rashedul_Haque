import 'animate.css';
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import Typewriter from 'typewriter-effect';

const Banner = () => {

    // image hover animation
    const [style, setStyle] = useState({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });

    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const width = target.clientWidth;
        const height = target.clientHeight;

        // Calculate the rotation values based on mouse position
        const rotateY = ((offsetX - width / 2) / width) * 30; // Adjust Y rotation (horizontal axis)
        const rotateX = ((height / 2 - offsetY) / height) * 30; // Adjust X rotation (vertical axis)

        // Update the style with dynamic transform
        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
        });
    };

    const resetTransform = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        });
    };


    return (
        <div className="relative flex flex-col-reverse  lg:flex-row items-center justify-center min-h-screen bg-[#1F1F24]">

            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat">
                <img src={"https://i.postimg.cc/3JcHZr0M/Rasel-Background.png"} alt="Rasel_Background" className="w-full h-full object-cover opacity-100 invert" />
            </div>

            {/* Left Side Text */}
            <div className="z-10 lg:mr-48  text-left p-4 lg:p-0 mt-10 lg:mt-0 md:mt-8 ">
                <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-4">Hi There!</h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">I'm <span className='text-[#5271FF]'>Rashedul Haque</span></h1>
                <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4'>
                    <Typewriter
                        options={{
                            strings: ['Front End Web Developer','MERN Stack Developer'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                            delay: 100,
                        }}
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-10 justify-center lg:justify-start">
                    <button className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 hover:border border text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-primary hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center">
                        Download CV <FaDownload className='ml-2' />
                    </button>

                    <button className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 hover:border border text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-transparent hover:bg-primary text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center">
                        View Resume <ImProfile className='ml-2' />
                    </button>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="z-10 mt-8 lg:mt-0 lg:ml-48 border border-blue-400 border-opacity-70 rounded-xl cursor-pointer"
                style={style}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetTransform} >
                <img
                    src={"https://i.postimg.cc/d31q0rXz/Rashedul-Haque-Rasel1.png"}
                    alt="Digital Experience"
                    className="w-60  md:w-64  lg:w-96  xl:w-96  object-cover rounded-2xl"

                />
            </div>

            {/* Background Shape */}
            <div className="absolute flex justify-end items-center p-16">
                <img src={"https://i.postimg.cc/LsMP55Yk/Rasel-Spin.png"} alt="Background Spin" className='object-cover h-full w-full animate-spin-slow opacity-15' />
            </div>
        </div>
    );
};

export default Banner;
