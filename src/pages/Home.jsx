// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importing Framer Motion
import Cart from '../components/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import lux1 from '../assets/img/Signature Italian Hopsack Wide-Leg Pant.jpg'
import lux2 from '../assets/img/4db768a8-e84f-40f1-965b-030ee3d6f826.jpg';
import lux3 from '../assets/img/b70491e8-2143-4f5e-b7ab-ea1299f0e02c.jpg';
import lux4 from '../assets/img/EDIKTED Susan Off the Shoulder Long Sleeve Maxi Dress in Black at Nordstrom, Size X-Small.jpg';
import lux5 from '../assets/img/Mens Solid Color Loose Casual Open Cardigan Long Sleeve, Fall.jpg';
import lux6 from '../assets/img/How to Wear a Maxi Skirt _ See 11 Ways to Style a Maxi in 2024.jpg';
import lux7 from '../assets/img/Mens Solid Color Simple Casual Suit Jacket.jpg';
import lux8 from '../assets/img/Sweatyrocks Womens Elegant High Waist Solid Long Pants Office Trousers _ Trouser Pant.jpg';


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

    // Cart state to manage the items in the cart and the cart count
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to the cart
    const AddItemToCart = (item) => {
        setCartCount(cartCount + 1);
        setCartItems([...cartItems, item]);
    }

    // Scroll animation
    const [isInView, setIsInView] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("target-element");
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        if (rect.top < viewportHeight && rect.bottom > 0) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    },[])

    return (
        <main>
            {/* Cart Icon with Cart Count */}
            <div className="cart-icon-container">
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                    {cartCount > 0 && (
                        <span className="cart-count">{cartCount}</span>
                    )}
                </Link>
            </div>
            
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
            <section className='p-10'>
                <hr className='w-24 h-0.5 mx-auto my-2 bg-black' />
                <h1 className="text-4xl italic font-extrabold text-center capitalize text-pryClr md:text-4xl sm:text-2xl font-headingFF">
                    Featured Collections
                </h1>
                <hr className='w-24 h-0.5 mx-auto my-2 bg-pryClr' />
            </section>
        
            {/* Product Grid with Animation */}
            <div id='target-element' >
                <motion.section 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut'
                    }}
                    className='grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 lg:grid-cols-4'
                >
                <Cart
                    image={lux1}
                    name="Signature Italian Hopstack"
                    price="₦2,000.00"
                    addItemToCart={AddItemToCart} />
                
                <Cart
                    image={lux2}
                    name="Black Leather Casual Shoe"
                    price="₦1,000.00"
                    addItemToCart={AddItemToCart} />
                
                <Cart
                    image={lux3}
                    name="Black Leather Half Shoe"
                    price="₦1,000.00"
                    addItemToCart={AddItemToCart} />
                
                <Cart
                    image={lux4}
                    name="Black Sleeve Maxi Dress"
                    price="₦1,500.00"
                    addItemToCart={AddItemToCart} />
                
                <Cart
                    image={lux5}
                    name="Open Cardigan Long Sleeve"
                    price="₦2,500.00"
                    addItemToCart={AddItemToCart} />  
                
                <Cart
                    image={lux6}
                    name="Brown Maxi Skirt"
                    price="₦1,500.00"
                    addItemToCart={AddItemToCart} />
                
                <Cart
                    image={lux7}
                    name="Black Casual Suit Jacket"
                    price="₦2,000.00"
                    addItemToCart={AddItemToCart} />
                
                <Cart
                    image={lux8}
                    name="Sweatyrocks Long Pants"
                    price="₦2,500.00"
                    addItemToCart={AddItemToCart} />
            </motion.section>
            </div>

            {/* Shop Now Button Section */}
            <section className='flex items-center justify-center p-10'>
                <Link to="/productcart">
                    <button 
                        className='w-40 p-2 font-medium uppercase transition-all duration-500 border text-md border-pryClr font-btnFF text-pryClr hover:bg-pryClr hover:text-secClr'>
                        Shop Now <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                </Link>
            </section>   

            {/* Footer */}
            <Footer />
        </main>
    );
}

export default Home;
