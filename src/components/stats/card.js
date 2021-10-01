import React, { useRef } from 'react'

function Statscard({title,description}) {
    const cardref=useRef(null);
    const handleclick=()=>{
        cardref.current.classList.toggle("hidden");
    }
    return (
        <div onClick={handleclick} className="relative bg-gray-100 w-full rounded-md p-4 py-8 lg:p-8 cursor-pointer lg:pointer-events-none">
            <h1 className="text-3xl lg:text-4xl font-bold flex-1 text-gray-700">{title}</h1>
            <p ref={cardref} className="text-gray-600 text-xl mt-6 hidden lg:block">{description}</p>
        </div>
    )
}

export default Statscard;
