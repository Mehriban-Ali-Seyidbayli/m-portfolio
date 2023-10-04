import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"
import { useState, useEffect } from "react";
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 3000);
    }, [])


    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                            idx={14}
                        />
                    </h1>
                    <p> I am a Frontend-React Developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.</p>
                    <p>
                        My main goal is to write the most functional, applicable, and readable code. Also, I trust in teamwork spirit, since it improves efficiency and supports better learning.
                    </p>

                    <p>I can definitely say that my level of self-confidence and responsibility is enough, however, I always try to do my best and learn more. In a word, I believe, I am cut for coding.</p>
                </div>


                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>

    )
}


export default About;