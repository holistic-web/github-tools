const { program } = require('commander');
const packageFile = require('./package.json');
const commands = require('./src/commands');

program.version(packageFile.version);

Object.keys(commands).forEach((command) => {
  program.addCommand(commands[command]());
});

module.exports = async () => {
  program.parse(process.argv);
};
program.parse(process.argv);
