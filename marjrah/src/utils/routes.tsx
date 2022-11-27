import { Route, Routes } from "react-router-dom";
import FindPetsPage from "../pages/findPets";
import Login from "../pages/login";
import Aboutus from "../pages/aboutus";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/find-pets" element={<FindPetsPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
        </Routes>
    );
}

export default PageRouter;
