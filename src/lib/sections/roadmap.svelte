<script lang="ts">
	import { openModal } from 'svelte-modals';
	import { Modal } from '$lib';

	import union_collectibles from '$lib/assets/union-collectibles-logo.png';
	import typography_union_collectibles from '$lib/assets/elephant-union-collectible-series.png';
	import copy_collectibles from '$lib/assets/collectibles_copy.png';

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

	interface benefitModalContentType {
		title: string;
		content: string[];
		art: string;
	}

	interface roadmapModalContentType {
		title: string;
		content: string;
		link: string;
	}

	const benefit_modal_content: benefitModalContentType[] = [
		{
			title: 'ART',
			content: [
				'1 Art Digital, NFT generated Elephant Union',
				'Physical handmade art Elephant Union from elephant tusker canvas (Raffle), free shipphing to global address.'
			],
			art: benefits_art
		},
		{
			title: 'Economics',
			content: ['Profit Sahre | House of Elephants @WayKambas 1 NFT = 0,001% (5 Years)'],
			art: benefits_economy
		},
		{
			title: 'Privilege in Real Life',
			content: [
				'Free Acces VIP Lounge at every House of Elephants (HoE)',
				'Free Acces to all paid events whitin ecosystem & 20% discount for accomodation and FnB Elephant Union Ecosystem',
				'Indonesian Trip (Raffle)',
				'Africa Trip (Raffle)'
			],
			art: benefits_privillage
		},
		{
			title: 'Virtual',
			content: ['Avatar Character Elephant Union Members at Elephant Universe'],
			art: benefits_virtual
		},
		{
			title: 'Social',
			content: [
				'1 NFT = 1 Tree (Each NFT represents one tree planting)',
				'Contributions to the Elephant Union support its social programs.'
			],
			art: benefits_social
		}
	];

	const roadmap_modal_content: roadmapModalContentType[] = [
		{
			title: 'Chapter 1: First Step to Humanity',
			content:
				'We prioritize humanity initiatives in the local community, starting grassroots efforts to enhance human connections in villages surrounding Way Kambas National Park. This step aims to understand their concerns and build solutions collaboratively, ensuring each step is evaluated through routine assessments.',
			link: ''
		},
		{
			title: 'Chapter 2: Sustaining Economic Impact',
			content:
				"As we step into Chapter 2, our focus turns to sustaining economic impact. We envision implementing innovative strategies to ensure the longevity and prosperity of our ecosystem. This includes exploring avenues for economic sustainability, fostering partnerships, and creating opportunities for growth within our community. Together, we'll build a foundation that stands strong against the winds of change.",
			link: ''
		},
		{
			title: 'Chapter 3: Direct Action for Elephants',
			content:
				"Chapter 3 marks a decisive turn as we embark on direct action for elephants. We're committed to making a tangible impact on elephant conservation. Through partnerships, awareness campaigns, and on-ground initiatives, we aim to address critical challenges these magnificent creatures face. Join us in taking direct steps toward securing a better future for elephants and their habitats.",
			link: ''
		},
		{
			title: 'Chapter 4: Exploring new Horizons',
			content:
				"As we delve into Chapter 4, our journey extends to exploring new horizons. This phase is about embracing innovation, venturing into uncharted territories, and pushing the boundaries of what's possible. We invite you to join us in discovering fresh perspectives, forging new connections, and navigating the exciting unknowns that lie ahead. Together, we'll pioneer the next chapter of our collective journey.",
			link: ''
		}
	];

	function handleOpen(content: benefitModalContentType | roadmap_modal_content) {
		openModal(Modal, {
			title: content.title,
			message: content.content
		});
	}
</script>

<div
	class="w-full h-full flex flex-col lg:flex-row justify-center bg-[#232A32] items-start p-6 lg:px-[64px] lg:py-20"
