import { useContext } from "react";
import { TittleColorContext } from "../context/TittleColorContext";

export const useTittleColorContext = () => {
      
    const context = useContext(TittleColorContext)

    if (!context) {
        console.log("contexto nao encontrado")
    }

        return context
}