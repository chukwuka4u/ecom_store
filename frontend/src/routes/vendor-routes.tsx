import { Routes, Route } from "react-router-dom";
import Signin from "@/features/vendor/pages/authentication/signin";
import Signup from "@/features/vendor/pages/authentication/signup";
import Proposal from "@/features/vendor/pages/authentication/proposal";


export default function VendorRoutes() {
    return(
        <Routes>
            <Route path="vendor">
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="proposal" element={<Proposal />} />
            </Route>
        </Routes>
    )
}