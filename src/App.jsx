import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import History from './pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/his' element={<History/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

