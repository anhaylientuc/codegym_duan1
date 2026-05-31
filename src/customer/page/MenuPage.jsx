import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import MainMenu from "../component/MainMenu";

import { FoodGroupsServices } from "../../services/FoodGroupsServices";
import CurrentOrder from "../component/CurrentOrder";
import { TableServices } from "../../services/TableServices";
import DishOrdered from "../component/DishOrdered";
import { getBillByTable, updateBillOrder } from "../../services/BillServices";
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from "react-router-dom";

export default function(){

    const api = import.meta.env.VITE_API_URL;
    const {idTable} = useParams();
    

    // danh sách order 
   const [listOrder,setlistOrder] = useState([]);

   const [idBill,setidBill] = useState("");





// tăng giảm sô lượng
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

// xóa món từ danh sách món
 const removeOrderByID =async(id,index1,waitingTime)=> {
    
 
    if(!listOrder[index1].status){


        
        setlistOrder((prev) => {
            const copyData = prev.filter((item, index) => index !== index1);
            return copyData;
        });
    }else{
;
        if(waitingTime !=="00:00"){
            const listNotOred = listOrder.filter((items)=>!items.status);
            const listWasOred = listOrder.filter((items)=>items.status);

            

            const listDelete = listWasOred.filter((item, index) => index !== index1);
            const updateItem = {
                items:[...listDelete]
            }
            const res = await updateBillOrder(idBill,updateItem);

            if(res){          
                await getDataBillByTable(currentTable);     
                setlistOrder(prev=>[...prev,...listNotOred])  
            }
        }else{
            toast.error("đã hết thời gian xóa");
        }
        
        

    }
        
    }


   /////////////////////////

   const addOrder=(id,img,name,price,waitingTime)=>{
    
    setlistOrder((prev)=>{

        const check=()=>{
            for(let i=0; i<prev.length;i++){
                if(prev[i].id===id){
                    if(prev[i].status){

                    }else{
                        return i;
                    }
                }
            }
            return "false"
        }
  
        

        const check2= check()
  
        if(check2!=="false"){

            
            const copyData = [...prev];
            copyData[check2]= {
            ...copyData[check2],
            quantity : copyData[check2].quantity + 1
            }
            return copyData
        }else{ 
            const newListOrder ={
            id: id,
            img:img,
            name:name,
            price:price,
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

            
            const data= await FoodGroupsServices.getAll();
  
            
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
        console.log(idTable);
        console.log("////////// id table");
        
        
            const dataTable =await TableServices.getAll();
            
            setlistDropDow(dataTable)
            console.log(dataTable);
            
            console.log("////// dataTable");
            

            const tablePrams= dataTable.find(item=>item.id===idTable);
            console.log(tablePrams);
            
            console.log("///////// table prams");
            

            setcurrentTable(tablePrams);
            getDataBillByTable(tablePrams)

            // setcurrentTable(dataTable[0]);
            // getDataBillByTable(dataTable[0])
        }

    const selectTable=(item)=>{
        setcurrentTable(item);
    }


    // Kiểm tra và lấy danh sách đã order 

    const getDataBillByTable=async(idTable)=>{

        try{
            
            const data = await getBillByTable(idTable.id);

            

            
            
            
            
            if(data){
                setidBill(data.id);
               

                const dataUpdate = data.items.map((item)=>({
                    
                    ...item,
                    status:"ordered"
                
                }))

                setlistOrder(dataUpdate)
            }else{
                setlistOrder([])
                setidBill("")
            }
        }catch(err){
            console.log("get data bill by table forntend false : "+err);
            
        }
    }

    const getData=async()=>{
        getFoodGroup()        
        getTable()
    }
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        getDataBillByTable(currentTable)
    },[currentTable])

    return<section
    style={{
        padding:"10px",
        width:"100%",
        
    
        display:"flex",
        gap:"10px"
    }}
    >
    {/* <DishOrdered idTable={currentTable}/> */}
    <Toaster position="top-right" reverseOrder={false} />
    <Sidebar listTap={listFoodGroup} tap={tap} selectTap={selectTap}/>
    <MainMenu addOrder={addOrder} tap={tap}/>
    <CurrentOrder idBill={idBill} getDataBillByTable={getDataBillByTable} selectTable={selectTable} currentTable={currentTable} listTable={listDropDow} removeOrder={removeOrderByID} listOrder={listOrder} controlQuantity={controlQuantity}/>

    </section>
}