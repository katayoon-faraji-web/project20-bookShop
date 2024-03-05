'use client'
import Tooltip from '@mui/material/Tooltip';
import React, { useRef } from "react";
import { useFormik ,FormikErrors } from 'formik';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// interface OwnProps {}    
const Signup:React.FC = ():React.ReactNode => {
  const inp1 = useRef<HTMLInputElement>()
  const inp2 = useRef<HTMLInputElement>()
  const inp3 = useRef<HTMLInputElement>()
  const error = useRef<HTMLDivElement>()
  const success = useRef<HTMLDivElement>()

  function signup(){
    let flag:number = 0
    fetch('https://6595591004335332df8287f5.mockapi.io/users', {
      method: 'GET',
      headers: {'content-type':'application/json'},
      }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
      }).then(tasks => {
      // Do something with the list of tasks
          tasks.forEach((val)=>{
            if((inp1.current.value)==val.username || (inp2.current.value)==val.email){
              flag++
            }
          })
          if(flag!=0){
            error.current.style.display = 'block'
            success.current.style.display = 'none'
          }else{
              error.current.style.display = 'none'
              const user = {
                username:inp1.current.value,
                email:inp2.current.value,
                password:inp3.current.value,
              }
              fetch('https://6595591004335332df8287f5.mockapi.io/users', {
                method: 'POST',
                headers: {'content-type':'application/json'},
                // Send your data in the request body as JSON
                body: JSON.stringify(user)
                }).then(res => {
                if (res.ok) {
                  success.current.style.display = 'block'
                  error.current.style.display = 'none'
                  
                }
                // handle error
                }).then(task => {
                // do something with the new task
                }).catch(error => {
                // handle error
                })
                }
      
              })
  } 

  interface FormValues {
    username?: string
    email?: string
    password?: string
    
  }
  
  const initialValues:FormValues = {
    username: '',
    email: '',
    password: '',
  };
  const onSubmit = ():void => {
    signup()
  };

  const validate = (values: FormValues ) => {
    const errors:FormikErrors<FormValues> = {};
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    if (!values.username) {
      errors.username = 'Required';
    } else if (!/^[a-z0-9_-]{3,15}$/i.test(values.username)) {
      errors.username = 'Invalid username address';
    }
    if (!values.password) {
        errors.password = 'Required';
      } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_]).{8,}$/i.test(values.password)) {
        errors.password = 'Invalid password address';
      }
  
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <section className='w-full h-[500px] lg:w-[50%] lg:h-[95%] flex flex-wrap relative justify-center font-bold content-start pt-20'>
      <div className='w-full h-[60px] flex flex-wrap justify-center absolute font-bold content-start -top-[100px] left-0'>
        <div ref={error} className="w-[400px] hidden mb-4">
          < BasicAlerts/>
        </div>
        <div ref={success} className="w-[400px] hidden mb-4">
          < BasicAlerts2/>
        </div>
      </div>
      <div className="w-full h-[95%] flex flex-wrap justify-center font-bold content-start ">
        
        <span className="flex w-full text-[#0e345a] text-[40px] justify-center text-center">Sign up</span>
        <span className="flex w-full text-[#95b7da] text-[18px] justify-center text-center my-4">or use your email for registeration</span>
        <form onSubmit={formik.handleSubmit} className='w-full h-[90%] flex flex-wrap justify-center font-bold content-start '>
        <div className="w-full flex justify-center">
          <input
          ref={inp1}
          name="username"
          type="text"
          placeholder="Username" className="w-[400px] h-[50px] rounded-md border-2 border-[#0e345a] text-[20px] placeholder:text-[20px]  placeholder:text-stone-300 bg-white text-black p-4 "
          onChange={formik.handleChange}
          value={formik.values.username}
          />
        </div>
        {formik.errors.username ? <div className='w-[400px] text-red-600 h-[20px] '>{formik.errors.username}</div> : null}
        <div className="w-full flex justify-center">
          <input
          ref={inp2}
          name="email"
          type="email"
          placeholder="email"  spellCheck={false} className="w-[400px] h-[50px] rounded-md border-2 border-[#0e345a] text-[20px] placeholder:text-[20px] mt-4 placeholder:text-stone-300 bg-white relative text-black p-4"
          onChange={formik.handleChange}
          value={formik.values.email}
          />
        </div>
        {formik.errors.email ? <div className='w-[400px] text-red-600 h-[20px] '>{formik.errors.email}</div> : null}
        <div className="w-full flex justify-center">
          <input
          ref={inp3}
          name="password"
          type="password"
          placeholder="password"  spellCheck={false} className="w-[400px] h-[50px] rounded-md border-2 border-[#0e345a] text-[20px] placeholder:text-[20px] mt-4 placeholder:text-stone-300 bg-white relative text-black p-4"
          onChange={formik.handleChange}
          value={formik.values.password}
          />
        </div>
        {formik.errors.password ? <div className='w-[400px] text-red-600 h-[20px]'>{formik.errors.password}</div> : null}
        <div className="w-full flex justify-center items-center h-[40px] mt-4">
          <button type="submit" className="w-[250px] h-[40px] bg-[#0e345a] text-white text-[20px] rounded-md cursor-pointer transition-all duration-500 hover:bg-white hover:text-[#0e345a] hover:border-2 hover:border-[#0e345a]">Sign up</button>
        </div>
        </form>
    </div>
    </section>
  );
}
export default Signup

const BasicAlerts:React.FC = ():React.ReactNode => {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      
      <Alert severity="error">there is an account with this information !</Alert>
    </Stack>
  );
}
const BasicAlerts2:React.FC = ():React.ReactNode => {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Alert severity="success">sign up successful.</Alert>
      
    </Stack>
  );
 }

   
     
   