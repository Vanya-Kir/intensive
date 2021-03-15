import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import Drawer, { getLinks } from './components/Drawer';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import Header from './components/Header';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    navItemIndex: -1,
    navItemContent: '',
    userId: 0
  };

  onLoginFormClick = (isLogin) => {
    this.setState({ isLoggedIn: isLogin });
  };

  onNavChange = (navItemIndex, navItemContent) => () => {
    this.setState({ navItemIndex, navItemContent });
  };

  setUserId = (userId, needChangeNavigator) => {
    this.setState({ userId });

    if (needChangeNavigator) {
      this.setState({ 
        navItemIndex: getLinks().length
      })
    }
  };

  render() {
    const { isLoggedIn, navItemIndex, navItemContent } = this.state;

    return (
      <div className='App'>
        <>
          {isLoggedIn ? (
            <>
              <Header />
              <Drawer
                setUserId={this.setUserId}
                onNavChange={this.onNavChange}
                navItemIndex={navItemIndex}
                userId={this.state.userId}
              />
              <Dashboard
                handleClick={this.onLoginFormClick}
                navItemContent={navItemContent}
              />
            </>
          ) : (
            <LoginForm handleClick={this.onLoginFormClick} />
          )}
        </>
      </div>
    );
  }
}

export default App;
