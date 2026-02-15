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
				$free.99
			</p>
	</section>

	<Separator />

	<!-- Support Section -->
	<section class="container mx-auto px-4 py-16 md:py-24">
		<div class="mx-auto max-w-3xl">
			<p class="text-center text-lg text-muted-foreground">
				If cloud costs become too prohibitive, there will be a Kofi/Patreon page for support. 
				I will post the bills on the Kofi page and will only take donations up to the bill costs. 
				Any extra money over bills will be donated to the Slippi project.
				<br />
				<br />
				<Button href="https://slippi.gg" target="_blank" rel="noopener noreferrer">
					Support Slippi 
				</Button>
			</p>
		</div>
	</section>
</main>

