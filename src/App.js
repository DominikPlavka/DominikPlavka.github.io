import Navbar from './components/Navbar';

function App() {
  return (
    <div className='w-full min-h-screen m-0 p-0 bg-yellow-500 flex flex-col'>
      <Navbar />
      <div className="w-4/5 md:w-4x5 lg:w-3/5 justify-center mx-auto my-24 bg-white shadow-myShadow">

       

        <div className='md:grid md:grid-cols-2 md:gap-8'>
            <div className='p-10 flex items-center justify-center'>
              <img src="myHead.png" className='w-60 h-auto lg:w-80 lg:h-auto'></img>
            </div>
            <div className='p-10 flex justify-center flex-col'>
              <p className="text-2xl">Hello, my name is</p>
              <p className="text-5xl lg:text-7xl text-black">Dominik</p>
              <p className="text-2xl">&#60;junior&#62;Full Stack Dev&#60;&#47;junior&#62;<span className='animate-ping text-rose-500'>|</span></p>
            </div>
        </div>

        <div className='md:grid md:grid-cols-2 md:gap-8 bg-green-800'>

            <div className='p-10'>
              <p className="text-1xl lg:text-2xl">dfsd fsfds fsdfdsf</p>
            </div>
            <div className='p-10'>
              <h2 className="text-3xl lg:text-5xl sm:text-5xl text-black">Hello My Friend2</h2>
              <p>dfsd fsfdsfs dfdsf</p>
            </div>

        </div>
      </div>

    </div>
  );
}

export default App;
