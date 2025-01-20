import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/about"
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
<>
<BrowserRouter>
<Layout>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
  </Routes>
</Layout>
</BrowserRouter>
</>
  )
}

export default App