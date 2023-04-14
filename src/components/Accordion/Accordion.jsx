import { useState } from 'react';
import AccordionLayout from './Layout/AccordionLayout';
import { TbBrandTypescript, TbBrandJavascript, TbBrandDocker, TbBrandReactNative, TbBrandGithub, TbBrandMongodb, TbBrandCss3, TbBrandTailwind, TbSql } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiJirasoftware, SiJest, SiLinkedin, SiCodewars } from 'react-icons/si';
import { IoIosGitNetwork, IoLogoGithub } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';
import { DiScrum } from 'react-icons/di';
import { RiCommandLine } from 'react-icons/ri';
import { MdGeneratingTokens } from 'react-icons/md';


const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);

  return (
      <div className='flex flex-col'>
          <AccordionLayout 
            title="Front-End"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className='flex flex-wrap gap-x-2'>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandTypescript/>&nbsp;TypeScript</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandJavascript/>&nbsp;JavaScript</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandReactNative/>&nbsp;React</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><IoIosGitNetwork/>&nbsp;DOM</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandCss3/>&nbsp;CSS</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandTailwind/>&nbsp;Tailwind CSS</span>
            </div>
          </AccordionLayout>

          <AccordionLayout 
            title="Back-End"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className='flex flex-wrap gap-x-2'>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><FaNodeJs/>&nbsp;Node.js</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><SiExpress/>&nbsp;Express.js</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><GrMysql/>&nbsp;MySQL</span>            
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandMongodb/>&nbsp;MongoDB</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbSql/>&nbsp;MS SQL</span>
            </div>   
          </AccordionLayout>

          <AccordionLayout 
            title="Other"
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className='flex flex-wrap gap-x-2'>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandGithub/>&nbsp;GitHub</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><SiJirasoftware/>&nbsp;JIRA</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><DiScrum/>&nbsp;Scrum</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><SiJest/>&nbsp;Jest</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><RiCommandLine/>&nbsp;CLI</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><MdGeneratingTokens/>&nbsp;JWT</span>
              <span className='flex items-center py-1 px-2 border-solid mt-5 bg-black rounded-md text-white block'><TbBrandDocker/>&nbsp;Docker</span>
            </div>   
          </AccordionLayout>

      </div>
  );
};
export default Accordion;