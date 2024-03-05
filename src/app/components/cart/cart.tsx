'use client'
import React, { useEffect, useRef } from "react";
import UseStore from "../zustand/store";
import { itemType } from '../itemtype/itemType.type';
import ItemInCart from '../itemInCart/ItemInCart'

const Cart:React.FC = ():React.ReactNode =>{
    
    let cart:string = UseStore(state=>state.cart)
    let wholePrice:number = UseStore(state=>state.wholePrice)
    let selectedBooks:itemType[] = UseStore(state=>state.selectedBooks)
    let update_cart:(y:itemType[])=>void = UseStore(state=>state.update_cart)
    let cartBox = useRef<HTMLDivElement>() 

    useEffect(()=>{
        if(cart=='closed'){
            cartBox.current.style.height = '0px'
        }else if(cart=='opened'){
            cartBox.current.style.height ='500px'
        }

        let myLocal = localStorage.getItem('myBooks')        
        if(myLocal!=null){
            let localStorageContent:itemType[] = JSON.parse((localStorage.getItem('myBooks')))            
            update_cart(localStorageContent)
        }
    },[cart])

   
    return(
        <div ref={cartBox} className="w-full h-[120vh] lg:h-[550px] px-1 lg:px-10 transition-all overflow-hidden duration-500 z-50 absolute top-[100%] left-0 bg-white flex flex-wrap justify-center content-center">
            <div className="lg:w-[50%] w-full h-[40vh] lg:h-[90%] flex flex-wrap justify-start content-start overflow-y-scroll p-4">
                <span className="w-full flex justify-start text-start text-[#0e345a] mt-2 border-b-2 border-[#0e345a] text-[20px] font-bold ">My Cart</span>
                {selectedBooks && selectedBooks.map((vall,i)=>{
                    return(
                        <ItemInCart key={crypto.randomUUID()} name={vall.name} price={vall.price} img={vall.img} id={vall.id} category={vall.category} number={vall.number}/>
                    )
                })}
            </div>
            <div className="lg:w-[30%] w-full h-[35vh] lg:h-[90%] flex flex-wrap justify-start content-start bg-white pt-4 px-8">
                <span className="w-full flex justify-start text-start text-[#0e345a] mt-2 border-b-2 border-[#0e345a] text-[20px] font-bold ">Order Summary</span>
                <div className="w-full flex justify-between items-center border-b-2 border-[#0e345a] h-[50px] lg:h-[150px]">
                    <span className="w-[50%] flex justify-start text-start text-[#0e345a]  text-[20px] font-bold">Subtotal</span>
                    <span className="w-[50%] flex justify-end text-start text-[#0e345a]  text-[20px] font-bold">${wholePrice}</span>
                </div>
                <div className="w-full flex justify-between items-center border-b-2 border-[#0e345a] h-[50px] lg:h-[150px]">
                    <span className="w-[50%] flex justify-start text-start text-[#0e345a]  text-[20px] font-bold">Total</span>
                    <span className="w-[50%] flex justify-end text-start text-[#0e345a]  text-[20px] font-bold">${wholePrice}</span>
                </div>
                <div className="w-full flex justify-center items-center h-[100px]">
                    <button className="w-[200px] h-[40px] flex justify-center items-center cursor-pointer bg-[#0e345a] text-white text-[20px] font-medium hover:bg-white hover:text-[#0e345a] hover:border-2 hover:border-[#0e345a] hover:font-bold transition-all duration-500">Checkout</button>
                </div>
            </div>
        </div>
    )
}
export default Cart;