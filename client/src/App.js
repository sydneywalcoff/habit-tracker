import './App.css';

// components
import Header from './components/Header';
import Greeting from './components/Greeting'
import Tracker from './components/Tracker'
import Footer from './components/Footer'

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      < Header />
      <div className = "main">
        <Greeting/>
        <Tracker/>
      </div>
      < Footer />
    </div>
  );
}

export default App;
