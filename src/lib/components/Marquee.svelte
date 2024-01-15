<script lang="ts"></script>

<div class="marquee min-h-[60px] md:min-h-[90px]">
	<div class="track">
		<div class="font-grotesk font-bold text-xl md:text-4xl">
			&nbsp; ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION *
			ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT
			UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES
			* NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES * NFT
			COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION * ELEPHANT UNION SERIES * NFT COLLECTION *
		</div>
	</div>
</div>

<style>
	.marquee {
		background-color: #00df8e;
		position: relative;
		overflow-x: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.track {
		position: absolute;
		white-space: nowrap;
		will-change: transform;
		animation: marquee 32s linear infinite;
	}

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
