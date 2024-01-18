<script lang="ts">
	// Our Friends Logos
	import blok_blok from '$lib/assets/blok-blok.png';
	import noah from '$lib/assets/noah.png';
	import fkgi from '$lib/assets/fkgi.png';
	import bri from '$lib/assets/bri.png';
	import eiger from '$lib/assets/eiger.png';
	import way_kambas from '$lib/assets/way-kambas.png';
	import satwa from '$lib/assets/satwa.png';
	import perkebunan_nusantara from '$lib/assets/perkebunan-nusantara.png';
	import indonesia_ecotourism from '$lib/assets/indonesia-ecotourism.png';
	import walini from '$lib/assets/walini.png';
	import coinfolks from '$lib/assets/coinfolks.png';
	import oxlabs from '$lib/assets/oxlabs.png';
	import kuyou from '$lib/assets/kuyou.png';
	import pertamina_ep from '$lib/assets/pertamina-ep.png';
	import solar_generation from '$lib/assets/solar-generation.png';
	import ggf from '$lib/assets/ggf.png';
	import indofood from '$lib/assets/indofood.png';

	const our_friends = [
		blok_blok,
		noah,
		fkgi,
		bri,
		eiger,
		way_kambas,
		satwa,
		perkebunan_nusantara,
		indonesia_ecotourism,
		walini,
		coinfolks,
		kuyou,
		pertamina_ep,
		solar_generation,
		ggf,
		indofood,
		oxlabs
	];
</script>

<div
	class="w-full px-6 2xl:px-[290px] h-full flex flex-col items-center justify-center mt-10 md:mt-[100px] lg:mt-[177px]"
>
	<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">Our Friends</h1>
	<div class="w-full h-full grid grid-cols-6 gap-2 lg:gap-20 mt-5 lg:mt-[57px]">
		{#each our_friends as item, index (item + index)}
			<div class="flex items-center justify-center">
				<img src={item} alt={item} />
			</div>
		{/each}
	</div>
</div>

<style></style>
