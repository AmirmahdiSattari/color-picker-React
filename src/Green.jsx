import React, { useState } from 'react';

function GreenColor(props) {
    const [Green, SetGreen] = useState(0);


    const handleClick = () => {
        props.getStateFromGreen(Green);
    }

    const increment = () => {
        if (Green < 255) {
            SetGreen(Green + 1);
        }
        handleClick();
    }

    const decrement = () => {
        if (Green > 0) {
            SetGreen(Green - 1);
        }
        handleClick();
    }

    return (
        <>
            <div className="m-2">
                <span className="text-green-500 m-2 
            border-y border-blue-700 font-bold">
                    Green</span>
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
export default GreenColor;