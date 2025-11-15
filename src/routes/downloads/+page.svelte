<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function formatFileSize(bytes: number): string {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
	}

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function getPlatformFromAsset(name: string): string {
		if (name.includes('.exe') || name.includes('windows') || name.includes('win')) {
			return 'Windows';
		}
		if (name.includes('.dmg') || name.includes('macos') || name.includes('mac')) {
			return 'macOS';
		}
		if (name.includes('.AppImage') || name.includes('linux') || name.includes('.deb') || name.includes('.rpm')) {
			return 'Linux';
		}
		return 'Unknown';
	}

	function getAssetIcon(platform: string): string {
		switch (platform) {
			case 'Windows':
				return '🪟';
			case 'macOS':
				return '🍎';
			case 'Linux':
				return '🐧';
			default:
				return '📦';
		}
	}
</script>

<svelte:head>
	<title>Downloads - Peppi</title>
	<meta name="description" content="Download the latest version of Peppi - Screen Recording for Melee" />
</svelte:head>

<main class="min-h-screen bg-background">
	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Downloads</h1>
			<p class="mt-6 text-xl text-muted-foreground">
				Get the latest version of Peppi
			</p>
		</div>
	</section>

	<Separator />

	<!-- Latest Release Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-4xl">
			{#if data.release}
				<Card>
					<CardHeader>
						<div class="flex items-center justify-between">
							<div>
								<CardTitle class="text-2xl">{data.release.name || data.release.tag}</CardTitle>
								<CardDescription class="mt-2">
									Released on {formatDate(data.release.publishedAt)}
								</CardDescription>
							</div>
							<Badge variant="secondary" class="text-sm px-3 py-1">
								{data.release.tag}
							</Badge>
						</div>
					</CardHeader>
					<CardContent>
						{#if data.release.body}
							<div class="prose prose-sm dark:prose-invert max-w-none mb-6">
								{@html data.release.body.replace(/\n/g, '<br />')}
							</div>
						{/if}

						{#if data.release.assets && data.release.assets.length > 0}
							<div class="space-y-4">
								<h3 class="text-lg font-semibold">Download for your platform:</h3>
								<div class="grid gap-4 md:grid-cols-2">
									{#each data.release.assets as asset}
										{@const platform = getPlatformFromAsset(asset.name)}
										<a
											href={asset.downloadUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="block"
										>
											<Card class="hover:bg-accent transition-colors cursor-pointer">
												<CardContent class="pt-6">
													<div class="flex items-center justify-between">
														<div class="flex items-center gap-3">
															<span class="text-2xl">{getAssetIcon(platform)}</span>
															<div>
																<p class="font-medium">{platform}</p>
																<p class="text-sm text-muted-foreground">{formatFileSize(asset.size)}</p>
															</div>
														</div>
														<Button variant="outline" size="sm">
															Download
														</Button>
													</div>
													<p class="mt-2 text-xs text-muted-foreground truncate">{asset.name}</p>
												</CardContent>
											</Card>
										</a>
									{/each}
								</div>
							</div>
						{:else}
							<p class="text-muted-foreground">No download assets available for this release.</p>
						{/if}
					</CardContent>
				</Card>
			{:else}
				<Card>
					<CardContent class="pt-6">
						<div class="text-center py-8">
							<p class="text-muted-foreground mb-4">
								{data.error || 'No releases available yet.'}
							</p>
							<p class="text-sm text-muted-foreground">
								Check back soon or visit the GitHub repository for more information.
							</p>
						</div>
					</CardContent>
				</Card>
			{/if}
		</div>
	</section>

	<Separator />

	<!-- Additional Info Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-3xl">
			<Card>
				<CardHeader>
					<CardTitle>System Requirements</CardTitle>
				</CardHeader>
				<CardContent>
					<ul class="space-y-2 text-muted-foreground">
						<li>• <strong class="text-foreground">Windows:</strong> Windows 10 or later</li>
						<li>• <strong class="text-foreground">macOS:</strong> macOS 10.15 or later</li>
						<li>• <strong class="text-foreground">Linux:</strong> Most modern distributions</li>
						<li>• <strong class="text-foreground">Slippi:</strong> Slippi Launcher installed</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	</section>
</main>

