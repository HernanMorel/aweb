import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>When I want to feel rowdy, I pretend like I'm Aposta.la.. </h1>
        </div>
        <a
          href="https://pr-1188.d1gfrv5ovpw117.amplifyapp.com/apostala?ci=1234567"
          referrerPolicy="origin"
        >
          <button
            style={{
              height: '60px',
              width: '450px',
              fontSize: '20px',
            }}
          >
            Click Me, Carlos, Rodney, Vale, and last but not least... Abel
            <img src="/public/imageKid.jpg" alt="Kid" />
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
