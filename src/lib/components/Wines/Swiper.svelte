<script lang="ts">
	import { onMount } from 'svelte';
	import Wine from './Wine.svelte';
	import { register } from 'swiper/element/bundle';
	register();

	let swiperEl: HTMLElement;

	const params = {
		injectStyles: [
			`
      .swiper-pagination-bullet {
				width: 3rem;
        font-size: 3rem;
				line-height: 3.5rem;
        color: white;
				background: none;
				opacity: 1;
      }

      .swiper-pagination-bullet-active {
        color: #ff9900;
				text-decoration: underline;
      }
      `
		],
		pagination: {
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}
		}
	};

	onMount(() => {
		Object.assign(swiperEl, params);
		swiperEl.initialize();
	});
</script>

<section class="relative bg-amber-200 py-14">
	<swiper-container
		bind:this={swiperEl}
		slides-per-view="1"
		init="false"
		loop="true"
		pagination="true"
	>
		<Wine name="Pölöskei Muskotály" year="2023" image="wine1.png" />
		<Wine name="Maribor" year="2022" image="wine2.png" />
		<Wine name="Kadarka" year="2022" image="wine3.png" />
	</swiper-container>
</section>

<style>
	swiper-container::part(pagination) {
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 50%;
	}
</style>
