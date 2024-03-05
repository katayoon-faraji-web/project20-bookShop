'use client'
import * as React from 'react';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../cart/cart';
import Menu from '../menu/menu';
import UseStore from '../zustand/store';
import { useEffect } from 'react';
import { itemType } from '../itemtype/itemType.type';

const Header:React.FC= ():React.ReactNode=> {
  let cart:string = UseStore(state=>state.cart) 
  let menu:string = UseStore(state=>state.menu) 
  let user:string = UseStore(state=>state.user)
  const [User,UserSet] = React.useState<string>(user) 
  let set_cart:(status:string)=>void = UseStore(state=>state.set_cart) 
  let set_menu:(statuss:string)=>void = UseStore(state=>state.set_menu) 
  let wholeNumber:number = UseStore(state=>state.wholeNumber)
 
  const toggle_cart = ():void =>{
    if(cart=='closed'){
      set_cart('opened')
    }else if(cart=='opened'){
      set_cart('closed')
    }
  }
  const toggle_menu = ():void =>{
    if(menu=='closed'){
      set_menu('opened')
    }else if(menu=='opened'){
      set_menu('closed')
    }
  }
    return(
        <header className='w-full h-[100px] font-extrabold relative flex justify-between items-center text-[#0e345a] z-50'>
            <div className='w-[35%] h-full flex justify-start items-center'>
                <button className='h-[40px] w-[100px] bg-[#0e345a] font-secondary text-white flex justify-center items-center cursor-pointer text-[25px]'><Link href={'/'}>BINK.</Link></button>
                <span className='h-[40px] w-[150px] bg-white border-4 border-[#0e345a] text-[#0e345a] flex justify-center items-center cursor-pointer text-[20px] hover:bg-[#0e345a] hover:text-white transition-all duration-500'><Link href={'/'}>Publishers</Link></span>
            </div>
            <ul className='w-[65%] h-full flex justify-end items-center '>
                <li className='w-fit px-1 text-[20px] font-primary cursor-pointer hidden lg:flex justify-center items-center mx-2 hover:text-[#98ccff] transition-all duration-500'><Link href={'/bookstore'}>Bookstore</Link></li>
                <li className='w-fit px-1 text-[20px] font-primary cursor-pointer hidden lg:flex justify-center items-center mx-2 hover:text-[#98ccff] transition-all duration-500'><Link href={'/#events'}>events</Link></li>
                <li className='w-fit px-1 text-[20px] font-primary cursor-pointer hidden lg:flex justify-center items-center mx-2 hover:text-[#98ccff] transition-all duration-500'><Link href={'/about'}>about</Link></li>
                <li className='w-fit px-1 text-[20px] font-primary cursor-pointer hidden lg:flex justify-center items-center mx-2 hover:text-[#98ccff] transition-all duration-500'><Link href={'/contact'}>contact</Link></li>
                <li className='w-[120px] px-1 text-[20px] font-primary cursor-pointer hidden lg:flex justify-start items-center mx-2  hover:text-[#98ccff] transition-all duration-500'><FallbackAvatars/><Link href={'/loginsignup'}> {User}</Link></li>
                <li onClick={toggle_cart} className='w-fit px-1 text-[20px] font-primary cursor-pointer flex  justify-center items-center mx-2 hover:text-[#98ccff] transition-all duration-500 '><span className='flex text-[#0e345a]'>{wholeNumber}</span><Link href={'/'}><ShoppingCartIcon className='text-[#0e345a] text-[30px]'/></Link></li>
                <li onClick={toggle_menu} className='w-fit px-1 text-[20px] font-primary cursor-pointer flex lg:hidden justify-center items-center mx-2 hover:text-[#98ccff] transition-all duration-500'><Link href={'/'}><MenuIcon className='text-[#0e345a] text-[30px]'/></Link></li>
            </ul>
            <Cart/>
            <Menu/>
        </header>
    )
}
export default Header;

// ***************avatar*************************
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const FallbackAvatars:React.FC = ():React.ReactNode => {
  return (
    <Stack direction="row" spacing={2} className='w-[40px] '>
      <Avatar sx={{ bgcolor: '#0e345a',width:'30px',height:'30px'}} src="/broken-image.jpg" />
    </Stack>
  );
}

// ************************************************
