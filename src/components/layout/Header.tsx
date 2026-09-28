import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header 
            data-slot="encabezado"
            className="sticky top-0 z-40 w-full pirata-one-regular"
        >
            <div className="flex h-14 items-center justify-between px-4">                
                <h1 className="text-4xl select-none">
                    <Link to={"/"}>
                        Lumos
                    </Link>
                </h1>
            </div>
        </header>
    )
}