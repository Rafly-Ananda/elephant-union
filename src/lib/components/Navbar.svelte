<script lang="ts">
	import logo from '$lib/assets/nav-logo.png';
</script>

<nav
	class="bg-[#fbf8f4] bg-opacity-40 w-full h-[10%] md:h-[120px] flex items-center justify-between p-6 md:p-[64px] fixed z-10"
>
	<img class="w-[30%] sm:w-min md:object-none" alt="The project logo" src={logo} />
	<div
		class=" md:w-[198px] md:h-[48px] bg-white rounded-md md:rounded-[10px] flex items-center justify-center md:justify-evenly gap-2 py-1 px-2 md:p-0"
	>
		<div class=" cursor-pointer">
			<p class="text-xs md:text-[16px] font-medium md:leading-6 font-grotesk">Sign Up</p>
		</div>
		<div
			class="cursor-pointer bg-[#00DF8E] flex items-center justify-center py-1 px-4 md:py-1 md:px-6 rounded-md"
		>
			<p class=" text-xs md:text-[16px] font-medium md:leading-6 font-grotesk">Login</p>
		</div>
	</div>
</nav>

<style></style>
