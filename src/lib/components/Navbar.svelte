<script lang="ts">
	import logo from '$lib/assets/nav-logo.png';
</script>

<nav
	class="bg-transparent w-full h-[10%] md:h-[120px] flex items-start md:items-center justify-between p-6 md:p-[64px] absolute"
>
	<img class="w-[35%] sm:w-min md:object-none" alt="The project logo" src={logo} />

	<div class=" flex gap-2 md:gap-5">
		<div class="font-grotesk flex flex-col items-end justify-center hover:cursor-pointer">
			<p class=" text-[5px] md:text-[8px] bg-[#A53A4C] text-white px-1 rounded-xl">Coming Soon</p>
			<h6 class="font-bold md:text-3xl">UNION</h6>
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
</nav>

<style></style>
