<script lang="ts">
	let { text = '' } = $props();
</script>

<h3
	class="relative my-4 py-3 text-2xl font-bold text-stone-600 uppercase before:absolute before:top-0 before:left-1/2 before:-ml-6 before:block before:h-1 before:w-12 before:bg-stone-600 before:content-['_'] after:absolute after:bottom-0 after:left-1/2 after:-ml-6 after:block after:h-1 after:w-12 after:bg-stone-600 after:content-['_']"
>
	{text}
</h3>
