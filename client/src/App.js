import './App.css';

// components
import Header from './components/Header';
import Greeting from './components/Greeting'

function App() {
  return (
    <>
      < Header />
      <div className = "main">
        <Greeting/>
      </div>
    </>
  );
}

export default App;
