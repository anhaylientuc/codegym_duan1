export default function Footer(){
    return <section style={{
        width:"100%",
       overflow:"hidden",
        padding:"20px",
        
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        gap:"20px",
        flexDirection:"column"
    }}>
        {/* back groud */}
        <img
        style={{
        width:"100%",
        height:"100%",
        objectFit:"cover",
        position:"absolute",
        top:"0",
        left:"0",
        zIndex:"-1"
        }}
        src="/footer_backgroud.jpeg" alt="" />
        {/* ảnh chữ */}
        <img
        style={{
            width:"500px",
            marginTop:"30px"
        }}
        src="/footer_text.png" alt="" />

        <p 
        style={{
            width:"420px",
            fontSize:"18px",
            textAlign:"center",
            color:"rgb(255, 255, 255,0.7)",
        }}
        >
            Visa, MasterCard and restaurant vouchers.
            Transaction fee for payments by CC or food checks.
            No Bancontact.
        </p>
        <p
        style={{
            width:"420px",
            fontSize:"18px",
            textAlign:"center",
            color:"rgb(255, 255, 255,0.7)",
            marginTop:"50px"
        }}
        >
            @Lecker 2016
        </p>

    </section>
}