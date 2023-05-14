import React, { useState } from 'react';

function RedColor(props) {
    const [red, SetRed] = useState(0);


    const handleClick = () => {
        props.getStateFromRed(red);
    }

    const increment = () => {
        if (red < 255) {
            SetRed(red + 1);
        }
        handleClick();
    }

    const decrement = () => {
        if (red > 0) {
            SetRed(red - 1);
        }
        handleClick();
    }

    return (
        <>
            <div className="m-2">
                <span className="text-red-600 m-2 
            border-y border-blue-700 font-bold">
                    RED</span>
            </div>
            <div className="flex flex-col w-[10rem]">
                <button
                    className="border border-black
             px-12 py-2 rounded-lg m-2"
                    onClick={increment}>
                    +
                </button>
                <button
                    className="border border-black
             px-12 py-2 rounded-lg m-2"
                    onClick={decrement}>
                    -
                </button>
            </div>
        </>
    );
}
export default RedColor;