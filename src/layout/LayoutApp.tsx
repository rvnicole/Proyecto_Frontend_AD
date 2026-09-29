import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import ButtonUpload from "../components/layout/ButtonUpload";
import { obtenerNombre } from "../lib/storage";

export default function LayoutApp() {
    const nombre = obtenerNombre();
    const { pathname } = useLocation();

    if (!nombre) {
        return <Navigate to="/login" replace/>;
    }
    
    return (
        <div>
            <Header />
            
            <main>
                <Outlet />
            </main>

            { ["/"].includes(pathname) && <ButtonUpload /> }
            
        </div>
    )
}