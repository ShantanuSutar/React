import logo from './logo.svg';
import Game from './Game';
import './App.css';
import Demo from './Demo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
        <Demo animal="Bobcat" food="Pineapple" />
      </header>
    </div>
  );
}
export default App;
