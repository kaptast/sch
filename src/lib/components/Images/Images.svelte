<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	register();

	let swiperEl: HTMLElement;

	onMount(() => {
		swiperEl.initialize();
	});
</script>

<swiper-container
	bind:this={swiperEl}
	slides-per-view="auto"
	space-between="-1"
	loop="true"
	init="false"
	centered-slides="true"
>
	<swiper-slide class="h-64 w-2/5 lg:w-1/5">
		<img
			class="h-full w-full object-cover object-center grayscale"
			alt="A présház"
			src="https://lh3.googleusercontent.com/p/AF1QipMhLBHP0ePNoIKZSIyLhHEkEqGXsepwRPBHAWEe=s680-w680-h510"
		/>
	</swiper-slide>

	<swiper-slide class="h-64 w-2/5 lg:w-1/5">
		<img
			class="h-full w-full object-cover object-center grayscale"
			alt="A présház"
			src="https://lh3.googleusercontent.com/p/AF1QipOasihlamffkRvDuXLui1CCuTJl8vpzZZ_rOWyV=s680-w680-h510"
		/>
	</swiper-slide>

	<swiper-slide class="h-64 w-2/5 lg:w-1/5">
		<img
			class="h-full w-full object-cover object-center grayscale"
			alt="A présház"
			src="https://lh3.googleusercontent.com/p/AF1QipOE4_r4_k3ZMxOKR2BRk4LGlljhDW-v89KQ0tTE=s680-w680-h510"
		/>
	</swiper-slide>

	<swiper-slide class="h-64 w-2/5 lg:w-1/5">
		<img
			class="h-full w-full object-cover object-center grayscale"
			alt="A pince"
			src="https://lh3.googleusercontent.com/p/AF1QipOtPOlzykOvPz3QfUtxFOLzMq8N-ogf4xy0UJV8=s680-w680-h510"
		/>
	</swiper-slide>

	<swiper-slide class="h-64 w-2/5 lg:w-1/5">
		<img
			class="h-full w-full object-cover object-center grayscale"
			alt="Hordók"
			src="https://lh3.googleusercontent.com/p/AF1QipNpySo-Vzt5GlRVA9OI5bdY8oDEkL08tBcpNsvm=s680-w680-h510"
		/>
	</swiper-slide>

	<swiper-slide class="h-64 w-2/5 lg:w-1/5">
		<img
			class="h-full w-full object-cover object-center grayscale"
			alt="A prés"
			src="https://lh3.googleusercontent.com/p/AF1QipMlAIsWEDwBwaGHxV1kmNxmbgYfnjyS7ZhC9YXa=s680-w680-h510"
		/>
	</swiper-slide>
</swiper-container>
