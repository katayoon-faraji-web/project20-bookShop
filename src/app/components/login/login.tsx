'use client'
import Link from "next/link";
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import React, { useRef ,ReactDOM } from "react";
import { useRouter } from 'next/navigation';
import UseStore from "../zustand/store";

const Login:React.FC = ():React.ReactNode =>{
    let set_user:(u:string)=>void = UseStore(state=>state.set_user) 
    const router = useRouter()
    const inp1 =useRef<HTMLInputElement>()
    const inp2 =useRef<HTMLInputElement>()
    const alert =useRef<HTMLDivElement>()
    const alert2 =useRef<HTMLDivElement>()
    const alert3 =useRef<HTMLDivElement>()

    function login(){
        
        let username_value:string = inp1.current.value
        let pass_value:string = inp2.current.value
        if(username_value=='admin' && pass_value=='admin'){
            alert.current.style.display = 'block'
            alert2.current.style.display = 'none'
            alert3.current.style.display = 'none'
            let k:string = (username_value.slice(0,6))
            router.replace("/")
            
        }else{
            if(username_value=='' || pass_value==''){
                if(username_value==''){
                    inp1.current.style.border = '1px solid red'
                }
                if(pass_value==''){
                    inp2.current.style.border = '1px solid red'
                }
            }else{
                const url = new URL('https://6595591004335332df8287f5.mockapi.io/users');
                url.searchParams.append('username', username_value); 
                fetch(url, {
                method: 'GET',
                headers: {'content-type':'application/json'},
                })
                .then(res => res.json())
                .then(response => {
                    if(response[0].username == username_value ){
                        if(response[0].password == pass_value){
                            alert.current.style.display = 'block'
                            alert2.current.style.display = 'none'
                            alert3.current.style.display = 'none'
                            router.replace("/")

                        }else if(response[0].password != pass_value){
                            alert.current.style.display = 'none'
                            alert3.current.style.display = 'none'
                            alert2.current.style.display = 'block'
                        }
                    }else{
                        alert.current.style.display = 'none'
                        alert2.current.style.display = 'none'
                        alert3.current.style.display = 'block'
                    }        
                })
            }
        }
    }
    return(
        <section className='w-full h-[500px] lg:w-[50%] lg:h-[95%] flex flex-wrap relative justify-center font-bold content-start pt-20 '>
            <div className='w-full h-[60px] flex flex-wrap justify-center absolute font-bold content-start top-0 left-0'>
                <div ref={alert} className="w-[400px] hidden">
                    <BasicAlerts />
                </div>
                <div ref={alert2} className="w-[400px] hidden">
                    <BasicAlerts2 />
                </div>
                <div ref={alert3} className="w-[400px] hidden">
                    <BasicAlerts3 />
                </div>
            </div>
            <div className="w-full h-[95%] flex flex-wrap justify-center font-bold content-start  ">
                <span className="flex w-full text-[#0e345a] text-[40px] justify-center text-center">Sign in</span>
                <span className="flex w-full text-[#95b7da] text-[18px] justify-center text-center my-4">or use your account</span>
               
                <div className="w-full flex justify-center">
                    <Tooltip title="admin" placement="top-end" >
                        <input ref={inp1} type="text" placeholder="Username" required spellCheck={false} className="w-[400px] h-[50px] rounded-md border-2 border-[#0e345a] text-[20px] placeholder:text-[20px] placeholder:text-stone-300 bg-white text-black p-4"/>
                    </Tooltip>
                </div>
                <div className="w-full flex justify-center">
                <Tooltip title="admin" placement="top-end">
                    <input ref={inp2} type="password" placeholder="Password"required spellCheck={false} className="w-[400px] h-[50px] rounded-md border-2 border-[#0e345a] text-[20px] placeholder:text-[20px] my-4 placeholder:text-stone-300 bg-white text-black p-4" />
                </Tooltip>
                </div>
                
                <div className="w-full flex justify-center items-center h-[40px] mt-4">
                    <button onClick={login} className="w-[250px] h-[40px] bg-[#0e345a] text-white text-[20px] rounded-md cursor-pointer transition-all duration-500 hover:bg-white hover:text-[#0e345a] hover:border-2 hover:border-[#0e345a]">Log in</button>
                </div>
            </div>

        </section>
    )
}
export default Login;


const BasicAlerts:React.FC = ():React.ReactNode => {
    return (
      <Stack sx={{ width: '100%' }} spacing={4}>
        <Alert severity="success">login successful.</Alert>
        
      </Stack>
    );
   }
  const BasicAlerts2:React.FC = ():React.ReactNode => {
      return (
        <Stack sx={{ width: '100%' }} spacing={4}>
          
          <Alert severity="error">Wrong Password !</Alert>
        </Stack>
      );
  }
  const BasicAlerts3:React.FC = ():React.ReactNode => {
      return (
        <Stack sx={{ width: '100%' }} spacing={4}>
          
          <Alert severity="error">Wrong Username !</Alert>
        </Stack>
      );
  }