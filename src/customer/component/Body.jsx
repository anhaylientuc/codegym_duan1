import { useEffect, useState } from "react"

export default function Body(){

    const [listNewFood,setlistNewFood] = useState([]);
    const [listTopFood,setlistTopFood] = useState([]);

    const [tapList,settapList]= useState(1);

    const newFood = [
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmxYVV0SwvD6OEe4ttESQsaRpRX11fBXmeQ&s",
            text:"Explore Lecker Coffee 1"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmxYVV0SwvD6OEe4ttESQsaRpRX11fBXmeQ&s",
            text:"Explore Lecker Coffee 2"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmxYVV0SwvD6OEe4ttESQsaRpRX11fBXmeQ&s",
            text:"Explore Lecker Coffee 3"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmxYVV0SwvD6OEe4ttESQsaRpRX11fBXmeQ&s",
            text:"Explore Lecker Coffee 4"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmxYVV0SwvD6OEe4ttESQsaRpRX11fBXmeQ&s",
            text:"Explore Lecker Coffee Explore Lecker Coffee Explore Lecker Coffee Explore Lecker Coffee"
        },
    ]

    const mostOder = [
        {
            img:"https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/mon_an_man_fa683df2da.jpg",
            text:"Explore Lecker Coffee 1"
        },
        {
            img:"https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/mon_an_man_fa683df2da.jpg",
            text:"Explore Lecker Coffee 2"
        },
        {
            img:"https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/mon_an_man_fa683df2da.jpg",
            text:"Explore Lecker Coffee 3"
        },
        {
            img:"https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/mon_an_man_fa683df2da.jpg",
            text:"Explore Lecker Coffee 4"
        },
        {
            img:"https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/mon_an_man_fa683df2da.jpg",
            text:"Explore Lecker Coffee Explore Lecker Coffee Explore Lecker Coffee Explore Lecker Coffee"
        },
    ]

    const [listShow,setlistShow]=useState([]);

    useEffect(()=>{
        if(tapList===1){
            setlistShow(newFood);
        }else{
            setlistShow(mostOder);
        }
    },[tapList])

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
            >Top 5 most ordered dishes</p>
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
                     src={`${e.img}`} alt="" />
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
        >{e.text}</p>
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