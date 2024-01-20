<script lang="ts">
	import elephant_union_logo_footer from '$lib/assets/elephant-union-logo-footer.png';
</script>

<nav
	class="bg-gradient-to-b from-[#232A32] to-bg-transparent w-full h-screen flex items-start md:items-start justify-between p-6 md:px-[64px] absolute z-10"
>
	<div class="w-full flex items-start justify-between md:items-center md:justify-center">
		<div class="w-[50%] h-[50%]">
			<img class="" alt="The project logo" src={elephant_union_logo_footer} />
		</div>

		<div
			class="w-full h-full flex flex-col-reverse md:flex-row justify-center md:justify-end items-end gap-2 md:gap-5"
		>
			<div class="font-grotesk flex flex-col items-end justify-center hover:cursor-pointer">
				<p class=" text-[5px] md:text-[8px] bg-[#A53A4C] text-white px-1 rounded-xl">Coming Soon</p>
				<h6 class="font-bold md:text-3xl text-white">UNION</h6>
			</div>
			<div
				class=" w-fit md:h-[48px] bg-white rounded-md md:rounded-[10px] flex items-center justify-center md:justify-evenly gap-4 p-2 md:p-2"
			>
				<div class=" cursor-pointer">
					<p class="text-xs md:text-[16px] font-medium md:leading-6 font-grotesk">Sign Up</p>
				</div>
				<div
					class="cursor-pointer bg-[#00DF8E] flex items-center justify-center py-1 px-4 rounded-md"
				>
					<p class=" text-xs md:text-[16px] font-medium md:leading-6 font-grotesk">Login</p>
				</div>
			</div>
		</div>
	</div>
</nav>

<style></style>
