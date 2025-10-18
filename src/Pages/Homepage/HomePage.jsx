import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./HomePage.css";

const articles = [
  {
    id: 1,
    image:
      "https://business-cambodia.com/cms/assets/c789ead3-304f-46a0-a4c5-14e712a73fcc?format=webp",
    tag: "ព័ត៌មានថ្មីៗ",
    title:
      "អបអរសាទរ! សង្ស័យ ត្រួតពិនិត្យអាកាសយានដ្ឋានថ្មីជាមួយក្រុមហ៊ុន Etihad...",
    author: "Meng Songly",
    date: "OCTOBER 6 2025",
    views: "31 views",
    avatar:
      "https://business-cambodia.com/cms/assets/86f02077-d25e-4e0b-a668-1805e06401a7?format=webp",
  },
  {
    id: 2,
    image:
      "https://business-cambodia.com/cms/assets/bd361562-ebde-4dc1-aaab-3104d0ae0363?format=webp",
    tag: "ព័ត៌មានថ្មីៗ",
    title: "ទោះជាប្រទេសតូចតែ មានទីក្រុងជួបប្រទៈសមុទ្រដ៏ស្អាតបំផុត...",
    author: "Bunthoeun Koem",
    date: "OCTOBER 5 2025",
    views: "22 views",
    avatar:
      "https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a?format=webp",
  },
  {
    id: 3,
    image:
      "https://business-cambodia.com/cms/assets/168e6b27-4048-496a-9749-3c9669aa0f54?format=webp",
    tag: "ព័ត៌មានថ្មីៗ",
    title: "តើហេតុអ្វី? សាកលវិទ្យាល័យ ITC ចាប់ផ្តើមបើកវគ្គសិក្សាថ្មី...",
    author: "ឌី ស្រីកញ្ញា",
    date: "OCTOBER 3 2025",
    views: "1.3K views",
    avatar:
      "https://business-cambodia.com/cms/assets/a0a4c4f4-d307-48e0-8262-0634a9319588?format=webp",
  },
  {
    id: 4,
    image:
      "https://cdn.sabay.com/cdn/media.sabay.com/media/CiMedia/Media/68db95518becd_1759221060_medium.jpg",
    tag: "បច្ចេកវិទ្យា",
    title:
      "Midea រៀបចំសន្និសីទតំណាងចែកចាយលើកដំបូងរបស់ខ្លួននៅក្នុងទីផ្សារអាស៊ីប៉ាស៊ីហ្វិក ដោយបង្ហាញពីដំណោះស្រាយពិសេសចំនួន 5",
    author: "Meng Songly",
    date: "OCTOBER 6 2025",
    views: "31 views",
    avatar:
      "https://business-cambodia.com/cms/assets/86f02077-d25e-4e0b-a668-1805e06401a7?format=webp",
  },
  {
    id: 5,
    image:
      "https://business-cambodia.com/cms/assets/bd361562-ebde-4dc1-aaab-3104d0ae0363?format=webp",
    tag: "បច្ចេកវិទ្យា",
    title: "ទោះជាប្រទេសតូចតែ មានទីក្រុងជួបប្រទៈសមុទ្រដ៏ស្អាតបំផុត...",
    author: "Bunthoeun Koem",
    date: "OCTOBER 5 2025",
    views: "22 views",
    avatar:
      "https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a?format=webp",
  },
  {
    id: 6,
    image:
      "https://business-cambodia.com/cms/assets/168e6b27-4048-496a-9749-3c9669aa0f54?format=webp",
    tag: "បច្ចេកវិទ្យា",
    title: "តើហេតុអ្វី? សាកលវិទ្យាល័យ ITC ចាប់ផ្តើមបើកវគ្គសិក្សាថ្មី...",
    author: "ឌី ស្រីកញ្ញា",
    date: "OCTOBER 3 2025",
    views: "1.3K views",
    avatar:
      "https://business-cambodia.com/cms/assets/a0a4c4f4-d307-48e0-8262-0634a9319588?format=webp",
  },
  {
    id: 7,
    image:
      "https://business-cambodia.com/cms/assets/c789ead3-304f-46a0-a4c5-14e712a73fcc?format=webp",
    tag: "កីឡា",
    title:
      "អបអរសាទរ! សង្ស័យ ត្រួតពិនិត្យអាកាសយានដ្ឋានថ្មីជាមួយក្រុមហ៊ុន Etihad...",
    author: "Meng Songly",
    date: "OCTOBER 6 2025",
    views: "31 views",
    avatar:
      "https://business-cambodia.com/cms/assets/86f02077-d25e-4e0b-a668-1805e06401a7?format=webp",
  },
  {
    id: 8,
    image:
      "https://business-cambodia.com/cms/assets/bd361562-ebde-4dc1-aaab-3104d0ae0363?format=webp",
    tag: "កីឡា",
    title: "ទោះជាប្រទេសតូចតែ មានទីក្រុងជួបប្រទៈសមុទ្រដ៏ស្អាតបំផុត...",
    author: "Bunthoeun Koem",
    date: "OCTOBER 5 2025",
    views: "22 views",
    avatar:
      "https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a?format=webp",
  },
  {
    id: 9,
    image:
      "https://business-cambodia.com/cms/assets/168e6b27-4048-496a-9749-3c9669aa0f54?format=webp",
    tag: "កីឡា",
    title: "តើហេតុអ្វី? សាកលវិទ្យាល័យ ITC ចាប់ផ្តើមបើកវគ្គសិក្សាថ្មី...",
    author: "ឌី ស្រីកញ្ញា",
    date: "OCTOBER 3 2025",
    views: "1.3K views",
    avatar:
      "https://business-cambodia.com/cms/assets/a0a4c4f4-d307-48e0-8262-0634a9319588?format=webp",
  },
  {
    id: 10,
    image:
      "https://cdn.sabay.com/cdn/media.sabay.com/media/CiMedia/Media/68db95518becd_1759221060_medium.jpg",
    tag: "កម្សាន្ដ",
    title:
      "Midea រៀបចំសន្និសីទតំណាងចែកចាយលើកដំបូងរបស់ខ្លួននៅក្នុងទីផ្សារអាស៊ីប៉ាស៊ីហ្វិក ដោយបង្ហាញពីដំណោះស្រាយពិសេសចំនួន 5",
    author: "Meng Songly",
    date: "OCTOBER 6 2025",
    views: "31 views",
    avatar:
      "https://business-cambodia.com/cms/assets/86f02077-d25e-4e0b-a668-1805e06401a7?format=webp",
  },
  {
    id: 11,
    image:
      "https://business-cambodia.com/cms/assets/bd361562-ebde-4dc1-aaab-3104d0ae0363?format=webp",
    tag: "កម្សាន្ដ",
    title: "ទោះជាប្រទេសតូចតែ មានទីក្រុងជួបប្រទៈសមុទ្រដ៏ស្អាតបំផុត...",
    author: "Bunthoeun Koem",
    date: "OCTOBER 5 2025",
    views: "22 views",
    avatar:
      "https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a?format=webp",
  },
  {
    id: 12,
    image:
      "https://business-cambodia.com/cms/assets/168e6b27-4048-496a-9749-3c9669aa0f54?format=webp",
    tag: "កម្សាន្ដ",
    title: "តើហេតុអ្វី? សាកលវិទ្យាល័យ ITC ចាប់ផ្តើមបើកវគ្គសិក្សាថ្មី...",
    author: "ឌី ស្រីកញ្ញា",
    date: "OCTOBER 3 2025",
    views: "1.3K views",
    avatar:
      "https://business-cambodia.com/cms/assets/a0a4c4f4-d307-48e0-8262-0634a9319588?format=webp",
  },
];

