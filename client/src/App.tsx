import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFoundPage/NotFound";
import LoginPage from "./pages/LoginPage/LoginPage";
import Notes from "./pages/NotesPage/NotesPage";
import Signup from "./pages/SignupPage/SignupPage";
import NavbarComponent from "./components/Navbar/Navbar";
import { ProtectedRoute } from "./utils/ProtectedRoute";

export default function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/notes" element={<Notes />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
