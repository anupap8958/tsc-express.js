"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Logging {
}
exports.default = Logging;
_a = Logging;
Logging.log = (args) => _a.info(args);
Logging.info = (args) => console.log(chalk_1.default.blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk_1.default.blueBright(args) : args);
Logging.warning = (args) => console.log(chalk_1.default.yellow(`[${new Date().toLocaleString()}] [WARN]`), typeof args === 'string' ? chalk_1.default.yellowBright(args) : args);
Logging.error = (args) => console.log(chalk_1.default.red(`[${new Date().toLocaleString()}] [ERROR]`), typeof args === 'string' ? chalk_1.default.redBright(args) : args);
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
