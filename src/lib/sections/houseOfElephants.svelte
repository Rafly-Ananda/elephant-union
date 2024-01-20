<script lang="ts">
	import { Marquee, NftArtworkCarousel } from '$lib';

	// House of Elephants
	import hoe_way_kambas from '$lib/assets/hoe-way-kambas.png';
	import hoe_bandung from '$lib/assets/hoe-bandung.png';
	import hoe_bali from '$lib/assets/hoe-bali.png';
	import hoe_tangkahan from '$lib/assets/hoe-tangkahan.png';
	import hoe_tesso_nilo from '$lib/assets/hoe-tesso-nilo.png';

	let hoe_items = [hoe_way_kambas, hoe_bandung, hoe_bali, hoe_tangkahan, hoe_tesso_nilo];
</script>

<div class="w-full h-full flex flex-col">
	<!-- Marquee -->
	<Marquee />

	<!-- Badges -->

	<div
		class="w-full h-full flex items-center justify-center mt-5 md:mt-20 hover:cursor-pointer gap-4 md:gap-16 p-6"
	>
		{#each hoe_items as item, index (index + item)}
			<img alt={item} src={item} />
		{/each}
	</div>

	<!-- Artwork Showcase -->
	<div
		class="w-full h-full flex flex-col items-center justify-center relative overflow-hidden p-6 md:p-[64px]"
	>
		<div
			class=" w-full h-full flex flex-col items-start justify-start hover:cursor-pointer gap-[22px] -right-6 md:-right-44"
		>
			<NftArtworkCarousel />
		</div>
	</div>
</div>

<style></style>
