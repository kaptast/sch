<script lang="ts">
	import { type AvailableLanguageTag, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import MenuOpener from './MenuOpener.svelte';

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	function isActualLanguageTag(lang: AvailableLanguageTag): boolean {
		return lang == languageTag();
	}

	let scrollY = $state(0);

	let opacity = $derived(Math.min((scrollY / 600) * 100, 95));
	let padding = $derived(Math.max(24 - scrollY / 20, 8));
</script>

<svelte:window bind:scrollY />

<header
	style="--header-opacity: {opacity}%; --heading-padding: {padding}px"
	class="fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between bg-yellow-700/[var(--header-opacity)] py-[var(--heading-padding)] pr-5 pl-10 transition-opacity"
>
	<h1 class="font-imperial text-4xl font-normal text-white">Sch</h1>
	<MenuOpener class="lg:hidden" />
	<div class="hidden gap-1 text-white lg:flex lg:items-center">
		<button
			class="pointer block underline transition-all hover:decoration-white {isActualLanguageTag(
				'en'
			)
				? 'decoration-white'
				: 'decoration-transparent'}"
			onclick={() => switchToLanguage('en')}>en</button
		>
		<div class="h-4 w-px bg-white"></div>
		<button
			class="pointer block underline transition-all hover:decoration-white {isActualLanguageTag(
				'de'
			)
				? 'decoration-white'
				: 'decoration-transparent'}"
			onclick={() => switchToLanguage('de')}>de</button
		>
		<div class=" h-4 w-px bg-white"></div>
		<button
			class="pointer block underline transition-all hover:decoration-white {isActualLanguageTag(
				'hu'
			)
				? 'decoration-white'
				: 'decoration-transparent'}"
			onclick={() => switchToLanguage('hu')}>hu</button
		>
	</div>
</header>
