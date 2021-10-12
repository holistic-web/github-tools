const commander = require('commander');
const octokit = require('../lib/octokit');

async function listRepos(organisation) {
  const options = {
    sort: 'updated',
    direction: 'desc',
    per_page: 100,
  };
  let repos;
  if (organisation) {
    options.org = organisation;
    repos = await octokit.paginate(octokit.rest.repos.listForOrg, options);
  } else {
    repos = await octokit.paginate(octokit.rest.repos.listForAuthenticatedUser, options);
  }
  const repoNames = repos.map((repo) => repo.name);
  return repoNames;
}

function makeListReposCommand() {
  const listReposCommand = new commander.Command('list-repos');
  listReposCommand
    .description('List all repos for the authenticated user or an organisation')
    .option('-o, --org <org>', 'The organization to list repos for')
    .action(async (options) => {
      const repoNames = await listRepos(options.org);
      console.log(repoNames.join('\n'));
    });
  return listReposCommand;
}
module.exports = makeListReposCommand;
