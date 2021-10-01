import React, {useRef, useState } from 'react'
import logo from '../images/instacartlogo.svg';
import Button from './Button';
function Header({countries,country,setCountry}) {
    const [menu,setMenu] = useState(false);
    const cardRef= useRef(null);
    const headRef = useRef(null);
    const [downmenu,setDownmenu] = useState(false);
    const handleclick=()=>{
        cardRef.current.style.top=headRef.current.getBoundingClientRect().bottom+"px";
        setMenu(m=>!m);
        cardRef.current.classList.toggle("hidden");
        document.querySelector("body").classList.toggle("overflow-hidden");
    }
    return (
        <>
        <div ref={headRef} className=" px-6 flex justify-between items-center py-4">
            <div className="flex justify-evenly md:justify-start items-center w-5/12">
            <button onClick={handleclick} className="md:hidden">
            {menu?<svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>:
            <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>}
            </button>
           <img className="pl-2" src={logo} alt="logo"></img></div>
           <div className="sm:space-x-8 flex">
               <Button style={{backgroundColor:"white"}}>Login</Button>
               <Button className="rounded-full"><p className="text-white">Signup</p></Button>
           </div>
        <div ref={cardRef} className="fixed bg-white h-full w-full z-50 hidden md:hidden left-0">
            <div className="flex justify-between items-center p-6">
                <div className="flex items-center p-2 space-x-4">
                <img className="h-10 w-10 rounded-full object-cover" src={countries[country].img} alt={countries[country].name} />
                <b className="text-mb sm:xl">{countries[country].fullname}</b>
                </div>
                <button onClick={()=>setDownmenu(t=>!t)} className="p-2 text-green-600 font-semibold text-lg">Change</button>
            </div>
            <div onClick={()=>setDownmenu(false)} className="flex fixed top-0 left-0 h-full w-full bg-black bg-opacity-50" style={downmenu?{}:{display:"none"}}>
                <div className={` flex flex-col w-full bg-white fixed bottom-0 py-10 px-4 justify-center rounded-t-3xl`}>

                        {countries.map((c,idx)=>
                         <button key={c.fullname} onClick={()=>setCountry(idx)} className="flex items-center p-4 space-x-4 w-full">
                         <img className="h-10 w-10 rounded-full object-cover" src={c.img} alt={c.name} />
                         <b className="text-lg">{c.fullname}</b>
                         </button>
                            )}
                    <button onClick={()=>setDownmenu(false)} className="text-center w-full py-4 bg-gray-200 rounded-full hover:bg-gray-300">Close</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Header;
