import React from 'react';
import axios from 'axios';
import { Table } from 'antd';

const url = 'Students/GetWorks';
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
    this.state = { user: [], error: '', title: '', body: '' };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axios.post('Students/SimplePost', {
      userId: this.props.userId,
      title: this.state.title,
      body: this.state.body,
    });

    this.componentDidMount();
  };

  componentDidMount = async () => {
    let user = [];
    let id;
    if (this.props.userId){
      id =`?id=${this.props.userId}`
    }
    else{
      id = `?id=-1`
    }
    try {
      const result = await fetch(url + id);
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
    const { error, title, body } = this.state;
    return (
      <div className='user'>
        Курсовые
        <p>{error}</p>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type='text'
              name='title'
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type='text'
              name='body'
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type='submit'> Добавить </button>
        </form>
        <Table dataSource={this.state.user} columns={columns} />
      </div>
    );
  }
}
export default User;
