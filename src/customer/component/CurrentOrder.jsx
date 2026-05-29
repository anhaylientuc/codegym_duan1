import { date } from "yup"
import OrderTable from "./OrderTable"
import { Dropdown } from "react-bootstrap"
import DropDown from "./DropDow"
import { useState } from "react"
import { addOrder } from "../../services/OrderServices"
import { addCustomerRequests } from "../../services/CustomerRequestsServices";

import toast, { Toaster } from 'react-hot-toast';
import DishOrdered from "../../admin/components/AddNews"

export default function CurrentOrder({resetOrder, selectTable, listOrder,controlQuantity,removeOrder,listTable, currentTable}){
    const day= new Date().toLocaleDateString('vi-VN')

    

    const postOrder=async()=>{
        const time = new Date().toLocaleString('vi-VN');
        try{
            const newOrder ={
                id: Date.now().toString(),
                idTable:currentTable.id,
                time:time,
                status:"Unpaid",
                foodOrder:[...listOrder]
            }
            toast.success("đả gửi order");
             const res = await addOrder(newOrder);
             if(res){
                resetOrder();
             }
        }catch(err){
            console.log("add Order false : " +err);
        }
    }


    const sendCustomerRequest = async(type)=>{
        const time = new Date().toLocaleString('vi-VN');
        try{
            const newReq ={
                id: Date.now().toString(),
                idTable:currentTable.id,
                time:time,
                type:type,
                status:"unProcessed"
            }
            if(type === "pay"){
                toast.success("Đã gửi yêu cầu thanh toán");
                
             }else{
                toast.success("Đã gửi yêu cầu gọi nhân viên");
             }
            
             const res = await addCustomerRequests(newReq);
             
             
             
        }catch(err){
            console.log("send Customer Request false : " +err);
        }
    }





    return <section
    style={{
        width:"100%",
        padding:"10px 0px",
        height:"fit-content",
        position:"sticky",
        top:"10px"
    }}
    >
         <Toaster position="top-right" reverseOrder={false} />
         
        {/* phần bảng */}
        <div
        style={{
            height:"400px",
            overflowY:"auto",
            borderBottom:"0.5px solid rgb(0, 0, 0,0.2)"
        }}
        >
            <table
        style={{
            padding:"10px",
            width:"100%",
            height: "max-content",
            margin: "0"
        }}
        class="table table-striped">
        <thead>
            <tr>
            <th 
                style={{
                width:"0%",
               
            }}
            scope="col">#</th>
            
            <th style={{
                textAlign:"start"
            }} scope="col">Tên món</th>
            <th scope="col"
            style={{
                width:"0%"
            }}
            >Sl</th>
            <th
            style={{
                width:"17%",
               
            }}
            scope="col">Giá</th>
            <th
            style={{
                width:"17%",
               
            }}
            scope="col">Tổng</th>
            <th
            style={{
                width:"18%",
               
            }}
            scope="col">tg chờ</th>
            <th 
            style={{
                width:"0%",
                textAlign:"center"
            }}
            scope="col"></th>
            </tr>
        </thead>
        <tbody
       
        >
            {
                listOrder?.map((e,index)=>(
                    <OrderTable key={index} e={e} index={index} controlQuantity={controlQuantity} removeOrder={removeOrder}/>
                ))
            }
            
            
            
        </tbody>
        </table>
        {
            listOrder.length ===0 && <p
        style={{
                color:"rgb(0, 0, 0,0.5)",
                fontStyle:"italic",
                margin:"0 auto",
                width:"100%",
                textAlign:"center",
                marginTop:"20px"
                
            }}
        >There are currently no products available.</p>
        }
        
        </div>
        {/* ///////////////// */}
        {/* phần nút gọi món và tính tiền */}
        <div
        style={{
            padding:"10px",
            display:"flex",
            gap:"10px",
            borderBottom:"0.5px solid rgb(0, 0, 0,0.2)"
        }}
        >
            <button
                onClick={()=>{
                    postOrder();
                }}
            style={{fontWeight:"bold"}} className="btn btn-primary" >Gọi món</button>
            <button
            onClick={()=>{
                    sendCustomerRequest("pay");
                }}
            style={{fontWeight:"bold"}}  class="btn btn-success">Thanh toán</button>
            <button
            onClick={()=>{
                    sendCustomerRequest("service");
                }}
            style={{
                backgroundColor:"#dca237",
                fontFamily:"'Montserrat', sans-serif",
                fontWeight:"bold",
                color:"white"
            }} class="btn">Gọi nhân viên</button>

            <button
            style={{
                backgroundColor:"#92531b",
                fontFamily:"'Montserrat', sans-serif",
                fontWeight:"bold",
                color:"white"
            }} class="btn">Món đã gọi</button>
        </div>
        {/* ////////////////////////// */}
        {/* phần thông tin */}
        <div 
        style={{
            padding:"10px",
            display:"flex",
           
            flexDirection:"column",
            color:"black",
            fontFamily:"'Montserrat', sans-serif",
           
        }}
        >
         <p
         style={{
            display:"flex",
            alignItems:"center",
            gap:"10px"
         }}
         >table number: <DropDown listTable={listTable} currentTable={currentTable} selectTable={selectTable}/></p>   
         <p>Day : <strong>{day}</strong> </p>   
        </div>

    </section>
}