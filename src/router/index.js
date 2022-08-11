import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import App from "../App"
import Home from '../Pages/Home/Home'

const BaseRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/home" element={<Home />}></Route>

                </Route>
            </Routes>
        </Router>
    )
}
export default BaseRouter