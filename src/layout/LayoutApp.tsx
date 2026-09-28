import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

export default function LayoutApp() {
    return (
        <div>
            <Header />
            
            <main>
                <Outlet />
            </main>
        </div>
    )
}