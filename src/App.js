import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import About from './components/about';

function App() {
  return (

    <div className="App">
      <Intro nome="Gabriel" cargo="Student" cargo2="Future dev"/>
      <About/>
    </div>
  );
}

export default App;
