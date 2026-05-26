import axios from "axios";
import { useEffect, useState } from "react"

import '../customer.css'

export default function MainMenu(tap){

    const api = import.meta.env.VITE_API_URL;

    const [listProduct,setlistProduct]=useState([]);

    const getListProduct =async()=>{
        try{
            const data = await axios.get(`${api}/foods?_page=5&_per_page=10`);
            console.log(api);
            
            console.log(data);
            setlistProduct(data.data.data)
            
        }catch(err){
            console.log("get data product false : "+err);
            
        }
    }

    useEffect(()=>{
        getListProduct();
    },[])


    return<section
    style={{
        width:"530px",
        flexShrink:"0",
        display:"flex",
        gap:"10px",
        padding:"10px",
      
        flexWrap:"wrap",
     
    }}
    >
        {listProduct?.map((e,index)=>(
          
        <div style={{
            width:"250px",
            height:"fit-content",
            borderRadius:"10px",
            backgroundColor:"#efefef",
            display:"flex",
            justifyItems:"center",
            padding:"5px",
            gap:"7px",
            flexDirection:"column",
            boxShadow:"0 5px 5px rgb(0, 0, 0, 0.2)",
            border:"0.5px solid rgb(0, 0, 0, 0.1)",
            
            flexShrink:"0"
        }}>
            {/* khung ảnh */}
            <div style={{
                width:"100%",
                height:"230px",
                overflow:"hidden",
                borderRadius:"10px"
            }} >
                <img
                    style={{
                        width:"100%",
                        height:"100%",
                        objectFit:"cover"
                    }}
                src={`${e.img}`}alt="" />

            </div>
            <p style={{
                fontFamily:"'Montserrat', sans-serif",
                fontWeight:"bold",
                fontSize:"20px",
                color:"rgb(0, 0, 0,0.7)",
                padding: "0 5px",
                margin:"0"
            }}>{e.name}</p>

            {/* box chứa giá và button */}
            <div
                style={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    marginBottom:"5px",
                    padding:"0px 5px"
                }}
            >
                <p style={{
                    fontFamily:"'Arvo', serif",
                    fontWeight:"bold",
                    color: "rgba(0, 0, 0, 0.9)",
                    fontSize:"20px",
             
                    margin:"0"
                }}
                >{e.price.toLocaleString("vi-VN")} Vnd</p>
                <button
                style={{
                    padding:"5px 10px",
                    borderRadius:"5px",
                    backgroundColor:"#dca237",
                    color:"white",
                    fontWeight:"bold",
                    border:"none"
                }}
                >Order</button>
            </div>

        </div>
        ))}
        <div
        style={{
            display:"flex",
            borderRadius:"10px",
            overflow:"hidden",
            border:"1px solid rgba(0, 0, 0)",
            margin:"0 auto",
            marginTop:"10px"
        }}
        >
            <div className="ctrolPage" >Prev</div>
            <div className="ctrolPage">1</div>
            <div className="ctrolPage">2</div>
            <div className="ctrolPage">Next</div>
        </div>


        

    </section>
}