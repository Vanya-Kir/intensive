import React from 'react';
import PropTypes from 'prop-types';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <button
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            backgroundColor: 'red',
          }}
          className='button'
          onClick={() => this.props.handleClick(false)}
        >
          Выйти
        </button>
        {this.props.navItemContent}
      </div>
    );
  }
}

Dashboard.propTypes = {
  navItemContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
