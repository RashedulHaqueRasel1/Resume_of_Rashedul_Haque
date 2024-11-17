import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoFirebase, IoLogoHtml5, IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Marquee from "react-fast-marquee";
// import about from './../../assets/About_Animation.json'
// import Lottie from "lottie-react";


const Skill = () => {




    const quantity = 15;

    const getRandomValue = (min, max) => Math.random() * (max - min) + min;



    return (
        <div className="bg-[#1F1F24] min-h-screen relative   lg:mt-0 xl:mt-0">





            {Array.from({ length: quantity }).map((_, i) => {
                const steps = Math.floor(getRandomValue(16, 28)); // Random number of steps
                const rotationSpeed = `${getRandomValue(8, 18)}s`; // Random rotation speed
                const moveAnimationName = `move${i + 1}`; // Unique animation name for each firefly

                return (
                    <div key={i} className="firefly absolute w-[0.4vw] h-[0.4vw] rounded-full left-1/2 top-1/2 bg-black opacity-40" style={{
                        animation: `${moveAnimationName} 200s ease-in-out infinite`,
                        marginLeft: `${getRandomValue(-25, 25)}vw`, // Limit the horizontal offset range
                        marginTop: `${getRandomValue(-25, 25)}vh`,  // Limit the vertical offset range
                    }}>
                        <div className="absolute w-full h-full rounded-full bg-black opacity-40" style={{ animation: `drift ${rotationSpeed} ease-in-out infinite` }}></div>
                        <div className="absolute w-full h-full rounded-full bg-white opacity-0" style={{
                            boxShadow: '0 0 0vw 0vw yellow',
                            animation: `drift ${rotationSpeed} ease-in-out infinite, flash ${getRandomValue(5000, 11000)}ms ease infinite`,
                            animationDelay: `0ms, ${getRandomValue(500, 8500)}ms`
                        }}></div>
                        <style>{`
              @keyframes ${moveAnimationName} {
                ${Array.from({ length: steps }).map((_, step) => `
                  ${(step * (100 / steps)).toFixed(2)}% {
                    transform: translateX(${getRandomValue(-10, 10)}vw) translateY(${getRandomValue(-10, 10)}vh) scale(${(getRandomValue(0.25, 1))});
                  }
                `).join('\n')}
              }
            `}</style>
                    </div>
                );
            })}

            <style>{`
        @keyframes drift {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes flash {
          0%, 30%, 100% {
            opacity: 0;
            box-shadow: 0 0 0vw 0vw yellow;
          }
          5% {
            opacity: 1;
            box-shadow: 0 0 2vw 0.4vw yellow;
          }
        }
      `}</style>




















            <div className="relative flex justify-center">
                {/* Background Text */}
                <h1 className="absolute inset-0 flex justify-center mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700 opacity-10">
                    What I do
                </h1>

                {/* Foreground Text */}
                <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-[48px] sm:mt-[58px] md:mt-[68px]">
                        Skills
                    </h2>
                    <div className="flex justify-center mt-2">
                        <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-primary"></div>
                    </div>
                </div>
            </div>


            <div className="p-6">


                <Marquee className=" " pauseOnHover={true}>
                    <div className='lg:mt-10 md:mt-6 mt-6 mx-auto container'>
                        <div className='grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-6'>

                            {/* Card Component */}
                            <div className=' py-2  h-32 w-full  border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/fRLk9fHv/image.png"} alt="HTML" className='h-14 w-14    ' />
                                    {/* <h1 className="mt-4 text-white font-bold">HTML - <span className="font-medium text-white text-opacity-70">(Hypertext Markup Language)</span></h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>HTML (Hypertext Markup Language) is the standard language used to create and structure content on web pages.</p> */}
                                </div>
                            </div>

                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/DwPr66F4/image.png"} alt="CSS" className='h-14 w-14 ml-32 md:ml-20 lg:ml-24 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">CSS - <span className="font-medium text-white text-opacity-70">(Cascading Style Sheets)</span></h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>CSS is used to style websites by controlling layout, colors, fonts, spacing, and overall visual presentation.</p>
                                </div>
                            </div>

                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/8cy8LM52/Tailwind-CSS-removebg-preview.png"} alt="Tailwind CSS" className='h-16 w-16 ml-32 md:ml-20 lg:ml-24 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">Tailwind CSS</h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>Tailwind CSS is a utility-first framework offering predefined classes, enabling fast and customizable design without writing custom CSS.</p>
                                </div>
                            </div>

                            {/* Card Component */}
                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="flex -space-x-4">
                                            <img alt="Daisy-UI" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.postimg.cc/QdC7g36w/Daisy-UI.png" />
                                            <img alt="flowbite" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.postimg.cc/4d4M1P0W/flowbite-removebg-preview.png" />
                                            <img alt="muiui" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.postimg.cc/g2YTpNzm/mui-removebg-preview.png" />
                                            <img alt="tailwindflex" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.postimg.cc/2ykzhndY/tailwindflex.png" />
                                            <span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-300">+2</span>
                                        </div>
                                    </div>
                                    <h1 className="mt-4 text-white font-bold">Daisy-UI, Flowbite & Others UI<span className="font-medium text-white text-opacity-70"></span></h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>Daisy-UI,
                                        MambaUI, Flowbite, TailwindFlex, and MerakiUI are CSS frameworks that provide customizable components, enhancing web development with ready-to-use UI elements for Tailwind CSS.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Marquee>

                <Marquee className=" " pauseOnHover={true} direction="right">
                    <div className='  mt-6 mx-auto container'>
                        <div className='flex flex-wrap justify-center items-center gap-6'>

                            {/* Card Component */}
                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/W49ML4d2/image.png"} alt="JS" className='h-14 w-14 ml-32 md:ml-20 lg:ml-24 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">JS - <span className="font-medium text-white text-opacity-70">(JavaScript)</span></h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>
                                        JavaScript is a versatile programming language that creates interactive web content, enhancing user experiences through dynamic features and real-time updates.</p>
                                </div>
                            </div>

                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/NF2w1byW/react-removebg-preview.png"} alt="React" className='h-16 w-16 ml-32 md:ml-20 lg:ml-24 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">React</h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>React is a JavaScript library for building user interfaces, focusing on component-based architecture to create dynamic, efficient applications.</p>
                                </div>
                            </div>

                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/s2wCQm94/express1.png"} alt="express" className='h-16 w-20 ml-32 md:ml-20 lg:ml-24 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">Express</h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>Express.js is a minimal and flexible Node.js web application framework that simplifies building APIs and web servers, focusing on performance and scalability.</p>
                                </div>
                            </div>

                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/hjtsvbpx/nodejs-removebg-preview.png"} alt="Node" className='h-14 w-14 ml-32 md:ml-20 lg:ml-24 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">Node js</h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to build scalable, server-side applications using JavaScript.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Marquee>

                <Marquee className=" " pauseOnHover={true}>
                    <div className=' mt-6 mx-auto container'>
                        <div className='flex flex-wrap justify-center items-center gap-6'>

                            {/* Card Component */}
                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/Kv81Wp4t/nextjs-removebg-preview.png"} alt="Next.js" className='h-20 w-20 ml-28 md:ml-16 lg:ml-24 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">Next js<span className="font-medium text-white text-opacity-70"></span></h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>Next.js is a React framework that enables server-side rendering and static site generation, providing optimized performance and SEO benefits for web applications..</p>
                                </div>
                            </div>

                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/dt6xs3qz/mongodb-removebg-preview.png"} alt="Mongo DB" className='h-20 w-24 ml-28 md:ml-26 lg:ml-20 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">Mongo DB <span className="font-medium text-white text-opacity-70"></span></h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>
                                        MongoDB is a NoSQL database that stores data in flexible, document-like structures, enabling scalability and efficient handling of large datasets.</p>
                                </div>
                            </div>

                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/8PzqrMn1/github-removebg-preview.png"} alt="GitHub" className='h-12 w-16 ml-32 md:ml-20 lg:ml-24 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">GitHub</h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>
                                        GitHub is a platform for version control and collaboration, allowing developers to manage and share code, track changes, and work on projects together efficiently.</p>
                                </div>
                            </div>

                            <div className='px-4 py-2 md:px-6 md:py-3 lg:px-8 h-72 w-full sm:w-80 md:w-64 lg:w-80 lg:py-4 border hover:border text-[12px] md:text-[15px] lg:text-[16px] rounded-lg bg-primary bg-opacity-15 hover:bg-transparent text-white hover:text-white transition duration-1000 ease-in-out flex justify-center items-center'>
                                <div className="items-center">
                                    <img src={"https://i.postimg.cc/7hstNtQq/vercel-removebg-preview.png"} alt="Vercel" className='h-16 w-32 ml-28 md:ml-16 lg:ml-20 mb-4 lg:mb-0' />
                                    <h1 className="mt-4 text-white font-bold">Vercel</h1>
                                    <p className='text-white text-[15px] text-opacity-65 mt-2'>Vercel is a cloud platform that enables fast deployment, serverless functions, and automatic scaling for web applications, optimized for frontend frameworks.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Marquee>
            </div>

        </div>
    );
};

export default Skill;