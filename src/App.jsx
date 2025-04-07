import { useRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./routes";


export const App = () =>{
    
    let element = useRouter(router);
    return ( 
        <>
        {element}
        <Toaster
        position="botton-ringht"
        reverseOrder={false}
        
        />
        </>
        
        
    )
}