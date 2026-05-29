import { useEffect, useState } from "react"
import { getOrderUnpain } from "../../services/OrderServices";

export default function DishOrdered({idTable}){
    console.log("///////////////// phần DishOrdered ////////////////////");
    

    const [dataOrdered,setdataOrdered]= useState();

    const getDataOrderUnpain =async()=>{
        console.log("Ấdfasf");
        try{
            console.log("Ấdfasf");
            
            const data = await getOrderUnpain(idTable);
            console.log(data);
            
            setdataOrdered(data);
        }catch(err){
            console.log("get data order Unpaid false : "+err);
        }
    }

    useEffect(()=>{
        getDataOrderUnpain();
    },[])

    return <div
    style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:"rgb(0,0,0,0.5)",
        position:"fixed",
        top:"0px",
        left:"0px",
        zIndex:"3",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}
    >
        <div style={{
            backgroundColor:"white",
            padding:"30px",
            borderRadius:"10px",
            width:"700px"
        }}>
            <h2 style={{
                width:"100%",
                fontFamily:" 'Montserrat', sans-serif",
                fontWeight:"bold",
                textAlign:"center",
                borderBottom:"0.5px solid rgb(0, 0, 0,0.2)",
                paddingBottom:"10px"
            }} >Danh sách món đã order</h2>

            {/* ////////////////////// phần bảng //////////////////// */}

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
                    className="table table-striped">
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
                        {/* ////////////////////// phần hiển thị danh sách /////////////////// */}
                        {
                            dataOrdered?.data.map((e,index)=>(
                                <tr
                                key={index}
                            style={{
                                fontWeight:"200",
                                fontfamily: "'Montserrat', sans-serif",
                                textAlign: "center",
                                height:"fit-content"

                            }}
                            >
                        <th
                        
                        className="OrderTable"  scope="col">{index+1}</th>
                        
                        <th  className="OrderTable" scope="col">{e?.name}</th>
                        <th className="OrderTable" scope="col">
                            {e.quantity}
                        </th>
                        <th className="OrderTable" scope="col">{e?.price.toLocaleString(`vi-VN`)} vnđ</th>
                        <th className="OrderTable" scope="col">{total.toLocaleString("vi-VN")} vnđ</th>
                        <th className="OrderTable" scope="col">{e?.waitingTime * quantity} minute</th>
                        <th style={{
                            textAlign:"center"
                        }}  className="OrderTable" scope="col">
                            
                            <img
                                // onClick={()=>{
                                //     removeOrder(e?.id)
                                // }}
                            style={{
                                width:"20px",
                                opacity:"0.7",
                                cursor:"pointer"
                            }}
                        src="https://img.icons8.com/?size=100&id=OD5jprZTbcDK&format=png&color=000000" alt="" /></th>
                    </tr>
                            ))
                        } 
                        
                        
                        
                    </tbody>
                    </table>
                    {/* {
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
                    } */}
                    
                    </div>


        </div>

    </div>
}