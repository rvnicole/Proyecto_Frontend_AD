import type { RetrievalType } from "../types";

export const retrieval = async (data: RetrievalType) => {
    try {
        
    }
    catch(error) {
        console.log("Error-Recuperación: ", error);
        return { success: false, message:"Algo salió mal al procesar el documento"}
    }
}