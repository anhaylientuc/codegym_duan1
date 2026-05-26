export default function NewPost(){

    const listNewPost = [
        {
            img:"https://noithatkendesign.vn/storage/app/media/uploaded-files/50-mau-nha-hang-hot-nhat-2025-39.jpg",
            title: "Restaurants win big on election night",
            content :"Third party delivery players, chains expect election Third party delivery players, chains expect election"
        },
        {
            img:"https://noithatkendesign.vn/storage/app/media/uploaded-files/50-mau-nha-hang-hot-nhat-2025-39.jpg",
            title: "Chiles add more than heat to menus",
            content :"Third party delivery players, chains expect election Third party delivery players, chains expect election"
        },
        {
            img:"https://noithatkendesign.vn/storage/app/media/uploaded-files/50-mau-nha-hang-hot-nhat-2025-39.jpg",
            title: "The quiet, early indicator of restaurant-industry problems",
            content :"Third party delivery players, chains expect election Third party delivery players, chains expect election Third party delivery players, chains expect election Third party delivery players, chains expect election"
        }
    ]

    return <section
    style={{
        width:"100%",
        overflow:"hidden",
        position:"relative",
        display:"flex",
        padding:"100px",
        justifyItems:"center",
        alignItems:"center",
        justifyContent:"center",
        gap:"30px",
        flexDirection:"column"

    }}
    >
      <h2 
        style={{
          fontFamily:"'Arvo', serif",
          fontWeight:"bold",
          color:"#DCA237"
        }}
      >NEW POST</h2>

      {/* thẻ cha chứa các phần giới thiệu món */}
        
        <div 
        style={{
            width:"90%",
            display:"flex",
            gap:"70px",
            justifyContent:"center",
            alignItems:"center",
            marginTop:"20px"
            
        }}
        >
            {/* thẻ chứa các box thông tin */}
            
            {listNewPost?.map((e,index) =>(
                <div
            style={{
                display:"flex",
                flexDirection:"column",
                gap:"20px",
                width:"300px",
            
            justifyContent:"start"
            }}
            >
                {/* khung ảnh */}
                <div
                style={{
                    width:"300px",
                    height:"300px",
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
            width:"25px",
            height:"2px",
            backgroundColor:"#ff4600"
        }}
        ></div>
        <p
        style={{
            fontFamily:"'Arvo', serif",
            color:"rgb(0, 0, 0,0.5)",
            
            fontSize:"18px",
            fontWeight:"bold",
            height:"50px",
            width:"90%",
            margin:"0",
            
            textAlign:"center",
            alignContent:"center",
            overflow:"hidden",
            textOverflow:"ellipsis"
        }}
        >{e.title}</p>
        <div
        style={{
            width:"25px",
            height:"2px",
            backgroundColor:"#ff4600"
        }}
        ></div>
        <p
        style={{
            fontSize:"14px",
            fontFamily:"'Montserrat', sans-serif",
            textAlign:"center",
            width:"90%",
            display:"-webkit-box",
            WebkitLineClamp:"2",
            overflow:"hidden",
            WebkitBoxOrient:"vertical",
            color:"rgb(0, 0, 0,0.5)",

        }}
        >
            {e.content}
        </p>
        
        </div>

               
            </div>
            ))}
            
            
            
            {/* ////////////////////////////// */}

        </div>

      {/* //////////////// */}

    </section>
}