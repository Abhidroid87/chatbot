import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { theme } = req.body;
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_REPO_OWNER;
  const repo = process.env.GITHUB_REPO_NAME;

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/theme.json`, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const data = await response.json();
    const content = Buffer.from(JSON.stringify({ theme }, null, 2)).toString('base64');

    await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/theme.json`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Update theme preference',
        content,
        sha: data.sha,
      })
    });

    res.status(200).json({ message: 'Theme updated on GitHub' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update theme on GitHub' });
  }
}
