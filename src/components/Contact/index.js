import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, TileLayer, } from "react-leaflet";

const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animate");
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 3000);
    }, []);



    const handleEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_t4bc7lc",
                "template_6re03ek",
                refForm.current,
                "jv0Zl-PfGtfwHxjLW"
            )
            .then(
                () => {
                    alert("Message successfully sent!")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send the message, please try again.")
                }

            )
    }



    return (
        <>
            <div className="container contact-page" >
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                            idx={12}
                        />
                    </h1>

                    <p>
                        I am a Frontend-React Developer, if you have any requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={handleEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="text" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li >
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li >
                                    <textarea placeholder="Message" name="message" required>

                                    </textarea>
                                </li>
                                <li >
                                    <input type="submit" className="flat-button" value="Send" />
                                </li>

                            </ul>

                        </form>
                    </div>

                </div>

                <div className="info-map">
                    Mehriban Aliyeva Seyidbayli,
                    <br />
                    Azerbaijan,
                    <br />
                    Nakhchivan
                    <br />
                    <span>mehriban.ali.seyidbayli.94@gmail.com</span>

                </div>

                <div className="map-wrap">
                    <MapContainer center={[39.205313, 45.421597]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[39.205313, 45.421597]}></Marker>
                    </MapContainer>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;