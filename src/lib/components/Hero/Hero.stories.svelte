<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Hero from './Hero.svelte';

	const { Story } = defineMeta({
		title: 'Hero',
		component: Hero
	});
</script>

<Story name="Default" />
