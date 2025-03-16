// eslint-disable-next-line no-unused-vars
import React from "react";
import { Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <main className="container mx-auto mt-10">
            <h1 className="mb-10 text-4xl font-bold text-center capitalize font-headingFF">
                Your Shopping Cart
            </h1>

            <section className="flex flex-col gap-8 md:flex-row">
                {/* Cart Items */}
                <article className="grid w-full grid-cols-2 gap-4 p-4 md:grid-cols-3">
                    {cartItems.length === 0 ? (
                        <p className="text-center col-span-full">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-start w-full gap-4 p-4 border shadow-md"
                            >
                                <div className="w-full h-auto">
                                    <img
                                        className="object-cover w-full h-64"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>
                                <h2 className="text-2xl font-semibold font-headingFF">{item.name}</h2>
                                <p className="text-lg font-medium font-bodyFF">{item.description}</p>
                                <div className="flex items-center justify-between w-full">
                                    <span className="text-lg">${item.price}</span>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => decreaseQuantity(item.id)}>
                                            <Minus size={18} />
                                        </button>

                                        <span>{item.quantity || 1}</span>

                                        <button onClick={() => increaseQuantity(item.id)}>
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 mt-2 text-white bg-red-500 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </article>

                {/* Cart Summary */}
                <article className="w-full p-4 border shadow-md md:w-1/3 h-fit">
                    <h2 className="mb-4 text-2xl font-semibold">Cart Summary</h2>
                    <p>
                        Total Items: <span>{cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}</span>
                    </p>
                    <p>
                        Total Price: $
                        {cartItems
                            .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
                            .toFixed(2)}
                    </p>

                    <button className="px-8 py-2 capitalize rounded bg-pryClr text-secClr">
                        checkout ({cartItems
                            .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
                            .toFixed(2)})
                    </button>
                </article>
            </section>
        </main>
    );
};

export default Cart;
