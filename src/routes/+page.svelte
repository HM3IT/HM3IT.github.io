<script lang="ts">
	import { onMount } from 'svelte';

	import LoadingScreen from '$lib/components/LoadingScreen.svelte';
	import Candles from '$lib/components/Candles.svelte';
	import Stars from '$lib/components/Stars.svelte';
	import Clouds from '$lib/components/Clouds.svelte';
	// @ts-ignore
	import Typewriter from 'typewriter-effect/dist/core';



	import Navbar from '$lib/components/Navbar.svelte';
	// import HamburgerNav from '$lib/components/HamburgerNav.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import About from '$lib/components/About.svelte';


	// import {profile2Img} from "$lib/assets/profile-pic-2.png"
	import profile1Img from '$lib/assets/profile-pic-1.png';
	import checkmarkImg from '$lib/assets/checkmark.png';
	import linkedinImg from '$lib/assets/linkedin.png';
	import emailImg from '$lib/assets/email.png';
	import aboutImg from '$lib/assets/profile-pic-2.png';
	import pjr1Img from '$lib/assets/project-1.png';
	import pjr2Img from '$lib/assets/project-2.png';
	import pjr3Img from '$lib/assets/project-3.png';
	import arrowImg from '$lib/assets/arrow.png';
	import eduImg from '$lib/assets/education.png';
	import expImg from '$lib/assets/experience.png';
	import gitImg from '$lib/assets/github.png';



	let welcomeText: HTMLHeadingElement;

	let isDarkTheme = true;
	// Avoid changing theme while already playing the animation
	let isChangingTheme = false;

	const onCandleClick = () => {
		if (isChangingTheme) {
			return;
		}

		isChangingTheme = true;

		isDarkTheme = !isDarkTheme;
		localStorage.theme = isDarkTheme ? 'dark' : 'light';

		setTimeout(() => {
			isChangingTheme = false;
		}, 3000);
	};

	const loadThemePreference = () => {
		return (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark').matches)
		);
	};

 
</script>
<LoadingScreen />
<svelte:head>
	<meta name="description" content="HM3IT's portfolio website" />
</svelte:head>

<!-- Switch is done using CSS (no need of Svelte if clauses) -->


<!-- Light and Dark Backgrounds. We can't simply change color because gradients don't support transitions  -->
<!-- Switch is done using CSS (no need of Svelte if clauses) -->
<Navbar/>
 
<!-- <Stars /> -->
<Clouds />
<Profile {linkedinImg} {gitImg} {profile1Img} {Typewriter}/>

<About {aboutImg} {expImg}  {arrowImg}  {eduImg}/>

<Experience {checkmarkImg} {arrowImg} />

<Projects {pjr1Img} {pjr2Img} {pjr3Img} {arrowImg}/>

<Contact {emailImg} {linkedinImg} />

<Footer/>



<!-- <div class="w-full h-full flex flex-col items-center justify-between z-10 absolute">
	<div class="grow w-full min-h-0 flex items-center justify-center">
		<div
			class="transition duration-500 mt-8 max-h-full overflow-y-scroll w-5/6 md:w-4/5 max-w-5xl border border-neutral-500 dark:border-neutral-700 bg-neutral-300 dark:bg-neutral-800 shadow-2xl shadow-zinc-900 p-6 rounded-md text-neutral-800 dark:text-neutral-300"
		>
			<h1
				class="transition duration-500 font-mono text-md sm:text-xl md:text-2xl lg:text-3xl bg-slate-300 dark:bg-slate-800 border-t-2 border-t-neutral-900 border-r-2 border-r-neutral-900 border-b-2 border-b-neutral-900 p-4 border-l-4 border-l-red-600 dark:border-l-lime-500 rounded font-extralight whitespace-nowrap overflow-x-scroll"
				bind:this={welcomeText}
			>
				 Space character. Used to keep line height correct 
				&nbsp
			</h1> 

		
		</div>
	</div>

</div>  -->
<Candles {isDarkTheme} on:candleClick={() => onCandleClick()} /> 
 <!-- Switch is done using CSS (no need of Svelte if clauses) -->

 