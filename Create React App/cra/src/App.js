import logo from './logo.svg';
import './App.css';
import Dog from './Dog';
function App() {
  return (
    <div className="App">
      <div>
        <Dog />
      </div>
      <div>
        I am another div, not in dog component
      </div>
    </div>
  );
}

export default App;
