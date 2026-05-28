export default function ConfirDelete({turnOff,confirDelete}){
    return     <div
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
   
      style={{ display: 'flex', position: 'initial', width:"500px" ,
        backgroundColor:"white",
        padding:"20px",
        borderRadius:"10px",
        color:"black",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
        <h2
        style={{
            color:"#DCA237",
            fontFamily:"'Montserrat', sans-serif",
            fontWeight:"bold",
            width:"100%",
            textAlign:"center",
            fontSize:"25px"
        }}
        >Bạn có chắc muốn xóa không</h2>
        <div 
        style={{
            width:"150px",
            height:"150px",
            backgroundColor:"rgb(242, 180, 48,0.2)",
            borderRadius:"50%",
            margin:"30px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <img
            style={{
                width:"60%"
            }}
            src="https://img.icons8.com/?size=100&id=5tH5sHqq0t2q&format=png&color=000000" alt="" />

        </div>
        
        <div style={{
            display:"flex",
            gap:"10px",
            justifyContent:"start",
            width:"100%"
        }}>
            <button
            onClick={()=>{
                turnOff()
            }}
            style={{
                padding:"10px",
                width:"100%"
            }}
            type="button" class="btn btn-secondary">Hủy</button>
        <button
        onClick={()=>{
            confirDelete();
        }}
        style={{
                padding:"10px",
                width:"100%"
            }}
        type="button" class="btn btn-danger">Xóa</button>

        </div>



        


          

    </div>
    </div>
}