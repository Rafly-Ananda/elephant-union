<script lang="ts">
	import elephant_union_logo_footer from '$lib/assets/elephant-union-logo-footer.png';

	// Social Media Logos
	import facebook from '$lib/assets/facebook.svg';
	import instagram from '$lib/assets/instagram.svg';
	import x from '$lib/assets/x.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import youtube from '$lib/assets/youtube.svg';

	let footer_info_nav = ['About Us', 'Articles', 'Careers', 'FAQs', 'NFT Collections'];

	const social_media_logos = [facebook, instagram, x, linkedin, youtube];
</script>

<div
	class="w-full h-full flex flex-col items-start justify-center bg-[#232A32] p-6 lg:p-[64px] font-grotesk text-white gap-10"
>
	<div class="w-full flex-col lg:flex-row flex items-start justify-between gap-10 lg:gap-20">
		<!-- Elephant Union -->
		<div class=" w-full flex flex-col items-center lg:block justify-center lg:w-[322px]">
			<img class="w-2/4" src={elephant_union_logo_footer} alt="elephant-union-footer-logo" />
			<p class="font-light text-sm mt-5">
				Real-world Web3 bridges economy, biodiversity, and tourism for meaningfull purposes for
				Elephant Conservation.
			</p>
		</div>

		<!-- Information -->
		<div class="w-full flex flex-col items-center justify-center lg:block lg:w-[150px]">
			<h6 class="text-lg font-bold">Information</h6>

			<ul class="flex flex-col items-center justify-center lg:block">
				{#each footer_info_nav as item, index (item + index)}
					<li class="mt-4"><a class="font-light" href="#">{item}</a></li>
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

			<p class="font-light text-sm mt-5">
				We also have a collection of interesting articles that you can read anytime. Subscribe now
				to not miss any of our article releases.
			</p>

			<div></div>
		</div>
	</div>

	<div class="h-[2px] bg-white w-full"></div>

	<div class="w-full flex-col gap-4 lg:flex-row flex items-center justify-between">
		<div class="w-full flex items-center justify-center gap-4 text-xs lg:gap-10 lg:text-base">
			<span>&#169; 2024 Elephant Union. All rights reserved.</span>

			<a href="#" class="underline">Privacy Policy</a>
			<a href="#" class="underline">Terms and Conditions</a>
		</div>

		<div>
			<ul class="flex items-center justify-center gap-3">
				{#each social_media_logos as item, index (item + index)}
					<a href=""><img src={item} alt={item} /></a>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style></style>
