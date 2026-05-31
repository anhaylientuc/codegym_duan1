import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../customer.css'
import { useNavigate } from 'react-router-dom';



export default function Header({scrollProduck}){

    const navigate = useNavigate();

    return  <header style={{
        width:"100%",
        overflow:"hidden",
        position:"relative",
        display:"flex",
        justifyItems:"center",
        justifyContent:"center"
    }} >
        
    <img
    style={{
        width:"100%",
        height:"100%",
        objectFit:"cover"
    }}
    src="/header_img.png" alt="header_img" />
    <div 
    onClick={()=>{
    navigate(`/customer/menu/TB001`)
    }}
    style={{
        position:"absolute",
        zIndex:"2",
        top:"38px",
        right:"120px",
        display:"flex",
        gap:"10px",
        fontSize:"20px",
        fontWeight:"bold",
        justifyItems:"center",
        justifyContent:"center",
        color:"#DCA237",
        alignItems:"center",
        cursor:"pointer",
    }}
    >
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            gap:"5px",
            color:"white"
        }}
        >
            <div className='header_menu' ></div>
            <div className='header_menu' ></div>
            <div className='header_menu' ></div>

        </div>
        <p style={{
            margin:"0",
         
            fontFamily:'"Arvo", serif'
        }} >MENU</p>
    </div>
    
    <img
    onClick={()=>{
        console.log("ád");
        scrollProduck()
        
        
    }}
    style={{
        width:"120px",
        flexShrink:"0",
        border:"none",
        cursor:"pointer",
       position:"absolute",
       top:"80%",
    //    left:"50%",
    //    right:"50%",
    //    transform:"translateX(-50%);"
       
     }}
    src="/home_btn.png" alt="" />
    
    </header>
}