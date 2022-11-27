import logo from './logo.svg';
import './App.css';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import WiseSquareWithoutProps from './WiseSquareWithoutProps';
import ExperimentalSquare from './ExpeimentalSquare';
function App() {
  return (
    <div className="App">
      <h1>React Events!!</h1>
      <WiseSquare />
      <br></br>
      <WiseSquareWithoutProps />
      <br></br>
      <ExperimentalSquare />
      <AnnoyingForm />
      <CopyDemo />

    </div>
  );
}

export default App;
