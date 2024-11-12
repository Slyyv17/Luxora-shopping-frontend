// eslint-disable-next-line no-unused-vars
import React from "react";

const productCart = ({cartItems}) => {
    return (
        <div className="m-20">
            <h1 className="text-3xl">Your Cart</h1>
            <div>
                {cartItems.length === 0 ? (
                    <p className="text-lg text-closeBtnClr">Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="mb-4">
                                <img src={item.image} alt={item.name} className="object-cover w-20 h-20" />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default productCart;