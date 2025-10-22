// ArticleDetail.js
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./ArticleDetail.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch article details
  useEffect(() => {
    fetch(`http://localhost:4000/articles/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Article not found!");
        return response.json();
      })
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleBack = () => {
    navigate(-1);
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
        <Container>
          <h4>មានបញ្ហា​ក្នុង​ការ​ទាញ​ទិន្នន័យ៖ {error}</h4>
          <Button variant="primary" onClick={handleBack} className="mt-3">
            ត្រឡប់ក្រោយ
          </Button>
        </Container>
      </div>
    );

  if (!article) return null;

  return (
    <Container className="my-5 article-detail-page">
      {/* Back Button */}
      <Row className="mb-4">
        <Col>
          <Button variant="outline-secondary" onClick={handleBack} className="back-button">
            ← ត្រឡប់ក្រោយ
          </Button>
        </Col>
      </Row>

      {/* Article Header */}
      <Row className="mb-4">
        <Col>
          <div className="article-header">
            <small className="article-tag-badge text-primary bg-light px-3 py-2 rounded">
              #{article.tag}
            </small>
            <h1 className="article-title-main fw-bold mt-3">{article.title}</h1>
            <div className="article-meta-main mt-3">
              <div className="author-info-main">
                <img
                  src={article.avatar}
                  alt={article.author}
                  width="60"
                  height="60"
                  className="rounded-circle me-3"
                />
                <div>
                  <h6 className="fw-bold mb-1">{article.author}</h6>
                  <small className="text-muted">
                    {article.date} • {article.views} views
                  </small>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Featured Image */}
      <Row className="mb-5">
        <Col>
          <img
            src={article.image}
            alt={article.title}
            className="article-featured-image"
          />
        </Col>
      </Row>

      {/* Article Content */}
      <Row>
        <Col lg={8} className="mx-auto">
          <div className="article-content-main">
            <div className="content-section">
              <h4>សារសំខាន់</h4>
              <p>
                នេះគឺជាអត្ថបទពេញលេញអំពី <strong>{article.title}</strong>។ 
                អត្ថបទនេះផ្តល់នូវព័ត៌មានលម្អិត និងការវិភាគយ៉ាងជ្រៅជ្រះអំពីប្រធានបទដែលអ្នកកំពុងអាន។
              </p>
            </div>

            <div className="content-section">
              <h4>ព័ត៌មានលម្អិត</h4>
              <p>
                ក្នុងអត្ថបទនេះ យើងនឹងពិភាក្សាអំពីគុណសម្បត្តិ និងអត្ថប្រយោជន៍ផ្សេងៗ 
                ដែលទាក់ទងនឹងប្រធានបទដែលកំពុងត្រូវបានអ្នកអាន។ យើងនឹងផ្តល់ជូននូវ 
                ការវិភាគ ការពន្យល់ និងឧទាហរណ៍ជាក់ស្តែងដើម្បីធ្វើឲ្យអ្នកអានងាយស្រួលយល់។
              </p>
            </div>

            <div className="content-section">
              <h4>ការវិភាគ</h4>
              <p>
                ការសិក្សានិងការស្រាវជ្រាវបានបង្ហាញថា ប្រធានបទនេះមានសារៈសំខាន់ខ្លាំងណាស់ 
                ក្នុងការអភិវឌ្ឍ និងការរីកចម្រើនផ្សេងៗ។ យើងសង្ឃឹមថាអត្ថបទនេះនឹងផ្តល់ជូន 
                អ្នកអាននូវចំណេះដឹងថ្មីៗ និងការយល់ដឹងជ្រៅជ្រះអំពីប្រធានបទនេះ។
              </p>
            </div>

            <div className="quote-section">
              <blockquote className="article-quote">
                <p>
                  "អត្ថបទនេះផ្តល់នូវព័ត៌មានដ៏មានតម្លៃ និងការវិភាគដ៏ជ្រៅជ្រះ 
                  ដែលអាចជួយដល់អ្នកអានក្នុងការយល់ដឹងប្រធានបទនេះបានយ៉ាងល្អ។"
                </p>
              </blockquote>
            </div>

            <div className="content-section">
              <h4>សេចក្តីសន្និដ្ឋាន</h4>
              <p>
                សូមចុចរក្សាទុក ឬចែករំលែកអត្ថបទនេះទៅកាន់មិត្តភក្តិ និងក្រុមគ្រួសារ 
                ដើម្បីជួយផ្សព្វផ្សាយចំណេះដឹងដ៏មានតម្លៃនេះ។
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Article Stats */}
      <Row className="mt-5">
        <Col>
          <div className="article-stats-main">
            <div className="stat-item-main">
              <span className="stat-number-main">1.2K</span>
              <span className="stat-label-main">ចំនួនអ្នកអាន</span>
            </div>
            <div className="stat-item-main">
              <span className="stat-number-main">45</span>
              <span className="stat-label-main">ចំនួនដងចែករំលែក</span>
            </div>
            <div className="stat-item-main">
              <span className="stat-number-main">23</span>
              <span className="stat-label-main">ចំនួនមតិ</span>
            </div>
          </div>
        </Col>
      </Row>

      {/* Action Buttons */}
      <Row className="mt-4">
        <Col className="text-center">
          <div className="action-buttons">
            <Button variant="outline-primary" size="lg" className="me-3 action-btn">
              👍 ចូលចិត្ត
            </Button>
            <Button variant="outline-secondary" size="lg" className="me-3 action-btn">
              🔗 ចែករំលែក
            </Button>
            <Button variant="outline-info" size="lg" className="action-btn">
              💾 រក្សាទុក
            </Button>
          </div>
        </Col>
      </Row>

      {/* Related Articles Section */}
      <Row className="mt-5">
        <Col>
          <div className="related-articles">
            <h3 className="mb-4">អត្ថបទពាក់ព័ន្ធ</h3>
            <div className="related-grid">
              <div className="related-item">
                <small className="text-primary">#{article.tag}</small>
                <h6>អត្ថបទពាក់ព័ន្ធផ្សេងទៀតនៅក្នុងប្រភេទនេះ</h6>
                <small className="text-muted">អានបន្ថែម →</small>
              </div>
              <div className="related-item">
                <small className="text-primary">#{article.tag}</small>
                <h6>អត្ថបទស្រដៀងគ្នាដែលអ្នកអាចចាប់អារម្មណ៍</h6>
                <small className="text-muted">អានបន្ថែម →</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetail;