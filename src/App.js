import logo from './logo.svg';
import './App.css';
import Myroute from './components/Myroute';
import Mynavigation from './components/Mynavigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Mynavigation />
        <Myroute />
      </BrowserRouter>

    </div>
  );
}

export default App;
