import './App.css';
import Header from './header.js';
import TopImage from './TopImage.js';
import BottomImage from './BottomImage.js';
import './banners.css';

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