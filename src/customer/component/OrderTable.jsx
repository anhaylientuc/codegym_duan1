import { useEffect, useRef, useState } from "react"
import '../customer.css'

export default function OrderTable({e,index,controlQuantity,removeOrder}){

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
                            key={index}
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
                        style={{
                            textAlign:"center",
                            color:`${e.status && `red`}`,
                            fontWeight:`${e.status && `bold`}`
                        }}  className="OrderTable" scope="col"> {e.waitingTime}</th>
                        <th style={{
                            textAlign:"center"
                        }}  className="OrderTable" scope="col">
                            
                            <img
                                onClick={()=>{
                                    removeOrder(e?.id)
                                }}
                            style={{
                                width:"20px",
                                opacity:"0.7",
                                cursor:"pointer"
                            }}
                        src="https://img.icons8.com/?size=100&id=OD5jprZTbcDK&format=png&color=000000" alt="" /></th>
                    </tr>
}