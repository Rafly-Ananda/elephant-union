<script lang="ts">
	import footer_artwork from '$lib/assets/footer-artwork.png';
	import discord_logo from '$lib/assets/discord-logo.svg';
	import arrow_up_white from '$lib/assets/arrow-up-white.svg';
</script>

<div
	class="w-full h-[250px] lg:h-full mt-[50px] md:mt-[123px] flex items-center justify-center relative"
>
	<img class="w-full h-full object-cover" src={footer_artwork} alt="footer-artwork" />

	<div class="w-full p-[64px] absolute flex flex-col lg:flex-row">
		<!-- Left Side -->
		<div class="w-full font-grotesk flex flex-col items-center justify-center lg:items-start">
			<div class="flex flex-col items-center justify-center lg:block">
				<h1 class="font-extrabold font-graphik text-xl md:text-4xl lg:text-7xl">
					Also we have community
				</h1>
				<p
					class=" text-base text-center md:text-left md:text-2xl font-light leading-2 md:leading-4 lg:leading-8"
				>
					Join our community on Discord to keep in touch with us.
				</p>
			</div>
		</div>

		<!-- Right Side -->
		<div class="w-full flex items-center justify-center lg:justify-end mt-5 lg:mt-0">
			<a href="https://discord.gg/bMQzJgz7y3">
				<button
					class="w-[150px] h-[35px] md:w-[279px] md:h-[60px] bg-black flex items-center justify-evenly rounded-lg"
				>
					<img
						class="w-[15px] h-[12px] ml-1 md:object-none md:mt-1 md:w-auto md:h-auto"
						src={discord_logo}
						alt="discord-logo"
					/>
					<span class="text-white font-light text-xs md:leading-8 md:text-xl">Join our Discord</span
					>
					<img
						class="w-[20px] h-[20px] ml-1 md:object-none md:mt-1 md:w-auto md:h-auto"
						src={arrow_up_white}
						alt="arrow-up"
					/>
				</button></a
			>
		</div>
	</div>
</div>

<style></style>
