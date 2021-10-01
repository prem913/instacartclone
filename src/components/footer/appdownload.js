import React from 'react'
import android from '../../icons/android.svg';
import apple from '../../icons/apple.svg';
function Appdownload() {
    return (
        <div className="flex space-x-4 my-4">
            <div className="flex space-x-2">
                <img src={apple} alt="apple"/>
                <b>iOS</b>
            </div>
            <div className="flex space-x-2">
                <img src={android} alt="android" />
                <b>Android</b>
            </div>
        </div>
    )
}

export default Appdownload;
