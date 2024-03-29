<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';

	import arrow_left from '$lib/assets/arrow-left.png';
	import arrow_right from '$lib/assets/arrow-right.png';
	import dead_gadjah from '$lib/assets/elephant_trivia/dead-gadjah.jpeg';
	import pregnant_elephant from '$lib/assets/elephant_trivia/pregnant-elephant.jpg';

	import team_silvi from '$lib/assets/team_silvi.png';

	interface triviaType {
		assets: string;
		title: string;
		description: string;
		author_name: string;
		date: string;
	}

	const triviaContent: triviaType[] = [
		{
			assets: dead_gadjah,
			title: 'Tragic Death of Beloved Elephant, Rahman, Sparks Outrage and Calls for Justice',
			description:
				'In a heartbreaking turn of events, the conservation community mourns the loss of yet another protected species. Rahman, a 46-year-old elephant who had captured the hearts of many ...',
			author_name: 'Silvi',
			date: 'January 23, 2024'
		},
		{
			assets: pregnant_elephant,
			title: 'Pregnant Sumatran Elephants: Never Take a Seat!',
			description:
				"Sumatran elephants indeed captivate with their unique size and charming appearance. But there's another interesting fact about this highly endangered mammal—Sumatran elephants have the longest pregnancy duration among mammals ...",
			author_name: 'Silvi',
			date: 'January 22, 2024'
		}
	];

	const options: Options = {
		rewind: true,
		type: 'loop',
		perMove: 1,
		perPage: 2,
		autoWidth: true,
		gap: '3rem',
		arrows: false,
		pagination: false,
		breakpoints: {
			640: {
				gap: '1rem',
				autoWidth: false,
				perPage: 1
			}
		}
	};

	let slider: Splide;

	const onArtworkCarouselClickAdvance = () => {
		slider.splide.go('<');
	};
	const onArtworkCarouselClickBack = () => {
		slider.splide.go('>');
	};
</script>

<div
	class="w-full flex h-full items-start justify-center gap-5 mt-10 lg:mt-[155px] p-6 2xl:pl-[290px] overflow-hidden flex-col 2xl:flex-row"
>
	<!-- Left Side -->
	<div
		class="flex flex-col flex-none items-center justify-center 2xl:items-start 2xl:justify-start w-full lg:w-[450px] h-fit gap-4"
	>
		<h1 class="font-graphik text-3xl md:text-4xl font-medium text-center lg:text-left">
			Want to read something <span class="text-[#00DF8E]">very interesting</span> about elephant?
		</h1>

		<div class="2xl:flex items-center justify-center w-fit gap-5 2xl:mt-5 hidden">
			<button
				id="artwork-left-btn"
				class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
				on:click={onArtworkCarouselClickAdvance}
			>
				<img alt="arrow-right" src={arrow_left} />
			</button>

			<button
				id="artwork-right-btn"
				class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
				on:click={onArtworkCarouselClickBack}
			>
				<img alt="arrow-left" src={arrow_right} />
			</button>
		</div>
	</div>
	<!-- Right Side -->
	<div class="w-full h-full lg:w-full lg:h-full mt-4">
		<Splide {options} bind:this={slider}>
			{#each triviaContent as item, index (index + item.title)}
				<SplideSlide>
					<div
						class="md:w-[550px] md:h-[261px] lg:w-[820px] lg:h-[361px] flex flex-col md:flex-row items-center bg-white rounded-2xl"
					>
						<div class="hidden md:block w-full h-full">
							<img
								class="w-full h-full object-fill rounded-l-2xl"
								src={item.assets}
								alt={item.title}
							/>
						</div>
						<div
							class="w-full h-full p-4 flex flex-col items-start justify-between gap-4 font-grotesk"
						>
							<h5 class="text-lg lg:text-3xl font-medium">{item.title}</h5>

							<p class="text-xs lg:text-base text-[#98A0A2]">
								{item.description}
							</p>

							<div class="flex items-center justify-center gap-2">
								<div class="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] rounded-full bg-[#C4C4C4]">
									<img class="rounded-full" src={team_silvi} alt={item.author_name + item.date} />
								</div>

								<div class="flex flex-col items-start justify-center">
									<h6 class="text-sm lg:text-md font-medium">{item.author_name}</h6>
									<h6 class="text-xs lg:text-normal font-light text-[#98A0A2]">{item.date}</h6>
								</div>
							</div>
						</div>
					</div>
				</SplideSlide>
			{/each}
		</Splide>
	</div>

	<div class="w-full flex items-center justify-center gap-5 mt-5 2xl:hidden">
		<button
			id="artwork-left-btn"
			class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer shadow-lg transform active:scale-75 transition-transform"
			on:click={onArtworkCarouselClickAdvance}
		>
			<img alt="arrow-right" src={arrow_left} />
		</button>

		<button
			id="artwork-right-btn"
			class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer shadow-lg transform active:scale-75 transition-transform"
			on:click={onArtworkCarouselClickBack}
		>
			<img alt="arrow-left" src={arrow_right} />
		</button>
	</div>
</div>

<style></style>