>
	<!-- Left Side -->
	<div class="w-full h-full flex flex-col items-center justify-center gap-4 md:items-start">
		<div class=" flex justify-start">
			<img class="w-fit object-none" alt="Union Collectibles" src={union_collectibles} />
			<img
				class="w-fit object-none"
				alt="Union Collectibles Typography"
				src={typography_union_collectibles}
			/>
		</div>

		<h1 class=" text-white font-bold text-4xl lg:text-6xl text-center lg:text-left lg:w-4/5">
			Discover, Collect NFT and <span class="text-[#00DF8E]">become a member</span>
		</h1>

		<div class="flex flex-col items-center md:items-start gap-4">
			<h4 class="text-lg md:text-xl leading-7 font-grotesk text-[#00DF8E] font-bold">Benefits:</h4>
			<div class="flex gap-2 hover:cursor-pointer">
				{#each benefit_modal_content as item, index (index + item.title)}
					<button
						class="w-full h-full rounded-md bg-white flex items-center justify-center"
						on:click={() => handleOpen(item)}
					>
						<img alt={item.title} src={item.art} />
					</button>
				{/each}
			</div>

			<div class="w-full lg:w-2/4">
				<p class=" text-sm lg:text-base text-justify font-light font-grotesk text-white">
					In this Elephant Union collection, our focus is to transform these NFTs into utility
					members for participants in our mission. From privileges to economic benefits.
				</p>
			</div>

			<div class="flex items-center justify-around rounded-lg w-fit bg-white p-2">
				<div class="flex items-center justify-center gap-2">
					<p class="font-grotesk text-xs">Listing on:</p>
					<img alt="Algorand" class="w-2/5" src={algorand_logo} />
				</div>
				<button class=" px-6 py-1 bg-[#00DF8E] rounded-lg text-sm font-medium"> Mint Now </button>
			</div>
		</div>
	</div>

	<!-- Right Side -->
	<div class="w-full h-full flex flex-col items-center justify-center my-10 lg:h-2/4 lg:w-2/4">
		<h4 class="text-xl leading-7 font-grotesk text-[#00DF8E] font-bold">Roadmap:</h4>
		<div class="w-full h-full mt-5">
			<div class="w-full h-full flex flex-col items-center justify-start relative">
				<div class="w-full h-[95%] bottom-0 absolute">
					<!-- Centered Child Div -->
					<div
						id="child"
						class="w-[1px] h-full bg-gradient-to-r from-white to-[#8A8A8A] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					></div>
					<!-- End Line -->
				</div>

				<!-- #Start Milestone 1 -->
				<div class="w-full relative">
					<div class="absolute w-2/4 h-full left-0">
						<div
							class="w-2/4 h-[1px] bg-white absolute top-1/2 right-0 transform -translate-y-1/2"
						></div>
						<div
							class="w-[5px] h-[5px] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						></div>

						<div class="w-2/4 h-full flex items-center justify-center absolute left-0 pr-2">
							<h3 class="text-xs text-white font-grotesk font-medium text-center lg:text-base">
								Sustaining Economic Impact (2024-2025)
							</h3>
						</div>
					</div>

					<button on:click={() => handleOpen(roadmap_modal_content[0])}>
						<img
							class="hover:cursor-pointer w-fit object-none z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							alt=" milestone-point-1 "
							src={milestone_point}
						/>
					</button>
					<button
						class="hover:cursor-pointer text-xl leading-7 font-grotesk text-[#00DF8E] font-bold absolute top-1/2 left-1/2 lg:left-48 transform -translate-y-1/2 right-0"
						on:click={() => handleOpen(roadmap_modal_content[0])}
					>
						Chapter 1
					</button>
				</div>
				<!-- /End Milestone 1 -->

				<!-- #Start Milestone 2 -->
				<div class="w-full relative mt-32">
					<div class="absolute w-2/4 h-full right-0">
						<div
							class="w-2/4 h-[1px] bg-white absolute top-1/2 left-0 transform -translate-y-1/2"
						></div>
						<div
							class="w-[5px] h-[5px] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						></div>

						<div class="w-2/4 h-full flex items-center justify-center absolute right-0 pl-2">
							<h3 class="text-xs text-white font-grotesk font-medium text-center lg:text-base">
								Sustaining Economic Impact (2024-2025)
							</h3>
						</div>
					</div>

					<button on:click={() => handleOpen(roadmap_modal_content[0])}>
						<img
							class="hover:cursor-pointer w-fit object-none z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							alt=" milestone-point-1 "
							src={milestone_point}
						/>
					</button>
					<button
						class="hover:cursor-pointer text-xl leading-7 font-grotesk text-[#00DF8E] font-bold absolute top-1/2 left-0 transform -translate-y-1/2 right-1/2 lg:right-44"
						on:click={() => handleOpen(roadmap_modal_content[0])}
					>
						Chapter 2
					</button>
				</div>
				<!-- /End Milestone 2 -->

				<!-- #Start Milestone 3 -->
				<div class="w-full relative mt-32">
					<div class="absolute w-2/4 h-full left-0">
						<div
							class="w-2/4 h-[1px] bg-white absolute top-1/2 right-0 transform -translate-y-1/2"
						></div>
						<div
							class="w-[5px] h-[5px] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						></div>

						<div class="w-2/4 h-full flex items-center justify-center absolute left-0 pr-2">
							<h3 class="text-xs text-white font-grotesk font-medium text-center lg:text-base">
								Direct Actions for Elephants
							</h3>
						</div>
					</div>

					<button on:click={() => handleOpen(roadmap_modal_content[0])}>
						<img
							class="hover:cursor-pointer w-fit object-none z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							alt=" milestone-point-1 "
							src={milestone_glowing_point}
						/>
					</button>
					<button
						class="hover:cursor-pointer text-xl leading-7 font-grotesk text-[#00DF8E] font-bold absolute top-1/2 left-1/2 transform -translate-y-1/2 right-0 lg:left-44"
						on:click={() => handleOpen(roadmap_modal_content[0])}
					>
						Chapter 3
					</button>
				</div>
				<!-- /End Milestone 3 -->

				<!-- #Start Milestone 4 -->
				<div class="w-full relative mt-32">
					<div class="absolute w-2/4 h-full right-0">
						<div
							class="w-2/4 h-[1px] bg-white absolute top-1/2 left-0 transform -translate-y-1/2"
						></div>
						<div
							class="w-[5px] h-[5px] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						></div>

						<div class="w-2/4 h-full flex items-center justify-center absolute right-0 pl-2">
							<h3 class="text-xs text-white font-grotesk font-medium text-center lg:text-base">
								Exploring New Horizons
							</h3>
						</div>
					</div>

					<button on:click={() => handleOpen(roadmap_modal_content[0])}>
						<img
							class="hover:cursor-pointer w-fit object-none z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							alt=" milestone-point-1 "
							src={milestone_point}
						/>
					</button>
					<button
						class="hover:cursor-pointer text-xl leading-7 font-grotesk text-[#00DF8E] font-bold absolute top-1/2 left-0 transform -translate-y-1/2 right-1/2 lg:right-44"
						on:click={() => handleOpen(roadmap_modal_content[0])}
					>
						Chapter 4
					</button>
				</div>
				<!-- /End Milestone 4 -->
			</div>
		</div>
		<div class="flex items-center justify-center mt-10">
			<h4 class="text-[16px] font-light leading-7 text-white text-center">
				We have Encyclopedia (Whitepaper) too, on <span class="font-bold text-[#00DF8E] underline"
					>GitBook <img class="inline-block" alt="arrow-up-icon" src={arrow_up_icon} />
				</span>
			</h4>
		</div>
	</div>
</div>

<style></style>
