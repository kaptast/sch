<script lang="ts">
	import { contact } from '$lib/paraglide/messages';
</script>

<section class="bg-white">
	<div class="content">
		<div class="flex w-full flex-col items-center">
			<h3 class="my-10 text-xl font-bold text-stone-800 uppercase">{contact()}</h3>

			<i>ICON</i>
			<h4 class="mb-10">Cím</h4>

			<address class="flex flex-col items-center">
				<i>ICON</i>
				<a href="mailto:email">E-mail cím</a>
				<a href="tel:telefonszám" class="mb-10">Telefonszám</a>
			</address>
		</div>
	</div>
</section>
