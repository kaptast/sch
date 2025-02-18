<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import About from './About.svelte';

	const { Story } = defineMeta({
		title: 'About',
		component: About
	});
</script>

<Story name="Default" />
