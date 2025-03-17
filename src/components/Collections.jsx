// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';

function Collections() {
    const collections = [
        {
            id: 1,
            name: 'Summer collection',
            description: 'This is the summer collection',
            image: '/assets/img/3fabd9af-509c-475f-81a5-7eff609faa73.jpg',
            price: 100
        },
        {
            id: 2,
            name: 'Winter collection',
            description: 'This is the winter collection',
            image: '/assets/img/4db768a8-e84f-40f1-965b-030ee3d6f826.jpg',
            price: 200
        },
        {
            id: 3,
            name: 'Spring collection',
            description: 'This is the spring collection',
            image: '/assets/img/b70491e8-2143-4f5e-b7ab-ea1299f0e02c.jpg',
            price: 150
        },
        {
            id: 4,
            name: 'Autumn collection',
            description: 'This is the autumn collection',
            image: '/assets/img/EDIKTED Susan Off the Shoulder Long Sleeve Maxi Dress in Black at Nordstrom, Size X-Small.jpg',
            price: 250
        }
    ]

    const { addToCart } = useCart();

    return (
        <section className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {collections.map((item) => (
                <div key={item.id} className='flex flex-col items-start justify-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md'>
                    <div className='w-full h-48 overflow-hidden rounded-md md:h-64'>
                        <img className='object-cover w-full h-full' src={item.image} alt={`${item.name}`} />
                    </div>
                    <h2 className='text-xl font-semibold font-headingFF'>{item.name}</h2>
                    <p className='text-base font-medium text-gray-600 font-bodyFF'>{item.description}</p>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-lg font-bold'>${item.price}</span>
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={() => addToCart(item)}
                                className='p-2 transition rounded bg-pryClr text-secClr hover:bg-pryClr/90'>
                                <ShoppingCart size={18} />
                            </button>
                            <button className='p-2 transition bg-transparent border rounded border-pryClr text-pryClr hover:bg-pryClr hover:text-secClr'>
                                <Heart size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

Collections.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
};

export default Collections;
