import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import TodayIcon from '@material-ui/icons/Today';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Students from './Tables/Students';
import User from './Tables/User';
import BookIcon from '@material-ui/icons/Book';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

@inject('MainStore')
@observer
class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userId: null };
  }

  // выбранный студент из таблицы
  choiceUser = (param) => {
    this.props.sendValue(<User userId={param} />);
    this.setState({ userId: param });
  };

  buttonArray = [
    {
      text: this.props.MainStore.userFullName,
      icon: <FaceIcon />,
      message: this.props.MainStore.userFullName
        ? this.props.MainStore.userFullName
        : 'ФИО: Кириллов Иван Сергеевич',
    },
    {
      text: 'Группа',
      icon: <GroupIcon />,
      message: 'Группа: ИВТ-13-18',
    },
    {
      text: 'Возраст',
      icon: <TodayIcon />,
      message: 'Возраст: 21 год',
    },
    {
      text: 'Студенты',
      icon: <LocalLibraryIcon />,
      message: <Students choiceUser={this.choiceUser} />,
    },
  ];

  render() {
    const { navItemIndex, onNavChange } = this.props;
    return (
      <div className='navigator'>
        {this.buttonArray.map((button, index) => (
          <div>
            <button
              key={`link-${index}`}
              className='nav__button'
              onClick={onNavChange(index, button.message)}
              style={{
                backgroundColor: index === navItemIndex ? '#c09cb8' : '#f6f6e7',
              }}
            >
              {button.icon}
              {button.text}
            </button>
          </div>
        ))}
        {/* кнопка: курсовая*/}
        <button
          className='nav__button'
          onClick={onNavChange(4, <User userId={this.state.userId} />)}
          style={{
            backgroundColor: 4 === navItemIndex ? '#c09cb8' : '#f6f6e7',
          }}
        >
          <BookIcon />
          Курсовые
        </button>
      </div>
    );
  }
}
export default Navigator;

Navigator.propTypes = {
  navItemIndex: PropTypes.number.isRequired,
  onNavChange: PropTypes.func.isRequired,
  sendValue: PropTypes.func.isRequired,
};
