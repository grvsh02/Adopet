import { Route, Routes } from "react-router-dom";
import FindPetsPage from "../pages/findPets";
import Login from "../pages/login";
import Aboutus from "../pages/aboutus/aboutus";
import Signup from "../pages/signup";
import Home from "../pages/home/home";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/find-pets" element={<FindPetsPage/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/sign-up" element={<Signup/>} />
        </Routes>
    );
}

export default PageRouter;
