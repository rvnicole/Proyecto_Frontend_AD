import { ScrollText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ButtonUpload() {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            className="flex items-center gap-2 py-2 px-3 fixed bottom-8 right-8 z-50 pirata-one-regular 
            text-xl text-text-primary bg-magic hover:scale-105 rounded-3xl cursor-pointer"
            onClick={() => navigate("/upload-document")}
        >
            <span>Subir Documento</span>
            <ScrollText className="size-6"/>
        </button>
    )
}