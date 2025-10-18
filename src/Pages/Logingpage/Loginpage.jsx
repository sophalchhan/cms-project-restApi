import { Form, Button, Card, Container } from "react-bootstrap";
import "./Logingpage.css";

function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card className="shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4 text-primary">ចូលគណនី</h2>
        <p className="text-center text-muted mb-4">
          សូមបញ្ចូលព័ត៌មានរបស់អ្នកដើម្បីចូលប្រើប្រាស់
        </p>

        <Form>
          {/* Email Field */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>អាសយដ្ឋានអ៊ីមែល</Form.Label>
            <Form.Control type="email" placeholder="បញ្ចូលអាសយដ្ឋានអ៊ីមែល" required />
          </Form.Group>

          {/* Password Field */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>លេខសម្ងាត់</Form.Label>
            <Form.Control type="password" placeholder="បញ្ចូលលេខសម្ងាត់" required />
          </Form.Group>

          {/* Remember Me */}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="ចងចាំខ្ញុំ" />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="w-100">
            ចូលប្រើប្រាស់
          </Button>
        </Form>

        <div className="text-center mt-3">
          <p className="mb-0">
            មិនទាន់មានគណនីមែនទេ?{" "}
            <a href="/register" className="text-decoration-none fw-bold text-primary">
              បង្កើតគណនីថ្មី
            </a>
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default Login;
