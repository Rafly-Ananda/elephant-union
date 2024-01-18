<script lang="ts">
	import '@splidejs/svelte-splide/css';

	import hero from '$lib/assets/hero-bg.png';

	import {
		Ecosystem,
		Roadmap,
		HouseOfElephants,
		WhyAreWeHere,
		DigitalContents,
		ElephantsTrivia,
		UnionUpdates,
		OurTeams,
		WeAreSeenOn,
		OurFriends,
		PreFooter,
		Footer,
		Navbar
	} from '$lib';

	import { Modals, closeModal } from 'svelte-modals';

	import { fade } from 'svelte/transition';
</script>

<main class="w-full h-full relative bg-[#232A32] overflow-hidden">
	<!-- Navbar -->
	<Navbar />

	<!-- Hero Image -->
	<div class="w-full h-screen">
		<img class="w-full h-full object-cover rounded-b-2xl" alt="Hero logo" src={hero} />
	</div>

	<!-- Union Collectibles -->
	<Roadmap />

	<!-- House of Elephants -->
	<HouseOfElephants />

	<!-- Beige Section -->
	<div
		class="w-full h-full bg-[#F4EDE3] flex flex-col items-center justify-start pt-10 md:pt-14 lg:pt-24"
	>
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

		<!-- Our Teams -->
		<OurTeams />

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
	<button slot="backdrop" class="backdrop" transition:fade on:click={closeModal}> </button>
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
