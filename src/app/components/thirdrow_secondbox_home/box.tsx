import ShortLine from '../shortline/line'
import Link from 'next/link';
const Box:React.FC= ():React.ReactNode => {
    return(
        <>
            <ShortLine/>
            <div  className="w-full h-[70vh] relative lg:h-[90vh] bg-[#0e345a] flex flex-wrap justify-center content-center ">
                <span className="w-full flex justify-center text-white font-third text-[60px] lg:text-[90px]">There is no</span>
                <span className="w-full flex justify-center text-white font-third text-[60px] lg:text-[90px]">such thing as too</span>
                <span className="w-full flex justify-center text-white font-third text-[60px] lg:text-[90px]">many books</span>
                <button id='events' className="w-[200px] h-[50px] mt-10 border-4 font-bold border-white bg-transparent flex  hover:bg-white hover:text-[#0e345a] transition-all duration-500 justify-center items-center cursor-pointer text-[15px] text-white"><Link href={'/about'}>Read Our Story</Link></button>
            </div>
            <ShortLine/>
        </>
    )
}
export default Box;