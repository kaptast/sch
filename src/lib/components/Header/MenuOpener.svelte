<script lang="ts">
	let opened = $state(false);
</script>

<button
	class="{opened
		? 'before:top-1/2 before:origin-center before:rotate-45 after:top-1/2 after:origin-center after:-rotate-45'
		: 'before:top-0 after:top-full'} relative block h-4 w-7 before:absolute before:top-0 before:right-0 before:left-0 before:h-0 before:w-full before:border-b-4 before:border-solid before:border-b-black before:transition-all before:duration-300 before:content-[''] after:absolute after:right-0 after:left-0 after:h-0 after:w-full after:border-b-4 after:border-solid after:border-b-black after:transition-all after:duration-300 after:content-['']"
	aria-label="TODO: open the menu"
	onclick={() => (opened = !opened)}
>
	<i
		class="absolute top-1/2 block h-1 w-full overflow-hidden bg-black indent-[full] whitespace-nowrap transition-opacity duration-100 {opened
			? 'opacity-0'
			: ''}">Menu</i
	>
</button>
