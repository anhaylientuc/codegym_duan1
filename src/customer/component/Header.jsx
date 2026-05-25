import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../customer.css'

export default function Header(){


    return  <header style={{
        width:"100%",
        overflow:"hidden",
        position:"relative",
        display:"flex",
        justifyItems:"center"
    }} >
        
    <img
    style={{
        width:"100%",
        height:"100%",
        objectFit:"cover"
    }}
    src="/header_img.png" alt="header_img" />
    <div 
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
        color:"#ebc477",
        alignItems:"center"
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
            fontFamily:'"Times New Roman", Times, serif'
        }} >MENU</p>
    </div>
    <button
     style={{
        width:"50px",
        height:"50px",
        backgroundImage: "linear-gradient(to top, #ce9626, #dccb6d)",
        border:"none",
       borderRadius:"50%",
       position:"absolute",
       top:"85%",
       left:"50%",
       right:"50%",
       
     }}
    >
        <img
            style={{
                width:"60%",
                height:"60%",
                objectFit:"cover"
            }}
        src="https://img.icons8.com/?size=100&id=1Seey3cVgd3z&format=png&color=ffffff" alt="" />
    </button>
    </header>
}