import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(){

    const [selectTap,setselectTap] = useState("home");

    return  <header style={{
        height:"50px",
        background:"#f5eee0",
        color:"white",
        boxShadow:"0px 0px 5px rgb(0,0,0,0.5) ",
        padding:" 0px 20px",
        display:"flex",
        alignItems:"center",
        textAlign:"center",
        color:"rgb(0,0,0,0.7)"
        
    }} >
        <p 

            onClick={()=>{
                setselectTap(`home`)
            }}

        style={{
            margin:"0",
            textAlign:"center",
            color:`${selectTap && `#732f0a`}`,
            fontWeight:`${selectTap && `bold`}`
            
            
        }} >Home</p>

    </header>
}