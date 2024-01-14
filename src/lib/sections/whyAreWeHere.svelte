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
</script>

<h1 class="text-5xl font-bold leading-[66px] font-grotesk">(Why) are we here:</h1>

<!-- Carousel Track -->
<div class="w-full flex items-center justify-center h-[207px] bg-[#F3F6F5] mt-[80px] p-[64px]">
	<!-- <Splide
        options={{
            rewind: true,
            type: 'loop',
            perMove: 1,
            perPage: 5,
            focus: 'center',
            gap: '2rem',
            pagination: false
        }}
        on:focus={(e) => {
            console.log(e);
        }}
        bind:this={slider_why}
        on:moved={(e) => {
            const slideDetails = e?.detail;

            if (slideDetails) {
                const slidesList = slideDetails.splide.Components.Elements.slides;
                const visibleAtIndex = slideDetails.index;

                slidesList[visibleAtIndex - 1].children[0].classList.remove('border-red');

                slidesList[visibleAtIndex].children[0].classList.add('border-red');
            }
        }}
    >
        {#each why_are_we_here_assets as item, index (index + item)}
            <SplideSlide class="border border-red-500">
                <div class="w-[426px] h-[276px]">
                    <img class="w-full h-full object-contain rounded-3xl" alt={item} src={item} />
                </div>

                <img class="w-[800px] h-[340px] rounded-2xl object-none" alt={item} src={item} />
            </SplideSlide>
        {/each}
    </Splide> -->

	<Splide
		options={{
			rewind: true,
			type: 'loop',
			perMove: 1,
			perPage: 5,
			focus: 'center',
			gap: '2rem',
			pagination: false
		}}
		bind:this={slider}
	>
		{#each why_are_we_here_assets as item, index (index + item)}
			<SplideSlide>
				<!-- <div
                    class="w-[589px] h-[340px] p-1 rounded-md flex items-center justify-center object-none"
                >
                    
                </div> -->

				<img class="w-full h-full object-contain rounded-2xl" alt={item} src={item} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<p class="font-grotesk text-center text-xl font-medium leading-8 mt-[80px]">
	<q>We are here to make your day a little bit better with our distinctive creative of things!</q>
</p>

<style></style>
