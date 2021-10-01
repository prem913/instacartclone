import React from 'react'

function Card({title,description,image}) {
    return (
        <div className="relative overflow-hidden rounded-md max-w-sm minWXs flex flex-col">
        <div className="
         bg-gray-200 font-semibold px-6 py-8 flex-1
        ">
          <h1 className=" text-3xl md:text-4xl">
              {title}
            </h1>  
            <p className="py-4 font-light text-lg md:xl">
                {description}
            </p>
        </div>
            <img src={image} className=" w-full object-cover" alt="img" />
        </div>
    )
}

export default Card;
