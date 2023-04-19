const Header = () => {

    return (
        <div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div className='p-10 flex items-center justify-center'>
                    <img src="myHead.png" alt="portrait of Dominik Plavka" className='w-60 h-auto w-80 lg:h-auto'></img>
                </div>

                <div className="flex-col p-10 flex md:items-start items-center justify-center">
                    <p className="text-2xl">Hello, my name is</p>
                    <p className="text-5xl lg:text-7xl font-bold">Dominik</p>
                    <p className="text-2xl mt-12 text-center md:text-left">&#60;junior&#62;&nbsp;Full Stack Dev&nbsp;&#60;&#47;junior&#62;<span className='font-bold animate-ping text-red-500'>|</span></p>
                </div>
            </div>
        </div>
    )

}

export default Header;