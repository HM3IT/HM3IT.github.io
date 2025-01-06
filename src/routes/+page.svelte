<script lang="ts">
	import { onMount } from 'svelte';

	// import Typewriter from 'svelte-typewriter';
	import LoadingScreen from '$lib/components/LoadingScreen.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Candles from '$lib/components/Candles.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import About from '$lib/components/About.svelte';
	import Stars from '$lib/components/Stars.svelte';
	// @ts-ignore
	import TypewriterFunc from 'typewriter-effect/dist/core';

	import profile1Img from '$lib/assets/profile-pic1.jpeg';
	import checkmarkImg from '$lib/assets/checkmark.png';
	import aboutImg from '$lib/assets/profile-img-2.png';
	import linkedinImg from '$lib/assets/linkedin.png';
	import pjr1Img from '$lib/assets/project-1.png';
	import pjr2Img from '$lib/assets/project-2.png';
	import pjr3Img from '$lib/assets/project-3.png';
	import eduImg from '$lib/assets/education.png';
	import expImg from '$lib/assets/experience.png';
	import emailImg from '$lib/assets/email.png';
	import arrowImg from '$lib/assets/arrow.png';
	import gitImg from '$lib/assets/github.png';
	// import Firework from '$lib/components/Firework.svelte';

	$: isDarkThemeAnimation = isDarkTheme;
	let contact = {
		linkedinImgSrc: linkedinImg,
		emailImgSrc: emailImg,
		linkedinLink: 'https://www.linkedin.com/in/hein-min-min-maw/',
		emailLink: 'heinmin2maw.it@gmail.com',
		gitHubLink:"https://github.com/HM3IT"
	};
	let isDarkTheme = true;
	let isChangingTheme = false;
	let showButtons = false;
	let showTypewriter = false;
	const fireworkText = 'Wanna see firework?';
	onMount(() => {
		isDarkTheme = loadThemePreference();
		document.documentElement.classList.toggle('dark-theme', isDarkTheme);
		window.addEventListener('scroll', handleScroll);

		return () => {
			 
			window.removeEventListener('scroll', handleScroll);
		};
	});
	$: {
		if (typeof document !== 'undefined') {
			document?.documentElement?.classList?.toggle('dark-theme', isDarkTheme);
			document?.documentElement?.classList?.toggle('light-theme', !isDarkTheme);
		}
	}
	const startTypewriterAndButtons = () => {
		showTypewriter = true;
		setTimeout(() => {
			showButtons = true;
		}, 3000);  
	};

 
	const handleScroll = () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const triggerOffset = 400; 

		if (!showTypewriter && scrollTop > triggerOffset) {
			startTypewriterAndButtons();
		}
	};

	const handleTypingEnd = () => {
		showButtons = true;
	};

	function onCandleClick() {
		if (isChangingTheme) {
			return;
		}
		isDarkThemeAnimation = !isDarkThemeAnimation;
		setTimeout(() => {
			isDarkTheme = !isDarkTheme;

			isChangingTheme = true;
			localStorage.theme = isDarkTheme ? 'dark' : 'light';
			isChangingTheme = false;
		}, 1500);
	}

	const loadThemePreference = () => {
		return (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
	};
</script>

<!-- <LoadingScreen /> -->
<svelte:head>
	<meta name="description" content="HM3IT's portfolio website" />
</svelte:head>

<Navbar />

<!-- <Clouds /> -->
<Profile {contact} {gitImg} {profile1Img} Typewriter={TypewriterFunc} />

<About {aboutImg} {expImg} {arrowImg} {eduImg} />

<Experience {checkmarkImg} {arrowImg} />

<Projects {pjr1Img} {pjr2Img} {pjr3Img} {arrowImg} />

<Contact {contact} />

<!-- <Typewriter on:done={handleTypingEnd}>
	<h1>{fireworkText}</h1>
</Typewriter>
{#if showButtons}
	<div class="firework-buttons">
		<button on:click={() => alert('Yes clicked!')}>Yes</button>
		<button on:click={() => alert('No clicked!')}>No</button>
	</div>
{/if} -->

<Candles isDarkTheme={isDarkThemeAnimation} on:candleClick={onCandleClick} />
<Footer />
{#if isDarkTheme}
	<Stars />
	<!-- <Firework /> -->
{/if}
