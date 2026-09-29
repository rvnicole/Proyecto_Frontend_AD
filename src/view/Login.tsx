import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ParchmentCard from "../components/ui/ParchmentCard";
import ButtonSubmit from "../components/ui/ButtonSubmit";
import MessageError from "../components/ui/MessageError";
import { guardarNombre } from "../lib/storage";

export default function Login() {
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( !nombre ) {
            setError(true);
            return;
        }

        guardarNombre(nombre);
        navigate("/");
    }

    return (
        <div className="flex justify-center">
            <div className="w-2xl flex flex-col items-center space-y-3">
                <div>
                    <img src="/lumos-logo.png" className="m-auto mr-3 -mb-5 h-32"/>
                    <h1 className="text-7xl pirata-one-regular">Lumos</h1>
                </div>                

                <ParchmentCard 
                    className="rounded-lg w-80 md:w-full"
                    title="¿Cuál es tu nombre, joven mago?"
                >
                    <form onSubmit={onSubmit} className="flex gap-2 pt-5 px-2">
                        <input
                            className="text-text-secondary w-full py-1 px-2 rounded-xl bg-input border border-input-border 
                            outline-none focus:outline-none focus:ring-2 focus:ring-input-border"
                            placeholder="Nicole"
                            onChange={e => setNombre(e.target.value)}
                        />

                        <ButtonSubmit text="Iniciar" />
                    </form>

                    <div className="p-2">
                        { error && <MessageError message="El nombre es obligatorio"/>}
                    </div>
                    
                </ParchmentCard>
            </div>
        </div>
    )
}