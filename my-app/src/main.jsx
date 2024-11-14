import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    {/* <Greeting name = "Ashish" age={30}/>
    <Greeting name = "Rohit" age={20}/>
    <Greeting name = "Ajay"/>
    <Greeting /> */}
    <Footer />
  </StrictMode>
)
