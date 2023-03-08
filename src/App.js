import logo from './logo.svg';
import './App.css';
import { Header } from'./components/header.js'
import { Button } from'./components/button.js'
import { MainContent } from'./components/mainContent.js'
import './resources.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
      <MainContent />
    </div>
  );
}

export default App;
