import About from "../About/About";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";
import Banner from "./Banner/Banner";
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;