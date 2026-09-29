import { Outlet } from "react-router-dom";

export default function LayoutAuth() {
    return (
        <div className="min-h-dvh flex items-center justify-center px-4 py-8">
            <main className="w-full max-w-md">
                <Outlet />
            </main>
        </div>
    )
}