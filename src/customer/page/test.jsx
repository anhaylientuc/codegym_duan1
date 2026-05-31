import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { getOrderUnpain } from '../../services/OrderServices';
import { getBillByTable } from '../../services/BillServices';



export default function Test() {

    const tesst= async()=>{
        try{
            const data = await getBillByTable();
            console.log(data);
            
        }catch(err){
            console.log("loi giao dien");
            
        }
    }

    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <button 
                className="btn btn-primary"
                onClick={()=>{
                    tesst()
                }}
            >
                Bấm Test 
            </button>
            
            {/* Màn hình hứng thông báo của react-hot-toast */}
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
}