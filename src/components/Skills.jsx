import Accordion from "./Accordion/Accordion";
import Carousel from "./Carousel";

const Skills = () => {

    const slides = [
        { image: "TS-JS.png" },
        { image: "react.png" },
        { image: "github.png" },
        { image: "nodeJS.png" }
      ];

    return (
        <div id="my-skills" className='order-last md:order-first md:grid md:grid-cols-2 md:gap-8'>

            <div className='p-10 flex flex-col w-full'>
                <h2 className="text-3xl lg:text-4xl">Skills</h2>
                <p className='mt-5'>As Full-Stack Developer I have gained following skills:</p>
                <Accordion />
            </div>

            <div className='flex items-center justify-center max-w-lg'>
                <Carousel slides={slides} />
            </div>
        </div>
    )
}

export default Skills;