import { date } from "yup"
import OrderTable from "./OrderTable"
import { Dropdown } from "react-bootstrap"
import DropDown from "./DropDow"
import { useState } from "react"
import { addOrder } from "../../services/OrderServices"

export default function CurrentOrder({resetOrder, selectTable, listOrder,controlQuantity,removeOrder,listTable, currentTable}){
    const day= new Date().toLocaleDateString('vi-VN')

    

    const postOrder=async()=>{
        const time = new Date().toLocaleString('vi-VN');
        try{
            const newOrder ={
                id: Date.now().toString(),
                idTable:currentTable.id,
                time:time,
                foodOrder:[...listOrder]
            }
             const res = await addOrder(newOrder);
             if(res){
                resetOrder();
             }
        }catch(err){
            console.log("add Order false : " +err);
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
            }} scope="col">dish name</th>
            <th scope="col"
            style={{
                width:"0%"
            }}
            >Qty</th>
            <th
            style={{
                width:"17%",
               
            }}
            scope="col">price</th>
            <th
            style={{
                width:"17%",
               
            }}
            scope="col">total</th>
            <th
            style={{
                width:"18%",
               
            }}
            scope="col">waiting time</th>
            <th 
            style={{
                width:"0%",
                textAlign:"center"
            }}
            scope="col">Func</th>
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
            style={{fontWeight:"bold"}} className="btn btn-primary" >Order</button>
            <button style={{fontWeight:"bold"}}  class="btn btn-success">Checkout</button>
            <button style={{
                backgroundColor:"#dca237",
                fontFamily:"'Montserrat', sans-serif",
                fontWeight:"bold",
                color:"white"
            }} class="btn">Call Staff</button>
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