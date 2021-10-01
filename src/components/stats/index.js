import React from 'react'
import Statscard from './card';

function Stats() {
    const stats=[
        {
            title:"500 million products",
            description:"available to shop across the catalog"
        },
        {
            title:"40,000 stores",
            description:"from local grocers to chain stores",
        },
        {
            title:"5,500+ cities",
            description:"served across the U.S. & Canada"
        },
        {
            title:"Millions of orders",
            description:"delivered or picked up yearly"
        }
    ]
    return (
        <div className="py-8 px-4 flex justify-center items-center flex-col">
            <h1 className=" text-3xl md:text-4xl font-light w-full text-center">The world's largest online grocery store</h1>
                <img src="https://d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage_stats_mobile-24bd627084eed46859cb6cf670de84feb1de9ef24909f36cb85db410e57313e8.jpg" 
                className="h60vh sm:min-h-0 md:h-96 m-8 md:w-5/6 object-cover rounded-xl"
                alt="img"
                />
            <div className="w-full md:flex md:space-x-2 space-y-2 md:space-y-0 lg:w-11/12">
                {stats.map(({title,description})=><Statscard key={title} title={title} description={description} />)}
            </div>
        </div>
    )
}

export default Stats;
