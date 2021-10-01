import React, { useState } from 'react'
function Hero({country,setCountry,countries}) {
    const [value,setValue] = useState("");
    const handleSelect=(e)=>{
        setCountry(e.target.value);
    }
    return (
        <div className=" bg-bg hero md:herowide md:bg-contain md:bg-right bg-no-repeat bg-cover pt-10">
            <div className="p-4 ml-12 bg-white items-center max-w-max rounded-xl border-2 hidden md:flex">
                <img className="rounded-full w-8 h-8 object-cover" src={countries[country].img} alt={countries[country].name} />
                <div>
                    <select onChange={handleSelect} value={country} >
                        <option value="0">US</option>
                        <option value="1">CA</option>
                    </select>
                </div>
            </div>
            <div className="px-2 sm:pl-10 py-10 md:pb-20 lg:pl-44 md:px-12 lg:w-2/3 ">
            
                    <h1 className=" text-gray-700 text-4xl font-semibold max-w-xs leading-snug my-12 md:text-6xl md:leading-snug md:max-w-none px-4">Order groceries for delivery or pickup today</h1>
                    <p className="font-light text-xl my-5 hidden md:block">Whatever you want from local stores, brought right to your door</p>
               <form>
                <div className="my-4 bg-white px-3 py-5 md:p-5 rounded-lg flex items-center max-w-2xl">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="19"><path fillRule="evenodd" clipRule="evenodd" d="M19 9.5c0 3.647-3.931 9.129-5.902 11.647a1.384 1.384 0 01-2.196 0C8.932 18.63 5 13.147 5 9.5a7 7 0 0114 0zm-4.002.105a3 3 0 11-5.996-.21 3 3 0 015.996.21z"></path></svg>
                
                <input type="text"
                className=" text-lg md:text-2xl flex-1 outline-none"
                onInput={e=>setValue(e.target.value)}
                value={value}
                placeholder="Enter Your Address"
                ></input>
                {value!==""?<button onClick={e=>{e.preventDefault();setValue("")}}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" cursor="pointer" size="19" color="systemGrayscale70" data-testid="homepage-address-input-clear"><path fillRule="evenodd" clipRule="evenodd" d="M19.06 4.94a1.5 1.5 0 010 2.12L14.122 12l4.94 4.94a1.5 1.5 0 01.103 2.007l-.103.114a1.5 1.5 0 01-2.122 0L12 14.12l-4.94 4.94a1.5 1.5 0 01-2.12-2.122L9.878 12l-4.94-4.94a1.5 1.5 0 01-.103-2.007l.103-.114a1.5 1.5 0 012.122 0L12 9.88l4.94-4.94a1.5 1.5 0 012.12 0z"></path></svg>
                </button>:
                <button>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="#0AAD0A" xmlns="http://www.w3.org/2000/svg" size="19" color="systemSuccessRegular"><path fillRule="evenodd" clipRule="evenodd" d="M13.06 3.94l7 7 .02.02c.022.022.043.045.063.068l-.082-.089a1.513 1.513 0 01.274.377 1.494 1.494 0 01-.071 1.493 1.28 1.28 0 01-.121.163 1.57 1.57 0 01-.062.068l-.02.02-7 7a1.5 1.5 0 01-2.122 0l-.103-.113a1.5 1.5 0 01.103-2.008l4.44-4.439H5A1.5 1.5 0 013.5 12l.007-.145A1.5 1.5 0 015 10.5h10.379l-4.44-4.44a1.5 1.5 0 012.122-2.12z"></path></svg>
                </button>
                }
                </div>
                </form>
            </div>
        </div>
    )
}

export default Hero;
