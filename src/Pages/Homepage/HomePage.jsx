import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ✅ Fetch data from API
  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((response) => {
        if (!response.ok) throw new Error("Network error!");
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handle view details button click - navigate to detail page
  const handleViewDetails = (article) => {
    navigate(`/article/${article.id}`);
  };

  if (loading)
    return (
      <div className="text-center my-5">
        <Spinner animation="border" className="loading-spinner" /> កំពុងទាញទិន្នន័យ...
      </div>
    );

  if (error)
    return (
      <div className="text-center error-message my-5">
        មានបញ្ហា​ក្នុង​ការ​ទាញ​ទិន្នន័យ៖ {error}
      </div>
    );

  return (
    <Container className="my-5">
      <h2 className="fw-bold mb-4 text-secondary">អត្ថបទថ្មីៗ</h2>
      <Row>
        {articles.map((article) => (
          <Col md={4} key={article.id} className="mb-4">
            <Card className="article-card shadow-sm rounded-4 overflow-hidden">
              <div className="image-hover-container">
                <Card.Img
                  variant="top"
                  src={article.image}
                  alt={article.title}
                  className="article-image"
                />
              </div>
              <Card.Body>
                <div className="mb-2">
                  <small className="article-tag text-primary bg-light px-2 py-1 rounded">
                    #{article.tag}
                  </small>
                </div>
                <Card.Title className="article-title fw-semibold">
                  {article.title}
                </Card.Title>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={article.avatar}
                    alt="author"
                    width="35"
                    height="35"
                    className="author-avatar rounded-circle me-2"
                  />
                  <div>
                    <small className="fw-semibold">{article.author}</small>
                    <br />
                    <small className="text-muted">
                      {article.date} • {article.views} views
                    </small>
                  </div>
                </div>
                <div className="mt-3">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="read-button"
                    onClick={() => handleViewDetails(article)}
                  >
                    មើលបន្ថែម
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;