<svelte:head>
	<title>FAQ - Peppi</title>
	<meta name="description" content="Frequently asked questions about Peppi." />
</svelte:head>

<main class="min-h-screen bg-background">
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-2xl">
			<h1 class="mb-10 text-4xl font-bold md:text-5xl text-center">FAQ</h1>

			<!-- Disclosure -->
			<div class="mb-12 rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8">
				<p class="text-center text-lg font-semibold text-foreground md:text-xl">
					This is still early and being actively developed. Things will change.
				</p>
				<p class="mt-3 text-center text-sm text-muted-foreground">
					If something doesn't work or you have feedback, hit up the Discord.
				</p>
			</div>

			<!-- Limitations & In Progress -->
			<div class="mb-12 grid gap-8 md:grid-cols-2">
				<!-- Known Limitations -->
				<div>
					<h2 class="mb-4 text-lg font-bold uppercase tracking-tight">Known Limitations</h2>
					<ul class="space-y-2">
						<li class="flex items-start gap-3">
							<span class="text-primary font-bold">—</span>
							<span class="text-muted-foreground">Large screen sizes/fullscreen breaks capture</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary font-bold">—</span>
							<span class="text-muted-foreground">Mac/Linux support — will accept contributions when open source</span>
						</li>
					</ul>
				</div>

				<!-- In Progress -->
				<div>
					<h2 class="mb-4 text-lg font-bold uppercase tracking-tight">In Progress</h2>
					<ul class="space-y-2">
						<li class="flex items-start gap-3">
							<span class="text-primary font-bold">—</span>
							<span class="text-muted-foreground">Open Sourcing</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-primary font-bold">—</span>
							<span class="text-muted-foreground">Local OBS Websocket for recording</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="space-y-4">
				<details class="group rounded-lg border border-border px-6 py-4">
					<summary class="cursor-pointer text-lg font-medium select-none list-none flex items-center justify-between">
						Why not open source?
						<span class="ml-2 transition-transform group-open:rotate-45 text-muted-foreground">+</span>
					</summary>
					<p class="mt-3 text-muted-foreground">
						Coming Soon™
						<br />
						<br />
						Claude was used a lot so the code needs cleanup and better structure before it's ready for contributions. We need tests, documentation, contribution guidelines, and cleaner architecture before opening it up. Once that's in place, I'll open source it and accept PRs for Mac/Linux support and other features.
					</p>
				</details>

				<details class="group rounded-lg border border-border px-6 py-4">
					<summary class="cursor-pointer text-lg font-medium select-none list-none flex items-center justify-between">
						Do you need an account?	
						<span class="ml-2 transition-transform group-open:rotate-45 text-muted-foreground">+</span>
					</summary>
					<p class="mt-3 text-muted-foreground">
						You only need an account to upload full matches, clipping and local recording can use cloud anonymously. 
					</p>
				</details>
			</div>
		</div>
	</section>
</main>
