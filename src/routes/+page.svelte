<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { onMount } from "svelte";

	let currentSlide = $state(0);
	let discordTooltip = $state("");
	let emailTooltip = $state("");

	const copyDiscordName = async () => {
		await navigator.clipboard.writeText("hatsupatsu");
		discordTooltip = "Discord Copied";
		setTimeout(() => {
			discordTooltip = "";
		}, 2000);
	};

	const copyEmail = async () => {
		await navigator.clipboard.writeText("hatsucontact@gmail.com");
		emailTooltip = "Email copied";
		setTimeout(() => {
			emailTooltip = "";
		}, 2000);
	};

	const nextSlide = () => {
		currentSlide = (currentSlide + 1) % 4;
	};

	const prevSlide = () => {
		currentSlide = (currentSlide - 1 + 4) % 4;
	};

	const goToSlide = (idx: number) => {
		currentSlide = idx;
	};
</script>

<svelte:head>
	<title>Peppi - Screen Recording for Melee</title>
	<meta name="description" content="Automatically record your Melee matches in MP4. No ads, no bloat, just Melee." />
	<meta property="og:title" content="Peppi - Screen Recording for Melee" />
	<meta property="og:description" content="Automatically record your Melee matches in MP4. No ads, no bloat, just Melee." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Peppi - Screen Recording for Melee" />
	<meta name="twitter:description" content="Automatically record your Melee matches in MP4. No ads, no bloat, just Melee." />
</svelte:head>

