# Node TS Backend

Simple node application for fetching repo using seach

# Used Library

1. Express
   > For building server and connecting routes [Express](expressjs)
2. cors
   > For protecting corss origin resource sharing process.

# Useful commands

## To install packages

```bash
npm install
or
yarn install
```

## To run the app locally

```bash
npm run dev
or
yarn dev
```

> Once you run above command, the app will run on port 3000. https://localhost:8000/

# API List

1. Search Repos

   > To get all list of repositories on search

   ```
    /api/repositories?search=rajeev&page=1&per_page=25
    method:"GET"
    response:
    {
        "status": "success",
        "repositories": [
            {
                "id": 75396575,
                "node_id": "MDEwOlJlcG9zaXRvcnk3NTM5NjU3NQ==",
                "name": "react",
                "full_name": "duxianwei520/react",
                "private": false,
                "owner": {
                "login": "duxianwei520",
                "id": 3249653,
                "node_id": "MDQ6VXNlcjMyNDk2NTM=",
                "avatar_url": "https://avatars.githubusercontent.com/u/3249653?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/duxianwei520",
                "html_url": "https://github.com/duxianwei520",
                "followers_url": "https://api.github.com/users/duxianwei520/followers",
                "following_url": "https://api.github.com/users/duxianwei520/following{/other_user}",
                "gists_url": "https://api.github.com/users/duxianwei520/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/duxianwei520/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/duxianwei520/subscriptions",
                "organizations_url": "https://api.github.com/users/duxianwei520/orgs",
                "repos_url": "https://api.github.com/users/duxianwei520/repos",
                "events_url": "https://api.github.com/users/duxianwei520/events{/privacy}",
                "received_events_url": "https://api.github.com/users/duxianwei520/received_events",
                "type": "User",
                "site_admin": false
                },
                "html_url": "https://github.com/duxianwei520/react",
                "description": " React+webpack+redux+ant design+axios+less全家桶后台管理框架",
                "fork": false,
                "url": "https://api.github.com/repos/duxianwei520/react",
                "forks_url": "https://api.github.com/repos/duxianwei520/react/forks",
                "keys_url": "https://api.github.com/repos/duxianwei520/react/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/duxianwei520/react/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/duxianwei520/react/teams",
                "hooks_url": "https://api.github.com/repos/duxianwei520/react/hooks",
                "issue_events_url": "https://api.github.com/repos/duxianwei520/react/issues/events{/number}",
                "events_url": "https://api.github.com/repos/duxianwei520/react/events",
                "assignees_url": "https://api.github.com/repos/duxianwei520/react/assignees{/user}",
                "branches_url": "https://api.github.com/repos/duxianwei520/react/branches{/branch}",
                "tags_url": "https://api.github.com/repos/duxianwei520/react/tags",
                "blobs_url": "https://api.github.com/repos/duxianwei520/react/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/duxianwei520/react/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/duxianwei520/react/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/duxianwei520/react/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/duxianwei520/react/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/duxianwei520/react/languages",
                "stargazers_url": "https://api.github.com/repos/duxianwei520/react/stargazers",
                "contributors_url": "https://api.github.com/repos/duxianwei520/react/contributors",
                "subscribers_url": "https://api.github.com/repos/duxianwei520/react/subscribers",
                "subscription_url": "https://api.github.com/repos/duxianwei520/react/subscription",
                "commits_url": "https://api.github.com/repos/duxianwei520/react/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/duxianwei520/react/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/duxianwei520/react/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/duxianwei520/react/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/duxianwei520/react/contents/{+path}",
                "compare_url": "https://api.github.com/repos/duxianwei520/react/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/duxianwei520/react/merges",
                "archive_url": "https://api.github.com/repos/duxianwei520/react/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/duxianwei520/react/downloads",
                "issues_url": "https://api.github.com/repos/duxianwei520/react/issues{/number}",
                "pulls_url": "https://api.github.com/repos/duxianwei520/react/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/duxianwei520/react/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/duxianwei520/react/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/duxianwei520/react/labels{/name}",
                "releases_url": "https://api.github.com/repos/duxianwei520/react/releases{/id}",
                "deployments_url": "https://api.github.com/repos/duxianwei520/react/deployments",
                "created_at": "2016-12-02T13:08:43Z",
                "updated_at": "2021-12-21T13:40:41Z",
                "pushed_at": "2021-04-01T08:25:40Z",
                "git_url": "git://github.com/duxianwei520/react.git",
                "ssh_url": "git@github.com:duxianwei520/react.git",
                "clone_url": "https://github.com/duxianwei520/react.git",
                "svn_url": "https://github.com/duxianwei520/react",
                "homepage": "",
                "size": 2868,
                "stargazers_count": 4414,
                "watchers_count": 4414,
                "language": "JavaScript",
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": true,
                "forks_count": 1590,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 7,
                "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
                },
                "allow_forking": true,
                "is_template": false,
                "topics": [
                "ant-design-pro",
                "antd",
                "babel",
                "es6",
                "es7",
                "react",
                "redux",
                "webpack"
                ],
                "visibility": "public",
                "forks": 1590,
                "open_issues": 7,
                "watchers": 4414,
                "default_branch": "master",
                "score": 1
                },
            ...,
        ]
    }
   ```
