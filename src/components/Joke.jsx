import { useState, useEffect } from "react";

function Joke() {

    const [jokeQuestion, setJokeQuestion] = useState("");
    const [jokePunchline, setJokePunchline] = useState("");

    const url = 'https://backend-omega-seven.vercel.app/api/getjoke';

    async function fetchJoke() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Fetch failed - this is joke itself!");
            }
            const data = await response.json();
            setJokeQuestion(data[0].question);
            setJokePunchline(data[0].punchline);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex justify-center items-center flex-col p-10">
            <button className="flex bg-white text-red-700 items-center justify-center w-24 h-24 rounded-full border-solid border-white border-2 animate-pulse" onClick={fetchJoke}>Try me!</button>
            <p className="text-white">Question: {jokeQuestion}</p>
            <p className="text-white">Answer: {jokePunchline}</p>
        </div>
    );
}

export default Joke;