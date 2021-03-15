import { observable, action, makeObservable } from 'mobx';

export default class MainStore {
  constructor() {
    makeObservable(this);
  }

  @observable userFullName = '';
  @observable students = new Set();

  @action func = async () => {
    this.students = await fetch('url');
  };

  @action changeUserName(newUserName) {
    this.userFullName = newUserName;
  }
  @action selectedRowKeys(number) {
    this.students.add(number);
  }
  @action studentsSize() {
    return this.students.size;
  }
}
