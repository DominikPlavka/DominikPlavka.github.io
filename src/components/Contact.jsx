import { SiLinkedin, SiCodewars } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io';

const Contact = () => {

    let iconStyles = { color: "grey", fontSize: "2em" };

    return (
        <div id="contact" className='bg-gray-900'>
          <div className='p-10 flex items-center flex-col'>
            <h2 className="text-3xl lg:text-4xl text-white">Contact me</h2>
            <div className='flex gap-6 mt-5'>
              <button className='hover:animate-bounce'>
                <a href="https://www.linkedin.com/in/dominik-plavka-0411549a/" target="blank" rel="noopener noreferrer">
                  <SiLinkedin style={iconStyles} />
                </a>
              </button>
              <button className='hover:animate-bounce'>
                <a href="https://www.codewars.com/users/Dominik%20Plavka" target="blank" rel="noopener noreferrer">
                  <SiCodewars style={iconStyles} />
                </a>
              </button>
              <button className='hover:animate-bounce'><a href="https://github.com/DominikPlavka" target="blank" rel="noopener noreferrer"><IoLogoGithub style={iconStyles} /></a></button>
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
        </div>
    )
}

export default Contact;