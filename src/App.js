import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Register, LandingPage, Home } from "./pages";
import { keepLoged } from "./state/auth/authReducer";
import { useDispatch } from "react-redux";
import { Chatc, ProtectRoute } from "./components";


function App() {
  const navigate = useNavigate()
  const dispath = useDispatch()
 
  useEffect(()=>{
     if(JSON.parse(localStorage.getItem('auth'))?.token){
        dispath(keepLoged())
        navigate('/home')
     }
  }, [])

  return (
    <div className="App">
          <Routes>
                 <Route  path="/" element={<LandingPage />} />
                 <Route  path="/login" element={<Login />} />
                 <Route  path="/register" element={<Register />} />
                 <Route  path="/chat" element={<Chatc />} />

                 <Route element={<ProtectRoute />} >
                      <Route  path="/home" element={<Home />} />
                 </Route>
          </Routes>
    </div>
  );
}

export default App;