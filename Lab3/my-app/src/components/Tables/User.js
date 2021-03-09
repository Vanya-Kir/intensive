import React from 'react';
import { Table } from 'antd';

const url = 'https://jsonplaceholder.typicode.com/posts?userId=';

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
    this.state = { user: [], error: '', id: null };
  }

  checkId() {
    if (this.props.userId === null) {
      return this.state.id;
    }
    this.setState({
      id: this.props.userId,
    });
    return this.props.userId;
  }

  componentDidMount = async () => {
    const index = this.checkId();
    let user = [];
    try {
      const result = await fetch(url + index);
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
