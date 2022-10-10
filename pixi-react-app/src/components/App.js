import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter } from "react-router-dom"
import {Routes,Route} from "react-router";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword"
import Holder from "./holder/Holder";

const logoStyle = {
  textalign: "center",
  backgroundColor: "#F37A24",
  display: "flex",
  justifycontent: "center",
  alignitems: "center",
  width: "100%",
  height: "100%",
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">

        {loading ? (
          <ClimbingBoxLoader
            style={logoStyle}
            color={"#F37A24"}
            loading={loading}
            size={39}
            aria-label="Loading Spinner"
          />
        ):( 
              <BrowserRouter>
                <AuthProvider>
                  <Routes>
                    <Route path="/holder" element={<Holder/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={<Login/>} />
                    <Route path="/forgot-password" element={<ForgotPassword/>} />
                  </Routes>
                </AuthProvider>
              </BrowserRouter>
        )
      }
    </div>
  )
}

export default App;