import { useEffect, useState } from "react";
import { AdminHeaderComponent } from "./AdminHeaderComponent";
import AddNews from "./components/AddNews";
import Button from 'react-bootstrap/Button';
import { addNews, deleteNews, getAllNews, updateByidNews } from "../services/NewsServices";
import toast, { Toaster } from 'react-hot-toast';
import './Addmin.css'
import ConfirDelete from "./components/confirDelete";


export default function AdminNewsManagement (){

    const [turn,setturn]= useState(false);

    const [turnDelete,setturnDelete]= useState(false);

    const [dataNews,setdataNews]=useState([]);

    const [idNews,setidNews]=useState("");

    const [typeAddNew,settypeAddNew] = useState("add")

    const getAllDataNews =async()=>{
        try{
            setdataNews(await getAllNews());
        }catch(err){
            console.log("get all data new false : "+err);
            
        }
    }

    const turnoff=()=>{
        setturn(false);
    }

    const turnoffDelete=()=>{
        setturnDelete(false)
    }

    const HandelDelete=async()=>{
        await deleteNews(idNews);
        getAllDataNews();
        turnoffDelete();
        toast.success("xóa bài thành công");
        
    }



    const HandeladdNew=async(value)=>{
    const time = new Date().toLocaleDateString("vi-VN")
    try{
        const newData ={
            title: value.title,
            content: value.content,
            img: value.img,
            time:time
        }

            if(typeAddNew==="add"){
                const res = await addNews(newData);
                toast.success("Đăng bài thành công");
            }else{
                
                
                const res= await updateByidNews(newData,idNews);
                toast.success("Cập nhật bài thành công");
            }
            getAllDataNews();
            turnoff();

        


    }catch(err){
        console.log("add new false font : " +err);
        
    }
  }

  useEffect(()=>{
    getAllDataNews();
  },[])

    return <>
    
        <AdminHeaderComponent />
        <Toaster position="top-right" reverseOrder={false} />

        {turnDelete && <ConfirDelete turnOff={turnoffDelete} confirDelete={HandelDelete}/>}
        
        <section
        style={{
            maxWidth:"1000px",
            padding:"20px",
            backgroundColor:"white",
            border:"0.5px solid rgb(0, 0, 0,0.2)",
            borderRadius:"10px",
            
            margin:"0px auto",
            marginTop:"30px",
        }}
        >
            {/* button thêm bài đăng */}
            {turn &&   <AddNews idNews={idNews} turnoff={turnoff} type={typeAddNew} HandeladdNew={HandeladdNew}/>}

            <div
            onClick={()=>{
                settypeAddNew("add")
                setturn(true)

            }}
            style={{
                paddingBottom:"20px",
                borderBottom:"0.5px solid rgb(0, 0, 0,0.2)",
                marginBottom:"20px",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                alignContent:"center"
            }}
            >
                <h2
                style={{
                    fontFamily:"'Montserrat', sans-serif",
                    fontWeight:"bold",
                }}
                >Quản lý bài đăng</h2>
                <Button style={{fontWeight:"bold",
                    backgroundColor:"#DCA237",
                    color:"white"   
                }} variant="">Thêm bài đăng</Button>
            </div>
          
            {/* phần bảng */}
            <div
                    style={{
                        height:"500px",
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
                            width:"5%",
                            alignItems:"center"
                           
                        }}
                        className="text-center"
                        scope="col">#</th>
                        
                        <th style={{
                            textAlign:"start",
                            width:"10%"
                        }} scope="col">Ảnh</th>
                        
                        <th
                        style={{
                           
                           
                        }}
                        scope="col">Tiêu đề</th>
                        <th
                        style={{
                            width:"17%",
                           
                        }}
                        scope="col">Ngày đăng</th>
                        <th
                        style={{
                            width:"17%",
                           alignItems:"center"
                        }}
                        className="text-center"
                        scope="col">Chức năng</th>
                        
                        </tr>
                    </thead>
                    <tbody              
                    >

                        {dataNews?.toReversed().map((e,index)=>(
                            <tr
                            key={e.id}
    style={{
        fontWeight:"200",
        fontfamily: "'Montserrat', sans-serif",
        textAlign: "center",
        height:"fit-content"

    }}
    >

                        <th
                       
                        className="OrderTable text-center"  scope="col">{index+1}</th>
                        
                        <th  className="OrderTable" scope="col">
                            <div
                            style={{
                                width:"30px",
                                height:"30px",
                                borderRadius:"5px",
                                background:"rgb(0, 0, 0,0.5)",
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
                        </th>
                        
                        <th className="OrderTable" scope="col">{e.title}</th>
                        <th className="OrderTable" scope="col">{e.time}</th>
                        
                        <th style={{
                            textAlign:"center",
                            
                        }}  className="OrderTable" scope="col">
                            
                            <img
                           onClick={()=>{
                            setturnDelete(true)
                            setidNews(e.id)
                           }}
                            // style={{
                            //     width:"30px",
                            //     opacity:"0.7",
                            //     cursor:"pointer",
                            //     alignItems:"center",
                            //     alignContent:"center",
                            //     marginRight:"10px",
                            //     backgroundColor:"rgb(18, 19, 20,0.5)",
                            //     padding:"5px",
                            //     borderRadius:"5px"
                               
                            // }}
                            className="text-center News_table_butoon"
                        src="https://img.icons8.com/?size=100&id=OD5jprZTbcDK&format=png&color=000000" alt="" />

                        <img
                        onClick={()=>{
                            settypeAddNew("edit")
                            setturn(true)
                            setidNews(e.id)
                        }}
                        
                            // style={{
                            //     width:"20px",
                            //     opacity:"0.7",
                            //     cursor:"pointer",
                            //     alignItems:"center",
                            //     alignContent:"center"
                            // }}
                            className="text-center News_table_butoon"
                        src="https://img.icons8.com/?size=100&id=114093&format=png&color=000000" alt="" />
                        
                        </th>
                    </tr>
                        ))}


                        
                        {/* {
                            listOrder?.map((e,index)=>(
                                <OrderTable key={index} e={e} index={index} controlQuantity={controlQuantity} removeOrder={removeOrder}/>
                            ))
                        } */}
                        
                        
                        
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
            {/* //////////////////// */}
        </section>
    </>
}