<main class="min-h-screen bg-background overflow-hidden">
	<!-- Hero -->
	<section class="container mx-auto px-4 py-20 md:py-28 pb-4">
		<div class="mx-auto max-w-4xl text-center">
			<p class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">Screen Recording for Melee</p>
			<h1 class="text-7xl font-black uppercase tracking-tighter md:text-8xl lg:text-9xl">
				<span class="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">Peppi</span>
			</h1>
			<p class="mx-auto mt-6 max-w-lg text-lg text-muted-foreground md:text-xl">
				Automatically record, clip and view your Slippi matches with ease.
			</p>
			<div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
				<Button href="/downloads" size="lg" class="text-base font-bold uppercase tracking-wider px-10">
					Download
				</Button>
			</div>
		</div>
	</section>

	<!-- Image Carousel -->
	<section class="container mx-auto px-4 py-2 md:py-4">
		<div class="mx-auto max-w-5xl">
			<div class="overflow-hidden rounded-xl border border-border bg-card">
				<!-- Slide -->
				<div class="relative w-full bg-muted aspect-video">
					{#if currentSlide === 0}
						<div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50 p-8">
							<p class="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Screenshot Placeholder</p>
							<p class="text-lg font-semibold text-foreground mb-2">App Recording in Progress</p>
							<p class="text-sm text-muted-foreground text-center max-w-xs">Main window showing active recording, file pairing, and real-time stats</p>
						</div>
					{:else if currentSlide === 1}
						<div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50 p-8">
							<p class="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Screenshot Placeholder</p>
							<p class="text-lg font-semibold text-foreground mb-2">Game Stats Dashboard</p>
							<p class="text-sm text-muted-foreground text-center max-w-xs">Detailed statistics: L-Cancels, rolls, neutral losses, shield grabs — frame perfect analysis</p>
						</div>
					{:else if currentSlide === 2}
						<div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50 p-8">
							<p class="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Screenshot Placeholder</p>
							<p class="text-lg font-semibold text-foreground mb-2">Aggregate Stats Over Time</p>
							<p class="text-sm text-muted-foreground text-center max-w-xs">Track your improvement across multiple sets. See trends, identify patterns, level up</p>
						</div>
					{:else}
						<div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50 p-8">
							<p class="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Screenshot Placeholder</p>
							<p class="text-lg font-semibold text-foreground mb-2">Video Clip Viewer</p>
							<p class="text-sm text-muted-foreground text-center max-w-xs">Watch your matches with linked stats. Frame-by-frame analysis paired with replay data</p>
						</div>
					{/if}
				</div>

				<!-- Controls -->
				<div class="flex items-center justify-between bg-card px-6 py-4">
					<button
						onclick={prevSlide}
						class="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
					>
						← Prev
					</button>
					<div class="flex items-center gap-2">
						{#each Array(4) as _, idx}
							<button
								onclick={() => goToSlide(idx)}
								class="h-2 w-2 rounded-full cursor-pointer transition-all {currentSlide === idx ? 'bg-primary' : 'bg-primary/40 hover:bg-primary/60'}"
							></button>
						{/each}
					</div>
					<button
						onclick={nextSlide}
						class="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
					>
						Next →
					</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Divider -->
	<div class="mx-auto max-w-xs border-t border-primary/20"></div>

	<!-- Why -->
	<section class="container mx-auto px-4 py-20 md:py-32">
		<div class="mx-auto max-w-2xl">
			<h2 class="mb-8 text-center text-sm font-bold uppercase tracking-[0.3em] text-primary">Why</h2>
			<ol class="space-y-8">
				<li class="flex gap-4">
					<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">1</span>
					<div>
						<p class="font-semibold text-foreground mb-1">Every clipping tool got enshittified</p>
						<p class="text-muted-foreground">The tools I used were bought out by PE and stuffed with ads. Manually scrubbing through replays to screen record clips was the only alternative.</p>
					</div>
				</li>
				<li class="flex gap-4">
					<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">2</span>
					<div>
						<p class="font-semibold text-foreground mb-1">I am bad at Melee</p>
						<p class="text-muted-foreground">I kept getting shield grabbed and viewing single game stats afterwards did not help me improve.  I wanted to see my stats like L-Cancels, Rolls, and neutral losses to shield grabs over time</p>
					</div>
				</li>
			</ol>
		</div>
	</section>

	<!-- Divider -->
	<div class="mx-auto max-w-xs border-t border-primary/20"></div>

	<!-- Features List -->
	<section class="container mx-auto px-4 py-10 md:py-16">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-primary">Features</h2>
			<ul class="space-y-4 inline-block text-left">
				<li class="flex items-start gap-3">
					<span class="mt-1 text-primary font-bold">—</span>
					<span class="text-foreground">Automatic screen recording when a Slippi match starts</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 text-primary font-bold">—</span>
					<span class="text-foreground">Pairs every MP4 with its <code class="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-primary">.slp</code> replay file and associates stats</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 text-primary font-bold">—</span>
					<span class="text-foreground">Clipping hot-key functionality and free clip sharing</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 text-primary font-bold">—</span>
					<span class="text-foreground">No watermarks, no ads, no account required</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 text-primary font-bold">—</span>
					<span class="text-foreground">Runs in the background — zero input from you</span>
				</li>
			</ul>
		</div>
	</section>

	<!-- Divider -->
	<div class="mx-auto max-w-xs border-t border-primary/20"></div>

	<!-- Divider -->
	<div class="mx-auto max-w-xs border-t border-primary/20"></div>

	<!-- Credits -->
	<section class="container mx-auto px-4 py-20 md:py-32">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-4 text-center text-sm font-bold uppercase tracking-[0.3em] text-primary">Shoutouts</h2>
			<div class="grid gap-3 md:grid-cols-2">
				<a
					href="https://slippi.gg"
					target="_blank"
					rel="noopener noreferrer"
					class="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(115,220,140,0.15)]"
				>
					<p class="text-lg font-bold uppercase tracking-tight text-primary">Slippi</p>
					<p class="mt-2 text-sm text-muted-foreground">Made online melee a reality</p>
				</a>
				<a
					href="https://www.tryascent.gg"
					target="_blank"
					rel="noopener noreferrer"
					class="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(115,220,140,0.15)]"
				>
					<p class="text-lg font-bold uppercase tracking-tight text-primary">Ascent</p>
					<p class="mt-2 text-sm text-muted-foreground">For being a great tool and the inspiration</p>
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-border py-12">
		<div class="container mx-auto flex flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
			<p class="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
				Feel free to reach out.
			</p>
			<div class="flex items-center gap-6">
				<div class="relative">
					<button
						onclick={copyDiscordName}
						class="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
					>
						Discord
					</button>
					{#if discordTooltip}
						<div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
							{discordTooltip}
						</div>
					{/if}
				</div>
				<div class="relative">
					<button
						onclick={copyEmail}
						class="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
					>
						Email
					</button>
					{#if emailTooltip}
						<div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
							{emailTooltip}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</footer>
</main>
