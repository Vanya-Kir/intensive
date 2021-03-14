import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

@inject('MainStore')
class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.input = React.createRef();
    console.log(this.input);
  }

  handleClick = () => {
    const newUserName = this.input.current.value;
    this.props.MainStore.changeUserName(newUserName)
    this.props.handleClick(true);

  };

  render() {
    return (
      <div className='loginForm'>
        <input type='text' placeholder='Введите ваше имя' ref={this.input}/>
        <button
          style={{
            width: '100%',
          }}
          className='button'
          type='submit'
          onClick={this.handleClick}
        >
          Войти
        </button>
      </div>
    );
  }
}

export default LoginForm

LoginForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
