<script lang="ts">
	import { fade } from 'svelte/transition';
	import close from '$lib/assets/close-logo.svg';
	import { onMount } from 'svelte';

	export let isOpen: boolean;
	export let title: string;
	export let message: object | string;

	onMount(() => {
		if (typeof message === 'object' && message !== null) {
			// If it's an object, cast it to an array if possible
			const messageArray = Array.isArray(message) ? message : [message];
			message = messageArray;
		}
	});
</script>

{#if isOpen}
	<div role="dialog" class="modal p-6" transition:fade|global>
		<!-- If true that means it is for roadmap else for benefits -->
		{#if title.includes('Chapter')}
			<div
				class="max-w-[917px] bg-white h-fit rounded-xl font-grotesk p-10 flex flex-col items-start justify-center gap-5"
			>
				<div class="flex items-center justify-between w-full z-50">
					<h2 class="font-bold text-3xl">{title}</h2>
					<img class="hover:cursor-pointer object-none" src={close} alt="modal-close-btn" />
				</div>

				<p class="font-light">{message}</p>

				<a href="#" class="font-bold text-xl text-[#00DF8E] underline">Read more on GitBook</a>
			</div>
		{:else}
			<div
				class="max-w-[600px] bg-white h-fit rounded-xl font-grotesk p-10 flex flex-col items-start justify-center gap-5"
			>
				<div class="flex items-center justify-between w-full z-50">
					<h2 class="font-bold text-5xl">{title}</h2>
					<img class="hover:cursor-pointer object-none" src={close} alt="modal-close-btn" />
				</div>

				<ul>
					{#each message as msg (msg)}
						<li class="font-light text-left list-disc m-2 w-full">{msg}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
		/* z-index: 40; */
	}
</style>
