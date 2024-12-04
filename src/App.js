import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PaperPage from "./pages/PaperPage";


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/paper" element={<PaperPage />} />
                    {/* More routes can be added here */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
