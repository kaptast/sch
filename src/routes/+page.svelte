<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';

	import * as m from '$lib/paraglide/messages.js';

	import About from '$lib/components/About/About.svelte';
	import Contact from '$lib/components/Contact/Contact.svelte';
	import Images from '$lib/components/Images/Images.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import Map from '$lib/components/Map/Map.svelte';
	import WinesHeader from '$lib/components/Wines/Header.svelte';
	import WinesSwiper from '$lib/components/Wines/Swiper.svelte';
</script>

<main>
	<ParaglideJS {i18n}>
		<Header />
		<Hero />
		<About />
		<WinesHeader />
		<WinesSwiper />
		<Images />
		<Contact />
		<Map />
		<Footer />
	</ParaglideJS>
</main>
