import { print, OutputType } from '../helpers/print.js'

export default class StandardError extends Error {
  constructor(messsage) {
    super(messsage)
    print(messsage, OutputType.ERROR)
  }
}
