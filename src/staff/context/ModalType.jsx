import { createContext,useContext,useState } from "react";
const ModalTypeContext=createContext();
export const ModalTypeProvider=({children})=>{
    const [show, setshow] = useState(false)
    const [id, setid] = useState(null)
    const [action, setaction] = useState(0)
    return (
        <ModalTypeContext.Provider
            value={{
                show,setshow,id,setid,action,setaction
            }}
        >
            {children}
        </ModalTypeContext.Provider>
    )
}
export const useModalType=()=>useContext(ModalTypeContext)