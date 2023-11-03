import _ from 'lodash'

export default class UserPresenter {
  constructor(user) {
    this.user = user
  }

  toHash() {
    return _.omit(this.user.toObject(), 'password')
  }
}
