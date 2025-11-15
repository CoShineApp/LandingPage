<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
</script>

<svelte:head>
	<title>Pricing - Peppi</title>
	<meta name="description" content="Peppi is free. No ads, no bloat, just Melee." />
</svelte:head>

<main class="min-h-screen bg-background">
	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Pricing</h1>
			<p class="mt-6 text-xl text-muted-foreground">
				Free. Forever. No ads. No bloat. No strings attached.
			</p>
			<p class="mt-6 text-xl text-muted-foreground">
				If this pricing page ever charges, I will kill myself.
			</p>
		</div>
	</section>

	<Separator />

	<!-- Pricing Card -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-2xl">
			<Card class="border-primary/20">
				<CardHeader class="text-center">
					<Badge variant="secondary" class="mx-auto mb-4 w-fit">Free</Badge>
					<CardTitle class="text-4xl">$0</CardTitle>
					<CardDescription class="text-lg">Forever</CardDescription>
				</CardHeader>
				<CardContent>
					<ul class="space-y-4 mb-8">
						<li class="flex items-center justify-center gap-3">
							<div class="text-center">
								<p class="font-medium">All Features Included</p>
								<p class="text-sm text-muted-foreground">Everything Peppi has to offer, no restrictions</p>
							</div>
						</li>
						<li class="flex items-center justify-center gap-3">
							<div class="text-center">
								<p class="font-medium">No Ads</p>
								<p class="text-sm text-muted-foreground">Clean, distraction-free experience</p>
							</div>
						</li>
						<li class="flex items-center justify-center gap-3">
							<div class="text-center">
								<p class="font-medium">Regular Updates</p>
								<p class="text-sm text-muted-foreground">Continuous improvements and bug fixes</p>
							</div>
						</li>
					</ul>
					<div class="flex justify-center">
						<Button href="/downloads" size="lg">
							Download Now
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	</section>

	<Separator />

	<!-- Why Free Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-8 text-center text-3xl font-bold md:text-4xl">Why Free?</h2>
			<Card>
				<CardContent class="pt-6">
					<p class="text-lg leading-relaxed text-muted-foreground mb-4">
						Peppi is built for the Melee community, by a Melee player. This tool exists because I wanted something simple and focused—no ads, no bloat, just Melee.
					</p>
					<p class="text-lg leading-relaxed text-muted-foreground">
						It's free because that's how it should be. If you find Peppi useful, consider sharing it with other Melee players.
					</p>
				</CardContent>
			</Card>
		</div>
	</section>

	<Separator />

	<!-- Support Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-8 text-center text-3xl font-bold md:text-4xl">Want to Support?</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Report Issues</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Help improve Peppi by reporting bugs or suggesting features.
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Spread the Word</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Share Peppi with other Melee players who might find it useful. The best support is a growing community.
						</CardDescription>
					</CardContent>
				</Card>
			</div>
		</div>
	</section>
</main>

