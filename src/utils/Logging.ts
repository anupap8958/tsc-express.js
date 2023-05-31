import chalk from 'chalk';

export default class Logging {
    public static log = (args: any) => this.info(args);
    public static info = (args: any) => console.log(chalk.blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk.blueBright(args) : args);
    public static warning = (args: any) => console.log(chalk.yellow(`[${new Date().toLocaleString()}] [WARN]`), typeof args === 'string' ? chalk.yellowBright(args) : args);
    public static error = (args: any) => console.log(chalk.red(`[${new Date().toLocaleString()}] [ERROR]`), typeof args === 'string' ? chalk.redBright(args) : args);
}
// export default class Logging {
// public static info = (args: any) =>
    //     console.log(
    //         '\x1b[36m%s\x1b[0m',
    //         `${new Date().toLocaleString()} [INFO]`,
    //         typeof args === 'string' ? args : args
    //     )

    // public static warn = (args: any) =>
    //     console.log(
    //         '\x1b[33m%s\x1b[0m',
    //         `${new Date().toLocaleString()} [INFO]`,
    //         typeof args === 'string' ? args : args
    //     )

    // public static error = (args: any) =>
    //     console.log(
    //         '\x1b[31m',
    //         `${new Date().toLocaleString()} [INFO]`,
    //         typeof args === 'string' ? args : args
    //     )
// }