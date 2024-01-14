<script lang="ts">
	import delete_me_later_2 from '$lib/assets/delete_me_later_2.JPG';

	let updates_nav = ['Monthly Update', 'Annoucement', 'Events'];

	let selectedUpdatesNav: string = 'Monthly Update';

	const onUpdatesNavClick = (e: Event, target: string) => {
		selectedUpdatesNav = target;
	};
</script>

<div
	class="w-full h-[80vh] flex flex-col items-center justify-start bg-[#F3F6F5] mt-[150px] pt-[100px] px-[290px] gap-10"
>
	<h1 class="font-grotesk text-5xl font-bold">Updates</h1>

	<div class="w-full flex items-center bg-white rounded-2xl">
		<div class="w-full h-full rounded-2xl">
			<img
				class="w-full h-full object-fill rounded-l-2xl"
				src={delete_me_later_2}
				alt="delete-me-later"
			/>
		</div>
		<!-- Navigations -->
		<div class="w-full h-full flex flex-col items-start font-grotesk">
			<div class="w-full py-4 flex items-center justify-evenly">
				{#each updates_nav as item, index (item + index)}
					<div class="">
						<button
							class={`${
								item === selectedUpdatesNav
									? 'update_nav_active'
									: 'text-[#C2C2C2] text-lg font-medium'
							}`}
							on:click={(e) => onUpdatesNavClick(e, item)}
						>
							{item}
						</button>
					</div>
				{/each}
			</div>
			<div class="h-[1px] w-full bg-[#C2C2C2]"></div>
			<div class="w-full max-h-[433px] overflow-y-scroll">
				{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as item, index (item + index)}
					<button
						class={`${
							item % 2 === 0 ? 'bg-[#FFF]' : 'bg-[#F2F3F2]'
						} h-[60px] p-3 block w-full text-left hover:bg-[#bfc0bf]`}
					>
						Coming Soon
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style></style>
