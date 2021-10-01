import React, { useState } from 'react'

function QuestionCard({q,a}) {
    const [hide,toggle] = useState(true);
    return (
        <div className="shadow-md md:w-3/4 p-4 border-b-2">
            <div onClick={()=>toggle(t=>!t)} className="flex cursor-pointer items-center p-4">
            <h1 className=" text-xl md:text-3xl flex-1">{q}</h1>
                <div>
                {!hide?
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor"><path d="M5.007 11C4.45 11 4 11.448 4 12c0 .556.451 1 1.007 1h13.986C19.55 13 20 12.552 20 12c0-.556-.451-1-1.007-1H5.007z"></path></svg>:
                <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M13 5.007C13 4.45 12.552 4 12 4c-.556 0-1 .451-1 1.007V11H5.007C4.45 11 4 11.448 4 12c0 .556.451 1 1.007 1H11v5.993c0 .557.448 1.007 1 1.007.556 0 1-.451 1-1.007V13h5.993C19.55 13 20 12.552 20 12c0-.556-.451-1-1.007-1H13V5.007z"></path></svg>
                }</div>
            </div>
            {!hide&&<div className="m-4 text-xl font-light space-y-3">
                {a.map(p=><p>{p}</p>)}
            </div>}
        </div>
    )
}

export default QuestionCard;
