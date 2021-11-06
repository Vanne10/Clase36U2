var fs = require('fs') //modulo file system
console.log('Abriendo archivo...')

var content = fs.readFileSync('el_quijote.txt', 'utf8')
console.log(content)

console.log('Haciendo otra cosa')
console.log(process.uptime())