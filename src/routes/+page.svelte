<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';

	import hero from '$lib/assets/hero-bg.png';

	import {
		Ecosystem,
		Roadmap,
		HouseOfElephants,
		WhyAreWeHere,
		DigitalContents,
		ElephantsTrivia,
		UnionUpdates,
		WeAreSeenOn,
		OurFriends,
		PreFooter,
		Footer,
		Navbar,
		Modal
	} from '$lib';

	import { Modals, closeModal, openModal, modals } from 'svelte-modals';

	import { fade } from 'svelte/transition';
</script>

<main class="w-full h-full relative bg-[#232A32] overflow-hidden">
	<!-- Navbar -->
	<Navbar />

	<!-- Hero Image -->
	<div class="w-full h-screen bg-center bg-no-repeat bg-cover">
		<img class="w-full h-full object-fill" alt="Hero logo" src={hero} />
	</div>

	<!-- Union Collectibles -->
	<Roadmap />

	<!-- House of Elephants -->
	<HouseOfElephants />
	<!-- <div class="w-full h-screen flex flex-col"> -->

	<!-- Beige Section -->
	<div class="w-full h-full bg-[#F4EDE3] flex flex-col items-center justify-start pt-24">
		<!-- Main (Why) are we here Content -->
		<WhyAreWeHere />

		<!-- Ecosystem -->
		<Ecosystem />

		<!-- Digital Contents -->
		<DigitalContents />

		<!-- Elephants Trivia -->
		<ElephantsTrivia />

		<!-- Elephant Union Updates -->
		<UnionUpdates />

		<!-- We're seen on -->
		<WeAreSeenOn />

		<!-- Our Friends -->
		<OurFriends />

		<!-- Pre Footer -->
		<PreFooter />

		<!-- Footer -->
		<Footer />
	</div>
</main>
<Modals>
	<div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
</Modals>

<style lang="postcss">
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		/* z-index: 30; */
	}
</style>
