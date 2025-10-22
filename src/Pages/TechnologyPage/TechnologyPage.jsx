import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

function TechnologyPage() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch data from Laravel API
  useEffect(() => {
    fetch("http://localhost:4000/articles") // 👈 your Laravel endpoint
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

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = articles.length > visibleCount;

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" /> កំពុងទាញទិន្នន័យ...
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
          <h1 className="display-10 fw-bold">បច្ចេកវិទ្យា</h1>
          <p className="text-muted">
            បច្ចេកវិទ្យាថ្មីៗ និងការអភិវឌ្ឍន៍ឌីជីថល
          </p>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4">
        {visibleArticles.map((article) => (
          <Col key={article.id}>
            <Card className="article-card border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <Card.Img
                variant="top"
                src={article.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{article.title}</Card.Title>
                <div className="d-flex align-items-center mt-3">
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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {hasMore && (
        <Row className="mt-4">
          <Col className="text-center">
            <Button variant="outline-primary" size="lg" onClick={loadMore}>
              មើលបន្ថែម
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default TechnologyPage;
