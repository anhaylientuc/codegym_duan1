import axios from "axios";
import { useEffect, useState } from "react"
import { data } from "react-router-dom";

import {getAllBill} from '../../services/BillServices';

export default function Body(){
    const apiData = import.meta.env.VITE_API_URL;
    const [listNewFood,setlistNewFood] = useState([]);
    const [listTopFood,setlistTopFood] = useState([]);
    


const getTop5=(data)=>{
    
const countData=[];
for(let i=0; i< data.length;i++){
    for(let j=0;j< data[i].items.length; j++){
        let count =0;
        for(let k=0;k<countData.length;k++){
            if(data[i].items[j].id===countData[k].id){
                countData[k].quantity= countData[k].quantity+ data[i].items[j].quantity;
                count++;
            }
        }
        if(count===0){
            
            countData.push(data[i].items[j]);
        }
    }
    }

    

    countData.sort((a,b)=>b.quantity - a.quantity);
    const top5 =[];
    console.log(countData);
    console.log("//// countData");
    
    
    for(let i=0;i<5;i++){
        if(countData[i]){
            top5.push(countData[i]);
        }
        
    }

    console.log(top5);
    console.log("///// top 5");
    
    
    setlistTopFood(top5)
}

    const getData=async()=>{
        try{
            const dataNewFood = await axios.get(`${apiData}/foods?_sort=id&_order=desc&_page=1&_limit=5`);

            
            
            if(dataNewFood){
           
                setlistNewFood(dataNewFood.data);
            }
            const dataTopFood = await getAllBill();
            console.log("data top food //////////////");
            console.log(dataTopFood);
            console.log("data top food //////////////");
            getTop5(dataTopFood);
        }catch(err){
            console.log("erro get data new food : " +err);
            
        }
    }

    const [tapList,settapList]= useState(1);



    const [listShow,setlistShow]=useState([]);

    useEffect(()=>{
        if(tapList===1){
            setlistShow(listNewFood);
           
            
        }else{
            setlistShow(listTopFood);
        }
    })

    useEffect(()=>{
        getData();
    },[])

    return <section
    style={{
        width:"100%",
        height:"750px",
        overflow:"hidden",
        position:"relative",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        gap:"20px"
    }}
    >
        <img
        style={{
        width:"100%",
        height:"100%",
        objectFit:"cover",
        position:"absolute",
        top:"0px",
        zIndex:"-1",
        left:"0px",
        
    
        }}
        src="/body_img.jpeg" alt="body img" />
        <img
        style={{
            width:"300px"
        }}
        src="/body_h2.png" alt="" />
        <div
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            gap:"10px"
        }}
        >
             <div
        style={{
            width:"50px",
            height:"2px",
            backgroundColor:"#d9c05f"
        }}
        ></div>
        <p
        style={{
            fontFamily:"'Arvo', serif",
            color:"white",
            fontSize:"20px",
            fontWeight:"500",
            margin:"0"
        }}
        >Explore Lecker Coffee</p>
        <div
        style={{
            width:"50px",
            height:"2px",
            backgroundColor:"#d9c05f"
        }}
        ></div>
        
        </div>
        {/* phần tap  */}
        <div
        style={{
        display:"flex",
        gap:"10px",
        color:"white",
        position:"relative"
        }}
        >
            <p 
            onClick={()=>{
            settapList(1);
            }}
                style={{
                    width:"200px",
                      textAlign:"center",
                      margin:"5px",
                      cursor:"pointer",
                     
                }}
             >Top 5 newest dishes</p>
            <p
            onClick={()=>{
            settapList(2);
            }}
            style={{
                    width:"200px",
                   
                    textAlign:"center",
                    margin:"5px",
                      cursor:"pointer"
                }}
            >Top 5 Best Sellers</p>
            <div
                style={{
                width:"200px",
                height:"2px",
                backgroundColor:"#d9c05f",
                position:"absolute",
                bottom:"0",
                left:`${tapList === 1 ? `5px`:`225px`}`,
                transition:"all ease 0.3s"
                }}
            ></div>
        </div>
        {/* ////////// */}
        {/* thẻ cha chứa các phần giới thiệu món */}
        
        <div 
        style={{
            width:"90%",
            display:"flex",
            gap:"20px",
            justifyContent:"center",
            alignItems:"center",
            marginTop:"20px"
            
        }}
        >
            {/* thẻ chứa các box thông tin */}
            
            {listShow?.map((e,index) =>(
                <div
            style={{
                display:"flex",
                flexDirection:"column",
                gap:"20px",
                width:"250px",
            
            justifyContent:"start"
            }}
            >
                {/* khung ảnh */}
                <div
                style={{
                    width:"250px",
                    height:"250px",
                    overflow:"hidden"
                }}
                >
                     <img
                     style={{
                        width:"100%",
                        height:"100%",
                        objectFit:"cover"
                     }}
                     src={`${e?.img}`} alt="" />
                </div>
                <div
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            gap:"10px",
     
            width:"100%"
        }}
        >
             <div
        style={{
            width:"15px",
            height:"2px",
            backgroundColor:"#d9c05f"
        }}
        ></div>
        <p
        style={{
            fontFamily:"'Arvo', serif",
            color:"white",
            fontSize:"18px",
            fontWeight:"500",
            width:"100%",
            margin:"0",
            whiteSpace:"nowrap",
            textAlign:"center",
            alignContent:"center",
            overflow:"hidden",
            textOverflow:"ellipsis"
        }}
        >{e?.name}</p>
        <div
        style={{
            width:"15px",
            height:"2px",
            backgroundColor:"#d9c05f"
        }}
        ></div>
        
        </div>

               
            </div>
            ))}
            
            
            
            {/* ////////////////////////////// */}

        </div>

       

    </section>
}