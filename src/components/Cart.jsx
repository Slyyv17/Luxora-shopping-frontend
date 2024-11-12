// Cart Component
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ image, name, price, addItemToCart }) => {
  const handleAddToCart = () => {
    // Call the addItemToCart function from the parent component
    addItemToCart({ name, price, image });
  };

  return (
    <form className="flex flex-col items-start justify-between w-full max-w-xs p-5 m-auto border-none h-96">
      <div className="relative w-full h-64 border shadow-footerBg">
        <img className="object-cover w-full h-full" src={image} alt={name} />
      </div>

      <div className="flex flex-col items-start justify-center w-full gap-2 mt-4">
        <h1 className="text-lg font-bold text-left font-headingFF text-pryClr">{name}</h1>
        <p className="text-base font-medium font-btnFF text-footerBg">{price}</p>
        <button
          className="w-full p-2 text-sm transition-all duration-500 border bg-secClr text-pryClr border-pryClr hover:bg-pryClr hover:text-secClr font-btnFF"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </form>
  );
};

Cart.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default Cart;
