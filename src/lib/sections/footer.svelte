<script lang="ts">
	import { Modal } from '$lib';
	import { openModal } from 'svelte-modals';

	import elephant_union_logo_footer from '$lib/assets/elephant-union-logo-footer.png';

	// Social Media Logos
	import facebook from '$lib/assets/facebook.svg';
	import instagram from '$lib/assets/instagram.svg';
	import x from '$lib/assets/x.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import youtube from '$lib/assets/youtube.svg';

	let footer_info_nav = ['About Us', 'Articles', 'Careers', 'FAQs'];

	let email = '';

	const social_media_logos = [instagram, x, linkedin, youtube];
	const social_media_links = [
		'https://www.instagram.com/elephantunion/',
		'https://x.com/Elephant_Union',
		'https://www.linkedin.com/company/elephantunion',
		'https://www.youtube.com/@ElephantUnion'
	];

	function handleOpen(content: string) {
		openModal(Modal, {
			title: content,
			message: content
		});
	}
</script>

<div
	class="w-full h-full flex flex-col items-start justify-center bg-[#232A32] p-6 lg:p-[64px] font-grotesk text-white gap-10"
>
	<div class="w-full flex-col lg:flex-row flex items-start justify-between gap-10 lg:gap-20">
		<!-- Elephant Union -->
		<div class=" w-full flex flex-col items-center lg:block justify-center lg:w-[322px]">
			<img
				class="w-[35%] md:w-2/4"
				src={elephant_union_logo_footer}
				alt="elephant-union-footer-logo"
			/>
			<p class="font-light text-sm mt-5 text-center lg:text-left">
				Real-world Web3 bridges economy, biodiversity, and tourism for meaningfull purposes for
				Elephant Conservation.
			</p>
		</div>

		<!-- Information -->
		<div class="w-full flex flex-col items-center justify-center lg:block lg:w-[150px]">
			<h6 class="text-lg font-bold">Information</h6>

			<ul class="flex flex-wrap gap-5 items-center justify-center lg:block pt-5">
				{#each footer_info_nav as item, index (item + index)}
					<li class="mt-0 md:mb-2">
						<a class="font-light text-[#b2b2b2]" href="elephantunion.com">{item}</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Contact Us -->
		<div class="w-full flex flex-col items-center justify-center lg:w-[322px] lg:block">
			<h6 class="text-lg font-bold">Contact Us</h6>

			<div
				class="flex flex-col items-center lg:items-start justify-center font-light gap-4 lg:gap-10 mt-5"
			>
				<p class="font-light">Jakarta, Indonesia</p>
				<p class="font-light">Email: elephantunionofficial@gmail.com</p>
			</div>
		</div>

		<!-- Stay In The Loop -->
		<div class="w-full flex flex-col items-center justify-center lg:block lg:w-[322px]">
			<h6 class="text-lg font-bold">Stay In The Loop</h6>

			<p class="font-light text-sm mt-5 text-center md:text-left">
				We also have a collection of interesting articles that you can read anytime. Subscribe now
				to not miss any of our article releases.
			</p>

			<div
				class="w-full h-full flex justify-between bg-white rounded-xl mt-5 text-black p-2 font-grotesk"
			>
				<input
					bind:value={email}
					class="text-xs md:text-[7px] 2xl:text-[12px]"
					placeholder="Enter your email address.."
				/>
				<div
					class="cursor-pointer transition ease-in-out delay-150 hover:scale-110 duration-300 mr-1 text-white flex items-center justify-center py-1 px-2 rounded-md bg-black opacity-30"
				>
					<p class=" text-[8px] 2xl:text-[12px] font-medium font-grotesk">Subscribe Now</p>
				</div>
			</div>
		</div>
	</div>

	<div class="h-[2px] bg-white w-full"></div>

	<div class="w-full flex-col gap-4 lg:flex-row flex items-center justify-between">
		<div
			class="w-full flex items-center justify-center md:justify-start gap-4 text-xs lg:gap-10 lg:text-base"
		>
			<div class="flex flex-col">
				<span>&#169; 2024 Elephant Union. All rights reserved.</span>
			</div>

			<button on:click={() => handleOpen('Privacy & Policy')} class="underline"
				>Privacy Policy</button
			>
			<button on:click={() => handleOpen('Terms & Conditions')} class="underline"
				>Terms and Conditions</button
			>
		</div>

		<div>
			<ul class="flex items-center justify-center gap-3">
				{#each social_media_logos as item, index (item + index)}
					<a href={social_media_links[index]}><img src={item} alt={item} /></a>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style></style>
