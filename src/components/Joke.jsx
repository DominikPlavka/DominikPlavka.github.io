import { useState } from "react";

function Joke() {

    const [joke, setJoke] = useState("");
    const [press, setPress] = useState("");

    const url = 'https://backend-omega-seven.vercel.app/api/getjoke';

    async function fetchJoke() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Fetch failed - this is joke itself!");
            }
            const data = await response.json();
            setJoke(data[0]);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex justify-center items-center flex-col p-10 gap-10">
            <h2 className="text-white text-3xl lg:text-4xl text-center">Not feeling excited? Try this!</h2>
            <button
                onMouseDown={() => {
                    setPress("scale-90");
                }}
                onMouseLeave={() => {
                    setPress("scale-100");
                }}
                onMouseUp={() => {
                    fetchJoke();
                    setPress("scale-100");
                }}
                onTouchStart={() => {
                    setPress("scale-90");
                }}
                onTouchEnd={() => {
                    fetchJoke();
                    setPress("scale-100");
                }}
                className={`flex bg-white text-red-600 font-bold items-center justify-center w-28 h-28 rounded-full ${press}`}>
                    CLICK ME
            </button>
            { joke &&
                <div>
                    <p className="text-white text-center"><span className="underline">QUESTION:</span><span className="italic"> {joke.question}</span></p>
                    <p className="text-white text-center"><span className="underline">ANSWER:</span> {joke.punchline}</p>
                </div>
            }
        </div>
    )
}

export default Joke;