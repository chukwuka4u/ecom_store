import { Routes, Route } from "react-router-dom";
import Signin from "@/features/buyer/pages/authentication/signin";
import Signup from "@/features/buyer/pages/authentication/signup";
import VerifyEmail from "@/features/buyer/pages/authentication/verify-email";
import HomePage from "@/features/buyer/pages/homepage";

export default function BuyerRoutes() {
    return(
        <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
             <Route path="/verify-email" element={<VerifyEmail />} />
             <Route path="/homepage" element={<HomePage />} />
        </Routes>
    )
}