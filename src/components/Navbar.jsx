const Navbar = () => {

    return (
        <nav className="sticky top-0 bg-white px-2 py-3 shadow-bottomShadow z-50">
            <div className="container flex flex-wrap items-center place-content-evenly md:justify-between mx-auto">
                <a href="./" className="flex items-center">
                    <img src="https://svgshare.com/i/r_W.svg" className="h-6 mr-3 sm:h-9" alt="Dominik Plavka logo" />
                    <span className="self-center text-xl whitespace-nowrap">Dominik Plavka</span>
                </a>
                <div>
                    <ul className="flex flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <a href="#about-me" className="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 hover:text-sky-500 md:p-0 ">About me</a>
                        </li>
                        <li>
                            <a href="#my-skills" className="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 hover:text-sky-500 md:p-0">Skills</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 hover:text-sky-500 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;