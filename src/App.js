import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import Carousel from './components/Carousel';

const projectData = [
  { name: "This page", progression: "halfway done" },
  { name: "WeatherApp", progression: "finalizing", link: "https://weather-app-psi-dun-45.vercel.app/" }
];

const slides = [
  { image: "nodeJS.png", text: "blabla1" },
  { image: "TS-JS.png", text: "blabla2" },
  { image: "react.png", text: "blabla3" },
  { image: "github.png", text: "blabla4" }
];

function App() {
  return (
    <div className='w-full min-h-screen m-0 p-0 bg-gradient-to-t from-gray-600 to-gray-800 flex flex-col'>

      <Navbar />

      <div className="max-w-screen-xl w-4/5 md:w-4x5 lg:w-3/5 justify-center mx-auto my-24 bg-white shadow-myShadow">

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

        <div id="aboutMe" className='flex flex-col order-last md:order-first md:grid md:grid-cols-2 md:gap-8 bg-gray-100'>
          <div className='p-12' >
            <h2 className="text-3xl lg:text-4xl">My projects</h2>
            {projectData.map((project, index) => (
              <ProgressBar key={index} name={project.name} progression={project.progression} link={project.link} />
            ))
            }
          </div>
          <div className='p-12 flex flex-col order-first md:order-last'>
            <h2 className="text-3xl lg:text-4xl">About me</h2>
            <p className='mt-5'>My name is Dominik Plavka and Iam fresh graduate of Green Fox Academy. Before this "big step" in my life, I worked as Marketing Manager in broad range of roles.</p>
            <p className='mt-5'>This experience could be very useful in web development as well, because I participated in web/graphic design and I created basic webpages for various clients.</p>
          </div>
        </div>

        <div id="aboutMe" className='flex flex-col order-last md:order-first md:grid md:grid-cols-2 md:gap-8'>
          
          <div className='p-12 flex flex-col order-first md:order-last'>
            <h2 className="text-3xl lg:text-4xl">Skills</h2>
            <p className='mt-5'>My tech skills include various</p>
            <p className='mt-5'>This experience could be very useful in web development as well, because I participated in web/graphic design and I created basic webpages for various clients.</p>
          </div>

          <div className='flex items-center justify-center max-w-lg'>
            <Carousel autoSlide={true} slides={slides} />
          </div>

        </div>
      </div>

      <div className='mb-10 ml-20 mr-20'>
        <p className='text-white text-center'>Whole page hard-coded &#40;no external packages used, except <a href="https://react-icons.github.io/react-icons/" target="_blank"><span className='text-sky-400'>react-icons</span></a>&#41;. Latest version deployed 12.4.2023</p>
      </div>
    </div>
  );
}

export default App;