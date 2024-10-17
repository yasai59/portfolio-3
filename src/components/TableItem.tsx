import { useEffect, useRef } from "react";

type tableItemProps = {
  period: string;
  duration: string;
  course: string;
  centre: string;
  comentary: string;
  handleHover: (text: string) => void;
}


export const TableItem = ({period, duration, course, centre, comentary, handleHover}: tableItemProps) => {

  const selfRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
      selfRef.current?.addEventListener('mouseenter', () => handleHover(comentary));
      selfRef.current?.addEventListener('mouseleave', () => handleHover(''));

    return () => {
        selfRef.current?.removeEventListener('mouseenter', () => handleHover(comentary));
        selfRef.current?.removeEventListener('mouseleave', () => handleHover(''));
    }
  }, [comentary, handleHover])



  return (
    <div className="flex justify-between items-center bg-black hover:bg-white hover:text-black w-full md:px-20 py-2 transition-colors duration-200" ref={selfRef}>
      <div className='w-[33%]'>
        <p className='md:text-xl'>{period}</p>
        <p className='md:text-sm text-xs'>{duration}</p>
      </div>
      <div className='w-[66%]'>
        <p>{course}</p>
      </div>
      <div className='w-[33%]'>
        <p>{centre}</p>
      </div>
    </div>
  )
}
