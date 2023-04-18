import { useState, useEffect } from "react";

const ProgressBar = ({ name, progression, link, desc }) => {

    const [width, setWidth] = useState(null);
    const [pulse, setPulse] = useState("");

    useEffect(() => {
        if (progression === "starting") {
            setWidth("w-1/4");
        } else if (progression === "half-done") {
            setWidth("w-1/2");
        } else if (progression === "finalizing") {
            setPulse("animate-pulse");
            setWidth("w-3/4");
        } else if (progression === "done") {
            setWidth("w-full");
        }
    }, [progression]);

    return (
        <div className="mt-5">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-sky-500">{link && <button><a href={link}>{name}</a></button>}</span>
                <span className={`text-sm font-medium text-sky-500 ${pulse}`}>{progression}</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
                <div className={`bg-sky-400 h-3 rounded-full ${width} transition ease-in-out delay-150 bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-300`}></div>
            </div>

            <div className="flex justify-between mb-1">
                <p className="text-base mt-2">Tech used: {desc}</p>
            </div>
        </div>
    );
};

export default ProgressBar;