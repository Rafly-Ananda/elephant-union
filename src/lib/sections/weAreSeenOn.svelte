<script lang="ts">
	// Were seen on
	import liputan_6 from '$lib/assets/liputan-6.png';
	import liputan_rcti from '$lib/assets/rcti.png';
	import west_java_conservation from '$lib/assets/west-java-conservation.png';
	import idn_times from '$lib/assets/idn-times.png';
	import republika from '$lib/assets/republika.png';
	import tribun_jabar from '$lib/assets/tribun-jabar.png';

	let were_seen_on_logo = [
		liputan_6,
		liputan_rcti,
		west_java_conservation,
		idn_times,
		republika,
		tribun_jabar
	];
</script>

<div
	class="w-full px-6 2xl:px-[290px] h-full flex flex-col items-center justify-center mt-10 md:mt-[100px] lg:mt-[177px]"
>
	<h1 class="text-2xl md:text-4xl lg:text-6xl font-graphik font-extrabold">We're Seen On</h1>
	<div class="w-full h-full grid grid-cols-6 grid-rows-1 gap-2 lg:gap-10 mt-7 lg:mt-[75px]">
		{#each were_seen_on_logo as item, index (item + index)}
			<div
				class="flex items-center justify-center bg-[#e2e0d6] rounded-md md:rounded-xl p-2 lg:p-8"
			>
				<img src={item} alt={item} />
			</div>
		{/each}
	</div>
</div>

<style></style>
