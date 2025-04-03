export const updateGitHubTheme = async (theme: string) => {
  try {
    const response = await fetch('/api/github/update-theme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme })
    });
    
    if (!response.ok) throw new Error('Failed to update theme on GitHub');
    return await response.json();
  } catch (error) {
    console.error('GitHub update error:', error);
    throw error;
  }
};
