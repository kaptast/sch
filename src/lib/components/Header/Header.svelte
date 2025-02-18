<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import MenuOpener from './MenuOpener.svelte';

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<header class="flex w-full items-center justify-between py-2 pr-5 pl-10">
	<h1 class="text-4xl font-bold text-white">SCH</h1>
	<MenuOpener class="lg:hidden" />
	<div class="hidden lg:block">
		<button onclick={() => switchToLanguage('en')}>en</button>
		<button onclick={() => switchToLanguage('de')}>de</button>
		<button onclick={() => switchToLanguage('hu')}>hu</button>
	</div>
</header>
