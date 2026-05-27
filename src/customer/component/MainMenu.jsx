import axios from "axios";
import { useEffect, useRef, useState } from "react"

import '../customer.css'
import { data } from "react-router-dom";

export default function MainMenu(tap){
    console.log(tap.tap.id);

    const scroll = useRef();

      const scrollOnTop = () => {
         scroll.current?.scrollIntoView({ behavior: "smooth" });
        };

    const api = import.meta.env.VITE_API_URL;

    const [listProduct,setlistProduct]=useState([]);
    const [DataProduct,setDataProduct]=useState();

    const [numberPage,setnumberPage] = useState(1);

    const getListProduct =async()=>{
        try{
            if(tap.tap.id==="All"){
                const data = await axios.get(`${api}/foods?_page=${numberPage}&_per_page=10`);
                console.log(data.data);
                
                setDataProduct(data.data);
                setlistProduct(data.data.data)

            }else{
                const data = await axios.get(`${api}/foods?unit=${tap.tap.id}&_page=${numberPage}&_per_page=10`);
                console.log(data.data);
                setDataProduct(data.data);
                setlistProduct(data.data.data)
            }
            
            
 
        }catch(err){
            console.log("get data product false : "+err);
            
        }
    }

    useEffect(()=>{
        getListProduct();
    },[])

    const plusPage=()=>{
        if(DataProduct?.next !==null){
            setnumberPage(numberPage+1);
        }
    }
    const minusPage=()=>{
        if(DataProduct?.prev !==null){
            setnumberPage(numberPage-1);
        }
    }

    const skipPage=(item)=>{
        setnumberPage(item);
    }
    useEffect(()=>{
        getListProduct();
        scrollOnTop()
    },[numberPage])
    
    useEffect(()=>{
        getListProduct();
        setnumberPage(1);
        scrollOnTop()
    },[tap.tap.id])

    // //////////////////////////////////////////////////////////////////


    return<section
    ref={scroll}
    style={{
        width:"530px",
        flexShrink:"0",
        display:"flex",
        gap:"10px",
        padding:"10px",
      
        flexWrap:"wrap",
     
    }}
    >
        {/* danh sách sản phẩm */}
    
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
        {/* ////////////////////////// */}
        {/* phần control page */}

        {DataProduct?.pages>1 &&

        <div
        style={{
            display:"flex",
            gap:"5px",
            margin:"0 auto",
            marginTop:"20px"

        }}
        >
            <div
            onClick={()=>{
                    minusPage();
                }}
            className="ctrolPage" >Prev</div>
            {DataProduct?.prev &&
                <div 
                onClick={()=>{
                    skipPage(DataProduct?.first);
                }}
                className="ctrolPage">{DataProduct?.first}</div>
            }
            {DataProduct?.prev &&
                <div className="ctrolPage">...</div>
            }
            
            

            <div
            style={{
                backgroundColor:"#dca237",
                color:"white"
            }}
            className="ctrolPage">{numberPage}</div>

            {DataProduct?.next &&
                <div className="ctrolPage">...</div>
            }

            {DataProduct?.next &&
                <div
                onClick={()=>{
                    skipPage(DataProduct?.last);
                }}
                className="ctrolPage">{DataProduct?.last}</div>
            }
            
            <div
                onClick={()=>{
                    plusPage();
                }}
            className="ctrolPage">Next</div>
        </div>
        
        
        }
        {/* ///////////////////////////////// */}
        {
            DataProduct.items===0 && <p
            style={{
                color:"rgb(0, 0, 0,0.5)",
                fontStyle:"italic",
                margin:"0 auto"
                
            }}
        >Hiện chưa có sản phẩm nào cho mục này</p>
        }
        

        


        

    </section>
}