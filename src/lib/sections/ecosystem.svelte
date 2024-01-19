<script lang="ts">
	import { onMount } from 'svelte';
	import { EcosystemCardsCarousel, Modal } from '$lib';
	import { openModal } from 'svelte-modals';

	// Assets Connecting Cards
	import community_meetup from '$lib/assets/community-meetup.png';
	import elephant_whispers from '$lib/assets/elephant-whispers-card.png';
	import voluntrip from '$lib/assets/voluntrip.png';

	// Assets Building Cards
	import elephant_fest from '$lib/assets/elephant-fest.png';
	import house_of_elephants from '$lib/assets/house-of-elephants.png';
	import elephant_factory from '$lib/assets/elephant-factory.png';
	import elephant_labs from '$lib/assets/elephant-labs.png';
	import gadjah_shelter from '$lib/assets/gadjah-shelter.png';

	// Assets Earning Cards
	import alpha_call from '$lib/assets/alpha-call.png';
	import profit_share_system from '$lib/assets/profit-share-system.png';
	import cebb_token from '$lib/assets/cebb-token.png';

	// Assets Branding Cards
	import social_works from '$lib/assets/social-works.png';
	import elephant_trees from '$lib/assets/elephant-trees.png';
	import firewatch from '$lib/assets/firewatch.png';
	import chocolearn from '$lib/assets/chocolearn.png';
	import take_over_area from '$lib/assets/take-over-area.png';

	import CEBB_token_logo from '$lib/assets/CEBB-token-logo.png';

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
			assets: elephant_labs,
			title: 'Elephants Labs',
			copy: 'Elephants Factory focuses on creating creative physical goods for merchandise and collections.',
			link: ''
		},
		{
			assets: gadjah_shelter,
			title: 'Gadjah Shelter',
			copy: 'Shelter hub for social conservators at densely populated nodes supporting national park core areas.',
			link: ''
		}
	];

	let connecting_cards = [
		{
			assets: community_meetup,
			title: 'Community Meetup',
			copy: 'In our first chapter, our primary focus was to connect with our relatively small but loyal holder community.',
			link: ''
		},
		{
			assets: elephant_whispers,
			title: 'Elephant Whispers',
			copy: 'Hear the gentle tales of these giants, their struggles, and the wonders of our efforts to protect them. ',
			link: ''
		},
		{
			assets: voluntrip,
			title: 'Voluntrip',
			copy: 'Volunteering activities tip for conservation through education and concrete actions for the community.',
			link: ''
		}
	];

	let earning_cards = [
		{
			assets: alpha_call,
			title: 'Alpha Call',
			copy: 'Bot external information seamlessly enters the Elephant Union with informativeness, security, and the ability to translate into various languagages.',
			link: ''
		},
		{
			assets: profit_share_system,
			title: 'Profit Share Ecosystem',
			copy: ' We are dedicated to staying open-minded in ensuring everyone involved receives a fair share of the effort, whether directly or indirectly. ',
			link: ''
		},
		{
			assets: cebb_token,
			title: 'CEBB Token',
			copy: 'Stands as the core priciples in our strategic guide for building this community',
			link: ''
		}
	];

	let branding_cards = [
		{
			assets: social_works,
			title: 'Social Worksl',
			copy: 'We engage in projects and activities to drive positive change, promote equality, and enhance well-being, embodying our commitment to social responsibility.',
			link: ''
		},
		{
			assets: elephant_trees,
			title: 'Elephant Trees',
			copy: 'It is committed to promoting sustainable and eco-friendly practices while conserving the natural habitat of these trees.',
			link: ''
		},
		{
			assets: firewatch,
			title: 'Firewatch',
			copy: 'Equipping to combat forest fires and protect our precious wildlife and environment. ',
			link: ''
		},
		{
			assets: chocolearn,
			title: 'Chocolearn',
			copy: 'ChochoLearn is a delightful journey of chocolate-infused education, blending joy and knowledge seamlessly.',
			link: ''
		},
		{
			assets: take_over_area,
			title: 'Take over Area',
			copy: "In our mission to introduce our community to the world, we've gone all out.",
			link: ''
		}
	];

	let selectedEcosystemNav: string = 'Building';

	const onEcosystemNavClick = (e: Event, target: string) => {
		selectedEcosystemNav = target;
	};

	function handleOpen(content: string) {
		openModal(Modal, {
			title: content,
			message: content
		});
	}

	onMount(() => {});
</script>

<main class="w-full p-6 flex flex-col items-center justify-center mt-[20px] lg:mt-[120px]">
	<h1 class="text-2xl md:text-4xl lg:text-6xl font-extrabold font-graphik">Ecosystem</h1>

	<p
		class="flex items-center flex-col md:flex-row center justify-center font-grotesk font-light text-xs md:text-base md:leading-4 lg:text-xl lg:leading-8 mt-[50px] gap-2 text-center"
	>
		<button
			class="flex items-center justify-center font-medium underline gap-1 mr-2 md:mr-0"
			on:click={() => handleOpen('CEBB')}
		>
			<img class="flex-none" src={CEBB_token_logo} alt="CEBB Token Logo" />
			CEBB
		</button>

		stands as the core principles in our strategic guide for building this community
	</p>

	<!-- Ecosystem Navigation -->
	<div class="w-full md:p-[64px]">
		<div class="flex items-center justify-evenly lg:gap-[150px] mt-[36px]">
			{#each ecosystem_nav as item, index (index + item)}
				<!-- Temporary -->
				<button
					class={` ${
						item === selectedEcosystemNav ? 'bg-[#00df8e] text-black' : 'text-[#84807b]'
					} flex items-center justify-center p-2 md:p-2 lg:p-3 font-bold font-grotesk text-sm md:text-xl lg:text-3xl rounded-md`}
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
	<div class=" h-full flex items-center justify-center gap-[30px] mt-[36px] lg:px-[64px]">
		{#if selectedEcosystemNav === 'Building'}
			<EcosystemCardsCarousel assets_list={building_cards} />
		{:else if selectedEcosystemNav === 'Connecting'}
			<EcosystemCardsCarousel assets_list={connecting_cards} />
		{:else if selectedEcosystemNav === 'Earning'}
			<EcosystemCardsCarousel assets_list={earning_cards} />
		{:else if selectedEcosystemNav === 'Branding'}
			<EcosystemCardsCarousel assets_list={branding_cards} />
		{:else}
			<p class="font-grotesk font-bold">Coming soon ...</p>
		{/if}
	</div>
</main>

<style>
	/* Component styles */
</style>
