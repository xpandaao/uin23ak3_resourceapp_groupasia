import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from'./components/header.js';
import { Button } from'./components/button.js';
import { MainContent } from'./components/category.js';

function App() {
    return (
        <div className="App">
            <Header />
            <Button />
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/:category" element={<MainContent />} />
            </Routes>
        </div>
    );
}

export default App;
