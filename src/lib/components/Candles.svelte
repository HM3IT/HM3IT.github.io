<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	export let isDarkTheme: boolean;

	let isMounted = false;

	$: {
		onThemeChange(isDarkTheme);
	}

	let candle1: HTMLDivElement;
	let candle1__eyes_one: HTMLSpanElement;
	let candle1__eyes_two: HTMLSpanElement;
	let candle1__mouth: HTMLDivElement;

	let candle2: HTMLDivElement;
	let candle2__eyes_one: HTMLDivElement;
	let candle2__eyes_two: HTMLDivElement;
	let candle2__stick: HTMLDivElement;
	let candle2__fire: HTMLDivElement;

	let candle__smoke_one: HTMLDivElement;
	let candle__smoke_two: HTMLDivElement;

	const removeAnimation = (element: ElementCSSInlineStyle) => {
		element.style.animation = '';
	};

	const onThemeChange = (isDarkTheme: boolean) => {
		if (!isMounted) {
			return;
		}

		if (isDarkTheme) {
			setDarkTheme();
		} else {
			setLightTheme();
		}
	};

	const setLightTheme = () => {
		// Candle2
		candle2.style.animation = 'shake-left 2s linear';
		candle2.addEventListener('animationend', () => removeAnimation(candle2));

		candle2__eyes_one.style.animation = 'changeto-lower 2s linear';
		candle2__eyes_one.addEventListener('animationend', () => removeAnimation(candle2__eyes_one));

		candle2__eyes_two.style.animation = 'changeto-greater 2s linear';
		candle2__eyes_two.addEventListener('animationend', () => removeAnimation(candle2__eyes_two));

		candle2__stick.style.animation = 'stick-animation 2s linear';
		candle2__stick.addEventListener('animationend', () => removeAnimation(candle2__stick));

		// Default
		candle1__eyes_one.style.animation = 'blink-eyes-wait 3s infinite linear';
		candle1__eyes_two.style.animation = 'blink-eyes-wait 3s infinite linear';

		setTimeout(() => {
			candle2__fire.style.width = '16px';
			candle2__fire.style.height = '20px';
			document.documentElement.classList.remove('dark');
		}, (2000 * 72) / 100);
	};

	const setDarkTheme = () => {
		// Candle1
		candle1.style.animation = 'expand-body 2s linear';
		candle1.addEventListener('animationend', () => removeAnimation(candle1));

		candle1__eyes_one.style.animation = 'blink-eyes 2s linear';
		candle1__eyes_one.addEventListener('animationend', () => removeAnimation(candle1__eyes_one));

		candle1__eyes_two.style.animation = 'blink-eyes 2s linear';
		candle1__eyes_two.addEventListener('animationend', () => removeAnimation(candle1__eyes_two));

		candle1__mouth.style.animation = 'uff 2s linear';
		candle1__mouth.addEventListener('animationend', () => removeAnimation(candle1__mouth));

		// Default
		candle2.style.animation = 'shake-wait 3s infinite linear';

		setTimeout(() => {
			candle2__fire.style.width = '0px';
			candle2__fire.style.height = '0px';
			document.documentElement.classList.add('dark');
		}, (2000 * 60) / 100);

		// Candle
		candle__smoke_one.style.animation = 'move-left 2s linear';
		candle__smoke_one.addEventListener('animationend', () => removeAnimation(candle__smoke_one));

		candle__smoke_two.style.animation = 'move-top 2s linear';
		candle__smoke_two.addEventListener('animationend', () => removeAnimation(candle__smoke_two));
	};

	const onCandleClick = () => {
		dispatch('candleClick');
	};

	onMount(() => {
		isMounted = true;

		if (isDarkTheme) {
			// Default
			candle2.style.animation = 'shake-wait 3s infinite linear';
			candle2__fire.style.width = '0px';
			candle2__fire.style.height = '0px';

			document.documentElement.classList.add('dark');
		} else {
			// Default
			candle1__eyes_one.style.animation = 'blink-eyes-wait 3s infinite linear';
			candle1__eyes_two.style.animation = 'blink-eyes-wait 3s infinite linear';
			candle2__fire.style.width = '16px';
			candle2__fire.style.height = '20px';

			document.documentElement.classList.remove('dark');
		}
	});
</script>

<div
	class="shadow hvr-grow-candle sm:hvr-grow-candle-sm md:hvr-grow-candle-md z-999 mb-4 mt-24 sm:mt-36 md:mt-48 scale-50 sm:scale-75 md:scale-100"
