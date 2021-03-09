import React from 'react';
import { Table } from 'antd';

const url = 'https://jsonplaceholder.typicode.com/users';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'is',
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

class Students extends React.Component {
  state = {
    users: [],
    error: '',
  };

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

  render() {
    const { error, users } = this.state;
    return (
      <div>
        <div className='students'></div>
        <p>Студенты</p>
        <p>{error}</p>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                this.props.choiceUser(record.id);
              },
            };
          }}
          dataSource={users}
          columns={columns}
        />
      </div>
    );
  }
}
export default Students;
