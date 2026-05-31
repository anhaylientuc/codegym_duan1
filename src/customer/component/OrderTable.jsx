import { useEffect, useRef, useState } from "react"
import '../customer.css'

export default function OrderTable({e,index,controlQuantity,removeOrder}){


    const [waitingTime,setwaitingTime]=useState("");

    const coutnWingTime=()=>{
        const targetTime = new Date(e.waitingTime).getTime() + (3 * 60 * 1000);
        const now = new Date().getTime(); 
        const difference = targetTime - now;
        if (difference <= 0) {
            return "00:00";
        }
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedMinutes} : ${formattedSeconds}`
    }

    const forCoutnWingTime=()=>{
        if(e.status){
             const getWaitingTime = coutnWingTime()
            setwaitingTime(getWaitingTime);
            return getWaitingTime;
        }
       
    }
    useEffect(()=>{
        forCoutnWingTime();
    },[])

    useEffect(()=>{

        const settime = setInterval(()=>{
        const time = forCoutnWingTime();
        if(time==="00:00"){
                clearInterval(settime);            
        }

        },1000);

        
        return () => {
        clearInterval(settime);
    };

    },[e])



    


    const [quantity,setquantity] = useState(e?.quantity);
    const total = e?.price * quantity;

    useEffect(()=>{
        setquantity(e?.quantity)
    },[e.quantity])

    return <tr
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
                        <th
                        style={{
                            textAlign:"center"
                        }}
                        className="OrderTable" scope="col">
                            {!e.status ? 
                            <input
                            key={e.id}
                            type="number"
                            value={quantity}
                            onChange={(e)=>controlQuantity(index,Number(e?.target.value))}
                            style={{
                                width:"45px",
                                padding:"5px",
                                borderRadius:"5px",
                                border:"0.5px solid rgb(0, 0, 0,0.2)"
                            }}
                            />
                            :
                            <p
                            style={{

                                margin:"0"
                            }}
                            >
                                {quantity}
                            </p>
                        }
                            
                        </th>
                        <th className="OrderTable" scope="col">{e?.price.toLocaleString("vi-VN")} vnđ</th>
                        <th className="OrderTable" scope="col">{total.toLocaleString("vi-VN")} vnđ</th>
                        <th
                        key={e.id}
                        style={{
                            textAlign:"center",
                            color:`${e.status && `red`}`,
                            fontWeight:`${e.status && `bold`}`
                        }}  className="OrderTable" scope="col"> {e.status ? `${waitingTime}`:"03:00"}</th>
                        <th style={{
                            textAlign:"center"
                        }}  className="OrderTable" scope="col">
                            
                            <img
                                onClick={()=>{
                                    
                                        removeOrder(e?.id,index,waitingTime)
                                    
                                    
                                    
                                }}
                            style={{
                                width:"20px",
                                opacity:"0.7",
                                cursor:"pointer"
                            }}
                        src="https://img.icons8.com/?size=100&id=OD5jprZTbcDK&format=png&color=000000" alt="" /></th>
                    </tr>
}