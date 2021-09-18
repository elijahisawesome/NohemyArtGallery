import './App.css';
import Header from './header.js';
import TopImage from './TopImage.js';
import BottomImage from './BottomImage.js';
import './styles/banners.css';

function App() {
  return (
    <div className="App">
      <TopImage/>
      <Header/>
      <BottomImage/>
    </div>
  );
}

export default App;

//Update banners to swap image when window reaches 1275 in length!!