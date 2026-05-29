
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { addNews, getByIdNews } from '../../services/NewsServices';
import toast, { Toaster } from 'react-hot-toast';

function AddNews({turnoff,HandeladdNew,type,idNews}) {

    const [dataNews,setdataNews]=useState({
        title:"",
        content:"",
        img:"",
        time:"",
        id:""   
    })

const validation = Yup.object({
    title: Yup.string().required("Tiêu đề không được để trống."),
    content: Yup.string().required("Nội dung không được để trống."),
    img: Yup.string().required("Link hình ảnh không được để trống."),
    
  });

  const getDataNewByID=async()=>{
    try{
        const data= await getByIdNews(idNews);      
        // console.log(data);
          
        setdataNews(data);
    }catch(err){
        console.log("get data new by id forn false : "+err  );
        
    }
  }



  useEffect(()=>{
    if(type==="edit"){
        getDataNewByID();
    }
  },[])



    
  return (
    <div
        style={{
            position:"fixed",
            top:"0px",
            left:"0px",
            display:"flex",
            alignItems:"center",
            justifyItems:"center",
            justifyContent:"center",
            zIndex:"3",
            width:"100vw",
            height:"100vh",
            backgroundColor:"rgb(18, 19, 20,0.5)"
        }}    
    >
        
            <div
   
      style={{ display: 'block', position: 'initial', width:"700px" ,
        backgroundColor:"white",
        padding:"20px",
        borderRadius:"10px",
        color:"black",
      }}
    >
        <h2
        style={{
            color:"#DCA237",
            fontFamily:"'Montserrat', sans-serif",
            fontWeight:"bold",
            width:"100%",
            textAlign:"center"
        }}
        >{type==="add" ? "Thêm bài đăng" : "Sửa bài đăng"}</h2>

        <Formik
        enableReinitialize={true}
        initialValues={dataNews}
        validationSchema={validation}
        onSubmit={HandeladdNew}
        >
            <Form
            style={{
            margin:"10px",
            display:"flex",
            gap:"10px",
            flexDirection:"column",
        }}
            >
            <div>
              <p style={{margin:"0"}} >Tiêu đề</p>
              <Field  className="form-control" type="text" name="title" />
              <ErrorMessage
                name="title"
                className="text-danger"
                component={"small"}
              />
            </div>
            <div>
              <p style={{margin:"0"}} >Nội dung</p>
              <Field className="form-control" as="textarea" rows={7} name="content" />
              <ErrorMessage
                name="content"
                className="text-danger"
                component={"small"}
              />
            </div>
            <div>
              <p style={{margin:"0"}} >Link ảnh</p>
              <Field className="form-control" type="text" name="img" />
              <ErrorMessage
                name="img"
                className="text-danger"
                component={"small"}
              />
            </div>

            {/* phần button */}
        <div
        style={{
            width:"100%",
            display:"flex",
            gap:"10px",
            borderTop:"0.5px solid rgb(18, 19, 20,0.5)",
            paddingTop:"10px",
            justifyContent:"end",
            fontWeight:"bold"
        }}
        >
        <Button
        onClick={()=>{
            turnoff()
        }}
        style={{fontWeight:"bold"}} variant="secondary">Hủy</Button>
        <Button
        type='submit'
        style={{fontWeight:"bold"}} variant="success">{type==="add" ? "Thêm" : "Cập nhật"}</Button>
          
        </div>
            </Form>

        </Formik>

        


          

    </div>
    </div>

  );
}

export default AddNews;