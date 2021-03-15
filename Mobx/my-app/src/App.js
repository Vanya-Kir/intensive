import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';
import 'antd/dist/antd.css';
import Header from './components/Header';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    message: '',
    navItemIndex: -1,
  };
  // проверка Log in/out
  handleLoginClick = (param) => {
    this.setState({ isLoggedIn: param });
  };
  // вывод сообщения на Dashboard
  sendValue = (param) => {
    this.setState({ message: param });
  };
  onNavChange = (navItemIndex, message) => () => {
    this.setState({ navItemIndex, message });
  };

  render() {
    const { isLoggedIn, navItemIndex, message } = this.state;

    return (
      <div className='app'>
        {this.state.isLoggedIn ? (
          <div className='mainScreen'>
            <Header />
            <Navigator
              sendValue={this.sendValue}
              onNavChange={this.onNavChange}
              navItemIndex={navItemIndex}
            />
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
