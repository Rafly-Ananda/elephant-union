<script lang="ts">
	// Elephant Whispers
	import elephant_whispers_copy from '$lib/assets/elephant-whispers.svg';
	import elephant_whispers_radio from '$lib/assets/elephant-whispers-radio.svg';
</script>

<div
	class="w-full h-full flex flex-col xl:flex-row items-start justify-center gap-5 mt-[50px] md:mt-[100px] lg:mt-[155px] px-6 xl:px-[64px] 2xl:px-[290px] lg:grid grid-cols-3"
>
	<!-- Left Side -->
	<div class="flex flex-col flex-none items-start justify-start w-full h-full gap-4">
		<div
			class="w-full h-full flex flex-col items-center justify-between bg-[#FFD1DC] p-5 rounded-2xl gap-5"
		>
			<div class="w-full h-full flex items-center">
				<div
					class="w-full h-full grow flex flex-col items-start justify-center gap-1 md:gap-3 text-xs leading-none md:text-base"
				>
					<img
						class="w-2/5 md:w-fit mb-2 md:mb-0"
						src={elephant_whispers_copy}
						alt="elephant-whispers-copy"
					/>

					<p class="font-grotesk font-medium text-left text-xs">
						Explore the world of elephant conservation with 'Elephant Whispers' and Join us on an
						emotional journey into conservation's heart and nature's marvel
					</p>
				</div>

				<img
					class="grow-0 w-[30%] h-full object-fit"
					src={elephant_whispers_radio}
					alt="elephant-whispers-radio"
				/>
			</div>

			<!-- Spotify Player -->

			<div class="w-full">
				<iframe
					title="spotify-gadjah-whispers-podcast-player"
					style="border-radius:12px"
					src="https://open.spotify.com/embed/playlist/0XmOD9n1ujEfGn2vgO0pby?si=-GI69HMKThqR2YPNazuQDQ&pi=a-ST0t4pHGTTih"
					width="100%"
					height="152"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>
		</div>
	</div>
	<!-- Right Side -->
	<div class="w-full h-[261px] md:h-[361px] col-span-2">
		<iframe
			class="w-full h-full rounded-xl"
			src="https://www.youtube.com/embed/Yich12ZEl-Y"
			title="ELEPHANT UNION IS COMING"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
	</div>
</div>

<style></style>
