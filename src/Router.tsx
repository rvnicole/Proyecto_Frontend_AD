import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutApp from "./layout/LayoutApp";
import Home from "./view/Home";
import LayoutAuth from "./layout/LayoutAuth";
import Login from "./view/Login";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route path="/login" element={<Login />}/>        
                </Route>

                <Route element={<LayoutApp />}>
                    <Route path="/" element={<Home />}/>            
                </Route>
            </Routes>
        </BrowserRouter>
    )
}