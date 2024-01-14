<script lang="ts">
	import { Splide } from '@splidejs/svelte-splide';

	import { Marquee, NftArtworkCarousel } from '$lib';

	import arrow_left from '$lib/assets/arrow-left.svg';
	import arrow_right from '$lib/assets/arrow-right.svg';

	// House of Elephants
	import hoe_way_kambas from '$lib/assets/hoe-way-kambas.png';
	import hoe_bandung from '$lib/assets/hoe-bandung.png';
	import hoe_bali from '$lib/assets/hoe-bali.png';
	import hoe_tangkahan from '$lib/assets/hoe-tangkahan.png';
	import hoe_tesso_nilo from '$lib/assets/hoe-tesso-nilo.png';

	let hoe_items = [hoe_way_kambas, hoe_bandung, hoe_bali, hoe_tangkahan, hoe_tesso_nilo];
</script>

<div class="w-full h-screen flex flex-col">
	<!-- Marquee -->
	<Marquee />

	<!-- Badges -->
	<div class="flex items-center justify-center">
		<div class=" mt-20 w-max flex items-center justify-center hover:cursor-pointer flex-none">
			{#each hoe_items as item, index (index + item)}
				<img class="w-full h-full object-none" alt={item} src={item} />
			{/each}
		</div>
	</div>

	<!-- Artwork Showcase -->
	<div class="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
		<div
			class=" w-full h-max flex flex-col items-start justify-start hover:cursor-pointer gap-[22px] absolute -right-44"
		>
			<NftArtworkCarousel />
		</div>
	</div>
</div>

<style></style>
