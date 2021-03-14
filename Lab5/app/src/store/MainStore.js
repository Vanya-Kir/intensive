import { observable, action, makeObservable } from 'mobx'

export default class MainStore {
  constructor() {
    makeObservable(this); 
  }

  @observable userFullName = 'Иванов Иван'
  @observable worksCount = [];
  @observable students = [];

  @action func = async () => {
    this.students = await fetch('url');
  }

  @action changeUserName(newUserName) {
    this.userFullName = newUserName;
  }
}
