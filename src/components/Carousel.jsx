import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useEffect } from 'react';


const Carousel = ({ slides, autoSlide=false}) => {

    const autoSlideInterval=3000;

    const [current, setCurrent] = useState(0);

    const previous = () => {
        setCurrent(curr => {
            return (curr === 0 ? slides.length - 1 : curr - 1)
        })
    }

    const next = () => {
        setCurrent(curr => {
            return (curr === slides.length - 1 ? 0 : curr + 1)
        })
    }

    useEffect (() => {
        if (!autoSlide) return
            const slideInterval = setInterval(next, autoSlideInterval)
            return () => clearInterval(slideInterval)
        
    });

    return (

        <div className="overflow-hidden relative">
            
            <div className="flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((data, index) =>
                        <img key={index} src={`${data.image}`} />
                )}
            
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((xxx, index) =>
                        <div key={index}>
                            <div className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${current === index ? "p-2" : "bg-opacity-50"}`} />
                        </div>
                    )}
                </div>
            </div>

            <div className="absolute inset-0 flex intems-center justify-between p-6">
                <button onClick={previous}>
                    <AiOutlineArrowLeft />
                </button>
                <button onClick={next}>
                    <AiOutlineArrowRight />
                </button>
            </div>

            {/*<div className="flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((data, index) =>
                    <img key={index} src={`${data.image}`} />
                )}
            </div>

            <div className="absolute inset-0 flex intems-center justify-between p-6">
                <button onClick={next}>
                    <AiOutlineArrowLeft />
                </button>
                <button onClick={previous}>
                    <AiOutlineArrowRight />
                </button>
            </div>

            <div className='absolute bottom-6 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((xxx, index) =>
                        <div key={index}>
                            <div className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${current === index ? "p-2" : "bg-opacity-50"}`} />
                        </div>
                    )}
                </div>
            </div>*/}

        </div>
    );
};

export default Carousel;