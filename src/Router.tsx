import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutApp from "./layout/LayoutApp";
import LayoutAuth from "./layout/LayoutAuth";
import Home from "./view/Home";
import Login from "./view/Login";
import UploadDocument from "./view/UploadDocument";
import Chat from "./view/Chat";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route path="/login" element={<Login />}/>        
                </Route>

                <Route element={<LayoutApp />}>
                    <Route path="/" element={<Home />}/>       
                    <Route path="/upload-document" element={<UploadDocument />}/>  
                    <Route path="/chat/:document" element={<Chat />}/>    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}