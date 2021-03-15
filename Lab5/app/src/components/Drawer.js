import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PropTypes from 'prop-types';
import Students from './Tables/Students';
import CourseWork from './Tables/CourseWork';
import { inject } from 'mobx-react';

export const getLinks = (props) => [
  {
    text: props ? props.MainStore.userFullName : 'Имя пользователя',
    content: 'Кириллов Иван',
    icon: <PersonIcon />,
  },
  {
    text: 'Группа',
    content: 'ИВТ-13-18',
    icon: <GroupIcon />,
  },
  {
    text: 'Возраст',
    content: '21',
    icon: <DateRangeIcon />,
  },
  {
    text: 'Студенты',
    icon: <GroupIcon />,
    content: <Students setUserId={props && props.setUserId} />,
  },
  {
    text: 'Курсовые',
    icon: <GroupIcon />,
    content: <CourseWork userId={props.userId}/>,
  },
];

@inject('MainStore')
class Drawer extends React.Component {
  render() {
    const { navItemIndex, onNavChange } = this.props;
    return (
      <div className='drawer'>
        {getLinks(this.props).map((link, ind) => (
          <div
            key={`link-${ind}`}
            className='drawer-links'
            onClick={onNavChange(ind, link.content)}
            style={{ backgroundColor: ind === navItemIndex ? 'red' : 'green' }}
          >
            <button className='button'>
              {link.icon}
              <span className='button-text'>{link.text}</span>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Drawer;

Drawer.propTypes = {
  navItemIndex: PropTypes.number.isRequired,
  onNavChange: PropTypes.func.isRequired,
  setUserId: PropTypes.func.isRequired,
};
