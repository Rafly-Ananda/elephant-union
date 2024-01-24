<script lang="ts">
	// Our Friends Logos
	import blok_blok from '$lib/assets/our_friends/blok-blok.png';
	import noah from '$lib/assets/our_friends/noah.png';
	import fkgi from '$lib/assets/our_friends/fkgi.png';
	import bri from '$lib/assets/our_friends/bri.png';
	import eiger from '$lib/assets/our_friends/eiger.png';
	import way_kambas from '$lib/assets/our_friends/way-kambas.png';
	import satwa from '$lib/assets/our_friends/satwa.png';
	import perkebunan_nusantara from '$lib/assets/our_friends/perkebunan-nusantara.png';
	import indonesia_ecotourism from '$lib/assets/our_friends/indonesia-ecotourism.png';
	import walini from '$lib/assets/our_friends/walini.png';
	import coinfolks from '$lib/assets/our_friends/coinfolks.png';
	import oxlabs from '$lib/assets/our_friends/oxlabs.png';
	import kuyou from '$lib/assets/our_friends/kuyou.png';
	import pertamina_ep from '$lib/assets/our_friends/pertamina-ep.png';
	import solar_generation from '$lib/assets/our_friends/solar-generation.png';
	import ggf from '$lib/assets/our_friends/ggf.png';
	import drezzo from '$lib/assets/our_friends/drezzo.png';
	import maja_labs from '$lib/assets/our_friends/maja-labs.png';

	const our_friends = [
		blok_blok,
		maja_labs,
		coinfolks,
		oxlabs,
		fkgi,
		way_kambas,
		eiger,
		pertamina_ep,
		solar_generation,
		ggf,
		bri,
		walini,
		drezzo,
		perkebunan_nusantara,
		noah,
		kuyou,
		satwa,
		indonesia_ecotourism
	];
</script>

<div
	class="w-full px-6 2xl:px-[290px] h-full flex flex-col items-center justify-center mt-10 md:mt-[100px] lg:mt-[177px]"
>
	<h1 class="text-2xl md:text-4xl lg:text-6xl font-graphik font-extrabold">Our Friends</h1>
	<div class="w-full h-full grid grid-cols-6 grid-rows-3 gap-2 lg:gap-10 mt-5 lg:mt-[57px]">
		{#each our_friends as item, index (item + index)}
			<div
				class="flex items-center justify-center bg-[#e2e0d6] rounded-md md:rounded-xl p-2 lg:p-8"
			>
				<img src={item} alt={item} />
			</div>
		{/each}
	</div>
</div>

<style></style>
