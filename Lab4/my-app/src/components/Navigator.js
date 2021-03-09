import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import TodayIcon from '@material-ui/icons/Today';

const buttonArray = [
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
];
class Navigator extends React.Component {
  render() {
    return (
      <div className='navigator'>
        {buttonArray.map((button, i) => (
          <div>
            <button
              className='nav-button'
              onClick={() => {
                this.props.sendValue(button.message);
              }}
            >
              {button.icon}
              {button.text}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default Navigator;
