'use client'
import React, { useState, useEffect } from "react";
import {itemType} from '../itemtype/itemType.type'

const Usefetch=():itemType[] => {
    const [data, setData] = useState<itemType[]>([])
    
    useEffect(() => {
        fetch('https://65d06b63ab7beba3d5e310dc.mockapi.io/bookShop')
        .then(res => res.json())
        .then(items => setData(items))
      }, []);
      return data;

}
export default Usefetch;