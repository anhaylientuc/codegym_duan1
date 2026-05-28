import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import MainMenu from "../component/MainMenu";

import { FoodGroupsServices } from "../../services/FoodGroupsServices";
import CurrentOrder from "../component/CurrentOrder";
import { TableServices } from "../../services/TableServices";
export default function(){

    const api = import.meta.env.VITE_API_URL;
    

    // danh sách order 
   const [listOrder,setlistOrder] = useState([]);

   const controlQuantity=(index,quantity)=>{
    if(quantity>=1){
            setlistOrder((prev)=>{
        const copyData = [...prev];
        copyData[index]= {
        ...copyData[index],
        quantity : quantity
    }
    return copyData;
    })
    }    
}


 const removeOrderByID=(id)=>{
    setlistOrder((prev)=>{
        const copyData =[...prev].filter(item=>item.id !==id);
        return copyData
    })
 }

 const resetOrder=()=>{
    setlistOrder([]);
 }
   

   const addOrder=(id,name,price,waitingTime)=>{
    
    setlistOrder((prev)=>{
        const check = prev.findIndex(item => item.id === id);
        console.log(check);
        if(check !== -1){
            const copyData = [...prev];
            copyData[check]= {
            ...copyData[check],
            quantity : copyData[check].quantity + 1
            }
            return copyData
        }else{ 
            const newListOrder ={
            id: id,
            name:name,
            price:price,
            waitingTime:waitingTime,
            quantity:1
            }
            return [...prev,newListOrder];
        }   
        }
    )


   }
//    ////////////////////////////////////


//  lấy danh sách từ bảng Foood

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

    ////////////////////////////////////////////////

    //  lấy danh sách bàn
    const [listDropDow,setlistDropDow]=useState([]);
    const [currentTable,setcurrentTable]= useState({})
    
        const getTable=async()=>{
            const dataTable =await TableServices.getAll();
            setlistDropDow(dataTable)
            setcurrentTable(dataTable[0]);
        }

    const selectTable=(item)=>{
        setcurrentTable(item);
    }

    useEffect(()=>{
        getFoodGroup()
        getTable()
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
    <MainMenu addOrder={addOrder} tap={tap}/>
    <CurrentOrder resetOrder={resetOrder} selectTable={selectTable} currentTable={currentTable} listTable={listDropDow} removeOrder={removeOrderByID} listOrder={listOrder} controlQuantity={controlQuantity}/>

    </section>
}