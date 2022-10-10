import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center border-0"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2
              className="text-center mb-4"
              style={{ color: "#4F00C1", textDecoration: "none" }}
            >
              Password Reset
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
                <br />
              </Form.Group>
              <Button
                disabled={loading}
                className="w-100"
                type="submit"
                style={{ backgroundColor: "#4F00C1", textDecoration: "none" }}
              >
                Reset Password
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link
                to="/login"
                style={{ color: "#4F00C1", textDecoration: "none" }}
              >
                Login
              </Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account?{" "}
          <Link
            to="/signup"
            style={{ color: "#4F00C1", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </Container>
  );
}
