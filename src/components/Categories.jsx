// eslint-disable-next-line no-unused-vars
import React from 'react'

function Categories() {
    const Categories = [
        {
            id: 1,
            name: 'Old Money Men',
            image: '/assets/img/Old-money-men.jpeg',
        },
        {
            id: 2,
            name: 'Old Money Women',
            image: '/assets/img/Old-money-women.jpeg'
        },
        {
            id: 3,
            name: 'Soft boy Style',
            image: '/assets/img/sodtboy-men.jpeg',
        },
        {
            id: 4,
            name: 'Soft boy Women',
            image: '/assets/img/softgirl.jpeg',
        },
        {
            id: 6,
            name: 'Traditional Men',
            image: '/assets/img/Trad-men.jpeg',
        },
        {
            id: 7,
            name: 'Traditional Women',
            image: '/assets/img/Trad-women.jpeg',
        },
    ]
  return (
    <main>
        <h1> categories </h1>      
          {Categories.map((category) => (
            <div key={category.id}>
                <div>
                    <img src={category} alt={category.name} />
                </div>
                  <h2>{category.name}</h2>  
            </div>
         ))} 
    </main>
  )
}

export default Categories