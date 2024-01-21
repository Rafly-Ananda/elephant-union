<script lang="ts">
	import '@splidejs/svelte-splide/css';

	import hero from '$lib/assets/hero.png';
	import scroll_down_arrow_round from '$lib/assets/scroll-down-arrow-round.png';

	import { onMount } from 'svelte';

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

	const words = [
		'Real-world Web3 bridging economy, biodiversity, and tourism for meaningful Elephant Conservation purposes.'
	];
	let i = 0;
	let j = 0;
	let currentWord = '';

	const scrollIntoView = (sectionId: string) => {
		const el = document.querySelector(`#${sectionId}`);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	};

	const typeWriterFnc = () => {
		currentWord = words[i];
		const typewriterElement = document.getElementById('typewriter');

		if (typewriterElement !== null) {
			typewriterElement.textContent = currentWord.substring(0, j + 1);
			j++;
		}

		setTimeout(typeWriterFnc, 100);
	};

	onMount(() => {
		typeWriterFnc();
	});
</script>

<main class="w-full h-full relative bg-[#232A32] overflow-hidden">
	<!-- Navbar -->
	<Navbar />

	<!-- Hero Image -->
	<div class="w-full h-screen relative">
		<img
			class="w-full h-full object-cover md:object-fill rounded-b-2xl"
			alt="Hero logo"
			src={hero}
		/>
		<!-- <div class="w-screen flex items-center justify-center absolute -bottom-7 z-20">
			<button
				on:click|preventDefault={() => scrollIntoView('roadmap')}
				class=" hover:cursor-pointer"
			>
				<img src={scroll_down_arrow} class="animate-bounce" alt="scroll down button" />
			</button>
		</div> -->

		<div
			class="w-[80%] md:w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center gap-10"
		>
			<h1
				id="typewriter"
				class="text-xl md:text-2xl lg:text-5xl font-bold text-center font-grotesk text-white"
			></h1>

			<button
				on:click|preventDefault={() => scrollIntoView('roadmap')}
				class=" hover:cursor-pointer"
			>
				<img src={scroll_down_arrow_round} class="animate-bounce" alt="scroll down button" />
			</button>
		</div>
	</div>

	<div id="roadmap" class=""></div>

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
		z-index: 30;
	}
</style>
