module.exports = {
  githubAccessToken: process.env.GITHUB_ACCESS_TOKEN,
};

if (!module.exports.githubAccessToken) {
  throw new Error('GITHUB_ACCESS_TOKEN is not set');
}
