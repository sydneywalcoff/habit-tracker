import './App.css';

// components
import Header from './components/Header';
import Greeting from './components/Greeting'
import Tracker from './components/Tracker'

function App() {
  return (
    <>
      < Header />
      <div className = "main">
        <Greeting/>
        <Tracker/>
      </div>
    </>
  );
}

export default App;
