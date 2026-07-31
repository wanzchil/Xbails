'use strict'

const chalk = require("chalk");

console.log(chalk.white(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`));

// Mix warna untuk bagian bawah (gradasi lembut)
console.log(
  chalk.hex('#d7a1ff').italic('     T H A N K S   F O R   U S I N G\n') +
  chalk.hex('#a78bfa').italic('           M Y   B A I L E Y S ♡\n\n') +
  chalk.hex('#89CFF0').italic('     last updated • 31 Juli 2026\n') +
  chalk.hex('#c084fc').italic('     Modification by @WanzzWangsaf\n') +
  chalk.hex('#a78bfa').italic('     Channel telegram: @wanznotdev\n\n') +
  chalk.hex('#d7a1ff').italic('          ⋆ ˚ ✧ ₊ ˚ ෆ\n')
);

console.log(chalk.white(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`));
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k
				var desc = Object.getOwnPropertyDescriptor(m, k)
				if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k]
						}
					}
				}
				Object.defineProperty(o, k2, desc)
			}
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k
				o[k2] = m[k]
			})
var __exportStar =
	(this && this.__exportStar) ||
	function (m, exports) {
		for (var p in m)
			if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p)
	}
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
exports.makeWASocket = void 0
const index_1 = __importDefault(require('./Socket/index'))
exports.makeWASocket = index_1.default
__exportStar(require('../WAProto/index.js'), exports)
__exportStar(require('./Utils/index'), exports)
__exportStar(require('./Types/index'), exports)
__exportStar(require('./Defaults/index'), exports)
__exportStar(require('./WABinary/index'), exports)
__exportStar(require('./WAM/index'), exports)
__exportStar(require('./WAUSync/index'), exports)
__exportStar(require('./Store/index'), exports)
exports.default = index_1.default
