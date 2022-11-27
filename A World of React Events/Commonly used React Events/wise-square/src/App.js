import logo from './logo.svg';
import './App.css';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import WiseSquareWithoutProps from './WiseSquareWithoutProps';
function App() {
  return (
    <div className="App">
      <h1>React Events!!</h1>
      <WiseSquare />
      <br></br>
      <WiseSquareWithoutProps />
      <AnnoyingForm />
      <CopyDemo />

    </div>
  );
}

export default App;
