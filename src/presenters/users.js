import UserPresenter from './user.js'

export default class UsersPresenter {
  constructor(users) {
    this.users = users
  }

  toJsonData() {
    return this.users.map(user => new UserPresenter(user).toJsonData())
  }
}
