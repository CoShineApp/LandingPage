<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Separator } from "$lib/components/ui/separator";
	import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
	<title>Peppi - Screen Recording for Melee</title>
	<meta name="description" content="A screen recording tool for Melee. No ads, no bloat, just Melee." />
	<meta property="og:title" content="Peppi - Screen Recording for Melee" />
	<meta property="og:description" content="A screen recording tool for Melee. No ads, no bloat, just Melee." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Peppi - Screen Recording for Melee" />
	<meta name="twitter:description" content="A screen recording tool for Melee. No ads, no bloat, just Melee." />
</svelte:head>

<main class="min-h-screen bg-background">
	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-20 md:py-32">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">Peppi</h1>
			<p class="mt-6 text-xl text-muted-foreground md:text-2xl">
				A screen recording tool for Melee. That's it. No ads, no bloat, just Melee.
			</p>
			<p class="mt-4 text-lg text-muted-foreground/80">
				Automatically records your Melee matches and pairs them with Slippi replay files.
			</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href="/downloads" size="lg">
					Download Now
				</Button>
				<Button href="/pricing" variant="outline" size="lg">
					Learn More
				</Button>
			</div>
		</div>
	</section>

	<Separator />

	<!-- Why Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-8 text-3xl font-bold md:text-4xl">Why This Exists</h2>
			<Card>
				<CardContent class="pt-6">
					<p class="text-lg leading-relaxed text-muted-foreground mb-4">
						I like Melee. I like <a
							href="https://github.com/ascent-org/windows-record"
							class="text-primary underline underline-offset-4 hover:text-primary/80"
							target="_blank"
							rel="noopener noreferrer"
						>Ascent</a>. I wanted to bring Ascent into Melee. Every other screen recording tool I've tried is filled with obtrusive ads and bloated with features I don't need. I only care about Melee, so I built a tool that cares about Melee too.
					</p>
				</CardContent>
			</Card>
		</div>
	</section>

	<Separator />

	<!-- Features Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-5xl">
			<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">What It Does</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Automatic Recording</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Watches your Slippi replay folder and automatically starts recording when games begin
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>High-Quality Recording</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Records your screen using Ascent's <code class="rounded bg-muted px-1.5 py-0.5 text-sm">windows-record</code> library (it's really good)
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Automatic Pairing</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Pairs recordings with their <code class="rounded bg-muted px-1.5 py-0.5 text-sm">.slp</code> replay files automatically
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>No Nonsense</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							No ads, no bloat, just Melee
						</CardDescription>
					</CardContent>
				</Card>
			</div>
		</div>
	</section>

	<Separator />

	<Separator />

	<!-- How It Works Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">How It Works</h2>
			<div class="space-y-8">
				<div class="flex gap-6">
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
						1
					</div>
					<div class="flex-1">
						<h3 class="mb-2 text-xl font-semibold">Auto-Detection</h3>
						<p class="text-muted-foreground">
							Peppi watches your Slippi replay folder (auto-detects the path)
						</p>
					</div>
				</div>

				<div class="flex gap-6">
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
						2
					</div>
					<div class="flex-1">
						<h3 class="mb-2 text-xl font-semibold">Game Detection</h3>
						<p class="text-muted-foreground">
							When a new <code class="rounded bg-muted px-1.5 py-0.5 text-sm">.slp</code> file appears, it starts recording
						</p>
					</div>
				</div>

				<div class="flex gap-6">
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
						3
					</div>
					<div class="flex-1">
						<h3 class="mb-2 text-xl font-semibold">Automatic Pairing</h3>
						<p class="text-muted-foreground">
							Recording gets paired with the replay file
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<Separator />

	<!-- Status Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-5xl">
			<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">Development Status</h2>
			<div class="grid gap-6 md:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle class="flex items-center gap-2">
							Working
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li>• Detects Slippi paths on Windows/macOS/Linux</li>
							<li>• File watching setup</li>
							<li>• Basic UI with sidebar</li>
							<li>• Error handling</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="flex items-center gap-2">
							In Progress
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li>• Actually recording stuff (Windows using <code class="rounded bg-muted px-1.5 py-0.5">windows-record</code>)</li>
							<li>• Auto-starting recordings when games begin</li>
							<li>• UI for managing recordings</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="flex items-center gap-2">
							Maybe Later
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li>• macOS/Linux recording support</li>
							<li>• Cloud upload (maybe?)</li>
							<li>• Dolphin window detection</li>
							<li>• Batch processing</li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</div>
	</section>

	<Separator />

	<!-- Configuration Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-8 text-center text-3xl font-bold md:text-4xl">Configuration</h2>
			<Card>
				<CardHeader>
					<CardTitle>Auto-Detection</CardTitle>
					<CardDescription>
						Peppi finds your Slippi folder automatically:
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="space-y-4 font-mono text-sm">
						<div>
							<Badge variant="outline" class="mb-2">Windows</Badge>
							<p class="text-muted-foreground">
								<code>%APPDATA%\Slippi Launcher\netplay</code>
							</p>
						</div>
						<div>
							<Badge variant="outline" class="mb-2">macOS</Badge>
							<p class="text-muted-foreground">
								<code>~/Library/Application Support/Slippi Launcher/netplay</code>
							</p>
						</div>
						<div>
							<Badge variant="outline" class="mb-2">Linux</Badge>
							<p class="text-muted-foreground">
								<code>~/.config/Slippi Launcher/netplay</code>
							</p>
						</div>
					</div>
					<p class="mt-6 text-sm text-muted-foreground">
						You can change this in settings if needed.
					</p>
				</CardContent>
			</Card>
		</div>
	</section>

	<Separator />

	<!-- Thanks Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-8 text-center text-3xl font-bold md:text-4xl">Thanks</h2>
			<Card>
				<CardContent class="pt-6">
					<ul class="space-y-4 text-muted-foreground">
						<li>
							<strong class="text-foreground">
								<a
									href="https://slippi.gg"
									class="text-primary underline underline-offset-4 hover:text-primary/80"
									target="_blank"
									rel="noopener noreferrer"
								>Slippi</a>
							</strong> — For making Melee replays a thing
						</li>
						<li>
							<strong class="text-foreground">
								<a
									href="https://github.com/ascent-org/windows-record"
									class="text-primary underline underline-offset-4 hover:text-primary/80"
									target="_blank"
									rel="noopener noreferrer"
								>Ascent</a>
							</strong> — For the recording library
						</li>
						<li>
							<strong class="text-foreground">The Melee Community</strong> — For keeping this game alive
						</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	</section>

	<Separator />

	<!-- Footer -->
	<footer class="container mx-auto px-4 py-12">
		<div class="mx-auto max-w-3xl text-center">
			<p class="text-muted-foreground">
				Made for Melee players, by a Melee player.
			</p>
			<p class="mt-2 text-sm text-muted-foreground/80">
				See LICENSE file.
			</p>
		</div>
	</footer>
</main>
