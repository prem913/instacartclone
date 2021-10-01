import React from 'react'
import Navitem from './Navitem';

function Navfooter({data}) {
    return (
        <div className="lg:py-4 lg:flex md:w-1/2 lg:w-auto px-4 lg:space-x-4">
            {data.map((d,i)=><Navitem key={i} data={d} />)}
        </div>
    )
}

export default Navfooter;
