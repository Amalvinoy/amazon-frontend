import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'
import AppliancesHome from './pages/AppliancesHome.jsx'
function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/appliances' element={<AppliancesHome />} />
      </Routes>
    </>
  )
}

export default App
