import "./Styles/App.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"


const App = () => {
  return (
    <div>
        <Router>
            <Header></Header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/> 
                   
                    <Route path="*" element={<div> page not found</div>}/> 
                </Routes>
        </Router>
    </div>
  ) 
}

export default App