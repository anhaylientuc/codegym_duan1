import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import MainMenu from "../component/MainMenu";

import { FoodGroupsServices } from "../../services/FoodGroupsServices";

export default function(){

    const api = import.meta.env.VITE_API_URL;

    const [listFoodGroup,setlistFoodGroup]=useState([]);


    const getFoodGroup=async()=>{
        try{
            console.log("123");
            
            const data= await FoodGroupsServices.getAll();
            console.log(data);
            
            setlistFoodGroup([{
            id:"All",
            name:"All"
        },...data])
        }catch(err){
            console.log("get data false: "+err)
        }
    }

    const [tap,settap]= useState({
        id:"All",
        name:"All"
    });
    const selectTap=(item)=>{
        settap(item)
    }

    useEffect(()=>{
        getFoodGroup()
    },[])

    return<section
    style={{
        padding:"10px",
        width:"100%",
        
    
        display:"flex",
        gap:"10px"
    }}
    >
    <Sidebar listTap={listFoodGroup} tap={tap} selectTap={selectTap}/>
    <MainMenu tap={tap}/>
    <section
    style={{
        width:"100%",
        backgroundColor:"#000000"
    }}
    >

    </section>

    </section>
}