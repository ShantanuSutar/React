import logo from './logo.svg';
import Game from './Game';
import './App.css';
import Demo from './Demo';
import Rando from './Rando';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rando maxNum={7} />
      </header>
    </div>
  );
}
export default App;
