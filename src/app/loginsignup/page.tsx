'use client'
import { useRef } from "react";
import Login from "../components/login/login";
import Signup from '../components/signup/signup'


let x:MediaQueryList = window.matchMedia("(max-width: 1024px)")


const LoginSignup = () =>{
    const box = useRef<HTMLDivElement>()
    const box1 = useRef<HTMLDivElement>()
    const box2 = useRef<HTMLDivElement>()
    
    function goToSignup(){
        if (x.matches) { // If media query matches
            box.current.style.top = '50%';
            box1.current.style.display = 'none';
            box2.current.style.display = 'flex';
          } else {
            box.current.style.right = '50%';
            box1.current.style.display = 'none';
            box2.current.style.display = 'flex';
          }
        x.addEventListener("change", function() {
            if (x.matches) { // If media query matches
                box.current.style.top = '50%';
                box1.current.style.display = 'none';
                box2.current.style.display = 'flex';
              } else {
                box.current.style.right = '50%';
                box1.current.style.display = 'none';
                box2.current.style.display = 'flex';
              }
          });
       
    }

    function goToLogin(){
        if (x.matches) { // If media query matches
            box.current.style.top = '0'
            box2.current.style.display = 'none'
            box1.current.style.display = 'flex'
          } else {
            box.current.style.right = '0'
            box2.current.style.display = 'none'
            box1.current.style.display = 'flex'
          }
        x.addEventListener("change", function() {
            if (x.matches) { // If media query matches
                box.current.style.top = '0'
                box2.current.style.display = 'none'
                box1.current.style.display = 'flex'
              } else {
                box.current.style.right = '0'
                box2.current.style.display = 'none'
                box1.current.style.display = 'flex'
              }
          });
        
    }

    return(
        <section className="w-full h-fit lg:h-[80vh] flex flex-wrap justify-center content-center bg-white mt-4 relative">
            <Login/>
            <Signup/>
            <div ref={box} className="w-full h-[500px] lg:w-[50%] lg:h-[95%] flex flex-wrap justify-center content-center bg-slate-500 absolute top-0 right-0 z-30 transition-all duration-500 rounded-xl">
                <div ref={box1} className="w-[80%] flex flex-wrap justify-center content-center h-[60%] font-bold ">
                    <span className="flex w-full text-white text-[40px] justify-center text-center font-third">hello, friend! </span>
                    <p className="flex w-full text-white text-[18px] justify-center text-center my-10 ">enter your details and start journey with us.</p>
                    <button onClick={goToSignup} className="w-[200px] h-[40px] rounded-lg border-white text-[#0e345a] bg-white text-[20px] font-bold flex justify-center items-center cursor-pointer hover:bg-[#0e345a] hover:text-white transition-all duration-500">Sign Up</button>
                </div>
                <div ref={box2} className="w-[80%] hidden flex-wrap justify-center content-center h-[60%] font-bold ">
                    <span className="flex w-full text-white text-[40px] justify-center text-center font-third">welcome back!</span>
                    <p className="flex w-full text-white text-[18px] justify-center text-center my-10">to keep connected with us please login with your personal info.</p>
                    <button onClick={goToLogin} className="w-[200px] h-[40px] rounded-lg border-white text-[#0e345a] bg-white text-[20px] flex justify-center items-center cursor-pointer hover:bg-[#0e345a] hover:text-white transition-all duration-500">Log in</button>
                </div>
            </div>
        </section>
    )
}
export default LoginSignup;

