import React from 'react';
import { Table } from 'antd';
const url = 'https://jsonplaceholder.typicode.com/users';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
  },
];
class Students extends React.Component {
  state = {
    stud: [],
    error: '',
  };

  componentDidMount = async () => {
    try {
      const result = await fetch(url);
      const studs = await result.json();
      this.setState({
        stud: studs,
      });
    } catch (err) {
      this.setState({
        error: 'Ошибка получения данных',
      });
    }
  };

  render() {
    const { error } = this.state;
    const { stud } = this.state;
    return (
      <div>
        <h1>Список Студентов</h1>
        <h2>{error}</h2>
        <div className='table-wrapper'>
          <Table
            dataSource={stud}
            columns={columns}
            size='small'
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  this.props.setUserId(record.id, true);
                },
              };
            }}
          />
        </div>
      </div>
    );
  }
}

export default Students;
