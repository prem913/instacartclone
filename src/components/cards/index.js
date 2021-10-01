import React from 'react'
import Button from '../Button';
import Card from './card';

function CardSection() {
    const cards=[
        {
            title:"Choose what you want",
            description:"Select items from your favorite grocery stores at Instacart.com or in the app.",
            img:"https://d2guulkeunn7d8.cloudfront.net/assets/homepage/how_it_works-163dcc1c8f91c63d7b0bdb648b5370a89267d54c8cb90bd858495395b8a9e5f3.jpg",
        },
        {
            title:"See real-time updates",
            description:"Personal shoppers pick items with care. Chat as they shop and manage your order.",
            img:"https://d2guulkeunn7d8.cloudfront.net/assets/homepage/real_time_updates-8330ec94f4d8006c6732bb2f65141e3596dcd3be02b0bf0376dcf5e2895fe37e.jpg"
        },
        {
            title:"Get your items same-day",
            description:"Pick a convenient time for you. Enjoy Instacart’s 100% quality guarantee on every order.",
            img:"https://d2guulkeunn7d8.cloudfront.net/assets/homepage/same_day_delivery-a00a9a59cbdfc41e7449cbdd04c12d27303284bef1a8fe957ec2a0112a70d7e7.jpg",
        }
    ]
    return (
        <div className="py-5">
            <h1 className="
            text-center text-3xl py-5 font-light
            ">
            Grocery delivery you can count on
            </h1>
            <div className="flex overflow-x-scroll md:overflow-hidden px-4 md:justify-center
             space-x-3
            ">
                {cards.map(({title,description,img})=>
                    <Card key={title} title={title} description={description} image={img} />
                    )}
            </div>
            <div className="flex justify-center py-8">
                <Button className=" max-w-lg w-full m-5 p-5">
                    <b className="text-white font-bold text-xl">Start Shopping</b>
                </Button>
            </div>
        </div>
    )
}

export default CardSection;
