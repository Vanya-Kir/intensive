import React from 'react';
import { Table } from 'antd';

const url = 'https://jsonplaceholder.typicode.com/posts';

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
    this.state = { user: [], error: ''};
  }

  componentDidMount = async () => {
    let user = [];
    let urlId = '';
    if (this.props.userId) {
      urlId = `?userId=${this.props.userId}`;
    } else {
      urlId = '';
    }
    try {
      const result = await fetch(url + urlId);
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
