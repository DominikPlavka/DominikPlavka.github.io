import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import Carousel from './components/Carousel';
import Accordion from './components/Accordion/Accordion';
import Joke from './components/Joke';
import { SiLinkedin, SiCodewars } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io';

const projectData = [
  { name: "This page", progression: "done", link: "https://dominikplavka.github.io/", desc: "React, Tailwind CSS" },
  { name: "WeatherApp", progression: "finalizing", link: "https://weather-app-psi-dun-45.vercel.app/", desc: "MERN app with authentication (JWT)" }
];

const slides = [
  { image: "nodeJS.png" },
  { image: "TS-JS.png" },
  { image: "react.png" },
  { image: "github.png" }
];

let iconStyles = { color: "grey", fontSize: "2em" };

function App() {
  return (
    <div className='w-full min-h-screen m-0 p-0 bg-gradient-to-t from-gray-600 to-gray-800 flex flex-col'>

      <Navbar />

      <div className="max-w-screen-xl w-4/5 md:w-4x5 lg:w-3/5 justify-center mx-auto my-10 bg-white shadow-myShadow">

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
          </div>
        </div>

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

        <div id="contact" className='bg-gray-900'>
          <div className='p-10 flex items-center flex-col'>
            <h2 className="text-3xl lg:text-4xl text-white">Contact me</h2>
            <div className='flex gap-6 mt-5'>
              <button className='hover:animate-bounce'>
                <a href="https://www.linkedin.com/in/dominik-plavka-0411549a/" target="blank">
                  <SiLinkedin style={iconStyles} />
                </a>
              </button>
              <button className='hover:animate-bounce'>
                <a href="https://www.codewars.com/users/Dominik%20Plavka" target="blank">
                  <SiCodewars style={iconStyles} />
                </a>
              </button>
              <button className='hover:animate-bounce'><a href="https://github.com/DominikPlavka" target="blank" rel="noreferrer"><IoLogoGithub style={iconStyles} /></a></button>
            </div>
            <div className='mt-5 md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <p className='text-white'>Email:&nbsp;
                  <a href="mailto:domino.plavka@gmail.com">domino.plavka@gmail.com</a>
                </p>
              </div>
              <div>
                <p className='text-white'>Location: Spišská Nová Ves / Slovakia</p>
              </div>
            </div>
          </div>

          <div id="joke" className='bg-red-600'>
            <Joke />
          </div>

        </div>
      </div>

      <div className='mb-10 ml-20 mr-20'>
        <p className='text-white text-center'>This page doesn't use any external packages, except <a href="https://react-icons.github.io/react-icons/" target="_blank"><span className='text-sky-400'>react-icons</span></a>. Latest version deployed 12.4.2023</p>
      </div>

    </div>
  );
}

export default App;