>
	<button class="candles" on:click={() => onCandleClick()} aria-label="Change website theme">
		<div class="candle1" bind:this={candle1}>
			<div class="candle1__body">
				<div class="candle1__eyes">
					<span class="candle1__eyes-one" bind:this={candle1__eyes_one} />
					<span class="candle1__eyes-two" bind:this={candle1__eyes_two} />
				</div>
				<div class="candle1__mouth" bind:this={candle1__mouth} />
			</div>
			<div class="candle1__stick" />
		</div>

		<div class="candle2" bind:this={candle2}>
			<div class="candle2__body">
				<div class="candle2__eyes">
					<div class="candle2__eyes-one" bind:this={candle2__eyes_one} />
					<div class="candle2__eyes-two" bind:this={candle2__eyes_two} />
				</div>
			</div>
			<div class="candle2__stick" bind:this={candle2__stick} />
		</div>
		<div class="candle2__fire" bind:this={candle2__fire} />
		<div class="sparkles-one" />
		<div class="sparkles-two" />
		<div class="candle__smoke-one" bind:this={candle__smoke_one} />
		<div class="candle__smoke-two" bind:this={candle__smoke_two} />
	</button>
	<div class="floor" />
</div>

<style>
	.floor {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 250px;
		height: 5px;
		background: #673c63;
		transform: translate(-50%, -50%);
		box-shadow: 0px 2px 5px #111;
		z-index: 2;
	}

	.candles {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 250px;
		height: 150px;
		transform: translate(-50%, -100%);
		z-index: 10;
	}

	.candle1 {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 35px;
		height: 100px;
		background: #fff;
		border: 3px solid #673c63;
		border-bottom: 0px;
		border-radius: 3px;
		transform-origin: center right;
		transform: translate(60%, -25%);
		box-shadow: -2px 0px 0px #95c6f2 inset;

		/* animation: expand-body 3s infinite linear; */
	}

	.candle1__stick,
	.candle2__stick {
		position: absolute;
		left: 50%;
		top: 0%;
		width: 3px;
		height: 15px;
		background: #673c63;
		border-radius: 8px;
		transform: translate(-50%, -100%);
	}

	.candle2__stick {
		height: 12px;
		transform-origin: bottom center;
		/* animation: stick-animation 3s infinite linear; */
	}

	.candle1__eyes,
	.candle2__eyes {
		position: absolute;
		left: 50%;
		top: 0%;
		width: 35px;
		height: 30px;
		transform: translate(-50%, 0%);
	}

	.candle1__eyes-one {
		position: absolute;
		left: 30%;
		top: 20%;
		width: 5px;
		height: 5px;
		border-radius: 100%;
		background: #673c63;
		transform: translate(-70%, 0%);
		/* animation: blink-eyes 3s infinite linear; */
	}

	.candle1__eyes-two {
		position: absolute;
		left: 70%;
		top: 20%;
		width: 5px;
		height: 5px;
		border-radius: 100%;
		background: #673c63;
		transform: translate(-70%, 0%);
		/* animation: blink-eyes 3s infinite linear; */
	}

	.candle1__mouth {
		position: absolute;
		left: 40%;
		top: 20%;
		width: 0px;
		height: 0px;
		border-radius: 20px;
		background: #673c63;
		transform: translate(-50%, -50%);
		/* animation: uff 3s infinite linear; */
	}

	.candle__smoke-one {
		position: absolute;
		left: 30%;
		top: 50%;
		background: grey;
		transform: translate(-50%, -50%);
		/* animation: move-left 3s infinite linear; */
	}

	.candle__smoke-two {
		position: absolute;
		left: 30%;
		top: 40%;
		border-radius: 10px;
		background: grey;
		transform: translate(-50%, -50%);
		/* animation: move-top 3s infinite linear; */
	}

	.candle2 {
		position: absolute;
		left: 20%;
		top: 65%;
		width: 42px;
		height: 60px;
		background: #fff;
		border: 3px solid #673c63;
		border-bottom: 0px;
		border-radius: 3px;
		transform: translate(60%, -15%);
		transform-origin: center right;
		box-shadow: -2px 0px 0px #95c6f2 inset;
		/* animation: shake-wait 2s infinite linear; */
	}

	.candle2__eyes-one {
		position: absolute;
		left: 30%;
		top: 50%;
		width: 5px;
		height: 5px;
		display: inline-block;
		border: 0px solid #673c63;
		border-radius: 100%;
		background: #673c63;
		transform: translate(-80%, 0%);
		/* animation: changeto-lower 3s infinite linear; */
	}

	.candle2__eyes-two {
		position: absolute;
		left: 70%;
		top: 50%;
		width: 5px;
		height: 5px;
		display: inline-block;
		border: 0px solid #673c63;
		border-radius: 100%;
		background: #673c63;
		transform: translate(-80%, 0%);
		/* animation: changeto-greater 3s infinite linear; */
	}

	.candle2__fire {
		position: absolute;
		top: 50%;
		left: 40%;
		display: block;
		width: 16px;
		height: 20px;
		background-color: red;
		border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
		background: #ff9800;
		transform: translate(-75%, -50%);
		animation: dance-fire 2s infinite linear;
	}

	@keyframes -global-blink-eyes {
		0%,
		35% {
			opacity: 1;
			transform: translate(-70%, 0%);
		}
		36%,
		39% {
			opacity: 0;
			transform: translate(-70%, 0%);
		}
		40% {
			opacity: 1;
			transform: translate(-70%, 0%);
		}
		50%,
		65% {
			transform: translate(-140%, 0%);
		}
		66% {
			transform: translate(-70%, 0%);
		}
	}
	@keyframes -global-blink-eyes-wait {
		0%,
		95% {
			opacity: 1;
			transform: translate(-70%, 0%);
		}
		96%,
		99% {
			opacity: 0;
			transform: translate(-70%, 0%);
		}
		100% {
			opacity: 1;
			transform: translate(-70%, 0%);
		}
	}

	@keyframes -global-expand-body {
		0%,
		40% {
			transform: scale(1, 1) translate(60%, -25%);
		}
		45%,
		55% {
			transform: scale(1.1, 1.1) translate(60%, -28%);
		}
		60% {
			transform: scale(0.89, 0.89) translate(60%, -25%);
		}
		65% {
			transform: scale(1, 1) translate(60%, -25%);
		}
		70% {
			transform: scale(0.95, 0.95) translate(60%, -25%);
		}
		75% {
			transform: scale(1, 1) translate(60%, -25%);
		}
	}
	@keyframes -global-uff {
		0%,
		40% {
			width: 0px;
			height: 0px;
		}
		50%,
		54% {
			width: 15px;
			height: 15px;
			left: 30%;
		}
		59% {
			width: 5px;
			height: 5px;
			left: 20%;
		}
		62% {
			width: 2px;
			height: 2px;
			left: 20%;
		}
		67% {
			width: 0px;
			height: 0px;
			left: 30%;
		}
	}
	@keyframes -global-change-background {
		0%,
		59%,
		98%,
		100% {
			background: #fff;
		}
		61%,
		97% {
			background: #000;
		}
	}
	@keyframes -global-move-left {
		0% {
			width: 0px;
			height: 0px;
		}
		59% {
			width: 0px;
			height: 0px;
		}
		60% {
			width: 30px;
			height: 3px;
			left: 30%;
		}
		68% {
			width: 0px;
			left: 20%;
		}
		100% {
			width: 0px;
			height: 0px;
			left: 40%;
		}
	}
	@keyframes -global-move-top {
		0% {
			width: 0px;
			height: 0px;
		}
		59% {
			width: 0px;
			height: 0px;
		}
		60% {
			width: 10px;
			height: 10px;
			top: 40%;
			left: 40%;
		}
		80% {
			width: 0px;
			height: 0px;
			top: 20%;
		}
		100% {
			width: 0px;
			height: 0px;
			top: 0%;
		}
	}
	@keyframes -global-shake-left {
		5% {
			left: 20%;
			transform: translate(60%, -15%);
		}
		24% {
			left: 20%;
			transform: translate(60%, -15%);
		}
		30% {
			left: 20%;
			transform: translate(60%, -15%);
		}
		42% {
			left: 18%;
			transform: translate(60%, -15%);
		}
		45% {
			left: 21%;
			transform: translate(60%, -15%);
		}
		47% {
			left: 20%;
			transform: translate(60%, -15%);
		}
		55% {
			left: 20%;
			transform: scale(1.15, 0.85) translate(60%, -15%);
			background: #fff;
			border-color: #673c63;
		}
		69% {
			left: 20%;
			transform: scale(1.18, 0.82) translate(60%, -10%);
			background: #f44336;
			border-color: #f44336;
			box-shadow: -2px 0px 0px #f44336 inset;
		}
		70% {
			left: 20%;
			transform: scale(0.85, 1.15) translate(60%, -15%);
		}
		80% {
			left: 20%;
			transform: scale(1.05, 0.95) translate(60%, -15%);
		}
		99% {
			left: 20%;
			transform: scale(1, 1) translate(60%, -15%);
		}
	}
	@keyframes -global-shake-wait {
		0%,
		50% {
			left: 20%;
			transform: translate(60%, -15%);
		}
		60%,
		64% {
			left: 20%;
			transform: translate(60%, -15%);
		}
		69% {
			left: 20%;
			transform: translate(60%, -15%);
		}
		72% {
			left: 18%;
			transform: translate(60%, -15%);
		}
		75% {
			left: 21%;
			transform: translate(60%, -15%);
		}
		77% {
			left: 20%;
			transform: translate(60%, -15%);
		}
		85% {
			left: 20%;
			transform: translate(60%, -15%);
			background: #fff;
			border-color: #673c63;
		}
		90% {
			left: 20%;
			transform: translate(60%, -12%);
		}
		91% {
			left: 20%;
			transform: translate(60%, -11%);
		}
		92% {
			left: 20%;
			transform: translate(60%, -10%);
		}
		100% {
			left: 20%;
			transform: translate(60%, -16%);
		}
	}

	@keyframes -global-stick-animation {
		0%,
		20% {
			left: 50%;
			top: 0%;
			transform: translate(-50%, -100%);
		}
		30%,
		34% {
			left: 50%;
			top: 0%;
			transform: translate(-50%, -100%);
		}
		39% {
			left: 50%;
			top: 0%;
			transform: translate(-50%, -100%);
		}
		42% {
			left: 50%;
			top: 0%;
			transform: rotateZ(-15deg) translate(-50%, -100%);
		}
		45% {
			left: 50%;
			top: 0%;
			transform: rotateZ(15deg) translate(-50%, -100%);
		}
		50% {
			left: 50%;
			top: 0%;
			transform: rotateZ(-5deg) translate(-50%, -100%);
		}
		52% {
			left: 50%;
			top: 0%;
			transform: rotateZ(5deg) translate(-50%, -100%);
		}
		54%,
		64% {
			left: 50%;
			top: 0%;
			transform: rotateZ(0deg) translate(-50%, -100%);
		}
		65% {
			transform: rotateZ(180deg) translate(0%, 120%);
		}
		73% {
			left: 50%;
			top: 0%;
			transform: translate(-50%, -100%);
		}
	}
	@keyframes -global-expand-light {
		10%,
		29%,
		59%,
		89% {
			transform: translate(-25%, -50%) scale(0, 0);
			border: 2px solid rgba(255, 255, 255, 0);
		}
		90%,
		20%,
		50% {
			transform: translate(-25%, -50%) scale(1, 1);
		}
		95%,
		96%,
		26%,
		27%,
		56%,
		57% {
			transform: translate(-25%, -50%) scale(2, 2);
			border: 2px solid rgba(255, 255, 255, 0.5);
		}
		0%,
		28%,
		58%,
		100% {
			transform: translate(-25%, -50%) scale(2.5, 2.5);
			border: 2px solid rgba(255, 255, 255, 0.2);
		}
	}
	@keyframes dance-fire {
		20% {
			left: 39.6%;
			background: #ff6e07;
		}
		35% {
			left: 39.5%;
			background: #ff8307;
		}
		50% {
			left: 40%;
			background: #ffc107;
		}
		65% {
			left: 40.6%;
			background: #ffd607;
		}
		80% {
			left: 40.4%;
			background: #ff9800;
		}
	}

	@keyframes -global-changeto-lower {
		0%,
		70%,
		90% {
			padding: 0px;
			display: inline-block;
			border-radius: 100%;
			background: #673c63;
			border-width: 0 0 0 0;
			border: 0px solid #673c63;
			transform: translate(-90%, 0%);
		}
		71%,
		89% {
			background: none;
			border: solid #673c63;
			border-radius: 0px;
			border-width: 0 2px 2px 0;
			display: inline-block;
			padding: 1px;
			float: left;
			transform-origin: bottom left;
			transform: rotate(-45deg) translate(-50%, -65%);
			-webkit-transform: rotate(-45deg) translate(-50%, -65%);
		}
	}
	@keyframes -global-changeto-greater {
		0%,
		70%,
		90% {
			top: 50%;
			padding: 0px;
			display: inline-block;
			border-radius: 100%;
			background: #673c63;
			border-width: 0 0 0 0;
			border: 0px solid #673c63;
			transform: translate(-80%, 0%);
		}
		71%,
		89% {
			top: 30%;
			background: none;
			border: solid #673c63;
			border-radius: 0px;
			border-width: 0 2px 2px 0;
			display: inline-block;
			padding: 1px;
			float: left;
			transform-origin: bottom left;
			transform: rotate(135deg) translate(-80%, 20%);
			-webkit-transform: rotate(135deg) translate(-80%, 20%);
		}
	}
</style>
