import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {LoginPage} from "./pages";

export default function AppRoutes() {
    return (
        <Router>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                </Routes>
        </Router>
    );
};