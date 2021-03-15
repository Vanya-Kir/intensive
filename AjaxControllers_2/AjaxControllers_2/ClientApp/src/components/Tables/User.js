import React from 'react';
import { Table } from 'antd';

const url = 'Students/GetWorks?id=';

const columns = [
  {
    title: 'userId',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'title',
    dataIndex: 'title',
  },
  {
    title: 'body',
    dataIndex: 'body',
  },
];

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [], error: '' };
  }

  componentDidMount = async () => {
    let user = [];
    try {
      const result = await fetch(url + this.props.userId);
      user = await result.json();
    } catch (err) {
      this.setState({
        errors: 'Ошибка получения данных',
      });
    }

    this.setState({
      user,
    });
  };

  render() {
    const { error, user } = this.state;
    return (
      <div className='user'>
        Курсовые
        <p>{error}</p>
        <Table dataSource={user} columns={columns} />
      </div>
    );
  }
}
export default User;
