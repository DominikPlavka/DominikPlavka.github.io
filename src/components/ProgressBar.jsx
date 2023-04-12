import { useState, useEffect } from "react";

const ProgressBar = ({name, progression, link}) => {

    const [width, setWidth] = useState(null);

    useEffect (() => {
        if (progression === "starting") {
            setWidth("w-1/4");
        } else if (progression === "halfway done") {
            setWidth("w-1/2");
        } else if (progression === "finalizing") {
            setWidth("w-3/4");
        } else if (progression === "done") {
            setWidth("w-full");
        }
    });

    return (
        <div className="mt-5">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700">{name}</span> {link && <button><a href={link}>test button</a></button>}
                <span className="text-sm font-medium text-blue-700">{progression}</span>
            </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className={`bg-blue-600 h-3 rounded-full ${width} transition ease-in-out delay-150 bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-300`}></div>
                </div>
        </div>
    );
};

export default ProgressBar;