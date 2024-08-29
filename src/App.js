
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Recipes from './pages/Recipes';
import Planner from './pages/Planner';
import '@splidejs/react-splide/css';

function App() {
  
  return ( 
    
    <div className="App">
     <Router>
        <Navbar />
        <Routes>
            <Route path ='/' element={<Home />}/>
            <Route path='/weekly_planner' element={<Planner />}/>
            <Route path='/recipes_search' element={<Recipes />}/>
        </Routes>   
            <Footer />
    </Router>
    </div>
  )
}

export default App;
