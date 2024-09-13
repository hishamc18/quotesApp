import React from 'react';
import './App.css';
import QuotesApp from './Components/QuotesApp.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Quote List</h1>
            </header>
            <QuotesApp />
        </div>
    );
}

export default App;