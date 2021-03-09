import React from 'react';

class LoginForm extends React.Component {
  handleClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(true);
  };
  render() {
    return (
      <div className='logForm'>
        <button onClick={this.handleClick} className='bnt__input'>
          Войти
        </button>
        <form>
          <label>
            <input className='input' type='text' name='name' />
          </label>
          {/* <input type='submit' value='Отправить' /> */}
        </form>
      </div>
    );
  }
}
export default LoginForm;
