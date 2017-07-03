var minimist = require('minimist')
var lib = require('../lib')

var args = minimist(process.argv.slice(2))

if (args.v || args.version) {
  console.log(require('../package.json').version)
  process.exit()
}

if (!args._.length) {
  console.log()
  console.log('    -v, --version\t' + 'Show current version')
  process.exit()
}

if(args._.indexOf('show') !== -1){
  lib.show()
}
