import { useState } from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import "./Topbar.css";

function Topbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="topbar bg-white shadow-sm border-bottom d-flex justify-content-between align-items-center px-3 py-2">
      {/* Left side: Dashboard title positioned near sidebar */}
      <div className="dashboard-title">
        <h4 className="fw-bold text-dark m-0">Dashboard</h4>
        <p className="text-muted small m-0">Welcome back, Admin</p>
      </div>

      {/* Center: Search box - now takes remaining space */}
      <div className="search-container flex-grow-1 d-flex justify-content-center">
        <div className="search-box d-flex align-items-center bg-light rounded-pill px-3 shadow-sm" style={{maxWidth: "400px", width: "100%"}}>
          <FaSearch className="text-secondary me-2" />
          <input
            type="text"
            placeholder="Search..."
            className="border-0 form-control form-control-sm bg-light"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ boxShadow: "none" }}
          />
        </div>
      </div>

      {/* Right side: Icons and User */}
      <div className="d-flex align-items-center gap-3">
        <div className="position-relative">
          <FaBell className="text-secondary fs-5" />
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle p-1 border border-light rounded-circle">
            3
          </span>
        </div>

        {/* User Dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            className="d-flex align-items-center border-0 bg-transparent"
          >
            <FaUserCircle size={28} className="text-secondary me-2" />
            <span className="fw-semibold text-muted d-none d-sm-inline">
              Admin
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/logout" className="text-danger">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Topbar;