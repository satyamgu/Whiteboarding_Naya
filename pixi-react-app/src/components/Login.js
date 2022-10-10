import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { Login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await Login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to Log in");
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
            <h2 className="text-center mb-4" style={{ color: "#4F00C1" }}>
              Log in to continue
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" style={{ marginBottom: "1em" }}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password" style={{ marginBottom: "1em" }}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <div
                className="w-100 text-center mt-2"
                style={{ marginBottom: "1em" }}
              >
                <Link
                  to="/forgot-password"
                  style={{ color: "#4F00C1", textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                disabled={loading}
                className="w-100"
                type="submit"
                style={{ backgroundColor: "#4F00C1" }}
                onClick={() => navigate("/holder")}
              >
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don’t have an account?{" "}
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
