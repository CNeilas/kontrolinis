import { Route, Routes } from "react-router-dom"
import NavBar from "./assets/components/NavBar"
import Books from "./assets/components/Books"
import Registration from "./assets/components/Registration"

function App() {

  return (
    <> 
    <NavBar />
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="registration" element={<Registration />}/>
        <Route path="reviews" />
      </Routes>
    </>
  )
}

export default App
