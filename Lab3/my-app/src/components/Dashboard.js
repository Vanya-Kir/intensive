import React from 'react';

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
        <p className='dashboard__p'>{this.props.message}</p>
      </div>
    );
  }
}
export default Dashboard;
