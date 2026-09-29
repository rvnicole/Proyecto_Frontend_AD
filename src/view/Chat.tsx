import { useParams, Navigate } from "react-router-dom";
import { obtenerDocumento, obtenerNombre } from "../lib/storage";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import ButtonSubmit from "../components/ui/ButtonSubmit";
import { LoaderCircle } from "lucide-react";

export default function Chat() {
    const [prompt, setPrompt] = useState("");
    const [respuesta, setRespuesta] = useState("");
    const [load, setLoad] = useState(false);
    const params = useParams();
    const documentParam = params.document || "";
    const document = obtenerDocumento(documentParam);

    useEffect(() => {
        if (!document) {
            toast("No se encontró el documento", { type: "info", theme: "dark" });
        }
    }, [document]);

    if (!document) {
        return <Navigate to="/" replace />;
    }

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
        setPrompt(e.target.value );
    }

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( !prompt ) {
            toast("No se recibió ninguna consulta", {type: "warning", theme:"dark"})
            return;
        }

        const data = {
            user: obtenerNombre(),
            title: document.title,
            prompt
        }

        setRespuesta("");
        setPrompt("");
        setLoad(true);

        const decodificador = new TextDecoder("utf-8");
        const url = `${import.meta.env.VITE_BACKEND_RAG}/retrieval`;

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        for await (let chunk of response.body!) {
            const decodeChunk = decodificador.decode(chunk);
            setRespuesta(r => r + decodeChunk);
        }

        setLoad(false);
    }

    return (
        <div className="m-auto w-full md:w-3xl p-2">
            <div className="bg-bg py-2 px-3 rounded-t-xl">
                <p className="text-xl pirata-one-regular text-center break-all">{document.title}</p>
            </div>
            <div className="flex flex-col justify-end h-[78vh] bg-bg/20 p-3 backdrop-blur-sm rounded-b-xl not-]:">
                <div className="p-1 mb-5 h-full overflow-y-scroll">
                    <p>{respuesta}</p>
                </div>
                
                <form className="flex gap-2" onSubmit={onSubmit}>
                    <textarea
                        placeholder="Escribe tu pregunta..."
                        className="w-full py-1 px-2 min-h-20 rounded-xl bg-bg/80 border border-bg 
                        outline-none focus:outline-none focus:ring-2 focus:ring-bg text-sm"
                        onChange={onChange}
                        value={prompt}
                    />
                    
                    { load ?
                        <div className="w-8">
                            <LoaderCircle className="text-magic size-8 animate-spin"/>
                        </div>
                        :
                        <ButtonSubmit text="Enviar" className="h-fit"/>
                    }
                    
                </form>
            </div>
        </div>
    )
}