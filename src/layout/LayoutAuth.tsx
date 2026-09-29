import { Navigate, Outlet } from "react-router-dom";
import { obtenerNombre } from "../lib/storage";

export default function LayoutAuth() {
    const nombre = obtenerNombre();

    if (nombre) {
        return <Navigate to="/" replace/>;
    }

    return (
        <div className="min-h-dvh flex items-center justify-center px-4 py-8">
            <main className="w-full max-w-md">
                <Outlet />
            </main>
        </div>
    )
}