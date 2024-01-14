<!-- src/libs/components/Button.svelte -->
<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { Options } from '@splidejs/svelte-splide';
	import { onMount } from 'svelte';
	import arrow_up_white from '$lib/assets/arrow-up-white.svg';

	interface assetsListInterface {
		assets: string;
		title: string;
		copy: string;
		link: string;
	}

	const options: Options = {
		rewind: true,
		type: 'loop',
		perMove: 1,
		perPage: 3,
		focus: 'center',
		gap: '2rem',
		pagination: false,
		width: 1342
	};

	export let assets_list: assetsListInterface[];
	let slider: Splide;

	onMount(() => {});
</script>

<Splide {options} bind:this={slider}>
	{#each assets_list as item, index (index + item.assets)}
		<SplideSlide class=" relative">
			<img class="w-full" src={item.assets} alt={item.title} />
			<div
				class="w-full h-[246px] bg-black float-left absolute left-0 right-0 bottom-0 opacity-50 rounded-b-2xl"
			></div>
			<div
				class="w-full h-[246px] flex items-start justify-center float-left absolute left-0 right-0 bottom-0"
			>
				<div
					class="flex flex-col items-center justify-center font-grotesk z-10 text-white opacity-100 mt-[28px]"
				>
					<h5 class=" text-[26px] font-bold leading-9 tracking-[0.2px]">{item.title}</h5>
					<p class=" text-[14px] font-medium text-center">
						{item.copy}
					</p>

					<button
						class="flex items-center justify-center border border-white font-grotesk text-[18px] font-semibold leading-7 rounded-lg p-2 mt-[33px]"
					>
						Visit <img src={arrow_up_white} alt="arrow-up-right" />
					</button>
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>

<style>
	/* Component styles */
</style>
