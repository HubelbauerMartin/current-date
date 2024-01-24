import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toISOString());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date().toISOString());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>⏰</h1>
        <p>Current date and time (ISO format) is: {currentDateTime}</p>
      </header>
    </div>
  );
};

export default App;
