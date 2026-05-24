import Header from "../component/Header";
import '../customer.css'
export default function HomePage() {
  return <>
  <Header/>
  {/* phần ảnh box chứa ảnh của page */}
  {/* The image box contains the page's images. */}
    <div style={{
      borderRadius:"10px",
      height:"500px",
      margin:"20px",
      background:"black",
      overflow:"hidden",
      position:"relative",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <img style={{
        width:"100%",
        height:"100%",
        objectFit:"cover"
      }}  src="https://i.pinimg.com/736x/c2/4c/f4/c24cf4b4e10242dfd414a503dd147dd2.jpg" alt="landing page image" />
      <div style={{
        width:"100%",
        height:"100%",
        position:"absolute",
        background:"#73310a3f",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      
      }} >

        <p 
          style={{
            color:"white",
            fontSize:"40px",
            fontWeight:"bold",
            textShadow:"2px 2px 5px rgba(0, 0, 0, 0.5)"
          }}
        >A Space to <span className="home_page_span">Think.</span>  A Coffee to <span className="home_page_span" >Create</span></p>

      </div>
    </div>
    {/* //////////////////////////////////////////// */}

    {/* phần menu dịch vụ */}
    {/* Service Menu part */}

    <section style={{
      margin:"0px 20px",
      
     
    }}>

    </section>
  </>;
}
