import React from "react";
import Image from "next/image";
import BookPic from '../../../../public/images/book.png';

const Box:React.FC = ():React.ReactNode => {
    return(
        
        <div className="w-full h-[190vh] xl:h-[120vh]  content-start relative mt-[50px]  xl:mt-[200px] flex flex-wrap justify-center items-center">
            <div  className="w-full flex flex-wrap justify-center my-8">
                <span  className=" w-full relative flex justify-center text-[#0e345a] font-extrabold text-center text-[18px] font-secondary">Coming Up</span>
                <span  className=" w-full relative flex justify-center text-[#0e345a] font-extrabold text-center text-[45px] mt-4 font-secondary">BOOK LAUNCH</span>
            </div>
            <div className="lg:w-[50%] w-full h-[600px]  flex pl-10 order-2 xl:order-1 justify-start flex-wrap content-center">
                <span className="w-full flex justify-start text-[#0e345a] text-[30px] font-extrabold text-start my-6">Introducing The Land of AILOO</span>
                <span className="w-full flex justify-start text-[#0e345a] text-[20px] font-bold text-start my-6">By Mark Walker</span>
                <span className="w-full flex justify-start text-[#0e345a] text-[20px] font-bold text-start mt-6">When</span>
                <div className="w-full h-[2px] flex justify-start items-center  mb-2">
                    <span className="w-[50px] h-[2px] flex bg-[#0e345a]"></span>
                </div>
                <span className="w-full flex justify-start text-[#0e345a] text-[18px] text-start mb-6">Jul 12, 2035, 7:00 PM</span>
                <span className="w-full flex justify-start text-[#0e345a] text-[20px] font-bold text-start mt-6 ">Wherer</span>
                <div className="w-full h-[2px] flex justify-start items-center mb-2">
                    <span className="w-[50px] h-[2px] flex bg-[#0e345a]"></span>
                </div>
                <span className="w-full flex justify-start text-[#0e345a] text-[18px] text-start mb-6">500 Terry Francois Street, San Francisco, CA, USA</span>
                <button className="w-[200px] h-[60px] bg-transparent border-4 border-[#0e345a] text-[18px] text-[#0e345a] flex justify-center items-center cursor-pointer hover:bg-[#0e345a] hover:text-white transition-all duration-500 font-bold ">RSVP NOW</button>
            </div>
            <div className="w-[500px] h-auto  flex justify-center items-center order-1 xl:order-2 border-8 border-[#0e345a]">
                <Image alt="Picture of the author" objectFit="cover" style={{height:'auto', width:'500px'}} src={BookPic}/>
            </div>
        </div>
    )
}

export default Box;