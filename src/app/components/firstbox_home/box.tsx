import React from "react";

const Box:React.FC = ():React.ReactNode => {
    return(
        <div className="w-full h-[80vh]  border-red-500 flex justify-start items-center bg-[url('https://static.wixstatic.com/media/ea71bb_04fa8a795ad24075b39c085d743035a2~mv2_d_6284_1717_s_2.jpg/v1/fill/w_1225,h_655,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_04fa8a795ad24075b39c085d743035a2~mv2_d_6284_1717_s_2.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="h-full w-full lg:w-[60%] flex flex-wrap justify-start content-center pl-10 lg:pl-20">
                <span className="flex w-full justify-start text-[50px] lg:text-[80px] font-third text-[#0e345a] font-extrabold">A SOFA,</span>
                <span className="flex w-full justify-start text-[50px] lg:text-[80px] font-third text-[#0e345a] font-extrabold">A GOOD</span>
                <span className="flex w-full justify-start text-[50px] lg:text-[80px] font-third text-[#0e345a] font-extrabold">BOOK,</span>
                <span className="flex w-full justify-start text-[50px] lg:text-[80px] font-third text-[#0e345a] font-extrabold">AND YOU.</span>
            </div>
        </div>
    )
}
export default Box;