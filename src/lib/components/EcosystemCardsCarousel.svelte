<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';
	import { onMount } from 'svelte';
	import arrow_up_white from '$lib/assets/arrow-up-white.svg';
	import arrow_left from '$lib/assets/arrow-left.png';
	import arrow_right from '$lib/assets/arrow-right.png';

	interface assetsListInterface {
		assets: string;
		title: string;
		copy: string;
		link: string;
	}

	const options: Options = {
		rewind: true,
		type: 'loop',
		perMove: 1,
		perPage: 3,
		focus: 'center',
		gap: '1.5rem',
		pagination: false,
		breakpoints: {
			640: {
				gap: '3.2rem'
			}
		}
	};

	export let assets_list: assetsListInterface[];
	let slider: Splide;

	const onArtworkCarouselClickAdvance = () => {
		slider.splide.go('<');
	};
	const onArtworkCarouselClickBack = () => {
		slider.splide.go('>');
	};

	onMount(() => {});
</script>

<div class="w-full h-full relative">
	<!-- <button
		class="w-[46px] h-[46px] md:w-[56px] md:h-[56px] flex items-center justify-center bg-white rounded-full p-0 md:p-5 hover:cursor-pointer absolute z-10 -left-6 top-[50%]"
		on:click={onArtworkCarouselClickAdvance}
	>
		<img class="w-2/4 object-none md:w-full" alt="arrow-left" src={arrow_left} />
	</button>

	<button
		class="w-[46px] h-[46px] md:w-[56px] md:h-[56px] flex items-center justify-center bg-white rounded-full p-0 md:p-5 hover:cursor-pointer absolute z-10 -right-6 top-[50%]"
		on:click={onArtworkCarouselClickBack}
	>
		<img class="w-2/4 object-none md:w-full" alt="arrow-right" src={arrow_right} />
	</button> -->
	<Splide {options} bind:this={slider} class="w-full h-full md:w-[1342px] relative">
		{#each assets_list as item, index (index + item.assets)}
			<SplideSlide class="w-full h-full relative ">
				<img class="w-full h-full" src={item.assets} alt={item.title} />
				<div
					class="w-full bg-black float-left absolute left-0 right-0 bottom-0 top-2/4 opacity-50 rounded-md md:rounded-b-2xl"
				></div>
				<div
					class="w-full flex items-start justify-center float-left absolute left-0 right-0 bottom-0 top-2/4"
				>
					<div
						class="w-full h-full flex flex-col items-center justify-evenly font-grotesk z-10 text-white opacity-100 pb-0 md:pb-10 px-10"
					>
						<h5 class=" text-lg md:text-2xl font-bold tracking-[0.2px] md:leading-9">
							{item.title}
						</h5>
						<p class=" text-xs md:text-base font-medium text-center">
							{item.copy}
						</p>

						<button
							class="flex items-center justify-center border border-[#b3b2b3] font-grotesk text-xs md:text-2xl p-1 md:p-2 font-semibold md:leading-7 rounded-md md:rounded-lg md:mt-[33px] text-[#b3b2b3]"
						>
							Visit <svg
								width="27"
								height="27"
								viewBox="0 0 27 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="fill-[#b3b2b3]"
							>
								<path
									d="M7.02287 6.83471L7.02287 9.16283L16.2445 9.17108L6.1973 19.2183L7.84844 20.8694L17.8956 10.8222L17.8874 20.0439L20.232 20.0439V6.83471H7.02287Z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
</style>
