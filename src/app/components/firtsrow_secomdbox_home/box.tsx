'use client'
import React, { useEffect, useState } from "react";
import { itemType } from "../itemtype/itemType.type";
import UseStore from "../zustand/store";
import Item from '../item/item';
import ShortLine from '../shortline/line';

type bgType={
    color:string,
    categ:string,
    head1:string,
    head2:string,
    textColor:string,
}

const Box:React.FC<bgType> = ({color,categ,head1,head2,textColor}):React.ReactNode => {
    let dataSource = UseStore(state=>state.dataSource)
    const [src,srcSet] = useState<itemType[]>([])
    useEffect(()=>{
        srcSet(dataSource);
    },[dataSource])
    let count:number = 0
    return(
        <div className=" w-full h-fit xl:h-[90vh] relative flex flex-wrap justify-center items-center ">
            <div style={{background:color}} className="w-full h-[20%] xl:h-[60%] absolute top-0 left-0 "></div>
            <div className="w-full h-[80%] xl:h-[40%] absolute bottom-0 left-0 bg-transparent"></div>
            <div className="w-full flex justify-center content-center flex-wrap mb-10">
                <ShortLine/>
                <span style={{color:textColor}} className=" w-full relative flex justify-center font-extrabold text-center text-[25px]">{head1}</span>
                <span style={{color:textColor}} className=" w-full relative flex justify-center font-extrabold text-center text-[50px]  font-secondary">{head2}</span>
                <ShortLine/>
            </div>
            {src && src.map((val,i)=>{
                if(val.category==categ && count<6){
                    count+=1
                    return(
                        <Item key={val.id} name={val.name} price={val.price} img={val.img} id={val.id} category={val.category} number={'0'}/>
                    )
                }
            })}
        </div>
    )
}
export default Box;