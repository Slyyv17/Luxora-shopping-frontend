// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faClose } from '@fortawesome/free-solid-svg-icons';
import luxoraLogo from "../assets/images/luxora.png";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setAlertMessage("Please enter a valid email address.");
            setAlertVisible(true);
        } else {
            setAlertMessage("Thanks for subscribing to our newsletter.");
            setAlertVisible(true);
            setEmail("");
        }
    };

    const closeAlert = () => {
        setAlertVisible(false);
    };

    return (
        <footer className='grid grid-cols-1 gap-6 p-6 mt-4 sm:grid-cols-2 lg:grid-cols-4 bg-otherBg'>
            {/* Logo at the top and aligned to the left */}
            <div className='flex items-start justify-start p-2 col-span-full'>
                <img src={luxoraLogo} alt="The Logo" className="w-24 h-auto" />
            </div>

            {/* First box */}
            <div className='flex flex-col items-start justify-center p-2 font-headingFF'>
                <ul className="flex flex-col items-start list-none">
                    <li>
                        <Link to="/shop" className="capitalize text-pryClr">Shop</Link>
                    </li>
                    <li>
                        <Link to="/gift" className="capitalize text-pryClr">Gift Card</Link>
                    </li>
                    <li>
                        <Link to="/about" className="capitalize text-pryClr">About</Link>
                    </li>
                    <li>
                        <Link to="/journal" className="capitalize text-pryClr">Journal</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="capitalize text-pryClr">Contact</Link>
                    </li>
                </ul>
            </div>

            {/* Second box */}
            <div className='flex flex-col items-start justify-center p-2 font-headingFF'>
                <ul className="flex flex-col items-start list-none">
                    <li>
                        <Link to="/faq" className="uppercase text-pryClr">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/returns" className="capitalize text-pryClr">Returns</Link>
                    </li>
                    <li>
                        <Link to="/shipping" className="capitalize text-pryClr">Shipping</Link>
                    </li>
                    <li>
                        <Link to="/support" className="capitalize text-pryClr">Support</Link>
                    </li>
                </ul>
            </div>

            {/* Third box */}
            <div className='flex flex-col items-start justify-center p-2 font-headingFF'>
                <ul className="flex flex-col items-start list-none">
                    <li className="text-pryClr">Luxora-stores@gmail.com</li>
                    <li>Babcock University, Illishan-remo.</li>
                    <li>Ogun State, Nigeria.</li>
                    <li>Tel: 123-456-7890</li>
                </ul>
            </div>

            {/* Newsletter box */}
            <div className='flex flex-col items-start justify-center p-2 font-headingFF'>
                <label htmlFor="email-input" className='font-medium capitalize text-pryClr'>
                    Subscribe to our newsletter
                </label>
                <form className='flex w-full gap-1' onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email-input"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full h-10 p-2 text-sm border outline-none border-pryClr placeholder:font-headingFF'
                    />
                    <button type="submit" className='px-4 text-lg font-medium transition-all duration-500 border bg-secClr text-pryClr border-pryClr hover:bg-pryClr hover:text-secClr'>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                </form>

                {/* Custom Alert Box */}
                {alertVisible && (
                    <div className='fixed flex items-center justify-center transform -translate-x-1/2 bottom-10 left-1/2'>
                        <div className='flex items-center justify-center gap-2 p-4 bg-white border border-gray-300 rounded-md shadow-lg'>
                            <p className='text-lg font-btnFF'>{alertMessage}</p>
                            <button onClick={closeAlert} className='px-3 py-1 text-white transition-all duration-300 bg-red-500 rounded'>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Copyright Notice */}
            <div className='flex items-center justify-center p-4 text-center col-span-full font-btnFF'>
                <p> Copyright &copy; 2024 Luxora. Powered by Luxora. </p>
            </div>
        </footer>

    );
};

export default Footer;
