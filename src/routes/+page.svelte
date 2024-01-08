<script>
	import logo from '$lib/assets/nav-logo.png';
    import hero from '$lib/assets/hero-bg.png';
</script>

<main class="w-full h-full relative bg-[#232A32]">
    <!-- Navbar -->
    <nav class="bg-[#fbf8f4] bg-opacity-40 w-full h-[120px] flex items-center justify-between p-[64px] fixed">
        <img alt="The project logo" src={logo} />
        <div class="w-[198px] h-[48px] py-[8px] px-[10px] bg-white rounded-[10px] flex items-center justify-between">
            <div class="cursor-pointer pl-[10px]">
                <p class="text-[16px] font-normal leading-6">Sign Up</p>
            </div>
            <div class="cursor-pointer bg-[#00DF8E] rounded-[10px] w-[96px] h-[40px] flex items-center justify-center">
                <p class="text-[16px] font-normal leading-6">Login</p>
            </div>
        </div>
    </nav>
    <div class="w-full h-screen bg-center bg-no-repeat bg-cover">
        <img class="w-full h-full object-fill" alt="Hero logo" src={hero} />
    </div>

    <div>
        <h1 class="text-3xl font-bold underline text-green-500">
            <!-- Hello world! -->
        </h1>
    </div>

    <div class="w-full h-screen bg-[#232A32]"></div>
</main>
  
<style lang="postcss">
</style>