import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import UserPage from "./pages/UserPage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
function App() {
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="users/:id" element={<UserPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;
