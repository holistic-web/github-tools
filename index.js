const { program } = require('commander');
const packageFile = require('./package.json');
const commands = require('./src/commands');

program.version(packageFile.version);

Object.keys(commands).forEach((command) => {
  program.addCommand(commands[command]());
});

program.parse(process.argv);

module.exports = async () => {
  program.parse(process.argv);
};
