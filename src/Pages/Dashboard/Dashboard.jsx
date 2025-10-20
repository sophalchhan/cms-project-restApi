import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import DashboardChart from "../../components/DashboardChart/DashboardChart";
import { FaFileAlt, FaCalendarAlt, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar នៅខាងឆ្វេង */}
      <Sidebar />

      {/* Main Content Area - Side by side with sidebar */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Topbar positioned at the top but NEXT TO sidebar, not above it */}
        <div className="topbar-container">
          <Topbar />
        </div>

        {/* Dashboard Content */}
        <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
          <Container fluid>
            <Row className="g-4">
              <Col md={3}><DashboardCard title="Total Contracts" value="350" icon={<FaFileAlt />} color="#6f42c1" /></Col>
              <Col md={3}><DashboardCard title="Pending Contracts" value="19" icon={<FaCalendarAlt />} color="#ffc107" /></Col>
              <Col md={3}><DashboardCard title="Signed Contracts" value="331" icon={<FaCheckCircle />} color="#0d6efd" /></Col>
              <Col md={3}><DashboardCard title="Total Amount" value="2,102,050" icon={<FaMoneyBillWave />} color="#dc3545" /></Col>
            </Row>

            {/* Chart នៅក្រោម */}
            <Row className="mt-4">
              <Col md={8} lg={6}>
                <DashboardChart />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;