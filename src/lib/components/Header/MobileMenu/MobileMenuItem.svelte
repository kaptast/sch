<script lang="ts">
	let { label, to, icon }: { label?: string; to: string; icon?: any } = $props();
</script>

<li
	class="flex w-4/5 list-none justify-center border-b-white/45 py-3 text-xl font-bold text-white uppercase not-last:border-b"
>
	{#if icon}
		{@render icon()}
	{:else}
		{label}
	{/if}
</li>
