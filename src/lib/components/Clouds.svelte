<script lang="ts">
	const shuffle = <T>(array: Array<T>): Array<T> => {
		for (let i = array.length - 1; i > 0; --i) {
			let j = Math.floor(Math.random() * (i + 1));
			let tmp = array[i];
			array[i] = array[j];
			array[j] = tmp;
		}

		return array;
	};

	const clouds = [
		{ size: 'tiny' },
		{ size: 'tiny' },
		{ size: 'tiny' },
		{ size: 'tiny' },
		{ size: 'small' },
		{ size: 'small' },
		{ size: 'small' },
		{ size: 'small' },
		{ size: 'small' },
		{ size: 'normal' },
		{ size: 'normal' },
		{ size: 'normal' },
		{ size: 'normal' },
		{ size: 'normal' },
		{ size: 'normal' },
		{ size: 'normal' },
		{ size: 'large' },
		{ size: 'large' },
		{ size: 'large' },
		{ size: 'large' }
	];
</script>

<div class="block dark:hidden overflow-hidden h-full z-99">
	{#each shuffle(clouds) as cloud, index}
		<div class="cloud {cloud.size} cloud-{index + 1}">
			<div />
			<div />
			<div />
			<div />
		</div>
	{/each}
</div>

<style>
	.cloud {
		-webkit-animation: clouds 60s infinite linear;
		-moz-animation: clouds 60s infinite linear;
		-ms-animation: clouds 60s infinite linear;
		-o-animation: clouds 60s infinite linear;
		animation: clouds 60s infinite linear;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
		position: relative;
		width: 54px;
		height: 5px;
		background: #f7e7eb;
	}
	.cloud.tiny {
		-moz-transform: scale(0.5, 0.5);
		-ms-transform: scale(0.5, 0.5);
		-webkit-transform: scale(0.5, 0.5);
		transform: scale(0.5, 0.5);
	}
	.cloud.small {
		-moz-transform: scale(1, 1);
		-ms-transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
	.cloud.normal {
		-moz-transform: scale(2, 2);
		-ms-transform: scale(2, 2);
		-webkit-transform: scale(2, 2);
		transform: scale(2, 2);
	}
	.cloud.large {
		-moz-transform: scale(4, 4);
		-ms-transform: scale(4, 4);
		-webkit-transform: scale(4, 4);
		transform: scale(4, 4);
	}
	.cloud div {
		-moz-box-shadow: inset -2px -3px 0 0 #f7e7eb;
		-webkit-box-shadow: inset -2px -3px 0 0 #f7e7eb;
		box-shadow: inset -2px -3px 0 0 #f7e7eb;
		position: absolute;
		border-radius: 50%;
		width: 12px;
		height: 12px;
		left: -3px;
		bottom: 0;
		background: #fafbf0;
		z-index: 10;
	}
	.cloud div:first-child + div {
		-moz-transform: scale(1.6, 1.6);
		-ms-transform: scale(1.6, 1.6);
		-webkit-transform: scale(1.6, 1.6);
		transform: scale(1.6, 1.6);
		margin: 0 0 4px 13px;
		z-index: 9;
	}
	.cloud div:first-child + div + div {
		-moz-transform: scale(2.4, 2.4);
		-ms-transform: scale(2.4, 2.4);
		-webkit-transform: scale(2.4, 2.4);
		transform: scale(2.4, 2.4);
		margin: 0 0 9px 32px;
		z-index: 8;
	}
	.cloud div:first-child + div + div + div {
		-moz-transform: scale(1.3, 1.3);
		-ms-transform: scale(1.3, 1.3);
		-webkit-transform: scale(1.3, 1.3);
		transform: scale(1.3, 1.3);
		margin: 0 0 2px 50px;
		z-index: 7;
	}

	@-webkit-keyframes clouds {
		0% {
			left: -100%;
		}
		100% {
			left: 120%;
		}
	}
	@-moz-keyframes clouds {
		0% {
			left: -100%;
		}
		100% {
			left: 120%;
		}
	}
	@-ms-keyframes clouds {
		0% {
			left: -100%;
		}
		100% {
			left: 120%;
		}
	}
	@keyframes clouds {
		0% {
			left: -100%;
		}
		100% {
			left: 120%;
		}
	}
	.cloud-1 {
		-webkit-animation-duration: 263s;
		-moz-animation-duration: 263s;
		-ms-animation-duration: 263s;
		-o-animation-duration: 263s;
		animation-duration: 263s;
		margin-left: 20%;
		top: 60%;
	}

	.cloud-2 {
		-webkit-animation-duration: 99s;
		-moz-animation-duration: 99s;
		-ms-animation-duration: 99s;
		-o-animation-duration: 99s;
		animation-duration: 99s;
		margin-left: 90%;
		top: 21%;
	}

	.cloud-3 {
		-webkit-animation-duration: 142s;
		-moz-animation-duration: 142s;
		-ms-animation-duration: 142s;
		-o-animation-duration: 142s;
		animation-duration: 142s;
		margin-left: 50%;
		top: 73%;
	}

	.cloud-4 {
		-webkit-animation-duration: 152s;
		-moz-animation-duration: 152s;
		-ms-animation-duration: 152s;
		-o-animation-duration: 152s;
		animation-duration: 152s;
		margin-left: 43%;
		top: 36%;
	}

	.cloud-5 {
		-webkit-animation-duration: 215s;
		-moz-animation-duration: 215s;
		-ms-animation-duration: 215s;
		-o-animation-duration: 215s;
		animation-duration: 215s;
		margin-left: 83%;
		top: 34%;
	}

	.cloud-6 {
		-webkit-animation-duration: 139s;
		-moz-animation-duration: 139s;
		-ms-animation-duration: 139s;
		-o-animation-duration: 139s;
		animation-duration: 139s;
		margin-left: 73%;
		top: 61%;
	}

	.cloud-7 {
		-webkit-animation-duration: 109s;
		-moz-animation-duration: 109s;
		-ms-animation-duration: 109s;
		-o-animation-duration: 109s;
		animation-duration: 109s;
		margin-left: 69%;
		top: 68%;
	}

	.cloud-8 {
		-webkit-animation-duration: 121s;
		-moz-animation-duration: 121s;
		-ms-animation-duration: 121s;
		-o-animation-duration: 121s;
		animation-duration: 121s;
		margin-left: 83%;
		top: 30%;
	}

	.cloud-9 {
		-webkit-animation-duration: 101s;
		-moz-animation-duration: 101s;
		-ms-animation-duration: 101s;
		-o-animation-duration: 101s;
		animation-duration: 101s;
		margin-left: 10%;
		top: 23%;
	}

	.cloud-10 {
		-webkit-animation-duration: 126s;
		-moz-animation-duration: 126s;
		-ms-animation-duration: 126s;
		-o-animation-duration: 126s;
		animation-duration: 126s;
		margin-left: 14%;
		top: 59%;
	}

	.cloud-11 {
		-webkit-animation-duration: 96s;
		-moz-animation-duration: 96s;
		-ms-animation-duration: 96s;
		-o-animation-duration: 96s;
		animation-duration: 96s;
		margin-left: 73%;
		top: 83%;
	}

	.cloud-12 {
		-webkit-animation-duration: 83s;
		-moz-animation-duration: 83s;
		-ms-animation-duration: 83s;
		-o-animation-duration: 83s;
		animation-duration: 83s;
		margin-left: 51%;
		top: 72%;
	}

	.cloud-13 {
		-webkit-animation-duration: 205s;
		-moz-animation-duration: 205s;
		-ms-animation-duration: 205s;
		-o-animation-duration: 205s;
		animation-duration: 205s;
		margin-left: 67%;
		top: 56%;
	}

	.cloud-14 {
		-webkit-animation-duration: 79s;
		-moz-animation-duration: 79s;
		-ms-animation-duration: 79s;
		-o-animation-duration: 79s;
		animation-duration: 79s;
		margin-left: 32%;
		top: 18%;
	}

	.cloud-15 {
		-webkit-animation-duration: 124s;
		-moz-animation-duration: 124s;
		-ms-animation-duration: 124s;
		-o-animation-duration: 124s;
		animation-duration: 124s;
		margin-left: 81%;
		top: 10%;
	}

	.cloud-16 {
		-webkit-animation-duration: 187s;
		-moz-animation-duration: 187s;
		-ms-animation-duration: 187s;
		-o-animation-duration: 187s;
		animation-duration: 187s;
		margin-left: 43%;
		top: 12%;
	}

	.cloud-17 {
		-webkit-animation-duration: 92s;
		-moz-animation-duration: 92s;
		-ms-animation-duration: 92s;
		-o-animation-duration: 92s;
		animation-duration: 92s;
		margin-left: 23%;
		top: 87%;
	}

	.cloud-18 {
		-webkit-animation-duration: 240;
		-moz-animation-duration: 240;
		-ms-animation-duration: 240;
		-o-animation-duration: 240;
		animation-duration: 240;
		margin-left: 30%;
		top: 5%;
	}

	.cloud-19 {
		-webkit-animation-duration: 84s;
		-moz-animation-duration: 84s;
		-ms-animation-duration: 84s;
		-o-animation-duration: 84s;
		animation-duration: 84s;
		margin-left: 31%;
		top: 16%;
	}

	.cloud-20 {
		-webkit-animation-duration: 195s;
		-moz-animation-duration: 195s;
		-ms-animation-duration: 195s;
		-o-animation-duration: 195s;
		animation-duration: 195s;
		margin-left: 55%;
		top: 80%;
	}
</style>
