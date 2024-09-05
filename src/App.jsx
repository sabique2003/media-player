import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import History from './pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/log' element={<Login/>} />
      <Route path='/reg' element={<Register/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/his' element={<History/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App

