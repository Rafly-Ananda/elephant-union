<script lang="ts">
	import footer_artwork from '$lib/assets/footer-artwork.png';
	import discord_logo from '$lib/assets/discord-logo.svg';
	import arrow_up_white from '$lib/assets/arrow-up-white.svg';
</script>

<div class="w-full h-full mt-[123px] flex items-center justify-center relative">
	<img class="w-full" src={footer_artwork} alt="footer-artwork" />

	<div class="w-full p-[64px] absolute flex">
		<!-- Left Side -->
		<div class="w-full font-grotesk flex flex-col items-start justify-center">
			<div>
				<h1 class="font-black text-7xl">Also we have community</h1>
				<p class="text-xl font-light leading-8">
					Join our community on Discord to keep in touch with us.
				</p>
			</div>
		</div>

		<!-- Right Side -->
		<div class="w-full flex items-center justify-end">
			<button class="w-[279px] h-[60px] bg-black flex items-center justify-evenly rounded-lg">
				<img class="object-none mt-1" src={discord_logo} alt="discord-logo" />
				<span class="text-white font-light leading-8 text-xl">Join our Discord</span>
				<img class="object-none mt-1" src={arrow_up_white} alt="arrow-up" />
			</button>
		</div>
	</div>
</div>

<style></style>
