import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

@inject('MainStore')
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleClick  = () => {
    
    this.props.handleLoginClick(true);
    const newUserName = this.input.current.value;
    this.props.MainStore.changeUserName(newUserName);
    
  };
  render() {
    return (
      <div className='logForm'>

        <form>
        <button onClick={this.handleClick } className='bnt__input'>
          Войти
        </button>
          <label>
            <input
              className='input'
              type='text'
              name='name'
              placeholder='Введите ваше имя'
              ref={this.input}
            />
          </label>
        </form>
      </div>
    );
  }
}
export default LoginForm;
LoginForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
