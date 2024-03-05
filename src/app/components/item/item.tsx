'use client'
import * as React from 'react';
import UseStore from '../zustand/store';
import { itemType } from '../itemtype/itemType.type';
import Image from 'next/legacy/image'
import { useState ,useEffect } from 'react';
import Swal from 'sweetalert2';

interface imageType{
    src:string
    width:number
    quality:number
}

const myLoader = ({ src, width, quality }:imageType):string => {
    return `https://static.wixstatic.com/${src}?w=${width}&q=${quality ||100}`
}

const Item:React.FC<itemType> = ({name,price,img,id,category,number}):React.ReactNode=> {
    let selectedBooks:itemType[] = UseStore(state=>state.selectedBooks)
    let add_to_cart:(i:itemType)=>void = UseStore(state=>state.add_to_cart)
    let set_wholeNumber:(x:number)=>void = UseStore(state=>state.set_wholeNumber)

    let s:string = img.slice(29)
   
    const addToCart = (id:string,name:string,price:string,img:string,catgory:string,number:string):void =>{
        
        let flag:number = 0
        const newItem:itemType ={
            id,
            name,
            price,
            img,
            category,
            number,
        }
        newItem.number = '1'
        let myLocal = localStorage.getItem('myBooks')
        let db:itemType[] = []        
        if(myLocal!=null){
            let localStorageContent:itemType[] = JSON.parse((localStorage.getItem('myBooks')))            
            localStorageContent.map((val)=>{
                db.push(val)
            })
            db.map((val)=>{
                if(val.id==id || val.img==img){
                    flag++
                }
            })
            if(flag==0){
                db.push(newItem)
                Swal.fire({
                    background:"#0e345a",
                    color:'white',
                    position: "center",
                    icon: "success",
                    title: "Your book has been added to your cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            localStorage.setItem('myBooks',JSON.stringify(db))
        }else{
            db.push(newItem)
            localStorage.setItem('myBooks',JSON.stringify(db))
        }
        set_wholeNumber(localStorage.length)

    }

    return(
        <div className='group cursor-pointer w-[200px] h-[350px]  flex flex-wrap justify-center content-start mx-2 '>
            <div className='w-full h-[60%] relative flex justify-center after:content-["QuickView"] after:absolute after:bottom-0 after:left-[5%] after:w-[90%] after:h-[0px] group-hover:after:h-[60px] after:transition-all after:duration-500 transition-all duration-500 after:flex after:overflow-hidden after:text-[18px] after:font-extrabold after:text-[#0e345a] after:bg-white after:bg-opacity-75 after:justify-center after:items-center after:z-30'>
                <Image quality={100} loader={myLoader} src={s} alt="Picture of the author"  width={180}  height={182}/>
            </div>
            <div className='w-full h-[40%] flex flex-wrap justify-center content-end p-2 '>
                <span className='w-full flex justify-center text-[15px] text-white font-medium'>{name}</span>
                <span className='w-full flex justify-center text-[15px] text-white my-2 font-medium'>${price}</span>
                <button onClick={()=>{addToCart(id,name,price,img,category,number)}} className='w-full h-[40px] border-2 font-bold border-white bg-transparent flex opacity-0 group-hover:opacity-100 transition-all duration-500 justify-center items-center cursor-pointer text-[15px] text-white hover:bg-white hover:text-[#0e345a] '>Add To Cart</button>
            </div>
        </div>
        
    )
}
export default Item;

