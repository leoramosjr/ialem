import {
    BrowserRouter as Router,
    Routes, 
    Route
} from "react-router-dom";
import Landing from "../pages/Landing";
import IAChat from "../pages/IAChat";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/iachat" element={<IAChat />} />
            </Routes>
        </Router>
    )
}