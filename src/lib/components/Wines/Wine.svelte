<script lang="ts">
	let { image = '', name = '', year = '' } = $props();
</script>

<swiper-slide class="grid grid-cols-2">
	<div class="row-span-2">
		<img src={image} alt={name} class="h-52 object-contain" />
	</div>

	<div class="uppercase">
		{name}
	</div>

	<div>
		{year}
	</div>
</swiper-slide>
