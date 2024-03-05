'use client'
import * as React from 'react';
import UseStore from '../zustand/store';
import { itemType } from '../itemtype/itemType.type';
import Image from 'next/legacy/image'
import { useState ,useEffect } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface imageType{
    src:string
    width:number
    quality:number
}

const myLoader = ({ src, width, quality }:imageType):string => {
    return `https://static.wixstatic.com/${src}?w=${width}&q=${quality ||100}`
}

const ItemInCart:React.FC<itemType> = ({name,price,img,id,category,number}):React.ReactNode=> {
    let s:string = img.slice(29)
    let update_cart:(y:itemType[])=>void = UseStore(state=>state.update_cart)
    let p = React.useRef<HTMLSpanElement>()
    let n:number = Number(number)

    let wholeNumberr:number = 0
    let wholePricee:number = 0
    
    let set_wholeNumber:(n:number)=>void = UseStore(state=>state.set_wholeNumber)
    let set_wholePrice:(p:number)=>void = UseStore(state=>state.set_wholePrice)

    let localStorageContent:itemType[] = JSON.parse((localStorage.getItem('myBooks')))
    const [pricee,priceeSet] = useState<number>(n*Number(price))
    
    useEffect(()=>{
        priceeSet(n*Number(price))
        wholeNumberr = 0
        wholePricee = 0
        localStorageContent.map((val)=>{
            wholeNumberr += Number(val.number)
            
            set_wholeNumber(wholeNumberr)
            wholePricee += ((Number(val.number))*(Number(val.price)))
            set_wholePrice(wholePricee)
            
        })
    },[n])

    const delete_book = (img:string ,id:string):void =>{
        // let localStorageContent:itemType[] = JSON.parse((localStorage.getItem('myBooks')))
        // localStorageContent.map((val)=>{
        //     if(val.id==id || val.img==img){
        //         val.number = '0'
        //         localStorageContent.map((val,i)=>{
        //             if(val.id==id || val.img==img){
        //                 localStorageContent.splice(i,i+1)
        //             }
        //         })
                
        //         localStorage.setItem("myBooks",JSON.stringify(localStorageContent))
        //         update_cart(localStorageContent)
        //         if(localStorageContent.length==0){
        //             set_wholeNumber(0)
        //         }
        //     }
        // }) 
        localStorageContent = JSON.parse((localStorage.getItem('myBooks')))
        localStorageContent=localStorageContent.filter((i)=> i.id!==id)
        localStorageContent=localStorageContent.filter((i)=> i.img!==img)
        localStorage.setItem("myBooks",JSON.stringify(localStorageContent))
        update_cart(localStorageContent)
        if(localStorageContent.length==0){
            set_wholeNumber(0)
        }
    }
    const decrement = (img:string ,id:string ):void =>{
        let localStorageContent:itemType[] = JSON.parse((localStorage.getItem('myBooks')))
        localStorageContent.map((val)=>{
            if(val.id==id || val.img==img){
                let n:number = Number(val.number)
                if(n>1){
                    n--
                    val.number = String(n)
                }
                localStorage.setItem("myBooks",JSON.stringify(localStorageContent))
                update_cart(localStorageContent)
                
            }
        })
    }
    const increment = (img:string ,id:string ):void =>{
        console.log(id)
        let localStorageContent:itemType[] = JSON.parse((localStorage.getItem('myBooks')))
        localStorageContent.map((val)=>{
            if(val.id==id || val.img==img){
                let n:number = Number(val.number)
                n++
                val.number = String(n)
                localStorage.setItem("myBooks",JSON.stringify(localStorageContent))
                update_cart(localStorageContent)
            }
        })
    }

    return(
        <div className=' cursor-pointer w-full h-[150px] items-center  flex  justify-center content-center border-[#0e345a] border-b-2 lg:mx-2 '>
            <div className='w-[100px] h-[120px] border border-[#0e345a] p-1 relative flex justify-center after:content-["QuickView"] after:absolute after:bottom-0 after:left-[5%] after:w-[90%] after:h-[0px] group-hover:after:h-[60px] after:transition-all after:duration-500 transition-all duration-500 after:flex after:overflow-hidden after:text-[18px] after:font-extrabold after:text-[#0e345a] after:bg-white after:bg-opacity-75 after:justify-center after:items-center after:z-30'>
                <Image quality={100} loader={myLoader} src={s} alt="Picture of the author"  width={180}  height={182}/>
            </div>
            <div className='w-[70%] h-full flex flex-wrap justify-start content-center  ml-4'>
                <div className='w-[60%] h-full flex flex-wrap justify-start content-center'>
                    <span className='w-full flex justify-start text-[15px] text-[#0e345a] font-bold'>{name}</span>
                    <span className='w-full flex justify-start text-[15px] text-[#0e345a] font-bold'>{category}</span>
                    <span className='w-full flex justify-start text-[15px] text-[#0e345a] my-2 font-bold'>${price}</span>
                </div>
                <div className='w-[30%] h-full flex justify-end items-center relative'>
                    <div className='w-[80px] h-[35px] flex justify-center items-center border border-[#0e345a]'>
                        <button onClick={()=>{decrement(img,id)}} className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer text-[#0e345a] text-[25px]'>-</button>
                        <span className='flex text-[#0e345a] text-[20px] mx-1'>{number}</span>
                        <button onClick={()=>{increment(img,id)}} className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer text-[#0e345a] text-[25px]'>+</button>
                    </div>
                    <span ref={p} className='w-[50%] ml-6 flex justify-start text-[15px] text-[#0e345a] my-2 font-bold'>${pricee}</span>
                    <div className='w-full  z-40 flex justify-end items-center absolute top-0 right-0 lg:w-[1%] '>
                        <span onClick={()=>{delete_book(img,id)}} className='w-full lg:ml-6 flex justify-end text-[15px] text-[#0e345a] my-2 font-bold'><HighlightOffIcon /></span>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}
export default ItemInCart;

