'use client'
import React from "react";
import FirstBox from './components/firstbox_home/box';
import SecondBox from './components/secondbox_home/box';
import ThirdBox from './components/thirdbox_home/box';
import UseStore from "./components/zustand/store";
import Usefetch from "./components/usefetch/usefetch";
import { itemType } from "./components/itemtype/itemType.type";
import { useEffect } from "react";

const Home:React.FC = ():React.ReactNode => {
  const data:itemType[] = Usefetch();
  const dataSource:itemType[] = UseStore(state=>state.dataSource)
  const fetching:(data:itemType[])=>void = UseStore(state=>state.fetching)

  useEffect(() => {
    if (data) {
      fetching(data);
    }
  }, [data]);

    return (
      <section className="w-full h-fit  flex flex-wrap justify-center content-start bg-white">
        <FirstBox/>
        <SecondBox/>
        <ThirdBox/>
      </section>
    );
}
export default Home;
