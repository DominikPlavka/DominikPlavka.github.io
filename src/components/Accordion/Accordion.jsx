import { useState } from 'react';
import AccordionLayout from './Layout/AccordionLayout';
import { TbBrandTypescript, TbBrandJavascript, TbBrandDocker, TbBrandReactNative, TbBrandGithub, TbBrandMongodb, TbBrandCss3, TbBrandTailwind, TbSql } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiJirasoftware, SiJest } from 'react-icons/si';
import { IoIosGitNetwork} from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';
import { DiScrum } from 'react-icons/di';
import { RiCommandLine } from 'react-icons/ri';
import { MdGeneratingTokens } from 'react-icons/md';


const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const buttonStyle = 'flex items-center py-1 px-2 border-solid mt-5 rounded-md text-white block hover:animate-bounce transition ease-in-out delay-150 bg-black hover:bg-sky-500';

  return (
      <div className='flex flex-col'>
          <AccordionLayout 
            title="Front-End"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className='flex flex-wrap gap-x-2'>
              <span className={buttonStyle}><TbBrandTypescript/>&nbsp;TypeScript</span>
              <span className={buttonStyle}><TbBrandJavascript/>&nbsp;JavaScript</span>
              <span className={buttonStyle}><TbBrandReactNative/>&nbsp;React</span>
              <span className={buttonStyle}><IoIosGitNetwork/>&nbsp;DOM</span>
              <span className={buttonStyle}><TbBrandCss3/>&nbsp;CSS</span>
              <span className={buttonStyle}><TbBrandTailwind/>&nbsp;Tailwind CSS</span>
            </div>
            
          </AccordionLayout>

          <AccordionLayout 
            title="Back-End"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className='flex flex-wrap gap-x-2'>
              <span className={buttonStyle}><FaNodeJs/>&nbsp;Node.js</span>
              <span className={buttonStyle}><SiExpress/>&nbsp;Express.js</span>
              <span className={buttonStyle}><GrMysql/>&nbsp;MySQL</span>            
              <span className={buttonStyle}><TbBrandMongodb/>&nbsp;MongoDB</span>
              <span className={buttonStyle}><TbSql/>&nbsp;MS SQL</span>
            </div>   
          </AccordionLayout>

          <AccordionLayout 
            title="Other"
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className='flex flex-wrap gap-x-2'>
              <span className={buttonStyle}><TbBrandGithub/>&nbsp;GitHub</span>
              <span className={buttonStyle}><SiJirasoftware/>&nbsp;JIRA</span>
              <span className={buttonStyle}><DiScrum/>&nbsp;Scrum</span>
              <span className={buttonStyle}><SiJest/>&nbsp;Jest</span>
              <span className={buttonStyle}><RiCommandLine/>&nbsp;CLI</span>
              <span className={buttonStyle}><MdGeneratingTokens/>&nbsp;JWT</span>
              <span className={buttonStyle}><TbBrandDocker/>&nbsp;Docker</span>
            </div>   
          </AccordionLayout>

      </div>
  );
};
export default Accordion;