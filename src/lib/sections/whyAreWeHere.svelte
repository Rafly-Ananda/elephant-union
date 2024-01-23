<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';

	import { onMount } from 'svelte';

	// (Why) are we here photos
	import why_1 from '$lib/assets/why_are_we_here/why-1.png';
	import why_2 from '$lib/assets/why_are_we_here/why-2.png';
	import why_3 from '$lib/assets/why_are_we_here/why-3.png';
	import why_4 from '$lib/assets/why_are_we_here/why-5.png';
	import why_5 from '$lib/assets/why_are_we_here/why-9.png';
	import why_6 from '$lib/assets/why_are_we_here/why-10.png';

	import { slide } from 'svelte/transition';

	import arrow_left from '$lib/assets/arrow-left.png';
	import arrow_right from '$lib/assets/arrow-right.png';

	const why_are_we_here_assets = [why_1, why_2, why_3, why_4, why_5, why_6];

	let slider: Splide;

	const options: Options = {
		rewind: true,
		type: 'loop',
		perMove: 1,
		perPage: 3,
		focus: 'center',
		gap: '0.75rem',
		drag: 'free'
	};

	let dynamicDesc: string;
	let activeSlide: any;

	const elephantUnionText = [
		'Elephant Union is here to drive positive change, inspire awareness, and build a better future for generations to come.',
		'We believe in the power of education to transform lives.',
		'Connecting various perspectives through conversations within this industry.',
		"Web3 at Elephant Union is not just about technology; it's a celebration!",
		'Focuses on maximizing technology and art innovation as a solution platform for our movement.',
		'We believe a strong and healthy community or movement is one that can sustain itself.'
	];

	const onArtworkCarouselClickAdvance = () => {
		slider.splide.go('<');
	};
	const onArtworkCarouselClickBack = () => {
		slider.splide.go('>');
	};

	onMount(() => {
		dynamicDesc = elephantUnionText[0];

		slider.splide.Components.Slides.get().forEach((e) => {
			if (e.slide.classList.contains('is-active') && e.slide.classList.contains('is-visible')) {
				e.slide.classList.remove('unfocused_slide');
				e.slide.classList.add('focused_slide');
			} else {
				e.slide.classList.remove('focused_slide');
				e.slide.classList.add('unfocused_slide');
			}
		});

		slider.splide.on('move', () => {
			console.log(slider.splide.index);
		});

		slider.splide.on('active', (e: any) => {
			slider.splide.Components.Slides.get().forEach((e) => {
				if (e.slide.classList.contains('is-active') && e.slide.classList.contains('is-visible')) {
					dynamicDesc = elephantUnionText[e.index];
					e.slide.classList.remove('unfocused_slide');
					e.slide.classList.add('focused_slide');
				} else {
					e.slide.classList.remove('focused_slide');
					e.slide.classList.add('unfocused_slide');
				}
			});
		});
	});
</script>

<h1 class="text-2xl md:text-4xl lg:text-6xl font-extrabold font-graphik">(Why) are we here</h1>

<!-- Carousel Track -->
<div class="w-[1000px] md:w-[2500px] mt-10 md:mt-[80px] px-[64px]">
	<Splide {options} bind:this={slider}>
		{#each why_are_we_here_assets as item, index (index + item)}
			<SplideSlide class=" w-full h-full ">
				<img class="" src={item} alt={'asd'} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<p
	class="w-full md:w-[50%] font-grotesk text-center text-base md:text-lg lg:text-2xl font-medium leading-6 lg:leading-8 md:mt-[80px] p-6"
>
	<q>{dynamicDesc}</q>
</p>

<!-- <button
	class="w-[46px] h-[46px] md:w-[56px] md:h-[56px] flex items-center justify-center bg-white rounded-full p-0 md:p-5 hover:cursor-pointer z-10 -left-6 top-[50%]"
	on:click={onArtworkCarouselClickAdvance}
>
	<img class="w-2/4 object-none md:w-full" alt="arrow-left" src={arrow_left} />
</button>

<button
	class="w-[46px] h-[46px] md:w-[56px] md:h-[56px] flex items-center justify-center bg-white rounded-full p-0 md:p-5 hover:cursor-pointer z-10 -right-6 top-[50%]"
	on:click={onArtworkCarouselClickBack}
>
	<img class="w-2/4 object-none md:w-full" alt="arrow-right" src={arrow_right} />
</button> -->

<style>
</style>
