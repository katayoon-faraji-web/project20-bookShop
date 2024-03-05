import { create } from "zustand";
import {itemType} from '../itemtype/itemType.type'

interface usestoreType{
    dataSource:itemType[]
    selectedBooks:itemType[]
    fetching:(data:itemType[])=>void
    filter:string;
    set_filter:(x:string)=>void
    cart:string
    menu:string
    wholeNumber:number
    wholePrice:number
    user:string
    set_cart:(status:string)=>void
    set_menu:(statuss:string)=>void
    add_to_cart:(i:itemType)=>void
    update_cart:(y:itemType[])=>void
    set_wholeNumber:(n:number)=>void
    set_wholePrice:(n:number)=>void
    set_user:(u:string)=>void
    log_out_from_user:()=>void
}

const UseStore = create<usestoreType>((set,get) => ({
    dataSource:[],
    selectedBooks:[],
    filter:'All',
    cart:'closed',
    menu:'closed',
    user:'login',
    wholeNumber:0,
    wholePrice:0,
    set_user:(u)=>{
      set(state=>({user:state.user = u}))
    },
    log_out_from_user:()=>{
      set(state=>({user:state.user = 'login'}))
    },
    set_wholeNumber:(n)=>{
      set(state=>({wholeNumber:state.wholeNumber = n}))
    },
    set_wholePrice:(p)=>{
      set(state=>({wholePrice:state.wholePrice = p}))
    },
    add_to_cart:(i)=>{
      set(state=>({
        selectedBooks:[...state.selectedBooks,i]
      }))
      localStorage.setItem("myBooks",JSON.stringify(get().selectedBooks))
    },
    update_cart:(y)=>{
      set(state=>({
        selectedBooks:y
      }))
    },
    set_menu:(statuss)=>{
      set(state=>({menu:state.menu=statuss}))
    },
    set_cart:(status)=>{
      set(state=>({cart:state.cart=status}))
    },
    set_filter:(x)=>{
      set(state=>({
        filter:state.filter = x
      }))
    },

    fetching:(data) => {
      console.log(data);
      set((state) => ({
        dataSource: data
      }));
    },
    
}))

export default UseStore;


