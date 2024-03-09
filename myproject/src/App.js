
import './App.css';
import Topnav from './Topnav';
import Foter from './Foter'
import Content from './Content';


// import Navbar from './Navbar';

function App() {
  return (
    <div className="App container">
      {/* <Navbar /> */}
      <Topnav />
      <Content />
      <Foter />
    </div>
  );
}

export default App;
