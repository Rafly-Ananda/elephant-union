<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';

	// (Why) are we here photos
	import why_1 from '$lib/assets/why-1.JPG';
	import why_2 from '$lib/assets/why-2.JPG';
	import why_3 from '$lib/assets/why-3.JPG';
	import why_4 from '$lib/assets/why-4.JPG';
	import why_5 from '$lib/assets/why-5.JPG';

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
</script>

<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold font-grotesk">(Why) are we here:</h1>

<!-- Carousel Track -->
<div class=" w-[1500px] md:w-[2500px] mt-10 md:mt-[80px] px-[64px]">
	<Splide {options} bind:this={slider} class="">
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
	<q>We are here to make your day a little bit better with our distinctive creative of things!</q>
</p>

<style></style>
