import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Joke from './components/Joke';
import Note from './components/Note';

function App() {

  return (
    <div className='w-full min-h-screen m-0 p-0 bg-gradient-to-t from-gray-600 to-gray-800 flex flex-col'>

      <Navbar />

      <div className="max-w-screen-xl w-4/5 md:w-4x5 lg:w-3/5 justify-center mx-auto my-10 bg-white shadow-myShadow">

        <Header />
        <AboutMe />
        <Skills />
        <Contact />
        <Joke />

      </div>

      <Note />

    </div>
  )
}

export default App;