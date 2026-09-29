import { api } from "../config/axios";
import { obtenerNombre } from "../lib/storage";
import type { NewDocumentType } from "../components/types";

export const ingesta = async (data: NewDocumentType) => {
    try {
        const user = obtenerNombre();

        const formData = new FormData();
        formData.append("user", user);
        formData.append("document", data.document!);
        formData.append("title", data.title);

        const result = await api.post("/ingesta", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return result.data;
    }
    catch(error) {
        console.log("Error-Ingesta: ", error);
        return { success: false, message:"Algo salió mal al procesar el documento"}
    }
}