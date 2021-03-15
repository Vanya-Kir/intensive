import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import TodayIcon from '@material-ui/icons/Today';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Students from './Tables/Students';
import User from './Tables/User';
import BookIcon from '@material-ui/icons/Book';

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
      text: 'ФИО',
      icon: <FaceIcon />,
      message: 'ФИО: Кириллов Иван Сергеевич',
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
    return (
      <div className='navigator'>
        {this.buttonArray.map((button, i) => (
          <div>
            <button
              className='nav__button'
              onClick={() => {
                this.props.sendValue(button.message);
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
          onClick={() => {
            this.props.sendValue(<User userId={this.state.userId} />);
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
