<script lang="ts">
	import { onMount } from 'svelte';
	import { EcosystemCardsCarousel } from '$lib';

	// Assets Cards
	import elephant_fest from '$lib/assets/elephant-fest.png';
	import house_of_elephants from '$lib/assets/house-of-elephants.png';
	import elephant_factory from '$lib/assets/elephant-factory.png';

	let ecosystem_nav = ['Connecting', 'Earning', 'Building', 'Branding'];

	let building_cards = [
		{
			assets: elephant_fest,
			title: 'Elephant Fest',
			copy: 'Festival with 10+ activations, introducing conservation in engaging and entertaining ways.',
			link: ''
		},
		{
			assets: house_of_elephants,
			title: 'House of Elephants',
			copy: 'Real home for elephant conservators, located at the heart of conservaation.',
			link: ''
		},
		{
			assets: elephant_factory,
			title: 'Elephant Factory',
			copy: 'Elephants Factory focuses on creating creative physical goods for merchandise and collections.',
			link: ''
		},
		{
			assets: elephant_factory,
			title: 'Elephant Factory',
			copy: 'Elephants Factory focuses on creating creative physical goods for merchandise and collections.',
			link: ''
		}
	];

	let selectedEcosystemNav: string = 'Building';

	const onEcosystemNavClick = (e: Event, target: string) => {
		selectedEcosystemNav = target;
	};

	onMount(() => {});
</script>

<main class="flex flex-col items-center justify-center">
	<h1 class="text-5xl font-bold leading-[66px] font-grotesk mt-[190px]">Ecosystem</h1>

	<p class="font-grotesk text-center text-xl font-light leading-8 mt-[50px]">
		<span class="font-medium">!CEBB</span> stands as the core principles in our strategic guide for building
		this community
	</p>

	<!-- Ecosystem Navigation -->
	<div>
		<div class="flex items-center justify-evenly gap-[150px] mt-[36px]">
			{#each ecosystem_nav as item, index (index + item)}
				<!-- Temporary -->
				<button
					class={` ${
						item === selectedEcosystemNav
							? 'nav_active'
							: 'flex items-center justify-center p-3 font-bold font-grotesk text-3xl text-[#84807b]'
					}`}
					on:click={(e) => {
						onEcosystemNavClick(e, item);
					}}
				>
					{item}
				</button>
			{/each}
		</div>
		<div class="h-[2px] w-full bg-[#84807b] mt-[40px]"></div>
	</div>

	<!-- Ecosystem Cards -->
	<div class="min-w-fit flex items-center justify-center gap-[30px] mt-[36px] px-[64px]">
		{#if selectedEcosystemNav === 'Building'}
			<EcosystemCardsCarousel assets_list={building_cards} />
		{:else}
			<p class="font-grotesk font-bold">Coming soon ...</p>
		{/if}
	</div>
</main>

<style>
	/* Component styles */
</style>
