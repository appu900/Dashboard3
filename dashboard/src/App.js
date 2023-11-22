import logo from "./logo.svg";
import "./App.css";
import AdminPage from "./Pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./Pages/Loginpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
