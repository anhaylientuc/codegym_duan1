import { useRef } from "react";
import Body from "../component/Body";
import Footer from "../component/Footer";
import Header from "../component/Header";
import NewPost from "../component/NewPost";
import '../customer.css'
export default function HomePage() {
   const scroll1  = useRef(null);
   const scroll2  = useRef(null);

  const scrollProduck = () => {
    scroll1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollHeader = () => {
    scroll2.current?.scrollIntoView({ behavior: "smooth" });
  };

  return <>

  <div ref={scroll2}>
    <Header scrollProduck={()=>scrollProduck()}/>
  </div>
  
  <div ref={scroll1}>
    <Body/>
  </div>
    
    <NewPost/>
  <Footer/>
      <img
    onClick={()=>{

        scrollHeader()
        
        
    }}
    style={{
        width:"100px",
        flexShrink:"0",
        border:"none",
        cursor:"pointer",
       position:"fixed",
        right:"20px",
        bottom:"20px",
        rotate:"180deg"
    //    left:"50%",
    //    right:"50%",
    //    transform:"translateX(-50%);"
       
     }}
    src="/home_btn.png" alt="" />
    
  </>;
}
