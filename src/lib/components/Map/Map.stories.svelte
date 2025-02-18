<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Map from './Map.svelte';

	const { Story } = defineMeta({
		title: 'Map',
		component: Map
	});
</script>

<Story name="Default" />
