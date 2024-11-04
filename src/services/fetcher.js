import { Octokit } from "octokit";

export async function getUserinfo(userName) {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  try {
    const octokit = new Octokit({
      auth: import.meta.env.VITE_GITHUB_TOKEN2,
    });
    const userInfo = await octokit.request(`GET /users/${userName}`, {
      userName:"Kalebb12",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      }, 
    })
  
    return  userInfo
  } catch (error) {
    throw new Error("No User With Name " + userName + " Found")
  }
  
}

export async function getUserRepo(userName){
  try {
    const octokit = new Octokit({
      auth: import.meta.env.VITE_GITHUB_TOKEN,
    });
    const repo = await octokit.request(`GET /users/${userName}/repos`, {
      userName,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  
    return repo
  } catch (error) {
    throw new Error("No User With Name " + userName + " Found")
  }
}