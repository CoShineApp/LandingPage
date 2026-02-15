<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";

	const DOWNLOAD_URL = 'https://releases.peppi.app/msi/Peppi_1.0.3_x64_en-US.msi.zip';
</script>

<svelte:head>
	<title>Downloads - Peppi</title>
	<meta name="description" content="Download Peppi for Windows - Screen Recording for Melee" />
</svelte:head>

<main class="min-h-screen bg-background">
	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Downloads</h1>
			<p class="mt-6 text-xl text-muted-foreground">
				Get Peppi for Windows
			</p>
		</div>
	</section>

	<Separator />

	<!-- Download Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-4xl">
			<Card>
				<CardHeader class="flex flex-col items-center">
					<CardTitle class="text-2xl">Peppi 1.0.3 — Windows</CardTitle>
					<CardDescription>
						Windows 10 or later (x64)
					</CardDescription>
				</CardHeader>
				<CardContent class="flex flex-col items-center">
					<a
						href={DOWNLOAD_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button size="lg">
							Download for Windows
						</Button>
					</a>
				</CardContent>
			</Card>
		</div>
	</section>

	<Separator />

	<!-- System Requirements -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-3xl">
			<Card>
				<CardHeader>
					<CardTitle>System Requirements</CardTitle>
				</CardHeader>
				<CardContent>
					<ul class="space-y-2 text-muted-foreground">
						<li>• <strong class="text-foreground">Windows:</strong> Windows 10 or later (64-bit)</li>
						<li>• <strong class="text-foreground">Slippi:</strong> Slippi Launcher installed</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	</section>
</main>
