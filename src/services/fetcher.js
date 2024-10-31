import { Octokit } from "octokit";

export async function getUserinfo(userName) {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN2,
  });
  const userInfo = await octokit.request(`GET /users/${userName}`, {
    userName:"Kalebb12",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return  userInfo
  
}

export async function getUserRepo(userName){
  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
  });
  const repo = await octokit.request(`GET /users/${userName}/repos`, {
    userName:"Kalebb12",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return repo
}