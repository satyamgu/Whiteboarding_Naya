import React, {useRef, useState} from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
             navigate("/")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

  return (
     <Container
            className="d-flex align-items-center justify-content-center border-0"
            style={{ minHeight: "100vh"}}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4" style={{color: "#4F00C1", textDecoration: 'none'}}>Sign up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Control type="email" placeholder="Email" ref={emailRef} required /><br/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Control type="password" placeholder="Password"  ref={passwordRef} required /><br/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Control type="password" placeholder="Password Confirmation" ref={passwordConfirmRef} required /><br/>
                    </Form.Group><br/>
                    <Button disabled={loading} className="w-100" type="submit" style={{backgroundColor: "#4F00C1", textDecoration: 'none'}}>
                        Sign Up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login" style={{color: "#4F00C1", textDecoration: 'none'}}>Log In</Link>
        </div>
        </div>
     </Container>
   
  )
}
