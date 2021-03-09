// import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    message: '',
  };
  handleLoginClick = (param) => {
    this.setState({ isLoggedIn: param });
  };
  sendValue = (param) => {
    this.setState({ message: param });
  };

  render() {
    return (
      <div className='app'>
        {this.state.isLoggedIn ? (
          <div className='MainScreen'>
            <Navigator sendValue={this.sendValue} />
            <Dashboard
              handleLoginClick={this.handleLoginClick}
              message={this.state.message}
            />
          </div>
        ) : (
          <LoginForm handleLoginClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

export default App;
