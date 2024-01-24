<script lang="ts">
	import { fade } from 'svelte/transition';
	import close from '$lib/assets/close-logo.svg';
	import CEBB_chart from '$lib/assets/CEBB-chart.png';
	import arrow_up_icon from '$lib/assets/arrow-up-icon.svg';
	import { closeModal } from 'svelte-modals';

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
				<div class="flex items-center justify-between w-full">
					<h2 class="font-bold text-3xl">{title}</h2>

					<button on:click={closeModal}>
						<img class="hover:cursor-pointer object-none" src={close} alt="modal-close-btn" />
					</button>
				</div>

				<p class="font-light">{message}</p>

				<a
					href="https://elephant-union.gitbook.io/encyclopedia/about-elephant-union/roadmap"
					class="font-bold text-xl text-[#00DF8E] underline">Read more on GitBook</a
				>
			</div>
		{:else if title.includes('CEBB')}
			<div
				class="max-w-[917px] bg-white h-fit rounded-xl font-grotesk p-10 flex flex-col items-start justify-center gap-5"
			>
				<div class="flex items-center justify-between w-full">
					<h2 class="font-bold text-3xl">$ {title}</h2>
					<button on:click={closeModal}>
						<img class="hover:cursor-pointer object-none" src={close} alt="modal-close-btn" />
					</button>
				</div>

				<p class="font-light">
					<span class="font-medium">{message}</span> stands as the core principles in our strategic guide
					for building this community
				</p>

				<img src={CEBB_chart} alt="CEBB chart" />

				<h4 class="text-[16px] font-light leading-7 text-center">
					We have Encyclopedia (Whitepaper) too, on <a
						href="https://elephant-union.gitbook.io/encyclopedia/"
						class="font-bold text-[#00DF8E] underline"
						>GitBook <img class="inline-block" alt="arrow-up-icon" src={arrow_up_icon} />
					</a>
				</h4>
			</div>
		{:else if title.toLowerCase().includes('privacy')}
			<div
				class="max-w-[917px] bg-white h-[80vh] rounded-xl font-grotesk p-10 flex flex-col items-start justify-center gap-5"
			>
				<div class="flex items-center justify-between w-full">
					<h2 class="font-bold text-3xl">{title}</h2>

					<button on:click={closeModal}>
						<img class="hover:cursor-pointer object-none" src={close} alt="modal-close-btn" />
					</button>
				</div>
				<div class="h-full overflow-scroll">
					<p>
						At Elephant Union, accessible from elephantunion.com, one of our main priorities is the
						privacy of our visitors. This Privacy Policy document contains types of information that
						is collected and recorded by Elephant Union and how we use it.
					</p>
					<br />
					<p>
						If you have additional questions or require more information about our Privacy Policy,
						do not hesitate to contact us.
					</p>
					<br />
					<p><b>CONSENT</b></p>
					<p>
						By using our website, you hereby consent to our Privacy Policy and agree to its terms.
					</p>
					<br />
					<b>INFORMATION WE COLLECT</b>
					<p>
						The personal information that you are asked to provide, and the reasons why you are
						asked to provide it, will be made clear to you at the point we ask you to provide your
						personal information.
					</p>
					<br />
					<p>
						If you contact us directly, we may receive additional information about you such as your
						name, email address, phone number, the contents of the message and/or attachments you
						may send us, and any other information you may choose to provide.
					</p>
					<br />
					<b>HOW WE USE YOUR INFORMATION</b>
					<p>We use the information we collect in various ways, including to:</p>
					<br />
					<ul style="padding-left: 13px">
						<li>Provide, operate, and maintain our website</li>
						<li>Improve, personalize, and expand our website</li>
						<li>Understand and analyze how you use our website</li>
						<li>Develop new products, services, features, and functionality</li>
						<li>
							Communicate with you, either directly or through one of our partners, including for
							customer service, to provide you with updates and other information relating to the
							website, and for marketing and promotional purposes
						</li>
						<li>Send you emails</li>
						<li>Find and prevent fraud</li>
					</ul>
					<br />
					<b>THIRD PARTY PRIVACY POLICIES</b>
					<p>
						You can choose to disable cookies through your individual browser options. To know more
						detailed information about cookie management with specific web browsers, it can be found
						at the browsers' respective websites.
					</p>
				</div>
			</div>
		{:else if title.toLowerCase().includes('terms')}
			<div
				class="max-w-[917px] bg-white h-[80vh] rounded-xl font-grotesk p-10 flex flex-col items-start justify-center gap-5"
			>
				<div class="flex items-center justify-between w-full">
					<h2 class="font-bold text-3xl">{title}</h2>

					<button on:click={closeModal}>
						<img class="hover:cursor-pointer object-none" src={close} alt="modal-close-btn" />
					</button>
				</div>
				<div class="h-full overflow-scroll">
					<p>Welcome to Elephant Union!</p>
					<br />
					<p>
						These terms and conditions outline the rules and regulations for the use of Elephant
						Union Website, located at elephantunion.com.
					</p>
					<br />
					<p>
						By accessing this website we assume you accept these terms and conditions. Do not
						continue to use Elephant Union if you do not agree to take all of the terms and
						conditions stated on this page.
					</p>
					<br />
					<p>
						The following terminology applies to these Terms and Conditions, Privacy Statement and
						Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the
						person log on this website and compliant to the Company’s terms and conditions. "The
						Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties",
						or "Us", refers to both the Client and ourselves.
					</p>
					<br />
					<b>LICENSE</b>
					<p>
						Unless otherwise stated, Elephant Union and/or its licensors own the intellectual
						property rights for all material on Elephant Union. All intellectual property rights are
						reserved. You may access this from Elephant Union for your own personal use subjected to
						restrictions set in these terms and conditions.
					</p>
					<br />
					<b>HYPERLINKING TO OUR CONTENT</b>
					<p>The following organizations may link to our Website without prior written approval:</p>
					<ul style="padding-left: 13px">
						<li>Search engines;</li>
						<li>News organizations;</li>
						<li>
							Online directory distributors may link to our Website in the same manner as they
							hyperlink to the Websites of other listed businesses; and
						</li>
					</ul>
					<br />
					<p>
						These organizations may link to our home page, to publications or to other Website
						information so long as the link: (a) is not in any way deceptive; (b) does not falsely
						imply sponsorship, endorsement or approval of the linking party and its products and/or
						services; and (c) fits within the context of the linking party’s site.
					</p>
					<br />
					<b>IFRAMES</b>
					<p>
						Without prior approval and written permission, you may not create frames around our
						Webpages that alter in any way the visual presentation or appearance of our Website.
					</p>
					<br />
					<b>CONTENT LIABILITY</b>
					<p>
						We shall not be hold responsible for any content that appears on your Website. You agree
						to protect and defend us against all claims that is rising on your Website. No link(s)
						should appear on any Website that may be interpreted as libelous, obscene or criminal,
						or which infringes, otherwise violates, or advocates the infringement or other violation
						of, any third party rights.
					</p>
					<br />
					<b>YOUR PRIVACY</b>
					<p>Please read <b>Privacy Policy</b>.</p>
					<br />
					<b>REMOVAL OF LINKS FROM OUR WEBSITE</b>
					<p>
						If you find any link on our Website that is offensive for any reason, you are free to
						contact and inform us any moment. We will consider requests to remove links but we are
						not obligated to or so or to respond to you directly.
					</p>
				</div>
			</div>
		{:else}
			<div
				class="max-w-[600px] bg-white h-fit rounded-xl font-grotesk p-10 flex flex-col items-start justify-center gap-5"
			>
				<div class="flex items-center justify-between w-full">
					<h2 class="font-bold text-5xl">{title}</h2>
					<button on:click={closeModal}>
						<img class="hover:cursor-pointer object-none" src={close} alt="modal-close-btn" />
					</button>
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

		pointer-events: auto;
		z-index: 40;
	}
</style>
