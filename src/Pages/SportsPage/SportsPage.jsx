import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

function SportsPage() {
  const [articles, setArticles] = useState([]);        // ទិន្នន័យអត្ថបទ
  const [visibleCount, setVisibleCount] = useState(6); // ចំនួនអត្ថបទបង្ហាញ
  const [loading, setLoading] = useState(true);        // សម្រាប់បង្ហាញ Loading

  useEffect(() => {
    // fetch API (ឧទាហរណ៍ Laravel API)
    fetch("http://localhost:4000/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  const loadMore = () => setVisibleCount((prev) => prev + 6);

  const renderArticles = (data) => (
    <Row xs={1} md={3} className="g-4">
      {data.map((article) => (
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
                  <div>{article.date} • {article.views}</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = articles.length > visibleCount;

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="display-10 fw-bold">កីឡា</h1>
          <p className="text-muted">ព័ត៌មានកីឡាថ្មីៗ ព្រឹត្តិការណ៍ និងលទ្ធផល</p>
        </Col>
      </Row>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">កំពុងទាញទិន្នន័យ...</p>
        </div>
      ) : (
        <>
          {renderArticles(visibleArticles)}

          {hasMore && (
            <Row className="mt-4">
              <Col className="text-center">
                <Button variant="outline-primary" size="lg" onClick={loadMore}>
                  មើលបន្ថែម
                </Button>
              </Col>
            </Row>
          )}
        </>
      )}
    </Container>
  );
}

export default SportsPage;
