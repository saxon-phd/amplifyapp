import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The journey of 1000 miles begins with a single step.
        </p>
        <a
          className="App-link"
          href="https://republicv.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Republic V
        </a>
      </header>
    </div>
  );
}

export default App;
