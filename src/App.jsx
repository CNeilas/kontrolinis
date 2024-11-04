import { Route, Routes } from "react-router-dom"
import NavBar from "./assets/components/NavBar"
import Books from "./assets/components/Books"
import Registration from "./assets/components/Registration"
import Reviews from "./assets/components/Reviews"
import Footer from "./assets/components/Footer"

function App() {

  return (
    <> 
    <NavBar />
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="registration" element={<Registration />}/>
        <Route path="reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
