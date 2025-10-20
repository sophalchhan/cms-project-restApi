import { FaHome, FaFileContract, FaUsers, FaStore } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar bg-dark text-white vh-100 p-3">
      <h3 className="text-warning mb-4 text-center">CMS</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="/" className="nav-link text-white">
            <FaHome className="me-2" /> Dashboard News
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="/contracts" className="nav-link text-white">
            <FaFileContract className="me-2" /> Contracts
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="/users" className="nav-link text-white">
            <FaUsers className="me-2" /> Users
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="/vendors" className="nav-link text-white">
            <FaStore className="me-2" /> Vendor
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
