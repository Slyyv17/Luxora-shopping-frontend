// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ShoppingCart, Heart } from 'lucide-react';

function Collections() {
    const collections = [
        {
            id: 1,
            name: 'Summer collection',
            description: 'This is the summer collection',
            image: '../public/assets/img/3fabd9af-509c-475f-81a5-7eff609faa73.jpg',
            price: 100
        },
        {
            id: 2,
            name: 'Winter collection',
            description: 'This is the winter collection',
            image: '../public/assets/img/3fabd9af-509c-475f-81a5-7eff609faa73.jpg',
            price: 200
        },
        {
            id: 3,
            name: 'Spring collection',
            description: 'This is the spring collection',
            image: '../public/assets/img/3fabd9af-509c-475f-81a5-7eff609faa73.jpg',
            price: 150
        },
        {
            id: 4,
            name: 'Autumn collection',
            description: 'This is the autumn collection',
            image: '../public/assets/img/3fabd9af-509c-475f-81a5-7eff609faa73.jpg',
            price: 250
        }
    ]

    return (
        <section className='grid w-full grid-cols-2 gap-2 p-4 md:grid-cols-4 h-fit'>
            {collections.map((item) => (
                <div key={item.id} className='flex flex-col items-start justify-center gap-4 p-4 border-none shadow-sm w-fit h-fit'>
                    <div className='w-full h-auto'>
                        <img className='w-full h-64' src={item.image} alt={`${item.name}`} />
                    </div>
                    <h2 className='text-2xl font-semibold font-headingFF'>{item.name}</h2>
                    <p className='text-lg font-medium font-bodyFF'>{item.description}</p>
                    <div className='flex items-center justify-between w-full h-fit'>
                        <span className='text-lg'>${item.price}</span>
                        <div className='flex items-center justify-between gap-2 h-fit'>
                            <button className='p-2 rounded bg-pryClr text-secClr'>
                                <ShoppingCart size={18} />
                            </button>
                            <button className='p-2 bg-transparent border rounded border-pryClr text-pryClr'>
                                <Heart size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Collections;
