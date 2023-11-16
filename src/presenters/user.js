import _ from 'lodash'

export default class UserPresenter {
  constructor(user) {
    this.user = user
  }

  toJsonData() {
    let data = _.omit(this.user.toObject(), 'password', 'updated_at', '_id')
    data.id = this.user._id
    return data
  }
}
