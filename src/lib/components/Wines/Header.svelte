<script lang="ts">
	let scrollY = $state(0);
	let contentRect = $state({ top: 0 });

	let scrollPosition = $derived((contentRect.top - scrollY) * 0.1);
</script>

<svelte:window bind:scrollY />

<section
	id="wines"
	bind:contentRect
	style="--scroll-position: {scrollPosition}px"
	class="flex h-[40dvh] w-full items-center justify-center"
>
	<h2 class="font-imperial text-7xl font-normal text-white">{wines()}</h2>
</section>

<style>
	section {
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url(https://lh3.googleusercontent.com/p/AF1QipOVjbEGCjT4-CoAT50GATxFbNS_om1kkWz_Zc1x=s680-w680-h510);
		filter: grayscale(100%);
		background-position: 0 var(--scroll-position);
	}
</style>