function HomePage() {
  // បែងចែកទិន្នន័យតាមប្រភេទ
  const newsArticles = articles.filter((a) => a.tag === "ព័ត៌មានថ្មីៗ");
  const techArticles = articles.filter((a) => a.tag === "បច្ចេកវិទ្យា");
  const sportArticles = articles.filter((a) => a.tag === "កីឡា");
  const komsanArticles = articles.filter((a) => a.tag === "កម្សាន្ដ");

  // function render card list
  const renderArticles = (data) => (
    <Row xs={1} md={3} className="g-4">
      {data.map((article) => (
        <Col key={article.id}>
          <Card className="article-card border-0 shadow-sm rounded-4 overflow-hidden h-100">
            <div className="position-relative">
              <Card.Img
                variant="top"
                src={article.image}
                style={{ height: "180px", objectFit: "cover" }}
              />
              {/* <span className="article-tag position-absolute top-0 start-0 bg-danger text-white px-2 py-1 fw-bold">
                {article.tag}
              </span> */}
            </div>

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
  );

  return (
    <Container className="my-5">
      {/* Section 1: ព័ត៌មានថ្មីៗ */}
      <Row className="align-items-start mb-5">
        <Col md={3} className="text-center mb-4">
          <h4 className="fw-bold mb-3">ព័ត៌មានថ្មីៗ</h4>
          <hr
            style={{
              width: "50px",
              margin: "0 auto 20px",
              border: "2px solid #1b1b1b",
            }}
          />
          <Button variant="outline-dark" className="px-4 py-2 fw-semibold rounded-0">
            មើលបន្ថែម
          </Button>
        </Col>
        <Col md={9}>{renderArticles(newsArticles)}</Col>
      </Row>

      {/* Section 2: បច្ចេកវិទ្យា */}
      <Row className="align-items-start">
        <Col md={3} className="text-center mb-4">
          <h4 className="fw-bold mb-3">បច្ចេកវិទ្យា</h4>
          <hr
            style={{
              width: "50px",
              margin: "0 auto 20px",
              border: "2px solid #1b1b1b",
            }}
          />
          <Button variant="outline-dark" className="px-4 py-2 fw-semibold rounded-0">
            មើលបន្ថែម
          </Button>
        </Col>
        <Col md={9}>{renderArticles(techArticles)}</Col>
      </Row>
      {/* Section 3: កីឡា */}
      <Row className="align-items-start">
        <Col md={3} className="text-center mb-4">
          <h4 className="fw-bold mb-3">កីឡា</h4>
          <hr
            style={{
              width: "50px",
              margin: "0 auto 20px",
              border: "2px solid #1b1b1b",
            }}
          />
          <Button variant="outline-dark" className="px-4 py-2 fw-semibold rounded-0">
            មើលបន្ថែម
          </Button>
        </Col>
        <Col md={9}>{renderArticles(techArticles)}</Col>
      </Row>
      {/* Section 4: កម្សាន្ដ */}
      <Row className="align-items-start">
        <Col md={3} className="text-center mb-4">
          <h4 className="fw-bold mb-3">កម្សាន្ដ</h4>
          <hr
            style={{
              width: "50px",
              margin: "0 auto 20px",
              border: "2px solid #1b1b1b",
            }}
          />
          <Button variant="outline-dark" className="px-4 py-2 fw-semibold rounded-0">
            មើលបន្ថែម
          </Button>
        </Col>
        <Col md={9}>{renderArticles(techArticles)}</Col>
      </Row>
    </Container>
  );
}

export default HomePage;
