<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';

	import arrow_left from '$lib/assets/arrow-left.svg';
	import arrow_right from '$lib/assets/arrow-right.svg';

	// NFT Artworks
	import showcase_1 from '$lib/assets/gadjah-showcase-1.png';
	import showcase_2 from '$lib/assets/gadjah-showcase-2.png';
	import showcase_3 from '$lib/assets/gadjah-showcase-3.png';
	import showcase_4 from '$lib/assets/gadjah-showcase-4.png';
	import showcase_5 from '$lib/assets/gadjah-showcase-5.png';

	let nft_artworks = [showcase_1, showcase_2, showcase_3, showcase_4];

	const options: Options = {
		rewind: true,
		type: 'loop',
		perMove: 1,
		perPage: 6,
		arrows: false,
		pagination: false
	};

	let slider: Splide;

	const onArtworkCarouselClickAdvance = () => {
		slider.splide.go('<');
	};
	const onArtworkCarouselClickBack = () => {
		slider.splide.go('>');
	};
</script>

<div class="w-[1920px]">
	<Splide {options} bind:this={slider}>
		{#each nft_artworks as item, index (index + item)}
			<SplideSlide>
				<div class="w-[289px] h-[289px] p-1 rounded-xl bg-white">
					<img class="w-full h-full object-none" alt={item} src={item} />
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</div>
<div class="flex items-center justify-center gap-5">
	<button
		class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
		on:click={onArtworkCarouselClickAdvance}
	>
		<img alt="arrow-left" src={arrow_left} />
	</button>

	<button
		class="w-[56px] h-[56px] flex items-center justify-center bg-white rounded-full p-5 hover:cursor-pointer"
		on:click={onArtworkCarouselClickBack}
	>
		<img alt="arrow-right" src={arrow_right} />
	</button>
</div>

<style>
	/* Component styles */
</style>
