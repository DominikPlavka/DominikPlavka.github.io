import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  
  const handleSetIndex = (indexSet) => {
    (activeIndex !== indexSet) ? setActiveIndex(index) : setActiveIndex(null);
  };

  return (
    <div>
        <div onClick={() => handleSetIndex(index)} className='flex w-full place-content-between mt-5 rounded items-center'>
            <div className='w-3/12 flex'>
                <div className='flex font-bold items-center'>{title}</div>
            </div>
            
            <div className='w-6/12'><hr className="border-1 border-dashed border-gray-500"/></div>
            
            <div className="w-3/12 flex items-center justify-center">
                { activeIndex === index ? <BsFillArrowDownCircleFill className='w-8 h-8'/> : <BsFillArrowUpCircleFill className='w-8 h-8' /> }
            </div>
        </div>

        { activeIndex === index && (
            <div className="rounded-2xl shadow-cyan-500/50 mb-6">
              {children}
            </div>
        )}
    </div>
  );
};

export default AccordionLayout;