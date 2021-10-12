const { Octokit } = require('octokit');
const config = require('../config');

const octokit = new Octokit({
  auth: config.githubAccessToken,
});

module.exports = octokit;
