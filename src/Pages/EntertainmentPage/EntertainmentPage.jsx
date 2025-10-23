import { Container, Row, Col, Card, Button, Spinner, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EntertainmentPage() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
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

  const loadMore = () => setVisibleCount((prev) => prev + 6);

  const viewArticleDetail = (article) => {
    navigate(`/article/${article.id}`, { state: { article } });
  };

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = articles.length > visibleCount;

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">កំពុងទាញទិន្នន័យ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-danger my-5">
        មានបញ្ហាក្នុងការទាញទិន្នន័យ៖ {error}
      </div>
    );
  }

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <div className="d-flex align-items-center gap-3">
            <h1 className="display-10 fw-bold m-0">កម្សាន្ត</h1>
            <Badge bg="info" className="fs-6 px-3 py-2">
              ENTERTAINMENT
            </Badge>
          </div>
          <p className="text-muted mt-2">
            តន្ត្រី ភាពយន្ត និងការកម្សាន្តផ្សេងៗ
          </p>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4">
        {visibleArticles.map((article) => (
          <Col key={article.id}>
            <Card className="article-card border-0 shadow-sm rounded-4 overflow-hidden h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={article.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                  <small className="article-tag text-info bg-light px-2 py-1 rounded">
                    #{article.tag}
                  </small>
                </div>
                <Card.Title className="fw-bold">{article.title}</Card.Title>
                <div className="d-flex align-items-center mt-3 mb-3">
                  <img
                    src={article.avatar}
                    alt={article.author}
                    className="rounded-circle me-2"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="text-muted" style={{ fontSize: "13px" }}>
                    <div className="fw-semibold text-dark">{article.author}</div>
                    <div>
                      {article.date} • {article.views}
                    </div>
                  </div>
                </div>
                {/* Button inside card */}
                <div className="mt-auto">
                  <Button 
                    variant="outline-info" 
                    size="sm" 
                    className="w-25"
                    onClick={() => viewArticleDetail(article)}
                  >
                    មើលបន្ថែម
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {hasMore && (
        <Row className="mt-4">
          <Col className="text-center">
            <Button variant="outline-info" size="lg" onClick={loadMore}>
              មើលព័ត៌មានបន្ថែម
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default EntertainmentPage;