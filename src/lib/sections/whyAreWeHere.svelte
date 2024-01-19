<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';

	import { onMount } from 'svelte';

	// (Why) are we here photos
	import why_1 from '$lib/assets/why-1.JPG';
	import why_2 from '$lib/assets/why-2.JPG';
	import why_3 from '$lib/assets/why-3.JPG';
	import why_4 from '$lib/assets/why-4.JPG';
	import why_5 from '$lib/assets/why-5.JPG';
	import { slide } from 'svelte/transition';

	const why_are_we_here_assets = [why_1, why_2, why_3, why_4, why_5];

	let slider: Splide;

	const options: Options = {
		rewind: true,
		type: 'loop',
		perMove: 1,
		perPage: 5,
		focus: 'center',
		gap: '1rem',
		pagination: false,
		arrows: false
	};

	let dynamicDesc: string;

	const elephantUnionText = [
		'Elephant Union is here to drive positive change, inspire awareness, and build a better future for generations to come.',
		'We believe in the power of education to transform lives.',
		'Connecting various perspectives through conversations within this industry.',
		'We believe a strong and healthy community or movement is one that can sustain itself.',
		'Focuses on maximizing technology and art innovation as a solution platform for our movement.',
		"Web3 at Elephant Union is not just about technology; it's a celebration!"
	];

	onMount(() => {
		dynamicDesc = elephantUnionText[0];

		// console.log(slider.splide.Components.Elements.slides);

		// console.log(cloned);

		slider.splide.on('move', () => {
			console.log(slider.splide.Components.Slides.get());
			// dynamicDesc = elephantUnionText[slider.splide.index];
		});

		slider.splide.on('active', (e: any) => {
			slider.splide.Components.Slides.get().forEach((e) => {
				if (e.slide.classList.contains('is-active') && e.slide.classList.contains('is-visible')) {
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
<div class=" w-[1500px] md:w-[2500px] mt-10 md:mt-[80px] px-[64px]">
	<Splide {options} bind:this={slider}>
		{#each why_are_we_here_assets as item, index (index + item)}
			<SplideSlide>
				<img class="rounded-md" src={item} alt={'asd'} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<p
	class="font-grotesk text-center text-base md:text-lg lg:text-xl font-medium leading-6 lg:leading-8 mt-[40px] md:mt-[80px] p-6"
>
	<q>{dynamicDesc}!</q>
</p>

<style>
</style>
