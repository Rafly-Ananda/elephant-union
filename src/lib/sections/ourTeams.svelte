<script lang="ts">
	// Were seen on
	import team_boy from '$lib/assets/team_boy.png';
	import team_adrian from '$lib/assets/team_zachary.png';
	import team_rafly from '$lib/assets/team_rafly.png';
	import team_tsalis from '$lib/assets/team_tsalis.png';
	import team_bli_tony from '$lib/assets/team_bli_tony.png';
	import team_zach from '$lib/assets/team_zach.png';
	import team_heimdalm from '$lib/assets/team_heilmdalm.png';
	import team_silvi from '$lib/assets/team_silvi.png';
	import team_arnold from '$lib/assets/team_arnold.png';
	import team_xav from '$lib/assets/team_shafly.png';

	// Social Media Logos
	import instagram from '$lib/assets/instagram.svg';
	import x from '$lib/assets/x.svg';
	import linkedin from '$lib/assets/linkedin.svg';

	interface ourTeamType {
		name: string;
		title: string;
		socialMediaLinks: {
			x: string;
			insta: string;
			linkedIn: string;
			[key: string]: string;
		};
		assets: string;
	}

	interface socialMediaLogosType {
		assets: string;
		title: string;
	}

	const social_media_logos: socialMediaLogosType[] = [
		{
			assets: x,
			title: 'x'
		},
		{
			assets: instagram,
			title: 'insta'
		},
		{
			assets: linkedin,
			title: 'linkedIn'
		}
	];

	let our_teams_full: ourTeamType[] = [
		{
			name: 'Boy',
			title: 'Community',
			socialMediaLinks: {
				x: 'https://x.com/muhfauzanis?s=21',
				insta: 'https://www.instagram.com/muhfauzanis?igsh=a2RxZWlkdDZmMTN5&utm_source=qr',
				linkedIn:
					'https://www.linkedin.com/in/muhfauzanis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
			},
			assets: team_boy
		},
		{
			name: 'Adrian',
			title: 'Advisory',
			socialMediaLinks: {
				x: 'https://x.com/thezakhary?s=21',
				insta: 'https://www.instagram.com/thezakhary?igsh=MXhwamZ2Z3NkeDU4aA==',
				linkedIn:
					'https://www.linkedin.com/in/adrian-z-51660940?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
			},
			assets: team_adrian
		},
		{
			name: 'Zadk',
			title: 'Artist',
			socialMediaLinks: {
				x: '',
				insta: 'https://www.instagram.com/dzak_dzi?igsh=YWdocDNzNXNnNWcy',
				linkedIn: ''
			},
			assets: team_zach
		},
		{
			name: 'Rafly',
			title: 'Technolgy',
			socialMediaLinks: {
				x: '',
				insta: 'https://www.instagram.com/rafly_ananda15/',
				linkedIn: 'https://www.linkedin.com/in/rafly-ananda-soemantri/'
			},
			assets: team_rafly
		},
		{
			name: 'Arnold',
			title: 'Technolgy',
			socialMediaLinks: {
				x: '',
				insta: 'https://www.instagram.com/arnold.pstr?igsh=dmI0d2s3OHlncDFs',
				linkedIn:
					'https://www.linkedin.com/in/arnold-sianturi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
			},
			assets: team_arnold
		},
		{
			name: 'Xav',
			title: 'Blockchain',
			socialMediaLinks: {
				x: 'https://x.com/shaflyhmz?s=21',
				insta: 'https://www.instagram.com/shaflyh?igsh=MWE4N3VhaG55b2pwNw==',
				linkedIn:
					'https://www.linkedin.com/in/shafly-hamzah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
			},
			assets: team_xav
		},
		{
			name: 'Adam.G',
			title: 'Creative',
			socialMediaLinks: {
				x: 'https://twitter.com/dummypng',
				insta: 'https://www.instagram.com/adamghfr_/',
				linkedIn: 'https://www.linkedin.com/in/adam-ghifari/'
			},
			assets: team_heimdalm
		},
		{
			name: 'Silvi',
			title: 'Media',
			socialMediaLinks: {
				x: 'https://x.com/silvianurrahmaw?s=21',
				insta: 'https://www.instagram.com/silvianurrahmawt?igsh=MXJqNTBxcjFsZDd5dg==',
				linkedIn: ''
			},
			assets: team_silvi
		},
		{
			name: 'Tsalis',
			title: 'Architect - Contractor',
			socialMediaLinks: {
				x: '',
				insta: 'https://www.instagram.com/rifqiabdu?igsh=OWxzZzZud3k1bW92',
				linkedIn:
					'https://www.linkedin.com/in/rifqi-abdurrahman-6b02a9150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
			},
			assets: team_tsalis
		},
		{
			name: 'Bli Tony',
			title: 'Hospitality',
			socialMediaLinks: {
				x: '',
				insta: 'https://www.instagram.com/bli.tony?igsh=MXU1aTlpcXhlNGthbg==',
				linkedIn: ''
			},
			assets: team_bli_tony
		}
	];

	let showMoreTeam: boolean = false;

	const onShowMoreTeamToggle = () => {
		showMoreTeam = showMoreTeam ? false : true;
	};
