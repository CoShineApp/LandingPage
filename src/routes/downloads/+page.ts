// GitHub repository owner and name - update this with your actual repo
// You can also set these via environment variables: PUBLIC_GITHUB_OWNER and PUBLIC_GITHUB_REPO
const GITHUB_OWNER = import.meta.env.PUBLIC_GITHUB_OWNER || 'your-username';
const GITHUB_REPO = import.meta.env.PUBLIC_GITHUB_REPO || 'peppi';

export async function load() {
	// Skip fetch if using placeholder values
	if (GITHUB_OWNER === 'your-username' || GITHUB_REPO === 'peppi') {
		return {
			release: null,
			error: 'GitHub repository not configured. Please update GITHUB_OWNER and GITHUB_REPO in src/routes/downloads/+page.ts'
		};
	}

	try {
		const response = await fetch(
			`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`,
			{
				headers: {
					'Accept': 'application/vnd.github.v3+json'
				}
			}
		);

		if (!response.ok) {
			if (response.status === 404) {
				return {
					release: null,
					error: 'No releases found'
				};
			}
			return {
				release: null,
				error: `Failed to fetch release: ${response.status} ${response.statusText}`
			};
		}

		const release = await response.json();
		return {
			release: {
				tag: release.tag_name,
				name: release.name,
				publishedAt: release.published_at,
				body: release.body,
				assets: release.assets.map((asset: any) => ({
					name: asset.name,
					downloadUrl: asset.browser_download_url,
					size: asset.size,
					contentType: asset.content_type
				}))
			}
		};
	} catch (err) {
		console.error('Error fetching release:', err);
		return {
			release: null,
			error: 'Failed to fetch latest release. Please check your internet connection and try again later.'
		};
	}
}

