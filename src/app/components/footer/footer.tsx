import React from "react";

const Footer = () =>{
    return(
        <footer className="w-full bg-[#0e345a] h-fit flex flex-wrap justify-start content-center items-center py-10 px-20">
            <UL head='BINK.Publishers' li1='500 Terry Francine St.' li2='San Francisco, CA 94158' li3='123-456-7890' li4='info@my-domain.com'/>
            <UL head='Shop' li1='FAQ' li2='Shipping & Returns' li3='Store Policy' li4='Payment Methods'/>
            <UL head='Socials' li1='Facebook' li2='Twitter' li3='Instagram' li4='Pinterest'/>
            <div className="w-full md:w-[50%] lg:w-[20%] flex flex-wrap justify-start content-start">
                <button className="capitalize w-[250px] h-[50px] cursor-pointer flex justify-center items-center border-4 border-white bg-transparent text-white font-bold text-[18px] hover:bg-white hover:text-[#0e345a] transition-all duration-500">enter your email here</button>
                <button className="capitalize w-[250px] mt-4 h-[50px] cursor-pointer flex justify-center items-center border-4 border-white bg-white text-[#0e345a] font-bold text-[18px] hover:bg-[#0e345a] hover:text-white transition-all duration-500">subscribe</button>
            </div>           
        </footer>
    )
}
export default Footer;

type ulType = {
    head:string,
    li1:string,
    li2:string,
    li3:string,
    li4:string,
}

const UL:React.FC<ulType> =({head,li1,li2,li3,li4}):React.ReactNode =>{
    return(
        <div className="w-full md:w-[50%] lg:w-[25%] h-[300px]  flex flex-wrap justify-start content-start">
            <span className="flex w-full text-[20px] text-white font-extrabold">{head}</span>
            <ul className="w-full flex flex-wrap justify-start content-start mt-10">
                <li className="w-full flex justify-start  h-[40px] font-medium text-white text-[18px] cursor-pointer">{li1}</li>
                <li className="w-full flex justify-start  h-[40px] font-medium text-white text-[18px] cursor-pointer">{li2}</li>
                <li className="w-full flex justify-start  h-[40px] font-medium text-white text-[18px] cursor-pointer">{li3}</li>
                <li className="w-full flex justify-start  h-[40px] font-medium text-white text-[18px] cursor-pointer">{li4}</li>
            </ul>
        </div>
    )
}