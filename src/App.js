import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Shop from './pages/Shop'



function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Shop} />
        </BrowserRouter>
    );
}

export default App;
