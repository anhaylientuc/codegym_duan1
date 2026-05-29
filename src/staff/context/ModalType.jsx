import { createContext,useContext,useState } from "react";
const ModalTypeContext=createContext();
export const ModalTypeProvider=({children})=>{
    const [show, setshow] = useState(false)
    const [id, setid] = useState(null)
    const [action, setaction] = useState(0)
    const [keyword, setkeyword] = useState({})
    return (
        <ModalTypeContext.Provider
            value={{
                show,setshow,id,setid,action,setaction,setkeyword,keyword
            }}
        >
            {children}
        </ModalTypeContext.Provider>
    )
}
export const useModalType=()=>useContext(ModalTypeContext)