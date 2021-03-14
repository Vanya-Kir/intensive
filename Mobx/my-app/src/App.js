import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';
import 'antd/dist/antd.css';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    message: '',
  };
  // проверка Log in/out
  handleLoginClick = (param) => {
    this.setState({ isLoggedIn: param });
  };
  // вывод сообщения на Dashboard
  sendValue = (param) => {
    this.setState({ message: param });
  };

  render() {
    return (
      <div className='app'>
        {this.state.isLoggedIn ? (
          <div className='mainScreen'>
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
