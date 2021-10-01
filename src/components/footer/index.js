import React from 'react'
import Section from './Section';
import Appdownload from './appdownload';
import carrot from '../../icons/carrot.svg';
import bag from '../../icons/bag.svg';
import Copyright from './Copyright';
function Footer() {
    const data=[
        {
            heading:"Top departments",
            links:[
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
            ]
        },
        {
            heading:"Top departments",
            links:[
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
            ]
        },
        {
            heading:"Top departments",
            links:[
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
            ]
        },
        {
            heading:"Top departments",
            links:[
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
                {
                    title:"Fresh Produce",
                    link:"/"
                },
            ]
        },
    ]
    return (
        <div className="w-full">
        <Section data={data}>
        <div className="flex items-center py-8 flex-col lg:w-1/3">
            <div className="flex items-center">
                <img src={carrot} alt="carrot" />
                <h2 className="text-xl">
                Get deliveries with instacart
                </h2>
            </div>
                <Appdownload />
            </div>
        </Section>
        
        <Section data={data}>
        <div className="flex items-center py-8 flex-col lg:w-1/3">
            <div className="flex items-center">
                <img src={bag} alt="bag" />
                <h2 className="text-xl">
                Become a Shopper
                </h2>
            </div>
                <Appdownload />
            </div>
        </Section>
        <Copyright />
        </div>
    )
}

export default Footer;
