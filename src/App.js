import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>I'm pretending to be Aposta.la</h1>
        </div>
        <a
          href="https://pr-1176.d1gfrv5ovpw117.amplifyapp.com/apostala?ci=1234567"
          referrerPolicy="origin"
        >
          <button
            style={{
              height: '60px',
              width: '450px',
              fontSize: '20px',
            }}
          >
            Click Me, Carlos, Rodney, Vale, and last but not least... Abel 🙏🏼I
            shall be the vector to fulfill your gambling vice.{' '}
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
