<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';

	import logo from '$lib/assets/nav-logo.png';
	import hero from '$lib/assets/hero-bg.png';
	import union_collectibles from '$lib/assets/union-collectibles-logo.png';
	import typography_union_collectibles from '$lib/assets/elephant-union-collectible-series.png';
	import copy_collectibles from '$lib/assets/collectibles_copy.png';

	import delete_me_later from '$lib/assets/delete_me_later.png';
	import delete_me_later_2 from '$lib/assets/delete_me_later_2.JPG';

	// arrows
	import arrow_left from '$lib/assets/arrow-left.svg';
	import arrow_right from '$lib/assets/arrow-right.svg';
	import arrow_up_white from '$lib/assets/arrow-up-white.svg';

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

	// Ecosystem Cards
	import elephant_fest from '$lib/assets/elephant-fest.png';
	import house_of_elephants from '$lib/assets/house-of-elephants.png';
	import elephant_factory from '$lib/assets/elephant-factory.png';

	// Elephant Whispers
	import elephant_whispers_copy from '$lib/assets/elephant-whispers.svg';
	import elephant_whispers_radio from '$lib/assets/elephant-whispers-radio.svg';

	// Were seen on
	import liputan_6 from '$lib/assets/liputan-6.png';
	import liputan_rcti from '$lib/assets/rcti.png';
	import west_java_conservation from '$lib/assets/west-java-conservation.png';
	import idn_times from '$lib/assets/idn-times.png';
	import republika from '$lib/assets/republika.png';
	import tribun_jabar from '$lib/assets/tribun-jabar.png';

	// Our Friends
	import blok_blok from '$lib/assets/blok-blok.png';
	import noah from '$lib/assets/noah.png';
	import fkgi from '$lib/assets/fkgi.png';
	import bri from '$lib/assets/bri.png';
	import eiger from '$lib/assets/eiger.png';
	import way_kambas from '$lib/assets/way-kambas.png';
	import satwa from '$lib/assets/satwa.png';
	import perkebunan_nusantara from '$lib/assets/perkebunan-nusantara.png';
	import indonesia_ecotourism from '$lib/assets/indonesia-ecotourism.png';
	import walini from '$lib/assets/walini.png';
	import coinfolks from '$lib/assets/coinfolks.png';
	import oxlabs from '$lib/assets/oxlabs.png';

	import kuyou from '$lib/assets/kuyou.png';
	import pertamina_ep from '$lib/assets/pertamina-ep.png';
	import solar_generation from '$lib/assets/solar-generation.png';
	import ggf from '$lib/assets/ggf.png';
	import kopi_tubruk_gajah from '$lib/assets/kopi-tubruk-gajah.png';
	import indofood from '$lib/assets/indofood.png';

	// Footer
	import footer_artwork from '$lib/assets/footer-artwork.png';
	import discord_logo from '$lib/assets/discord-logo.svg';
	import elephant_union_logo_footer from '$lib/assets/elephant-union-logo-footer.png';

	// Social Media Logo
	import facebook from '$lib/assets/facebook.svg';
	import instagram from '$lib/assets/instagram.svg';
	import x from '$lib/assets/x.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import youtube from '$lib/assets/youtube.svg';

	const social_media_logos = [facebook, instagram, x, linkedin, youtube];

	const our_friends = [
		blok_blok,
		noah,
		fkgi,
		bri,
		eiger,
		way_kambas,
		satwa,
		perkebunan_nusantara,
		indonesia_ecotourism,
		walini,
		coinfolks,
		kuyou,
		pertamina_ep,
		solar_generation,
		ggf,
		kopi_tubruk_gajah,
		indofood,
		oxlabs
	];

	let were_seen_on_logo = [
		liputan_6,
		liputan_rcti,
		west_java_conservation,
		idn_times,
		republika,
		tribun_jabar
	];

	let benefits_items = [
		benefits_art,
		benefits_economy,
		benefits_privillage,
		benefits_social,
		benefits_virtual
	];

	let hoe_items = [hoe_way_kambas, hoe_bandung, hoe_bali, hoe_tangkahan, hoe_tesso_nilo];

	let nft_artworks = [xoxo, xoxo, xoxo, xoxo, xoxo, xoxo, xoxo, xoxo, xoxo, xoxo];

	let ecosystem_nav = ['Connecting', 'Earning', 'Building', 'Branding'];

	let ecosystem_cards = [
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
		}
	];

	let update_nav = ['Monthly Update', 'Annoucement', 'Events'];

	let footer_info_nav = ['About Us', 'Articles', 'Careers', 'FAQs', 'NFT Collections'];

	const onArtworkCarouselClick = (e: Event) => {
		console.log(e.target);
		console.log('foobar');
	};

	onMount(() => {});
