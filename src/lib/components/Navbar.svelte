<script lang="ts">
	import logo from '$lib/assets/nav-logo.png';
</script>

<nav
	class="bg-[#fbf8f4] bg-opacity-40 w-full h-[120px] flex items-center justify-between p-[64px] fixed z-20"
>
	<img alt="The project logo" src={logo} />
	<div
		class="w-[198px] h-[48px] py-[8px] px-[10px] bg-white rounded-[10px] flex items-center justify-between"
	>
		<div class="cursor-pointer pl-[10px]">
			<p class="text-[16px] font-normal leading-6 font-grotesk">Sign Up</p>
		</div>
		<div
			class="cursor-pointer bg-[#00DF8E] rounded-[10px] w-[96px] h-[40px] flex items-center justify-center"
		>
			<p class="text-[16px] font-normal leading-6 font-grotesk">Login</p>
		</div>
	</div>
</nav>

<style></style>
