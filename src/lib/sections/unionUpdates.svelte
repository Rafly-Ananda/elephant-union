<script lang="ts">
	import union_update_hero from '$lib/assets/union-update-hero.png';

	let updates_nav = ['Monthly Update', 'Annoucement', 'Events'];

	let selectedUpdatesNav: string = 'Monthly Update';

	const updateNews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const annoucementNews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const onUpdatesNavClick = (e: Event, target: string) => {
		selectedUpdatesNav = target;
	};
</script>

<div
	class="w-full h-full flex flex-col items-center justify-start md:mt-20 bg-[#F3F6F5] lg:mt-[150px] py-10 px-6 md:px-[64px] 2xl:px-[290px] gap-10 lg:py-20"
>
	<h1 class="font-graphik text-2xl md:text-4xl lg:text-6xl font-extrabold">Updates</h1>

	<div
		class="w-full flex flex-col lg:flex-row items-center bg-white rounded-2xl lg:grid grid-cols-2"
	>
		<div class="w-full h-full">
			<img
				class="w-full h-full object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"
				src={union_update_hero}
				alt="delete-me-later"
			/>
		</div>

		<!-- Navigations -->
		<div class="w-full flex flex-col items-start font-grotesk">
			<div class="w-full py-4 flex items-center justify-evenly">
				{#each updates_nav as item, index (item + index)}
					<div class="">
						<button
							class={`${
								item === selectedUpdatesNav ? 'text-[#00df8e]' : 'text-[#C2C2C2] font-medium'
							} text-sm md:text-lg`}
							on:click={(e) => onUpdatesNavClick(e, item)}
						>
							{item}
						</button>
					</div>
				{/each}
			</div>
			<div class="h-[1px] w-full bg-[#C2C2C2]"></div>
			<div
				class="w-full max-h-[250px] md:max-h-[390px] lg:max-h-[433px] overflow-y-scroll rounded-b-2xl"
			>
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as item, index (item + index)}
					<button
						class={`${
							item % 2 === 0 ? 'bg-[#FFF]' : 'bg-[#F2F3F2]'
						} h-[50px] md:h-[60px] p-2 md:p-3 text-xs md:text-base block w-full text-left hover:bg-[#bfc0bf]`}
					>
						<span class="opacity-35">Coming Soon</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style></style>
