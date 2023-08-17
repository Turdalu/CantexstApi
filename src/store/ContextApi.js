import { createContext, useState,} from "react";


export const ContexstTest = createContext()

export const ContextApi = (props) =>{


    const [arr, setArr] = useState([])
    
    const test=(obj)=>{
        setArr((prev)=>[...prev,obj])   
    }

    const value = {
        test,
        arr
    }
   
    
   

    return <ContexstTest.Provider value={value}>
        {props.children}
    </ContexstTest.Provider>
}