<script lang="ts">
	// Were seen on
	import team_1 from '$lib/assets/team_boy.png';
	import team_2 from '$lib/assets/team_zachary.png';
	import team_3 from '$lib/assets/team_rafly.png';
	import team_4 from '$lib/assets/team_tsalis.png';
	import team_5 from '$lib/assets/team_bli_tony.png';

	// Social Media Logos
	import instagram from '$lib/assets/instagram.svg';
	import x from '$lib/assets/x.svg';
	import linkedin from '$lib/assets/linkedin.svg';

	const social_media_logos = [x, instagram, linkedin];

	interface ourTeamType {
		name: string;
		title: string;
		achievements: string[];
		assets: string;
	}

	let our_teams: ourTeamType[] = [
		{
			name: 'BOY',
			title: 'Community',
			achievements: ['president director oxlabs', 'director coinfolks'],
			assets: team_1
		},
		{
			name: 'Zachary',
			title: 'Advisory',
			achievements: ['independent commisioner ptpn viii', 'founder majalabs group'],
			assets: team_2
		},
		{
			name: 'Tsalis',
			title: 'Architect - Contractor',
			achievements: ['founder imah studio'],
			assets: team_4
		},
		{
			name: 'Bli Tony',
			title: 'Hospitality',
			achievements: ['profesional guide way kambas national park', 'ex-cruise hospitality'],
			assets: team_5
		},
		{
			name: 'Rafly',
			title: 'Technolgy',
			achievements: ['engineer btpn jenius', 'technology director oxlabs'],
			assets: team_3
		}
	];
</script>

<div
	class="w-full px-6 2xl:px-[290px] h-full flex flex-col items-center justify-center mt-10 md:mt-[100px] lg:mt-[177px]"
>
	<h1 class="text-2xl md:text-4xl lg:text-6xl font-graphik font-extrabold">Our Teams</h1>
	<div class="w-full h-full flex flex-wrap items-center justify-center gap-4 mt-7 lg:mt-[75px]">
		{#each our_teams as item, index (item.name + index)}
			<div
				class="font-grotesk bg-[#232A32] w-[160px] h-[240px] md:w-[240px] md:h-[360px] rounded-xl"
			>
				<img src={item.assets} alt={item.name} class="rounded-t-xl" />
				<div class=" py-2 px-4 md:p-5 w-full h-fit text-white">
					<h5 class="font-bold text-xs md:text-base">{item.name}</h5>
					<h6 class="text-[11px] md:text-sm">{item.title}</h6>
					<ul class="flex items-center justify-start md:mt-4 mt-2 opacity-75">
						{#each social_media_logos as item, index (item + index)}
							<a href=""><img class="w-[70%] md:w-[80%]" src={item} alt={item} /></a>
						{/each}
					</ul>

					<!-- <ul class="text-[10px] md:text-xs mt-2 md:mt-1 uppercase text-[#5F6980]">
						{#each item.achievements as achv (item.name + achv)}
							<li class="flex items-center">
								<div class="w-[5px] h-[5px] rounded-full bg-[#5F6980] mr-2 flex-none"></div>
								{achv}
							</li>
						{/each}
					</ul> -->
				</div>
			</div>
		{/each}
	</div>
</div>

<style></style>
