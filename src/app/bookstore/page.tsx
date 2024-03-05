'use client'
import { useEffect, useRef, useState } from 'react';
import {itemType} from '../components/itemtype/itemType.type';
import UseStore from '../components/zustand/store';
import Item from '../components/item/item'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const BookStorePage:React.FC = ():React.ReactNode =>{
    let dataSource:itemType[]= UseStore(state=>state.dataSource)
    let filter:string= UseStore(state=>state.filter)
    const [books,bookSet] = useState<itemType[]>(dataSource)
    console.log(dataSource);
    
    useEffect(()=>{
        console.log(filter+'avaz shod');
        if(filter=='All'){
            bookSet(dataSource)
        }else{
            bookSet(dataSource.filter(book=>book.category==filter))
        }
        
    },[filter,dataSource])
    return(
        <section className="w-full h-fit flex flex-wrap justify-between content-start bg-white mt-10">
            <SideBarMenu />
            <div className="w-[65%] md:w-[80%] h-fit min-h-[100vh] flex flex-wrap justify-between content-start bg-white p-6 gap-y-10">
                {books && books.map((val)=>{
                    return(
                        <div className='bg-[#0e345a] flex justify-center items-center w-fit h-fit p-4'>
                            <Item key={val.id} name={val.name} price={val.price} img={val.img} id={val.id} category={val.category}/>
                        </div>
                    )
                })}
            </div>
        </section>

    )
}
export default BookStorePage;

const SideBarMenu:React.FC = ():React.ReactNode =>{
    let set_filter:(x:string)=>void = UseStore(state=>state.set_filter)
    const [arrow,arrowSet] = useState<string>('1')
    let list = useRef<HTMLUListElement>()
    const FilterBook = (name:string):void =>{
        set_filter(name)
 
    }
    useEffect(()=>{
        let childs:HTMLCollection = list.current!.children
        let arr:any[] = Array.from(childs);        
        arr.map((val)=>{
            if(val.getAttribute('data-id')==arrow){
                val.children[0].style.display = 'flex'
            }else{
                val.children[0].style.display = 'none'
            }
        })
    },[arrow])
    
    return(
        <div className="w-[35%] md:w-[20%] h-full flex flex-wrap justify-start content-start px-1 lg:px-4 pt-8">
            <h3 className="w-full flex justify-start text-start text-[#0e345a] text-[25px] font-bold border-b border-t border-[#0e345a] h-[80px] items-center">Filter By</h3>
            <span className="w-full flex justify-start text-start text-[#0e345a] text-[20px] font-bold mt-4">Collection</span>
            <ul ref={list} className="w-full h-fit py-2 flex flex-wrap justify-start content-start mt-10 border-b border-[#0e345a]">
                <li data-id='1' onMouseDown={()=>{arrowSet('1')}} onClick={()=>{FilterBook('All')}} data-name='All' className="w-full h-[30px] font-bold flex justify-start items-center text-[15px] text-[#0e345a] cursor-pointer pl-2">All<ArrowRightIcon className='flex'/></li>
                <li data-id='2' onMouseDown={()=>{arrowSet('2')}} onClick={()=>{FilterBook('novels')}} data-name='novels' className="w-full h-[30px] font-bold flex justify-start items-center text-[15px] text-[#0e345a] cursor-pointer pl-2">Novels<ArrowRightIcon className='hidden'/></li>
                <li data-id='3' onMouseDown={()=>{arrowSet('3')}} onClick={()=>{FilterBook('design et art')}} data-name='design et art' className="w-full h-[30px] font-bold flex justify-start items-center text-[15px] text-[#0e345a] cursor-pointer pl-2">Design et Art<ArrowRightIcon className='hidden'/></li>
                <li data-id='4' onMouseDown={()=>{arrowSet('4')}} onClick={()=>{FilterBook('life style')}} data-name='life style' className="w-full h-[30px] font-bold flex justify-start items-center text-[15px] text-[#0e345a] cursor-pointer pl-2">Life Style<ArrowRightIcon className='hidden'/></li>
                <li data-id='5' onMouseDown={()=>{arrowSet('5')}} onClick={()=>{FilterBook('our books of the month')}} data-name='our books of the month' className="w-full h-[30px] font-bold flex justify-start items-center text-[15px] text-[#0e345a] cursor-pointer pl-2">Our books of the month<ArrowRightIcon className='hidden'/></li>
                <li data-id='6' onMouseDown={()=>{arrowSet('6')}} onClick={()=>{FilterBook('bestSellers')}} data-name='bestSellers' className="w-full h-[30px] font-bold flex justify-start items-center text-[15px] text-[#0e345a] cursor-pointer pl-2">Bestsellers<ArrowRightIcon className='hidden'/></li>
                <li data-id='7' onMouseDown={()=>{arrowSet('7')}} onClick={()=>{FilterBook('travel guides')}} data-name='travel guides' className="w-full h-[30px] font-bold flex justify-start items-center text-[15px] text-[#0e345a] cursor-pointer pl-2">Travel guides<ArrowRightIcon className='hidden'/></li>
            </ul>
        </div>

    )
}