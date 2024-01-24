import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [date, setDate] = useState<string>();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      const now = new Date();
      setDate(now.toDateString());
      setHour(now.getHours());
      setMinute(now.getMinutes());
      setSecond(now.getSeconds());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>⏰</h1>
        <p className="date">{date}</p>
        <div className="time">
          <span className="hour">{hour?.toString().padStart(2, '0')}</span>
          <span className="colonhm colon">:</span>
          <span className="minute">{minute?.toString().padStart(2, '0')}</span>
          <span className="colonms colon">:</span>
          <span className="second">{second?.toString().padStart(2, '0')}</span>
        </div>
      </header>
    </div>
  );
};

export default App;
