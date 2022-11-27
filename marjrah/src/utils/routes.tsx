import { Route, Routes } from "react-router-dom";
import FindPetsPage from "../pages/findPets";
import Aboutus from "../pages/aboutus/aboutus";
import Login from "../pages/login";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/find-pets" element={<FindPetsPage/>} />
            <Route path="/about-us" element={<Aboutus/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    );
}

export default PageRouter;
