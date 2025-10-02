<script lang="ts">
	import { onMount } from 'svelte';

	let loading_screen: HTMLDivElement;

	onMount(() => {
		document.body.style.overflowY = 'hidden';

		setTimeout(() => {
			loading_screen.classList.add('opacity-0');
		}, 1000);

		loading_screen.addEventListener('transitionend', () => {
			loading_screen.style.display = 'none';
			document.body.style.overflowY = 'auto';
		});
	});
</script>

<div
	bind:this={loading_screen}
	id="loading-screen"
	class="z-50 transition duration-500 h-screen w-screen flex justify-center items-center fixed top-0 left-0"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		preserveAspectRatio="xMidYMid"
		style="shape-rendering: auto; display: block; background: rgba(255, 255, 255, 0);"
		width="200"
		height="200"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		><g
			><rect fill="#3f4344" height="20" width="20" y="19" x="19">
				<animate
					calcMode="discrete"
					begin="0s"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;0.125;1"
					values="#ff4c4c;#3f4344;#3f4344"
					attributeName="fill"
				/>
			</rect><rect fill="#3f4344" height="20" width="20" y="19" x="40">
				<animate
					calcMode="discrete"
					begin="0.125s"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;0.125;1"
					values="#ff4c4c;#3f4344;#3f4344"
					attributeName="fill"
				/>
			</rect><rect fill="#3f4344" height="20" width="20" y="19" x="61">
				<animate
					calcMode="discrete"
					begin="0.25s"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;0.125;1"
					values="#ff4c4c;#3f4344;#3f4344"
					attributeName="fill"
				/>
			</rect><rect fill="#3f4344" height="20" width="20" y="40" x="19">
				<animate
					calcMode="discrete"
					begin="0.875s"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;0.125;1"
					values="#ff4c4c;#3f4344;#3f4344"
					attributeName="fill"
				/>
			</rect><rect fill="#3f4344" height="20" width="20" y="40" x="61">
				<animate
					calcMode="discrete"
					begin="0.375s"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;0.125;1"
					values="#ff4c4c;#3f4344;#3f4344"
					attributeName="fill"
				/>
			</rect><rect fill="#3f4344" height="20" width="20" y="61" x="19">
				<animate
					calcMode="discrete"
					begin="0.75s"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;0.125;1"
					values="#ff4c4c;#3f4344;#3f4344"
					attributeName="fill"
				/>
			</rect><rect fill="#3f4344" height="20" width="20" y="61" x="40">
				<animate
					calcMode="discrete"
					begin="0.625s"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;0.125;1"
					values="#ff4c4c;#3f4344;#3f4344"
					attributeName="fill"
				/>
			</rect><rect fill="#3f4344" height="20" width="20" y="61" x="61">
				<animate
					calcMode="discrete"
					begin="0.5s"
					repeatCount="indefinite"
					dur="1s"
					keyTimes="0;0.125;1"
					values="#ff4c4c;#3f4344;#3f4344"
					attributeName="fill"
				/>
			</rect><g /></g
		></svg
	>
</div>

<style>
	#loading-screen {
		background-color: rgb(32 28 28);
	}
</style>
