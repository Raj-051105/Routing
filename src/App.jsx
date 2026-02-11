import Dashboard from "./components/dashboard.jsx";
import Home from "./components/home.jsx";
import Login from "./components/login.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={{padding:20}}>
        <header>
          <h1>Routing Project</h1>
          <p>This app demonstrates basic routing — use the links below.</p>
          <nav style={{marginBottom:12}}>
            <Link to="/" style={{marginRight:8}}>Home</Link>
            <Link to="/login" style={{marginRight:8}}>Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
