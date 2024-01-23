import './App.css';
import React from 'react';

class App extends React.Component {
  number!: NodeJS.Timeout;

  state = {
    currentDateTime: new Date().toISOString(),
  };

  componentDidMount() {
    this.number = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.number);
  }

  tick() {
    this.setState({
      currentDateTime: new Date().toISOString(),
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>⏰</h1>
          <p>Current date and time (ISO format) is: {this.state.currentDateTime}</p>
        </header>
      </div>
    );
  }
}

export default App;
