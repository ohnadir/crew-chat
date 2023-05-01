import Chat from "./components/Chat"
import Navbar from "./components/Navar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
    </>
  )
}

export default App
