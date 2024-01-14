<script lang="ts">
	// Elephant Whispers
	import elephant_whispers_copy from '$lib/assets/elephant-whispers.svg';
	import elephant_whispers_radio from '$lib/assets/elephant-whispers-radio.svg';
</script>

<div class="w-[1304px] flex h-full items-start justify-center gap-5 mt-[155px]">
	<!-- Left Side -->
	<div class="flex flex-col flex-none items-start justify-start w-[530px] h-fit gap-4">
		<div class="h-[193px] flex items-center justify-between bg-[#FFD1DC] p-5 rounded-2xl">
			<div class="w-full h-full grow flex flex-col items-start justify-center gap-3">
				<img class="object-none" src={elephant_whispers_copy} alt="elephant-whispers-copy" />

				<p class="font-grotesk font-medium text-left leading-3">Explore the world of elephant</p>
				<p class="font-grotesk font-medium text-left leading-3">
					conservation with 'Elephant Whispers' and
				</p>
				<p class="font-grotesk font-medium text-left leading-3">
					Join us on an emotional journey into
				</p>
				<p class="font-grotesk font-medium text-left leading-3">
					conservation's heart and nature's marvel
				</p>
			</div>

			<img
				class="grow-0 w-[45%] h-full object-none"
				src={elephant_whispers_radio}
				alt="elephant-whispers-radio"
			/>
		</div>
		<!-- Spotify Player -->
		<iframe
			title="spotify-gadjah-whispers-podcast-player"
			style="border-radius:12px"
			src="https://open.spotify.com/embed/track/4CvYHgcpBFbefsz6Q55ID1?utm_source=generator"
			width="100%"
			height="152"
			frameBorder="0"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
	</div>
	<!-- Right Side -->
	<div class="w-full h-[361px]">
		<iframe
			class="w-full h-full"
			src="https://www.youtube.com/embed/SHj2kJzVi_g"
			title="Raisa - Kali Kedua (Official Music Video)"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
	</div>
</div>

<style></style>
