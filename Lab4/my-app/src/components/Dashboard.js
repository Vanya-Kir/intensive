import React from 'react';
// import Navigator from './Navigator';
class Dashboard extends React.Component {
  handleClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(false);
  };

  render() {
    return (
      <div className='dashboard'>
        <button onClick={this.handleClick} className='bnt__input'>
          Выйти
        </button>
        <p className='input'>{this.props.message}</p>
      </div>
    );
  }
}
export default Dashboard;