</script>

<div
	class="w-full px-6 2xl:px-[290px] h-full flex flex-col items-center justify-center mt-10 md:mt-[100px] lg:mt-[177px]"
>
	<h1 class="text-2xl md:text-4xl lg:text-6xl font-graphik font-extrabold">Our Teams</h1>
	<!-- For Desktop View -->
	<div
		class="w-full h-full md:flex flex-wrap items-center justify-center gap-4 mt-7 lg:mt-[75px] hidden"
	>
		{#each showMoreTeam ? our_teams_full : our_teams_full.slice(0, 5) as team, index_team (team.name + index_team)}
			<div
				class="font-grotesk bg-[#232A32] w-[160px] h-[240px] md:w-[240px] md:h-[360px] rounded-xl"
			>
				<img src={team.assets} alt={team.name} class="rounded-t-xl" />
				<div
					class=" py-2 px-4 md:p-5 w-full h-fit text-white flex flex-col items-center justify-center"
				>
					<h5 class="font-bold text-xs md:text-base">{team.name}</h5>
					<h6 class="text-[11px] md:text-sm">{team.title}</h6>
					<ul class="flex items-center justify-start md:mt-4 mt-2 opacity-75">
						{#each social_media_logos as item, index (item.title + index)}
							{#if team.socialMediaLinks[item.title] !== ''}
								<a href={`${team.socialMediaLinks[item.title]}`}
									><img class="w-[70%] md:w-[80%]" src={item.assets} alt={item.title} /></a
								>
							{/if}
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
	<!-- For Mobile View -->
	<div
		class="w-full h-full items-center justify-center gap-4 mt-7 lg:mt-[75px] flex flex-wrap md:hidden"
	>
		{#each showMoreTeam ? our_teams_full : our_teams_full.slice(0, 4) as team, index_team (team.name + index_team)}
			<div
				class="font-grotesk bg-[#232A32] w-[160px] h-[240px] md:w-[240px] md:h-[360px] rounded-xl"
			>
				<img src={team.assets} alt={team.name} class="rounded-t-xl" />
				<div
					class=" py-2 px-4 md:p-5 w-full h-fit text-white flex flex-col items-center justify-center"
				>
					<h5 class="font-bold text-xs md:text-base">{team.name}</h5>
					<h6 class="text-[11px] md:text-sm">{team.title}</h6>
					<ul class="flex items-center justify-start md:mt-4 mt-2 opacity-75">
						{#each social_media_logos as item, index (item.title + index)}
							{#if team.socialMediaLinks[item.title] !== ''}
								<a href={`${team.socialMediaLinks[item.title]}`}
									><img class="w-[70%] md:w-[80%]" src={item.assets} alt={item.title} /></a
								>
							{/if}
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>

	<button class="font-grotesk opacity-60 cursor-pointer mt-10" on:click={onShowMoreTeamToggle}>
		{showMoreTeam ? `Show Less` : `Show More..`}
	</button>
</div>

<style></style>
