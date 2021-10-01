import React from 'react'
import facebook from '../../icons/facebook.svg';
import twitter from '../../icons/twitter.svg';
import instagram from '../../icons/instagram.svg';

function Copyright() {
    return (
        <div className="mx-14 my-3">
        <div className="text-gray-800 text-xl space-y-6">
            <b>Legal</b>
            <div className="space-x-4">
            <b>Terms of Use</b>
            <b>Privacy Policy</b>
            </div>
        </div>
        <div className="flex space-x-3 py-3">
            <a href="/"><img className=" w-11" src={facebook} alt="facebook" /></a>
            <a href="/"><img className=" w-11" src={instagram} alt="instagram" /></a>
            <a href="/"><img className=" w-11" src={twitter} alt="twitter" /></a>
        </div>
        </div>
    )
}

export default Copyright;
