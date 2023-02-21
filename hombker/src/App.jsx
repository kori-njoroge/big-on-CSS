import './App.css';
import Body from './components/body';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <div className="appNav">
        <Navbar />
      </div>
      <div className="applicationcontent">
        <Body />
      </div>
    </div>
  );
}

export default App;
