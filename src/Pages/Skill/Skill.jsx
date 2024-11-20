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


    const skills = [
        { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
        { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "Express.js", logo: "https://i.postimg.cc/s2wCQm94/express1.png" },
        { name: "MongoDB", logo: "https://i.postimg.cc/dt6xs3qz/mongodb-removebg-preview.png" },
        { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
        { name: "Vercel", logo: "https://i.postimg.cc/7hstNtQq/vercel-removebg-preview.png" },
      ];
      


    return (
        <div className="bg-[#1F1F24]   relative   lg:mt-0 xl:mt-0">





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

 

            <div className=" mx-auto container p-4 md:p-20  lg:p-36 ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg   "
                        >
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
                            <h3 className="mt-4 text-lg font-medium text-gray-800 ">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Skill;