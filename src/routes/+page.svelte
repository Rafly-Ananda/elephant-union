<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import logo from '$lib/assets/nav-logo.png';
	import hero from '$lib/assets/hero-bg.png';
	import union_collectibles from '$lib/assets/union-collectibles-logo.png';
	import typography_union_collectibles from '$lib/assets/elephant-union-collectible-series.png';
	import copy_collectibles from '$lib/assets/collectibles_copy.png';

	// arrows
	import arrow_left from '$lib/assets/arrow-left.svg';
	import arrow_right from '$lib/assets/arrow-right.svg';

	// benefits-arts
	import benefits_art from '$lib/assets/benefits-art.svg';
	import benefits_economy from '$lib/assets/benefits-economy.svg';
	import benefits_privillage from '$lib/assets/benefits-privillage.svg';
	import benefits_social from '$lib/assets/benefits-social.svg';
	import benefits_virtual from '$lib/assets/benefits-virtual.svg';

	// Algorund
	import algorand_logo from '$lib/assets/algorand-logo.svg';

	// Milestone
	import milestone_point from '$lib/assets/milestone-point.svg';
	import milestone_glowing_point from '$lib/assets/milestone-glowing-point.svg';
	import milestone_dimmed_point from '$lib/assets/milestone-dimmed-point.svg';
	import line from '$lib/assets/line.svg';
	import arrow_up_icon from '$lib/assets/arrow-up-icon.svg';

	// House of Elephants
	import hoe_way_kambas from '$lib/assets/hoe-way-kambas.png';
	import hoe_bandung from '$lib/assets/hoe-bandung.png';
	import hoe_bali from '$lib/assets/hoe-bali.png';
	import hoe_tangkahan from '$lib/assets/hoe-tangkahan.png';
	import hoe_tesso_nilo from '$lib/assets/hoe-tesso-nilo.png';

	// NFT Artworks
	import xoxo from '$lib/assets/gadjah-showcase-1.png';

	let benefits_items = [
		benefits_art,
		benefits_economy,
		benefits_privillage,
		benefits_social,
		benefits_virtual
	];

	let hoe_items = [hoe_way_kambas, hoe_bandung, hoe_bali, hoe_tangkahan, hoe_tesso_nilo];

	let nft_artworks = [xoxo, xoxo, xoxo, xoxo, xoxo, xoxo, xoxo, xoxo, xoxo, xoxo];
</script>

