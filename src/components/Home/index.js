import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home = () => {

    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = ["M", "e", "h", "r", "i", "b", "a", "n"];

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 4000);
    }, [])



    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hi, <br /> I'm &nbsp;
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={14} />
                    </h1>

                    <h2>Frontend | React Developer</h2>
                    <Link to="/contact" className="flat-button">Contact Me</Link>
                </div>
                <div className="home-right">
                    <h2>Welcome to my portfolio</h2>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default Home;