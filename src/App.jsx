import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>;
}
export default App;
