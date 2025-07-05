import React from 'react'
import MenCategory from '../assets/image/men.png'
import WomenCategory from '../assets/image/women.png'
import KidCategory from '../assets/image/kids.png'
const CategorySection = () => {
    const catrgories =[
        {
            title:'Men',
            imageUrl: MenCategory,
        },
                {
            title:'Women',
            imageUrl: WomenCategory,
        },
                {
            title:'Kids',
            imageUrl: KidCategory,
        },
    ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
        {catrgories.map((category,index)=>(
           <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
             <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md' />
             <div className='absolute top-20 left-12 space-y-2'>
                <p className='text-xl  font-bold'>{category.title}</p>
                <p className='text-gray-600'>View All</p>
             </div>
           </div>
        ))}
    </div>
  )
}

export default CategorySection