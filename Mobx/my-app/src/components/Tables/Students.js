import React from 'react';
import { Table, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import GradeIcon from '@material-ui/icons/Grade';
import { CheckCircleTwoTone } from '@ant-design/icons';

const url = 'https://jsonplaceholder.typicode.com/users';

@inject('MainStore')
@observer
class Students extends React.Component {
  state = {
    users: [],
    error: '',
  };

  columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'is',
      render: (fila) =>
        this.props.MainStore.students.has(fila) ? (
          <CheckCircleTwoTone twoToneColor='#52c41a' />
        ) : (
          <GradeIcon />
        ),
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'city',
      dataIndex: 'address',
      render: (address) => `${address.city}`,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'website',
      dataIndex: 'website',
    },
    {
      title: 'company',
      dataIndex: 'company',
      render: (company) => `${company.name}`,
    },
  ];

  componentDidMount = async () => {
    let users = [];
    try {
      const result = await fetch(url);
      users = await result.json();
    } catch (err) {
      this.setState({
        errors: 'Ошибка получения данных',
      });
    }

    this.setState({
      users,
    });
  };
  checkTabStudent =(number)=>{
    return this.props.MainStore.students.has(number)
  }

  render() {
    const { error, users } = this.state;
    return (
      <div>
        <div className='students'></div>
        Студенты
        {error}
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                this.props.choiceUser(record.id);
                this.props.MainStore.selectedRowKeys(record.id);
                console.log(this.props.MainStore.students);
              },

              className: `tab__${this.checkTabStudent(record.id)} `,
            };
          }}
          dataSource={users}
          columns={this.columns}
        />
      </div>
    );
  }
}
export default Students;
