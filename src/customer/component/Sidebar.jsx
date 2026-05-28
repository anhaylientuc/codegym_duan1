import '../customer.css'

export default function Sidebar({selectTap,listTap,tap}){
    
    
    return <section
    style={{
        width:"250px",
        height:"100%",
        padding:"20px 10px",
        backgroundColor:"#fbfbfb",
        borderRadius:"10px",
        flexShrink:"0",
        position:"sticky",
        top:"10px"
        
    }}
    >
        {listTap?.map((e,index)=>(
            <p
            key={e.id}
            onClick={()=>{
                selectTap(e)
            }}
            style={{
                backgroundColor:`${tap.id===e.id ? `#efefef`:''}`,
                color:`${tap.id===e.id ? `black`:``}`,
                cursor:"pointer"
            }}
        className="sidebar_p" >{e.name}</p>
        ))}

        

    </section>
}