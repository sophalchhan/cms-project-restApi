import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";

const techArticles = [
  {
    id: 4,
    image: "https://cdn.sabay.com/cdn/media.sabay.com/media/CiMedia/Media/68db95518becd_1759221060_medium.jpg",
    title: "Midea រៀបចំសន្និសីទតំណាងចែកចាយលើកដំបូងរបស់ខ្លួននៅក្នុងទីផ្សារអាស៊ីប៉ាស៊ីហ្វិក",
    author: "Meng Songly",
    date: "OCTOBER 6 2025",
    views: "31 views",
    avatar: "https://business-cambodia.com/cms/assets/86f02077-d25e-4e0b-a668-1805e06401a7?format=webp",
  },
  {
    id: 5,
    image: "https://business-cambodia.com/cms/assets/bd361562-ebde-4dc1-aaab-3104d0ae0363?format=webp",
    title: "ទោះជាប្រទេសតូចតែ មានទីក្រុងជួបប្រទៈសមុទ្រដ៏ស្អាតបំផុត...",
    author: "Bunthoeun Koem",
    date: "OCTOBER 5 2025",
    views: "22 views",
    avatar: "https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a?format=webp",
  },
  {
    id: 6,
    image: "https://business-cambodia.com/cms/assets/168e6b27-4048-496a-9749-3c9669aa0f54?format=webp",
    title: "តើហេតុអ្វី? សាកលវិទ្យាល័យ ITC ចាប់ផ្តើមបើកវគ្គសិក្សាថ្មី...",
    author: "ឌី ស្រីកញ្ញា",
    date: "OCTOBER 3 2025",
    views: "1.3K views",
    avatar: "https://business-cambodia.com/cms/assets/a0a4c4f4-d307-48e0-8262-0634a9319588?format=webp",
  },
];

function TechnologyPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

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

  const visibleArticles = techArticles.slice(0, visibleCount);
  const hasMore = techArticles.length > visibleCount;

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="display-4 fw-bold text-center">បច្ចេកវិទ្យា</h1>
          <p className="text-muted text-center">បច្ចេកវិទ្យាថ្មីៗ និងការអភិវឌ្ឍន៍ឌីជីថល</p>
        </Col>
      </Row>
      
      {renderArticles(visibleArticles)}
      
      {hasMore && (
        <Row className="mt-4">
          <Col className="text-center">
            <Button 
              variant="outline-primary" 
              size="lg"
              onClick={loadMore}
            >
              មើលបន្ថែម
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default TechnologyPage;