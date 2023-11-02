import chalk from 'chalk'

class OutputType {
  static INFORMATION = 'INFORMATION'
  static SUCCESS = 'SUCCESS'
  static WARNING = 'WARNING'
  static ERROR = 'ERROR'
}

function print(message, outputType) {
  switch (outputType) {
    case OutputType.SUCCESS:
      console.log(chalk.green(message))
      break
    case OutputType.WARNING:
      console.log(chalk.yellow(message))
      break
    case OutputType.ERROR:
      console.log(chalk.red(message))
      break
    default:
      console.log(chalk.white(message))
  }
}

export {
  OutputType,
  print,
}
