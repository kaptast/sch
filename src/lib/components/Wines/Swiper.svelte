<script lang="ts">
	import { onMount } from 'svelte';
	import Wine from './Wine.svelte';
	import { register } from 'swiper/element/bundle';
	register();

	let swiperEl: HTMLElement;

	onMount(() => {
		swiperEl.initialize();
	});
</script>

<section class="bg-amber-50">
	<swiper-container bind:this={swiperEl} slides-per-view="1" init="false" loop="true">
		<Wine name="Pölöskei Muskotály" year="2023" image="wine1.png" />
		<Wine name="Maribor" year="2022" image="wine2.png" />
		<Wine name="Kadarka" year="2022" image="wine3.png" />
	</swiper-container>
</section>
