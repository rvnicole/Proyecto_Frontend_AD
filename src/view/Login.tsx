import { Bird } from "lucide-react";
import ParchmentCard from "../components/ui/ParchmentCard";

export default function Login() {
    return (
        <div className="flex justify-center">
            <div className="w-2xl flex flex-col items-center space-y-3">
                <h1 className="text-7xl pirata-one-regular">Lumos</h1>

                <ParchmentCard 
                    className="rounded-lg w-80 md:w-full"
                    title="¿Cuál es tu nombre, joven mago?"
                >
                    <form className="flex gap-2 py-5 px-2">
                        <input
                            className="text-text-secondary w-full py-1 px-2 rounded-xl bg-input border border-input-border 
                            outline-none focus:outline-none focus:ring-2 focus:ring-input-border"
                            placeholder="Nicole"
                        />

                        <button 
                            type="button" 
                            className="flex items-center justify-center bg-magic px-2 py-1 rounded-lg hover:bg-magic/85 hover:cursor-pointer"
                        >
                            <span className="pirata-one-regular">Iniciar</span>
                            <Bird className="size-6"/>
                        </button>
                    </form>
                </ParchmentCard>
            </div>
        </div>
    )
}