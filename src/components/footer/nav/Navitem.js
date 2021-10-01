import React, { useState } from 'react'

function Navitem({data}) {
    const [hide,toggle] = useState(true);
    return (
        <div className="border-b-2 py-8 lg:py-0">
        <div className="flex items-center cursor-pointer lg:pointer-events-none" onClick={()=>toggle(!hide)}>
            <h2 className=" text-xl md:text-3xl flex-1">{data.heading}</h2>
            <div className={`transform ${!hide && 'rotate-180'} md:hidden`} > 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#343538"><path fillRule="evenodd" clipRule="evenodd" d="M12 13.379l5.94-5.94a1.5 1.5 0 012.12 2.122l-7 7a1.5 1.5 0 01-2.12 0l-7-7a1.5 1.5 0 112.12-2.122L12 13.38z"></path></svg>
            </div>
        </div>
        <div className={`${hide && "hidden"} px-2 py-6 flex flex-col space-y-2 lg:flex`} >
            {data.links.map(({title,link},i)=>
            <a key={i} className="hover:underline text-lg font-light"
             href={link}>{title}</a>
            )}
        </div>
        </div>
    )
}

export default Navitem;
