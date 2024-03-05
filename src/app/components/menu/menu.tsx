'use client'
import React from "react";
import Link from "next/link";
import { useEffect ,useRef} from "react";
import UseStore from "../zustand/store";

const Menu:React.FC = ():React.ReactNode =>{
    let menu:string = UseStore(state=>state.menu)
    let set_menu:(statuss:string)=>void = UseStore(state=>state.set_menu)
    let menuBox = useRef<HTMLDivElement>() 
    useEffect(()=>{
        if(menu=='closed'){
            menuBox.current.style.right = '-80%'
        }else if(menu=='opened'){
            menuBox.current.style.right ='0px'
        }

        
    },[menu])
    return(
        <div ref={menuBox} className="w-[200px] h-fit  absolute top-[100%] transition-all duration-500 z-40 bg-[#0e345a] ">
            <ul className="w-full h-full flex flex-wrap justify-end content-start ">
                <li onClick={()=>{set_menu('closed')}} className="w-full h-[40px] flex justify-end items-center cursor-pointer hover:bg-slate-500 p-4 transition-all duration-500 text-[18px] font-bold text-white"><Link href={'/loginsignup'}> Login</Link></li>
                <li onClick={()=>{set_menu('closed')}} className="w-full h-[40px] flex justify-end items-center cursor-pointer hover:bg-slate-500 p-4 transition-all duration-500 text-[18px] font-bold text-white"><Link href={'/bookstore'}>Bookstore</Link></li>
                <li onClick={()=>{set_menu('closed')}} className="w-full h-[40px] flex justify-end items-center cursor-pointer hover:bg-slate-500 p-4 transition-all duration-500 text-[18px] font-bold text-white"><Link href={'/'}>events</Link></li>
                <li onClick={()=>{set_menu('closed')}} className="w-full h-[40px] flex justify-end items-center cursor-pointer hover:bg-slate-500 p-4 transition-all duration-500 text-[18px] font-bold text-white"><Link href={'/about'}>about</Link></li>
                <li onClick={()=>{set_menu('closed')}} className="w-full h-[40px] flex justify-end items-center cursor-pointer hover:bg-slate-500 p-4 transition-all duration-500 text-[18px] font-bold text-white"><Link href={'/contact'}>contact</Link></li>
            </ul>
        </div>
    )
}
export default Menu;