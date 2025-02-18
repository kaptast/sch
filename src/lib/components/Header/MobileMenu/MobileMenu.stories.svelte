<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import MobileMenu from './MobileMenu.svelte';

	const { Story } = defineMeta({
		title: 'Header/Mobile Menu',
		component: MobileMenu
	});
</script>

<Story name="Default" />
