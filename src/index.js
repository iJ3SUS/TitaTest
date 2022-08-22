import { BrowserRouter, Routes, Route } from "react-router-dom"

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './store'

//PAGES
import Home from './pages/Home'
//import Login from './pages/Login'

//COMPONENTS
import Navbar from "./components/Navbar"


//CSS
import './styles/index.css'


const App = () => {
    return (
        <div className="App">

            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
           
        </div>
    )
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
)

root.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>
)
