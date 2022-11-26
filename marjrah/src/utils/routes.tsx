import { Route, Routes } from "react-router-dom";
import FindPetsPage from "../pages/findPets";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/find-pets" element={<FindPetsPage/>} />
        </Routes>
    );
}

export default PageRouter;
