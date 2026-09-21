export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
  homepage?: string | null;
}

export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export async function fetchGitHubProfile(username: string): Promise<GitHubProfile | null> {
  if (!username || username === "YOUR_GITHUB_USERNAME") {
    return null;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Error fetching GitHub profile:", err);
    return null;
  }
}

export async function fetchGitHubRepos(username: string, limit = 6): Promise<GitHubRepo[]> {
  if (!username || username === "YOUR_GITHUB_USERNAME") {
    return [];
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error fetching GitHub repos:", err);
    return [];
  }
}
