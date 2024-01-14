<script>
	import { Modals, closeModal, openModal, modals } from 'svelte-modals';
	import { Modal } from '$lib';

	function handleOpen() {
		openModal(Modal, {
			title: `Alert #${$modals.length + 1}`,
			message: 'This is an alert',
			onOpenAnother: () => {
				handleOpen();
			}
		});
	}
</script>

<button on:click={handleOpen}> open </button>
