import logo from './meme.jpg';
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
          href="https://pr-1203.d1gfrv5ovpw117.amplifyapp.com/apostala?ci=1234567"
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
            For tests on FRONT-20 Finalized Payments, click me.
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
