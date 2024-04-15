import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Mainpage from './components/MainPage/Mainpage'
import BannerPage from './components/BannerPage'
import Citiescont from './components/Citiescont'


 
function App() {
  const [count, setCount] = useState(0)

  return (
   <> 
   
   {/* <Navbar></Navbar>
   <BannerPage></BannerPage>
   <Citiescont></Citiescont>
   <Mainpage></Mainpage>
    <Footer></Footer> 
    <Login></Login>  */}
   {/* <Createcards></Createcards> */}

    </>
  )
}

export default App
