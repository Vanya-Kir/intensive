import React from 'react';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('MainStore')
@observer
class Header extends React.Component {
  render() {
    const { MainStore } = this.props;

    return (
      <div className='headerComponent'>
        <h2>{MainStore.userFullName}</h2>
        <h1 className='headerMessage'>
          Проверенно курсовых: {MainStore.students.size}
        </h1>
      </div>
    );
  }
}

export default Header;
