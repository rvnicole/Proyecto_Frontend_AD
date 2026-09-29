import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../components/ui/ButtonSubmit";
import MessageError from "../components/ui/MessageError";
import { agregarDocumento } from "../lib/storage";
import { ingesta } from "../api/ingesta";
import { toast } from 'react-toastify';
import type { NewDocumentType } from "../components/types";

export default function UploadDocument() {
    const [data, setData] = useState<NewDocumentType>({ title: "" });
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);

        setData(d => ({ ...d, [e.target.id]: e.target.value }));
    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);

        const file = e.target.files?.[0];
        setData(d => ({ ...d, document: file }));
    }

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( !data.title || !data.document ) {
            setError(true);
            return;
        }

        try {
            const result = await ingesta(data);
            
            if( !result.success ) {
                toast(result.message, { type: "error", theme: "dark" });
                return;
            }
            toast(result.message, { type: "success", theme: "dark" });
        } 
        catch (error) {
            console.log("Respuesta del servidor - Ingesta:", error);
        }

        agregarDocumento(data);
        navigate("/");
    }

    return (
        <div className="flex items-center justify-center p-1 m-auto w-full md:w-3xl h-[80vh]">
            <div className="h-fit p-4 bg-bg/20 backdrop-blur-sm rounded-xl space-y-3">
                <h3 className="pirata-one-regular text-2xl text-center">Subir Documento</h3>

                <form className="space-y-3" onSubmit={onSubmit}>
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="w-full">
                            <label className="pirata-one-regular text-lg" htmlFor="title">
                                Tema
                            </label>

                            <input
                                id="title"
                                type="text"
                                placeholder="Tipos de Maderas"
                                className="w-full py-1 px-2 h-8 rounded-xl bg-bg/80 border border-bg 
                                outline-none focus:outline-none focus:ring-2 focus:ring-bg text-sm"
                                onChange={onChange}
                            />
                        </div>

                        <div className="w-full">
                            <div>
                                <label htmlFor="document" className="pirata-one-regular text-lg">
                                    Documento PDF
                                </label>
                                
                                <input
                                    id="document"
                                    type="file"
                                    className="text-sm w-full h-8 py-1 px-2 rounded-xl bg-bg/80 border border-bg 
                                    outline-none focus:outline-none focus:ring-2 focus:ring-bg"
                                    onChange={onFileChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`flex gap-2 flex-col md:flex-row ${error ? "justify-between" : "justify-end"}`}>
                        { error && <MessageError message="Todos los campos son obligatorios"/>}
                        <ButtonSubmit className="text-lg" text="Subir"/>
                    </div>
                </form>
            </div>            
        </div>
    )
}