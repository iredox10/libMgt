import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ComputerScience from "./pages/ComputerScience";
import Software from "./pages/Software";
import CyberSecurity from "./pages/CyberSecurity";
import Networking from "./pages/Networking";
import Books from "./pages/Books";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Sm from "./pages/Sm";
import AdminBooks from "./pages/AdminBooks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/computer-science" element={<ComputerScience />} />
        <Route path="/software-engineering" element={<Software />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/Networking" element={<Networking />} />

        <Route path="/books" element={<Books />} />
        <Route path="/book" element={<Book />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/semesters/:id" element={<Sm />} />
        <Route path="/admin-books/:id" element={<AdminBooks />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
