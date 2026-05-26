import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import MainMenu from "../component/MainMenu";

export default function(){

    const api = import.meta.env.VITE_API_URL;

    const [listFoodGroup,setlistFoodGroup]=useState([]);
    const getFoodGroup=async()=>{
        try{
            const data= await axios.get(`${api}/foodGroups`);
            setlistFoodGroup([{
            id:"All",
            name:"All"
        },...data.data])
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
    <MainMenu/>
    <section
    style={{
        width:"100%",
        backgroundColor:"red"
    }}
    >

    </section>

    </section>
}