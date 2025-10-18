import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayoutPage/Layout";
import HomePage from "./Pages/Homepage/HomePage";
import Login from "./Pages/Logingpage/Loginpage";
import Register from "./Pages/Registerpage/Registerpage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
