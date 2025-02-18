<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import MenuOpener from './MenuOpener.svelte';

	const { Story } = defineMeta({
		title: 'Header/Menu Opener',
		component: MenuOpener
	});
</script>

<Story name="Default" />
