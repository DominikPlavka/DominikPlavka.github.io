import ProgressBar from "./ProgressBar"

const AboutMe = () => {

    const projectData = [
        { name: "This page", progression: "done", link: "./", desc: "React, Tailwind CSS" },
        { name: "WeatherApp", progression: "done", link: "https://weather-app-psi-dun-45.vercel.app/", desc: "MERN app with authentication (JWT)" },
        { name: "Historical weapons", progression: "starting", desc: "Interactive page about historical weapons"}
    ];

    return (
        <div id="about-me" className='order-last md:order-first md:grid md:grid-cols-2 md:gap-8 bg-gray-100'>

            <div className='p-10' >
                <h2 className="text-3xl lg:text-4xl">My projects</h2>
                {projectData.map((project, index) => (
                    <ProgressBar key={index} name={project.name} progression={project.progression} link={project.link} desc={project.desc} />
                ))
                }
            </div>

            <div className='p-10 flex flex-col order-first md:order-last'>
                <h2 className="text-3xl lg:text-4xl">About me</h2>
                <p className='mt-5'>My name is Dominik Plavka and Iam fresh graduate of Green Fox Academy. Before this "big step" in my life, I worked as Marketing Manager in broad range of roles.</p>
                <p className='mt-5'>This experience could be very useful in web development as well, because I participated in web/graphic design and I created basic webpages for various clients.</p>
                <a className="mt-5 font-bold transition ease-in-out delay-150 hover:text-red-600" href="https://drive.google.com/file/d/1_Pq5FVDGogHP4dG6KTXDIWITGpX6TwYp/view" target="_blank" rel="noreferrer"> Want to learn about me more? Click here and see my CV!</a>
            </div>
        </div>
    )
}

export default AboutMe;
