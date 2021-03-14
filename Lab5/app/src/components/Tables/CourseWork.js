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
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Описание',
    dataIndex: 'body',
    key: 'body',
  },
];
class CourseWork extends React.Component {
  state = {
    doc: [],
    error: '',
  };

  componentDidMount = async () => {
    let docs = [];
    try {
      let result;
      if (this.props.id != undefined) {
        result = await fetch(url + '?userId=' + this.props.id);
      } else {
        result = await fetch(url);
      }
      const docs = await result.json();
      this.setState({
        doc: docs,
      });
    } catch (err) {
      this.setState({
        error: 'Ошибка получения данных',
      });
    }
  };

  render() {
    const { error } = this.state;
    const { doc } = this.state;

    return (
      <div className>
        <h1>Курсовые работы</h1>
        <h2>{error}</h2>
        <div className='table-wrapper'>
          <Table dataSource={doc} columns={columns} size='small' />
        </div>
      </div>
    );
  }
}

export default CourseWork;
