# Github Tools
CLI that makes it easier to work with github. Powered by [commander](https://www.npmjs.com/package/commander) and [octokit](https://www.npmjs.com/package/octokit).

## Usage
Install this package globally with
```
npm install -g @holistic-web/github-tools
```

or use it directly with npx
```
npx @holistic-web/github-tools list-repos --org holistic-web
```

## Commands
### list-repos
List all repos for the authenticated user or an organisation
| **option**         | **Description**                    |
|--------------------|------------------------------------|
| `-o, --org <org>'` | The organization to list repos for |

## Configuration
| **Environment Variable** | **Description**                      |
|--------------------------|--------------------------------------|
| `GITHUB_ACCESS_TOKEN`    | Your github access token (see below) |

### Github Personal Access Token Scopes
Personal access tokens in github are created here: https://github.com/settings/tokens/new. When creating a token you need to provide a scope. Here are the scopes required for each command, add whichever you'd like to use.

| **Command**  | **Scopes** |
|--------------|------------|
| `list-repos` | `repo`     |

### Publish Changes
This project automatically publishes a new version to https://www.npmjs.com/package/@holistic-web/github-tools on merge to the master branch. It requires the secret `NPM_TOKEN` to be set in github for this repository.