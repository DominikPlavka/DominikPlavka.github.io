import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import Carousel from './components/Carousel';
import { TbBrandTypescript, TbBrandJavascript, TbBrandDocker, TbBrandReactNative, TbBrandGithub, TbBrandMongodb, TbBrandCss3, TbBrandTailwind, TbSql } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiJirasoftware, SiJest, SiLinkedin, SiCodewars } from 'react-icons/si';
import { IoIosGitNetwork, IoLogoGithub } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';
import { DiScrum } from 'react-icons/di';
import { RiCommandLine } from 'react-icons/ri';
import { MdGeneratingTokens } from 'react-icons/md';




const projectData = [
  { name: "This page", progression: "halfway done", link: "https://dominikplavka.github.io/", desc: "React, Tailwind CSS" },
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
          <div className='p-12 flex items-center justify-center'>
            <img src="myHead.png" className='w-60 h-auto w-80 lg:h-auto'></img>
          </div>
          <div className="flex-col p-12 flex md:items-start items-center justify-center">
            <p className="text-2xl">Hello, my name is</p>
            <p className="text-5xl lg:text-7xl font-bold">Dominik</p>
            <p className="text-2xl mt-12 text-center md:text-left">&#60;junior&#62;&nbsp;Full Stack Dev&nbsp;&#60;&#47;junior&#62;<span className='font-bold animate-ping text-red-500'>|</span></p>
          </div>
        </div>

        <div id="about-me" className='order-last md:order-first md:grid md:grid-cols-2 md:gap-8 bg-gray-100'>

          <div className='p-12' >
            <h2 className="text-3xl lg:text-4xl">My projects</h2>
            {projectData.map((project, index) => (
              <ProgressBar key={index} name={project.name} progression={project.progression} link={project.link} desc={project.desc} />
            ))
            }
          </div>

          <div className='p-12 flex flex-col order-first md:order-last'>
            <h2 className="text-3xl lg:text-4xl">About me</h2>
            <p className='mt-5'>My name is Dominik Plavka and Iam fresh graduate of Green Fox Academy. Before this "big step" in my life, I worked as Marketing Manager in broad range of roles.</p>
            <p className='mt-5'>This experience could be very useful in web development as well, because I participated in web/graphic design and I created basic webpages for various clients.</p>
          </div>
        </div>

        <div id="my-skills" className='md:grid md:grid-cols-2 md:gap-8'>

          <div className='p-12 flex flex-col'>
            <h2 className="text-3xl lg:text-4xl">Skills</h2>
            <p className='mt-5'>As Full-Stack Developer I have gained following skills:</p>

            <h3 className="text-2xl mt-5">Front-end</h3>
            <div className='flex flex-wrap gap-x-2'>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandTypescript/>&nbsp;TypeScript</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandJavascript/>&nbsp;JavaScript</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandReactNative/>&nbsp;React</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><IoIosGitNetwork/>&nbsp;DOM</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandCss3/>&nbsp;CSS</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandTailwind/>&nbsp;Tailwind CSS</span>
            </div>

            <h3 className="text-2xl mt-5">Back-end</h3>
            <div className='flex flex-wrap gap-x-2'>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><FaNodeJs/>&nbsp;Node.js</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><SiExpress/>&nbsp;Express.js</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><GrMysql/>&nbsp;MySQL</span>            
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandMongodb/>&nbsp;MongoDB</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbSql/>&nbsp;MS SQL</span>
            </div>

            <h3 className="text-2xl mt-5">Other</h3>
            <div className='flex flex-wrap gap-x-2'>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandGithub/>&nbsp;GitHub</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><SiJirasoftware/>&nbsp;JIRA</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><DiScrum/>&nbsp;Scrum</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><SiJest/>&nbsp;Jest</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><RiCommandLine/>&nbsp;CLI</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><MdGeneratingTokens/>&nbsp;JWT</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandDocker/>&nbsp;Docker</span>
            </div>
          </div>

          <div className='flex items-center justify-center max-w-lg'>
            <Carousel autoSlide={true} slides={slides} />
          </div>

        </div>

        <div id="contact">
          <div className='p-12 flex items-center flex-col'>
            <h2 className="text-3xl lg:text-4xl">Contact</h2>
            <div className='flex gap-6 mt-5'>
              <button><a href="https://www.linkedin.com/in/dominik-plavka-0411549a/" target="blank"><SiLinkedin style={iconStyles}/></a></button>
              <button><a href="https://www.codewars.com/users/Dominik%20Plavkagithub" target="blank"><SiCodewars style={iconStyles}/></a></button>
              <button><a href="https://github.com/DominikPlavka" target="blank"><IoLogoGithub style={iconStyles}/></a></button>
            </div>
            <p className='mt-5'>This experience could be very useful in web development as well, because I participated in web/graphic design and I created basic webpages for various clients.</p>
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