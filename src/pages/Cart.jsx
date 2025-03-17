// eslint-disable-next-line no-unused-vars
import React from "react";
import { Plus, Minus, Trash } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Helmet } from "react-helmet";

const Cart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <main className="container px-4 mx-auto mt-10">
            <Helmet>
                <title>Cart</title>
                <meta name="description" content="Items in your cart" />
            </Helmet>
            <h1 className="mb-10 text-3xl font-bold text-center capitalize md:text-4xl font-headingFF">
                Your Shopping Cart
            </h1>

            <section className="flex flex-col gap-5 lg:flex-row">
                {/* Cart Items */}
                <article className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cartItems.length === 0 ? (
                        <p className="text-center col-span-full font-bodyFF">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-start w-full gap-4 p-4 bg-white border rounded shadow-md"
                            >
                                <div className="w-full h-48 sm:h-56 md:h-64">
                                    <img
                                        className="object-cover w-full h-full rounded"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>
                                <h2 className="text-xl font-semibold md:text-2xl font-headingFF">{item.name}</h2>
                                <p className="text-sm font-medium md:text-lg font-bodyFF">{item.description}</p>
                                <div className="flex items-center justify-between w-full">
                                    <span className="text-lg">${item.price}</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="p-1 bg-gray-500 border-none rounded text-secClr hover:bg-gray-600"
                                            onClick={() => decreaseQuantity(item.id)}>
                                            <Minus size={18} />
                                        </button>

                                        <span>{item.quantity || 1}</span>

                                        <button
                                            className="p-2 border-none rounded bg-pryClr text-secClr hover:bg-opacity-80"
                                            onClick={() => increaseQuantity(item.id)}>
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="flex items-center justify-center w-full gap-3 p-2 mt-2 font-medium rounded text-secClr bg-closeBtnClr hover:bg-red-700 font-btnFF"
                                >
                                    <Trash size={18} /> Remove
                                </button>
                            </div>
                        ))
                    )}
                </article>

                {/* Cart Summary */}
                <article className="flex flex-col w-full gap-3 p-4 bg-white border rounded shadow-md lg:w-1/3 h-fit">
                    <h2 className="mb-4 text-xl font-semibold md:text-2xl font-headingFF">Cart Summary</h2>
                    <p className="font-medium font-bodyFF">
                        Total Items: <span>{cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}</span>
                    </p>
                    <p className="font-medium font-bodyFF">
                        Total Price: $
                        {cartItems
                            .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
                            .toFixed(2)}
                    </p>

                    <button className="px-8 py-2 capitalize rounded bg-pryClr text-secClr hover:bg-opacity-80 font-btnFF">
                        checkout (${cartItems
                            .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
                            .toFixed(2)})
                    </button>
                </article>
            </section>
        </main>
    );
};

export default Cart;
