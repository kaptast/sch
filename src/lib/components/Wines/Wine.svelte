<script lang="ts">
	import Heading from '../Heading.svelte';

	let { image = '', name = '', year = '' } = $props();
</script>

<swiper-slide class="grid grid-cols-2 items-center">
	<div class="row-span-2 justify-self-end">
		<img src={image} alt={name} class="h-96 object-contain" />
	</div>

	<div class="justify-self-center">
		<Heading text={name} />
	</div>

	<div class="justify-self-center">
		{year}
	</div>
</swiper-slide>
