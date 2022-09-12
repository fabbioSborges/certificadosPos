import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Dashboard, LoginPage} from "./pages";

export default function AppRoutes() {
    return (
        <Router>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes>
        </Router>
    );
};