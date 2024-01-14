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

<div class="w-full px-[290px] h-full flex flex-col items-center justify-center mt-[177px]">
	<h1 class="text-5xl font-bold">We're seen on</h1>
	<div class="w-full h-full grid grid-cols-6 gap-20 mt-[57px]">
		{#each were_seen_on_logo as item, index (item + index)}
			<img src={item} alt={item} />
		{/each}
	</div>
</div>

<style></style>
