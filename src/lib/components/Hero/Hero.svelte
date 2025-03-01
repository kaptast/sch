<script lang="ts">
	let scrollY = $state(0);

	let scrollPosition = $derived(scrollY * 0.3);
</script>

<svelte:window bind:scrollY />

<section id="hero" class="relative flex h-[70dvh] w-full items-center justify-center">
	<div id="hero-image" style="--scroll-position: {scrollPosition}px"></div>
	<h2 class="font-imperial text-9xl font-normal text-white brightness-200">Schenek Présház</h2>
</section>

<style>
	#hero #hero-image {
		height: 100%;
		width: 100%;
		position: absolute;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url(https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZXJ5fGVufDB8fDB8fHww);
		filter: grayscale(100%) brightness(50%);
		background-position: 0 var(--scroll-position);
	}
</style>
