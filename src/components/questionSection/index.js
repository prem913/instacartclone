import React from 'react'
import QuestionCard from './QuestionCard';

function QuestionSection() {
    const info = [
        {
            q:"How does Instacart delivery and curbside pickup work?",
            a:["Instacart makes it easy to order from your favorite stores. Shop for items from stores near you, with a selection of more than 500 retailers and trusted local grocers across North America. Then, Instacart will connect you with a personal shopper in your area to shop and deliver your order. Contactless delivery is available with our “Leave at my door” option.",
            "You can track your order’s progress and communicate with your shopper every step of the way using the Instacart app or website.",
            "Instacart also offers curbside pickup at select retail locations. Simply place your order and choose a pickup time, and a shopper will prepare your order at the store.",            
            "When you get to the store, use the Instacart app to notify us. Depending on the store, a shopper or store employee will bring the groceries to your car, or you can pick them up at the designated area."]
        },
        {
            q:"How does Instacart delivery and curbside pickup work?",
            a:["Instacart makes it easy to order from your favorite stores. Shop for items from stores near you, with a selection of more than 500 retailers and trusted local grocers across North America. Then, Instacart will connect you with a personal shopper in your area to shop and deliver your order. Contactless delivery is available with our “Leave at my door” option.",
            "You can track your order’s progress and communicate with your shopper every step of the way using the Instacart app or website.",
            "Instacart also offers curbside pickup at select retail locations. Simply place your order and choose a pickup time, and a shopper will prepare your order at the store.",            
            "When you get to the store, use the Instacart app to notify us. Depending on the store, a shopper or store employee will bring the groceries to your car, or you can pick them up at the designated area."]
        }
    ]
    return (
        <div className="my-8">
            <h1 className="text-3xl font-light w-full text-center my-4">Common Questions</h1>
            <div className="flex flex-col items-center w-full">
                {info.map(({q,a},i)=><QuestionCard key={q+i} q={q} a={a} />)}
            </div>
        </div>
    )
}

export default QuestionSection;
