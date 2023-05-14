import React, { useState } from 'react';

function BlueColor(props) {
    const [Blue, SetBlue] = useState(0);


    const handleClick = () => {
        props.getStateFromBlue(Blue);
    }

    const increment = () => {
        if (Blue < 255) {
            SetBlue(Blue + 1);
        }
        handleClick();
    }

    const decrement = () => {
        if (Blue > 0) {
            SetBlue(Blue - 1);
        }
        handleClick();
    }

    return (
        <>
            <div className="m-2">
                <span className="text-blue-500 m-2 
            border-y border-blue-700 font-bold">
                    Blue</span>
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
export default BlueColor;