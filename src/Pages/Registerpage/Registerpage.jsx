import { Form, Button, Card, Container } from "react-bootstrap";
import "./Registerpage.css";

function Register() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <Card className="shadow p-4" style={{ width: "450px" }}>
        <h2 className="text-center mb-4 text-primary">បង្កើតគណនីថ្មី</h2>
        <p className="text-center text-muted mb-4">
          សូមបំពេញព័ត៌មានរបស់អ្នកដើម្បីបង្កើតគណនីថ្មី
        </p>

        <Form>
          {/* Full Name */}
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>ឈ្មោះពេញ</Form.Label>
            <Form.Control type="text" placeholder="បញ្ចូលឈ្មោះពេញ" required />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>អាសយដ្ឋានអ៊ីមែល</Form.Label>
            <Form.Control type="email" placeholder="បញ្ចូលអ៊ីមែល" required />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>លេខសម្ងាត់</Form.Label>
            <Form.Control type="password" placeholder="បញ្ចូលលេខសម្ងាត់" required />
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>បញ្ជាក់លេខសម្ងាត់</Form.Label>
            <Form.Control type="password" placeholder="បញ្ចាក់លេខសម្ងាត់" required />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="w-100">
            បង្កើតគណនី
          </Button>
        </Form>

        <div className="text-center mt-3">
          <p className="mb-0">
            មានគណនីរួចហើយ?{" "}
            <a
              href="/login"
              className="text-decoration-none fw-bold text-primary"
            >
              ចូលគណនី
            </a>
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default Register;
