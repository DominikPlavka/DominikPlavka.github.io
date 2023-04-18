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
            <h2 className="text-white text-3xl lg:text-4xl text-center">Didn't get amused? Try this!</h2>
            <button
                onMouseDown={() => {
                    fetchJoke();
                    setPress("focus:scale-90");
                }}
                onMouseUp={() => {
                    setPress("scale-100");
                }}
                className={`flex bg-white text-red-700 font-bold items-center justify-center w-28 h-28 rounded-full ${press}`}>TRY ME!</button>
            { joke &&
                <div>
                    <p className="text-white text-center"><span className="underline">QUESTION:</span> {joke.question}</p>
                    <p className="text-white text-center"><span className="underline">ANSWER:</span> {joke.punchline}</p>
                </div>
            }
        </div>
    );
}

export default Joke;