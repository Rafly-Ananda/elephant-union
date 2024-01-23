<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';

	import arrow_left from '$lib/assets/arrow-left.png';
	import arrow_right from '$lib/assets/arrow-right.png';

	// NFT Artworks
	import showcase_1 from '$lib/assets/nft_artwork/NFT-01.png';
	import showcase_2 from '$lib/assets/nft_artwork/NFT-02.png';
	import showcase_3 from '$lib/assets/nft_artwork/NFT-03.png';
	import showcase_4 from '$lib/assets/nft_artwork/NFT-04.png';
	import showcase_5 from '$lib/assets/nft_artwork/NFT-05.png';
	import showcase_6 from '$lib/assets/nft_artwork/NFT-06.png';
	import showcase_7 from '$lib/assets/nft_artwork/NFT-07.png';
	import showcase_8 from '$lib/assets/nft_artwork/NFT-08.png';
	import showcase_9 from '$lib/assets/nft_artwork/NFT-09.png';
	import showcase_10 from '$lib/assets/nft_artwork/NFT-10.png';
	import showcase_11 from '$lib/assets/nft_artwork/NFT-11.png';
	import showcase_12 from '$lib/assets/nft_artwork/NFT-12.png';
	import showcase_13 from '$lib/assets/nft_artwork/NFT-13.png';
	import showcase_14 from '$lib/assets/nft_artwork/NFT-14.png';
	import showcase_15 from '$lib/assets/nft_artwork/NFT-15.png';
	import showcase_16 from '$lib/assets/nft_artwork/NFT-16.png';
	import showcase_17 from '$lib/assets/nft_artwork/NFT-17.png';
	import showcase_18 from '$lib/assets/nft_artwork/NFT-18.png';
	import showcase_19 from '$lib/assets/nft_artwork/NFT-19.png';
	import showcase_20 from '$lib/assets/nft_artwork/NFT-20.png';

	let nft_artworks = [
		showcase_1,
		showcase_2,
		showcase_3,
		showcase_4,
		showcase_5,
		showcase_6,
		showcase_7,
		showcase_8,
		showcase_9,
		showcase_10,
		showcase_11,
		showcase_12,
		showcase_13,
		showcase_14,
		showcase_15,
		showcase_16,
		showcase_17,
		showcase_18,
		showcase_19,
		showcase_20
	];

	const options: Options = {
		rewind: true,
		type: 'loop',
		perMove: 1,
		perPage: 6,
		arrows: false,
		pagination: false,
		autoWidth: true,
		gap: '2rem',
		breakpoints: {
			640: {
				gap: '0.5rem'
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

<div class="w-full h-max md:w-[1920px]">
	<Splide {options} bind:this={slider}>
		{#each nft_artworks as item, index (index + item)}
			<SplideSlide>
				<div class="w-[150px] h-[150px] md:w-[289px] md:h-[289px] p-1 rounded-lg bg-white">
					<img class="w-full h-full object-cover rounded-lg" alt={item} src={item} />
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</div>
<div class="flex items-center justify-center gap-5">
	<button
		class="w-[46px] h-[46px] md:w-[56px] md:h-[56px] flex items-center justify-center bg-white rounded-full p-0 md:p-5 hover:cursor-pointer"
		on:click={onArtworkCarouselClickAdvance}
	>
		<img class="w-2/4 object-none md:w-full" alt="arrow-left" src={arrow_left} />
	</button>

	<button
		class="w-[46px] h-[46px] md:w-[56px] md:h-[56px] flex items-center justify-center bg-white rounded-full p-0 md:p-5 hover:cursor-pointer"
		on:click={onArtworkCarouselClickBack}
	>
		<img class="w-2/4 object-none md:w-full" alt="arrow-right" src={arrow_right} />
	</button>
</div>

<style>
	/* Component styles */
</style>
