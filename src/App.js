import React from 'react'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router } from "react-router-dom";



export default function App() {
    return (
        <div>
            <Router>
                <Header />

                <Home />
            </Router>
        </div>
    )
}
