import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import { obtenerNombre } from "../lib/storage";
import ButtonUpload from "../components/layout/ButtonUpload";

export default function LayoutApp() {
    const nombre = obtenerNombre();

    if (!nombre) {
        return <Navigate to="/login" replace/>;
    }
    
    return (
        <div>
            <Header />
            
            <main>
                <Outlet />
            </main>

            <ButtonUpload />
        </div>
    )
}