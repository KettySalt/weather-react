import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from react!!!</h1>
        <Weather city="Alicante" />
      </header>
    </div>
  );
}

export default App;
