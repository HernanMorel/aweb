import logo from './clos.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Aposta.la tests</h1>
        </div>

        <a
          href="https://pr-1242.d1gfrv5ovpw117.amplifyapp.com/apostala?ci=1234567"
          referrerPolicy="origin"
        >
          <button
            style={{
              height: '60px',
              width: '480px',
              fontSize: '20px',
              marginTop: '15px',
            }}
          >
            Solo para Carlos
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