<main class="w-full h-full relative bg-[#232A32]">
	<!-- Navbar -->
	<nav
		class="bg-[#fbf8f4] bg-opacity-40 w-full h-[120px] flex items-center justify-between p-[64px] fixed z-20"
	>
		<img alt="The project logo" src={logo} />
		<div
			class="w-[198px] h-[48px] py-[8px] px-[10px] bg-white rounded-[10px] flex items-center justify-between"
		>
			<div class="cursor-pointer pl-[10px]">
				<p class="text-[16px] font-normal leading-6 font-grotesk">Sign Up</p>
			</div>
			<div
				class="cursor-pointer bg-[#00DF8E] rounded-[10px] w-[96px] h-[40px] flex items-center justify-center"
			>
				<p class="text-[16px] font-normal leading-6 font-grotesk">Login</p>
			</div>
		</div>
	</nav>
	<div class="w-full h-screen bg-center bg-no-repeat bg-cover">
		<img class="w-full h-full object-fill" alt="Hero logo" src={hero} />
	</div>

	<!-- Union Collectibles -->
	<div class="w-full h-screen flex bg-[#232A32]">
		<!-- Left Side -->
		<div class="w-full h-full flex flex-col items-start justify-center gap-10 pt-10 px-16">
			<div class="w-full flex justify-start">
				<img class="" alt="Union Collectibles" src={union_collectibles} />
				<img
					class="w-fit object-none"
					alt="Union Collectibles Typography"
					src={typography_union_collectibles}
				/>
			</div>

			<img class="object-none" alt="Collectibles Copy" src={copy_collectibles} />

			<div class="flex flex-col gap-4">
				<h4 class="text-xl leading-7 font-grotesk text-[#00DF8E] font-bold">Benefits:</h4>
				<div class="flex gap-4 hover:cursor-pointer">
					{#each benefits_items as item, index (index + item)}
						<div class="w-[94px] h-[94px] rounded-md bg-white flex items-center justify-center">
							<img alt={item} src={item} />
						</div>
					{/each}
				</div>

				<div class="w-[454px]">
					<p class="text-[16px] text-justify font-light font-grotesk text-white">
						In this Elephant Union collection, our focus is to transform these NFTs into utility
						members for participants in our mission. From privileges to economic benefits.
					</p>
				</div>

				<div class="flex items-center justify-around rounded-lg w-[394px] h-[55px] bg-white">
					<div class="flex items-center justify-center gap-2">
						<p class="font-grotesk text-[12px]">Listing on:</p>
						<img alt="Algorand" src={algorand_logo} />
					</div>
					<button class="w-[180px] h-[40px] bg-[#00DF8E] rounded-lg"> Mint Now </button>
				</div>
			</div>
		</div>
		<!-- Right Side -->
		<div class="w-full h-full flex flex-col items-center justify-center">
			<div class="w-full flex items-center justify-center gap-10">
				<h4 class="text-xl leading-7 font-grotesk text-[#00DF8E] font-bold">Roadmap:</h4>
				<!-- Milestones -->
				<div class="w-full flex items-center justify-start gap-10 relative">
					<!-- Milestone -->
					<div class="flex flex-col items-center justify-center gap-2 mt-[90px]">
						<h3
							class="hover:cursor-pointer text-xl leading-7 font-grotesk text-[#00DF8E] font-bold"
						>
							Chapter 1
						</h3>
						<img
							class="hover:cursor-pointer w-fit object-none z-10"
							alt=" milestone-point-1"
							src={milestone_point}
						/>
						<img class="w-fit object-none" alt="milestone-line-1" src={line} />
						<div
							class="flex flex-col items-center justify-center text-[14px] text-white leading-7 font-grotesk font-medium"
						>
							<h3>First Step to Humanity</h3>
							<h3>(2022-2023)</h3>
						</div>
					</div>

					<!-- Start Line -->
					<div
						class="h-[1px] bg-gradient-to-r from-white to-[#8A8A8A] absolute left-20 right-0"
					></div>
					<!-- End Line -->

					<!-- Milestone 2 -->
					<div class="flex flex-col items-center justify-center gap-2 mb-[90px]">
						<div
							class="flex flex-col items-center justify-center text-[14px] text-white leading-7 font-grotesk font-medium"
						>
							<h3>Sustaining Economic</h3>
							<h3>Impact (2024-2025)</h3>
						</div>
						<img class="w-fit object-none rotate-180" alt="milestone-line-1" src={line} />
						<img
							class="hover:cursor-pointer w-fit object-none z-10"
							alt=" milestone-point-1"
							src={milestone_glowing_point}
						/>
						<h3
							class="hover:cursor-pointer text-xl leading-7 font-grotesk text-[#00DF8E] font-bold"
						>
							Chapter 2
						</h3>
					</div>

					<!-- Milestone 3 -->
					<div class="flex flex-col items-center justify-center gap-2 mt-[90px] text-[#8A8A8A]">
						<h3 class="hover:cursor-pointer text-xl leading-7 font-grotesk font-bold">Chapter 3</h3>
						<img
							class="hover:cursor-pointer w-fit object-none z-10"
							alt=" milestone-point-1"
							src={milestone_dimmed_point}
						/>
						<img class="w-fit object-none" alt="milestone-line-1" src={line} />
						<div
							class="flex flex-col items-center justify-center text-[14px] leading-7 font-grotesk font-medium"
						>
							<h3>Direct Action for</h3>
							<h3>Elephants</h3>
						</div>
					</div>

					<!-- Milestone 4 -->
					<div class="flex flex-col items-center justify-center gap-2 mb-[90px] text-[#8A8A8A]">
						<div
							class="flex flex-col items-center justify-center text-[14px] leading-7 font-grotesk font-medium"
						>
							<h3>Exploring new</h3>
							<h3>Horizons</h3>
						</div>
						<img class="w-fit object-none rotate-180" alt="milestone-line-1" src={line} />
						<img
							class="hover:cursor-pointer w-fit object-none z-10 text-red-500"
							alt=" milestone-point-1"
							src={milestone_dimmed_point}
						/>
						<h3 class="hover:cursor-pointer text-xl leading-7 font-grotesk font-bold">Chapter 4</h3>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-center pl-40">
				<h4 class="text-[16px] font-light leading-7 text-white">
					We have Encyclopedia (Whitepaper) too, on <span class="font-bold text-[#00DF8E] underline"
						>GitBook
					</span>
				</h4>
				<img alt="arrow-up-icon" src={arrow_up_icon} />
			</div>
		</div>
	</div>

	<!-- House of Elephants -->
	<div class="w-full h-screen">
		<!-- ? This is using manual CSS -->
		<div class="marquee">
			<div class="track">
				<div class="font-grotesk font-bold text-4xl">
					&nbsp; ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION *
					ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT
					UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT UNION
					SERIES * NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES *
					NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION **
				</div>
			</div>
		</div>

		<!-- Badges -->
		<div class="flex items-center justify-center">
			<div class="mt-20 w-4/6 flex items-center justify-center hover:cursor-pointer">
				{#each hoe_items as item, index (index + item)}
					<img class="object-none" alt={item} src={item} />
				{/each}
			</div>
		</div>

		<!-- Artworks -->
		<!-- <div class="flex items-center justify-center">
			<div
				class="mt-20 w-full flex items-center justify-start px-[70px] hover:cursor-pointer gap-[22px]"
			>
				{#each nft_artworks as item, index (index + item)}
					<div
						class="w-[289px] h-[289px] p-1 rounded-md bg-white flex items-center justify-center object-none"
					>
						<img class="w-[268px] h-[268px]" alt={item} src={item} />
					</div>
				{/each}
			</div>
		</div> -->

		<div class="flex items-center justify-center">
			<div
				class="mt-20 w-full flex items-center justify-start px-[70px] hover:cursor-pointer gap-[22px]"
			>
				<Splide
					options={{
						rewind: true,
						type: 'loop',
						perMove: 1,
						perPage: 6,
						gap: 120,
						arrows: false,
						pagination: false
					}}
				>
					{#each nft_artworks as item, index (index + item)}
						<SplideSlide>
							<div
								class="w-[289px] h-[289px] p-1 rounded-md bg-white flex items-center justify-center object-none"
							>
								<img class="w-[268px] h-[268px]" alt={item} src={item} />
							</div>
						</SplideSlide>
					{/each}
				</Splide>
			</div>
		</div>

		<div class="flex items-center justify-center w-fit gap-5 mt-[55px] px-[70px]">
			<div
				class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
			>
				<img alt="arrow-right" src={arrow_left} />
			</div>

			<div
				class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
			>
				<img alt="arrow-left" src={arrow_right} />
			</div>
		</div>
	</div>
</main>

<style lang="postcss">
</style>
