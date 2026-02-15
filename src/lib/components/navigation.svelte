<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { page } from "$app/stores";

	let currentPath = $derived($page.url.pathname);
</script>

<nav class="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-xl font-black uppercase tracking-tighter">
				<span class="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">Peppi</span>
			</a>
			<div class="flex items-center gap-4">
				<a
					href="/"
					class="text-sm font-medium transition-colors hover:text-primary {currentPath === '/' ? 'text-primary' : 'text-muted-foreground'}"
				>
					Home
				</a>
				<a
					href="/faq"
					class="text-sm font-medium transition-colors hover:text-primary {currentPath === '/faq' ? 'text-primary' : 'text-muted-foreground'}"
				>
					FAQ
				</a>
				<a
					href="/pricing"
					class="text-sm font-medium transition-colors hover:text-primary {currentPath === '/pricing' ? 'text-primary' : 'text-muted-foreground'}"
				>
					Pricing
				</a>
				<Button href="/downloads" size="sm">
					Download
				</Button>
			</div>
		</div>
	</div>
</nav>
