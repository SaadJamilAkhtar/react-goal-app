import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from "./components/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <>
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                    </Routes>
                </div>
            </Router>
            <ToastContainer/>
        </>

    );
}

export default App;
