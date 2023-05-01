import Chat from "./components/Chat"
import Navbar from "./components/Navar"
import 'antd/dist/antd.min.css'
import { Routes, Route } from "react-router-dom"
import Login from "./page/Authentication/login"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
