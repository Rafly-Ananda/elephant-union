<script lang="ts">
	import logo from '$lib/assets/nav-logo.png';
</script>

<nav
	class="bg-[#fbf8f4] bg-opacity-40 w-full h-[120px] flex items-center justify-between p-6 md:p-[64px] fixed z-20"
>
	<img class="w-[40%] sm:w-min md:object-none" alt="The project logo" src={logo} />
	<div
		class="md:w-[198px] md:h-[48px] bg-white rounded-[10px] flex items-center justify-center md:justify-evenly gap-2"
	>
		<div class=" cursor-pointer">
			<p class="text-sm md:text-[16px] font-normal leading-6 font-grotesk">Sign Up</p>
		</div>
		<div class="cursor-pointer bg-[#00DF8E] flex items-center justify-center py-1 px-6 rounded-md">
			<p class=" text-sm md:text-[16px] font-normal leading-6 font-grotesk">Login</p>
		</div>
	</div>
</nav>

<style></style>
