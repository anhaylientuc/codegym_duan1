import toast, { Toaster } from 'react-hot-toast';

export default function Test() {
    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <button 
                className="btn btn-primary"
                onClick={() => toast.success("Hot Toast đã hoạt động rồi!")}
            >
                Bấm Test Toast
            </button>
            
            {/* Màn hình hứng thông báo của react-hot-toast */}
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
}