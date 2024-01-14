<script lang="ts">
	import union_collectibles from '$lib/assets/union-collectibles-logo.png';
	import typography_union_collectibles from '$lib/assets/elephant-union-collectible-series.png';
	import copy_collectibles from '$lib/assets/collectibles_copy.png';

	// benefits-arts
	import benefits_art from '$lib/assets/benefits-art.svg';
	import benefits_economy from '$lib/assets/benefits-economy.svg';
	import benefits_privillage from '$lib/assets/benefits-privillage.svg';
	import benefits_social from '$lib/assets/benefits-social.svg';
	import benefits_virtual from '$lib/assets/benefits-virtual.svg';

	// Algorund
	import algorand_logo from '$lib/assets/algorand-logo.svg';

	// Milestone
	import milestone_point from '$lib/assets/milestone-point.svg';
	import milestone_glowing_point from '$lib/assets/milestone-glowing-point.svg';
	import milestone_dimmed_point from '$lib/assets/milestone-dimmed-point.svg';
	import line from '$lib/assets/line.svg';
	import arrow_up_icon from '$lib/assets/arrow-up-icon.svg';

	let benefits_items = [
		benefits_art,
		benefits_economy,
		benefits_privillage,
		benefits_social,
		benefits_virtual
	];
</script>

<div class="w-full h-screen flex justify-center bg-[#232A32]">
	<!-- Left Side -->
	<div class="w-full h-full flex flex-col items-start justify-center gap-10 pt-10 px-16">
		<div class="w-max flex justify-start">
			<img class="object-none" alt="Union Collectibles" src={union_collectibles} />
			<img
				class="w-fit object-none"
				alt="Union Collectibles Typography"
				src={typography_union_collectibles}
			/>
		</div>

		<div class="w-max">
			<img class=" object-none" alt="Collectibles Copy" src={copy_collectibles} />
		</div>

		<div class="flex flex-col gap-4">
			<h4 class="text-xl leading-7 font-grotesk text-[#00DF8E] font-bold">Benefits:</h4>
			<div class="flex gap-4 hover:cursor-pointer">
				{#each benefits_items as item, index (index + item)}
					<div class="w-[94px] h-[94px] rounded-md bg-white flex items-center justify-center">
						<img alt={item} src={item} />
					</div>
				{/each}
			</div>

			<div class="w-[454px]">
				<p class="text-[16px] text-justify font-light font-grotesk text-white">
					In this Elephant Union collection, our focus is to transform these NFTs into utility
					members for participants in our mission. From privileges to economic benefits.
				</p>
			</div>

			<div class="flex items-center justify-around rounded-lg w-[394px] h-[55px] bg-white">
				<div class="flex items-center justify-center gap-2">
					<p class="font-grotesk text-[12px]">Listing on:</p>
					<img alt="Algorand" src={algorand_logo} />
				</div>
				<button class="w-[180px] h-[40px] bg-[#00DF8E] rounded-lg"> Mint Now </button>
			</div>
		</div>
	</div>
	<!-- Right Side -->
	<div class="w-full flex flex-col items-center justify-center">
		<div class="w-full flex items-center justify-center gap-10">
			<h4 class="text-xl leading-7 font-grotesk text-[#00DF8E] font-bold">Roadmap:</h4>
			<!-- Milestones -->
			<div class="w-[803px] h-[302px] flex items-center justify-start gap-10 relative flex-none">
				<div class="flex flex-col items-center justify-center gap-2 mt-[90px]">
					<h3 class="hover:cursor-pointer text-xl leading-7 font-grotesk text-[#00DF8E] font-bold">
						Chapter 1
					</h3>
					<img
						class="hover:cursor-pointer w-fit object-none z-10"
						alt=" milestone-point-1"
						src={milestone_point}
					/>
					<img class="w-fit object-none" alt="milestone-line-1" src={line} />
					<div
						class="flex flex-col items-center justify-center text-[14px] text-white leading-7 font-grotesk font-medium"
					>
						<h3>First Step to Humanity</h3>
						<h3>(2022-2023)</h3>
					</div>
				</div>

				<!-- Start Line -->
				<div
					class="h-[1px] bg-gradient-to-r from-white to-[#8A8A8A] absolute left-20 right-0"
				></div>
				<!-- End Line -->

				<!-- Milestone 2 -->
				<div class="flex flex-col items-center justify-center gap-2 mb-[90px]">
					<div
						class="flex flex-col items-center justify-center text-[14px] text-white leading-7 font-grotesk font-medium"
					>
						<h3>Sustaining Economic</h3>
						<h3>Impact (2024-2025)</h3>
					</div>
					<img class="w-fit object-none rotate-180" alt="milestone-line-1" src={line} />
					<img
						class="hover:cursor-pointer w-fit object-none z-10"
						alt=" milestone-point-1"
						src={milestone_glowing_point}
					/>
					<h3 class="hover:cursor-pointer text-xl leading-7 font-grotesk text-[#00DF8E] font-bold">
						Chapter 2
					</h3>
				</div>

				<!-- Milestone 3 -->
				<div class="flex flex-col items-center justify-center gap-2 mt-[90px] text-[#8A8A8A]">
					<h3 class="hover:cursor-pointer text-xl leading-7 font-grotesk font-bold">Chapter 3</h3>
					<img
						class="hover:cursor-pointer w-fit object-none z-10"
						alt=" milestone-point-1"
						src={milestone_dimmed_point}
					/>
					<img class="w-fit object-none" alt="milestone-line-1" src={line} />
					<div
						class="flex flex-col items-center justify-center text-[14px] leading-7 font-grotesk font-medium"
					>
						<h3>Direct Action for</h3>
						<h3>Elephants</h3>
					</div>
				</div>

				<!-- Milestone 4 -->
				<div class="flex flex-col items-center justify-center gap-2 mb-[90px] text-[#8A8A8A]">
					<div
						class="flex flex-col items-center justify-center text-[14px] leading-7 font-grotesk font-medium"
					>
						<h3>Exploring new</h3>
						<h3>Horizons</h3>
					</div>
					<img class="w-fit object-none rotate-180" alt="milestone-line-1" src={line} />
					<img
						class="hover:cursor-pointer w-fit object-none z-10 text-red-500"
						alt=" milestone-point-1"
						src={milestone_dimmed_point}
					/>
					<h3 class="hover:cursor-pointer text-xl leading-7 font-grotesk font-bold">Chapter 4</h3>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center pl-40">
			<h4 class="text-[16px] font-light leading-7 text-white">
				We have Encyclopedia (Whitepaper) too, on <span class="font-bold text-[#00DF8E] underline"
					>GitBook
				</span>
			</h4>
			<img alt="arrow-up-icon" src={arrow_up_icon} />
		</div>
	</div>
</div>

<style></style>