</script>

<main class="w-full h-full relative bg-[#232A32] overflow-hidden">
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

		<!-- Artwork Carousel -->
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
						gap: '10rem',
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
			<button
				id="artwork-left-btn"
				class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
				on:click={onArtworkCarouselClick}
			>
				<img alt="arrow-right" src={arrow_left} />
			</button>

			<button
				id="artwork-right-btn"
				class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
				on:click={onArtworkCarouselClick}
			>
				<img alt="arrow-left" src={arrow_right} />
			</button>
		</div>
	</div>

	<!-- (Why) are we here -->
	<div class="w-full h-full bg-[#F4EDE3] flex flex-col items-center justify-start pt-24">
		<h1 class="text-5xl font-bold leading-[66px] font-grotesk">(Why) are we here:</h1>

		<!-- Carousel Track -->
		<div class="w-full h-[207px] bg-[#F3F6F5] mt-[80px]"></div>

		<p class="font-grotesk text-center text-xl font-medium leading-8 mt-[80px]">
			<q
				>We are here to make your day a little bit better with our distinctive creative of things!</q
			>
		</p>

		<h1 class="text-5xl font-bold leading-[66px] font-grotesk mt-[190px]">Ecosystem</h1>

		<p class="font-grotesk text-center text-xl font-light leading-8 mt-[50px]">
			<span class="font-medium">!CEBB</span> stands as the core principles in our strategic guide for
			building this community
		</p>

		<!-- Ecosystem Navigation -->
		<div>
			<div class="flex items-center justify-evenly gap-[150px] mt-[36px]">
				{#each ecosystem_nav as item, index (index + item)}
					<!-- Temporary -->
					<button
						class={` ${
							item === 'Building'
								? 'nav_active'
								: 'flex items-center justify-center p-3 font-bold font-grotesk text-3xl text-[#84807b]'
						}`}
					>
						{item}
					</button>
				{/each}
			</div>
			<div class="h-[2px] w-full bg-[#84807b] mt-[40px]"></div>
		</div>

		<!-- Ecosystem Cards -->
		<div class="min-w-fit flex items-center justify-center gap-[30px] mt-[36px]">
			{#each ecosystem_cards as item, index (index + item.assets)}
				<div class="relative">
					<img src={item.assets} alt={item.title} />
					<div
						class="w-full h-[246px] bg-black float-left absolute left-0 right-0 bottom-0 opacity-50"
					></div>
					<div
						class="w-full h-[246px] flex items-start justify-center float-left absolute left-0 right-0 bottom-0"
					>
						<div
							class="flex flex-col items-center justify-center font-grotesk z-10 text-white opacity-100 mt-[28px]"
						>
							<h5 class=" text-[26px] font-bold leading-9 tracking-[0.2px]">{item.title}</h5>
							<p class=" text-[14px] font-medium text-center">
								{item.copy}
							</p>

							<button
								class="flex items-center justify-center border border-white font-grotesk text-[18px] font-semibold leading-7 rounded-lg p-2 mt-[33px]"
							>
								Visit <img src={arrow_up_white} alt="arrow-up-right" />
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Digital Contents -->
		<div class="w-[1304px] flex h-full items-start justify-center gap-5 mt-[155px]">
			<!-- Left Side -->
			<div class="flex flex-col flex-none items-start justify-start w-[530px] h-fit gap-4">
				<div class="h-[193px] flex items-center justify-between bg-[#FFD1DC] p-5 rounded-2xl">
					<div class="w-full h-full grow flex flex-col items-start justify-center gap-3">
						<img class="object-none" src={elephant_whispers_copy} alt="elephant-whispers-copy" />

						<p class="font-grotesk font-medium text-left leading-3">
							Explore the world of elephant
						</p>
						<p class="font-grotesk font-medium text-left leading-3">
							conservation with 'Elephant Whispers' and
						</p>
						<p class="font-grotesk font-medium text-left leading-3">
							Join us on an emotional journey into
						</p>
						<p class="font-grotesk font-medium text-left leading-3">
							conservation's heart and nature's marvel
						</p>
					</div>

					<img
						class="grow-0 w-[45%] h-full object-none"
						src={elephant_whispers_radio}
						alt="elephant-whispers-radio"
					/>
				</div>
				<!-- Spotify Player -->
				<iframe
					title="spotify-gadjah-whispers-podcast-player"
					style="border-radius:12px"
					src="https://open.spotify.com/embed/track/4CvYHgcpBFbefsz6Q55ID1?utm_source=generator"
					width="100%"
					height="152"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>
			<!-- Right Side -->
			<div class="w-full h-[361px]">
				<iframe
					class="w-full h-full"
					src="https://www.youtube.com/embed/SHj2kJzVi_g"
					title="Raisa - Kali Kedua (Official Music Video)"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
		</div>

		<!-- Elephant Copywriting -->
		<div class="w-[1304px] flex h-full items-start justify-center gap-5 mt-[155px]">
			<!-- Left Side -->
			<div class="flex flex-col flex-none items-start justify-start w-[450px] h-fit gap-4">
				<h1 class="font-grotesk text-4xl font-medium">
					Want to read something <span class="text-[#00DF8E]">very interesting</span> about elephant?
				</h1>

				<div class="flex items-center justify-center w-fit gap-5 mt-5">
					<button
						id="artwork-left-btn"
						class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
						on:click={onArtworkCarouselClick}
					>
						<img alt="arrow-right" src={arrow_left} />
					</button>

					<button
						id="artwork-right-btn"
						class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
						on:click={onArtworkCarouselClick}
					>
						<img alt="arrow-left" src={arrow_right} />
					</button>
				</div>
			</div>
			<!-- Right Side -->
			<div class="w-full h-[361px] flex items-center bg-white rounded-2xl">
				<div class="w-full h-full">
					<img class="w-full h-full" src={delete_me_later} alt="delete-me-later" />
				</div>
				<div class="w-full h-full p-4 flex flex-col items-start justify-between gap-4 font-grotesk">
					<h5 class="text-4xl font-medium">Elephants gonna be wild dude!</h5>

					<p class="text-lg text-[#98A0A2]">
						Coffee is the most popular drink in the world and drinking coffee in the morning has
						become a routine for many people before their activities. Beside being considered to be
						able to provide energy intake, it turns out that the ...
					</p>

					<div class="flex items-center justify-center gap-2">
						<div class="w-[40px] h-[40px] rounded-full bg-[#C4C4C4]"></div>

						<div class="flex flex-col items-start justify-center">
							<h6 class="text-md font-medium">Adam</h6>
							<h6 class="text-normal font-light text-[#98A0A2]">August 10, 2023</h6>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Updates -->
		<div
			class="w-full h-[80vh] flex flex-col items-center justify-start bg-[#F3F6F5] mt-[150px] pt-[100px] gap-10"
		>
			<h1 class="font-grotesk text-5xl font-bold">Updates</h1>

			<div class="w-[1304px] flex items-center bg-white rounded-2xl">
				<div class="w-full h-full rounded-2xl">
					<img
						class="w-full h-full object-fill rounded-l-2xl"
						src={delete_me_later_2}
						alt="delete-me-later"
					/>
				</div>
				<!-- Navigations -->
				<div class="w-full h-full flex flex-col items-start font-grotesk">
					<div class="w-full py-4 flex items-center justify-evenly">
						{#each update_nav as item, index (item + index)}
							<div class="">
								<h6
									class={`${
										index === 0 ? 'update_nav_active' : 'text-[#C2C2C2] text-lg font-medium'
									}`}
								>
									{item}
								</h6>
							</div>
						{/each}
					</div>
					<div class="h-[1px] w-full bg-[#C2C2C2]"></div>
					<div class="w-full max-h-[433px] overflow-y-scroll">
						{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as item, index (item + index)}
							<div class={`${item % 2 === 0 ? 'bg-[#FFF]' : 'bg-[#F2F3F2]'} h-[60px] p-3`}>
								[ALl In Prabowo 02 ❤️‍🔥]
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Were seen on -->
		<div class="w-[1304px] h-full flex flex-col items-center justify-center mt-[177px]">
			<h1 class="text-5xl font-bold">Were seen on</h1>
			<div class="w-full h-full grid grid-cols-6 gap-20 mt-[57px]">
				{#each were_seen_on_logo as item, index (item + index)}
					<img src={item} alt={item} />
				{/each}
			</div>
		</div>

		<!-- Our Friends -->
		<div class="w-[1304px] h-full flex flex-col items-center justify-center mt-[177px]">
			<h1 class="text-5xl font-bold">Our Friends</h1>
			<div class="w-full h-full grid grid-cols-6 gap-20 mt-[57px]">
				{#each our_friends as item, index (item + index)}
					<div class=" flex items-center justify-center">
						<img src={item} alt={item} />
					</div>
				{/each}
			</div>
		</div>

		<!-- Footer Artwork -->
		<div class="w-full h-full mt-[123px]">
			<div class="w-full h-full flex items-center justify-center relative">
				<img class="w-full" src={footer_artwork} alt="footer-artwork" />

				<div class="w-[1304px] absolute flex">
					<!-- Left Side -->
					<div class="w-full font-grotesk flex flex-col items-center justify-center">
						<div>
							<h1 class="font-black text-7xl">Also we have community</h1>
							<p class="text-xl font-light leading-8">
								Join our community on Discord to keep in touch with us.
							</p>
						</div>
					</div>

					<!-- Right Side -->
					<div class="w-full flex items-center justify-end">
						<button class="w-[279px] h-[60px] bg-black flex items-center justify-evenly rounded-lg">
							<img class="object-none mt-1" src={discord_logo} alt="discord-logo" />
							<span class="text-white font-light leading-8 text-xl">Join our Discord</span>
							<img class="object-none mt-1" src={arrow_up_white} alt="arrow-up" />
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Footer -->
		<div
			class="w-full h-full flex flex-col items-start justify-center bg-[#232A32] p-[75px] font-grotesk text-white gap-10"
		>
			<div class="w-full flex items-start justify-center gap-20">
				<!-- Elephant Union -->
				<div class="w-[322px]">
					<img src={elephant_union_logo_footer} alt="elephant-union-footer-logo" />
					<p class="font-light text-sm mt-5">
						Real-world Web3 bridges economy, biodiversity, and tourism for meaningfull purposes for
						Elephant Conservation.
					</p>
				</div>

				<!-- Information -->
				<div class="w-[150px]">
					<h6 class="text-lg font-bold">Information</h6>

					<ul>
						{#each footer_info_nav as item, index (item + index)}
							<li class="mt-4"><a class="font-light" href="#">{item}</a></li>
						{/each}
					</ul>
				</div>

				<!-- Contact Us -->
				<div class="w-[322px]">
					<h6 class="text-lg font-bold">Contact Us</h6>

					<div class="font-light flex flex-col gap-10 mt-5">
						<p class="font-light">Jakarta, Indonesia</p>
						<p class="font-light">Email: elephantunionofficial@gmail.com</p>
					</div>
				</div>

				<!-- Stay In The Loop -->
				<div class="w-[322px]">
					<h6 class="text-lg font-bold">Stay In The Loop</h6>

					<p class="font-light text-sm mt-5">
						We also have a collection of interesting articles that you can read anytime. Subscribe
						now to not miss any of our article releases.
					</p>

					<div></div>
				</div>
			</div>

			<div class="h-[2px] bg-white w-full"></div>

			<div class="w-full flex items-center justify-between">
				<div class="flex items-center justify-center gap-10">
					<span>&#169; 2024 Elephant Union. All rights reserved.</span>

					<a href="#" class="underline">Privacy Policy</a>
					<a href="#" class="underline">Terms and Conditions</a>
				</div>

				<div>
					<ul class="flex items-center justify-center gap-3">
						{#each social_media_logos as item, index (item + index)}
							<a href=""><img src={item} alt={item} /></a>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="postcss">
</style>
