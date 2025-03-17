// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Collections from '../components/Collections';
import { Helmet } from "react-helmet";
import { Toaster } from 'sonner';

const Home = () => {
    // Animation Variants for Framer Motion
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2.0 } },
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: { transition: { staggerChildren: 1.5 } },
    };

    return (
        <main>
            <Helmet>
                <title>Luxora</title>
                <meta name="description" content="Home page" />
            </Helmet>

            {/* Hero Section */}
            <motion.section
                className="flex flex-col items-center justify-center w-full min-h-screen space-y-6 bg-center bg-no-repeat bg-cover bg-heroImage"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h1
                    className="mt-4 text-3xl font-bold text-center text-secClr lg:text-5xl md:text-4xl sm:text-2xl font-headingFF"
                    variants={fadeInUp}
                >
                    Walk In Style With Our Luxury Collections.
                </motion.h1>

                <motion.p
                    className="text-lg font-medium text-center text-secClr font-bodyFF md:text-xl sm:text-lg"
                    variants={fadeInUp}
                >
                    Discover the Perfect Blend of Leisure and Luxury: Casual Clothes that Exude Confidence and Poise, Merging Relaxation and Refined Sophistication to Elevate Your Everyday Life.
                </motion.p>

                <motion.div variants={fadeInUp}>
                    <Link to="/collections">
                        <button className="p-3 font-medium uppercase transition-all duration-500 border text-md w-fit border-secClr font-btnFF text-secClr hover:bg-secClr hover:text-pryClr">
                            View Collections
                        </button>
                    </Link>
                </motion.div>
            </motion.section>

            {/* Featured Collections Section */}
            <section className="p-10">
                <hr className="w-24 h-0.5 mx-auto my-2 bg-black" />
                <h1 className="text-4xl italic font-extrabold text-center capitalize text-pryClr md:text-4xl sm:text-2xl font-headingFF">
                    Featured Collections
                </h1>
                <hr className="w-24 h-0.5 mx-auto my-2 bg-pryClr" />
            </section>

            <div>
                <Collections />
            </div>

            {/* Toast Notifications */}
            <Toaster richColors position="top-center" />

            {/* Shop Now Button Section */}
            <section className="flex items-center justify-center p-10">
                <Link to="/shop">
                    <button className="w-40 p-2 font-medium uppercase transition-all duration-500 border text-md border-pryClr font-btnFF text-pryClr hover:bg-pryClr hover:text-secClr">
                        Shop Now <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                </Link>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default Home;
