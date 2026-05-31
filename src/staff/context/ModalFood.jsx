import { createContext,useContext,useState } from "react";
const ModalFoodContext=createContext();
export const ModalFoodProvider=({children})=>{
    const [show, setshow] = useState(false)
    const [id, setid] = useState(null)
    const [action, setaction] = useState(0)
    const [keyword, setkeyword] = useState(undefined)
    return (
        <ModalFoodContext.Provider
            value={{
                show,setshow,id,setid,action,setaction,keyword,setkeyword
            }}
        >
            {children}
        </ModalFoodContext.Provider>
    )
}
export const useModalFood=()=>useContext(ModalFoodContext)