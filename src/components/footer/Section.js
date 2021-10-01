import React from 'react'
import Navfooter from './nav';
function Section({data,children}) {
    return (
        <div className="md:flex md:p-10 p-2 space-x-4 sm:justify-evenly lg:justify-start">
            {children}
            <Navfooter data={data}/>
        </div>
    )
}

export default Section;
