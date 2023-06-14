import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>I identify as Aposta.la</h1>
        </div>
        <a
          href="https://pr-1188.d1gfrv5ovpw117.amplifyapp.com/apostala?ci=1234567"
          referrerPolicy="origin"
        >
          <button
            style={{
              height: '60px',
              width: '350px',
              fontSize: '20px',
            }}
          >
            For tests on FRONT-18 / FRONT-60 QR Connections Task, click me.
          </button>
        </a>
        <a
          href="https://pr-1189.d1gfrv5ovpw117.amplifyapp.com/apostala?ci=1234567"
          referrerPolicy="origin"
        >
          <button
            style={{
              height: '60px',
              width: '350px',
              fontSize: '20px',
              marginTop: '13px',
            }}
          >
            For tests on FRONT-62 Error Re-direction Task, click me.
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
