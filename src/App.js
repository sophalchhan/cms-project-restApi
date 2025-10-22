import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayoutPage/Layout";
import HomePage from "./Pages/Homepage/HomePage";
import Login from "./Pages/Logingpage/Loginpage";
import Register from "./Pages/Registerpage/Registerpage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NewsPage from "./Pages/NewsPage/NewsPage";
import TechnologyPage from "./Pages/TechnologyPage/TechnologyPage";
import SportsPage from "./Pages/SportsPage/SportsPage";
import EntertainmentPage from "./Pages/EntertainmentPage/EntertainmentPage";
import ArticleDetail from "./Pages/ArticleDetail/ArticleDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage/>} />
          <Route path="/technology" element={<TechnologyPage/>} />
          <Route path="/sports" element={<SportsPage/>} />
          <Route path="/entertainment" element={<EntertainmentPage/>} />
          <Route path="/article/:id" element={<ArticleDetail/>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
