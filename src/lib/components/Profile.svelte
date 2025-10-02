<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import DeviconLinkedin from '~icons/devicon/linkedin';
	import SkillIconsGithubDark from '~icons/skill-icons/github-dark';
	export let profileImg;

	export let Typewriter;
	export let contact = {
		linkedinImgSrc: '',
		emailImgSrc: '',
		linkedinLink: '',
		emailLink: '',
		gitHubLink: ''
	};

	let welcomeText: HTMLHeadingElement;
	let showWelcomeText = false;
	let showButtons = false;

	const handleScroll = () => {
		const profileSection = document.getElementById('profile');
		if (!profileSection) return;

		const rect = profileSection.getBoundingClientRect();
		const windowHeight = window.innerHeight || document.documentElement.clientHeight;

		const triggerOffset = windowHeight / 2; 

		if (!showWelcomeText && rect.top < triggerOffset) {
			showWelcomeText = true;
		}

		if (!showButtons && rect.top < triggerOffset / 2) {
			showButtons = true;
		}
	};

	onMount(() => {
		const typewriter = new Typewriter(welcomeText, {
			loop: true,
			delay: 75
		});

		typewriter
			.pauseFor(2500)
			.typeString('Welcome!')
			.pauseFor(2000)
			.deleteAll()
			.typeString('echo "Hello I\'m Hein Min Min Maw!"')
			.pauseFor(1500)
			.deleteAll()
			.typeString('console.log("I ♥ programming!");')
			.pauseFor(1500)
			.deleteAll()
			.typeString('logger.info("Contact me!");')
			.pauseFor(1500)
			.deleteAll()
			.start();

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section id="profile">
	<div class="section-pic-container">
		<img class="main-profile-img" src={profileImg} alt="test" />
	</div>
	<div id="profile-text-div" class="section-text">
		<h2
			id="type-writer"
			class="title transition duration-500 font-mono text-md sm:text-xl md:text-2xl lg:text-3xl  p-4 ont-extralight whitespace-nowrap"
			bind:this={welcomeText}
		>
			&nbsp;
		</h2>
		<p class="section-text-p2">Full-stack Developer</p>
		<div class="btn-container" transition:fade={{ duration: 500, delay: 0 }}>
			<button
				class="btn btn-color-2"
				on:click={() => {
					window.open('/HeinMinMinMaw-CV.pdf');
				}}
			>
				Download CV
			</button>
			<button
				class="btn btn-color-1"
				on:click={() => {
					window.location.href = './#contact';
				}}
			>
				Contact Info
			</button>
		</div>
		<div id="socials-container">
			<a href={contact.linkedinLink}>
				<DeviconLinkedin height={45} width={45} />
			</a>
			<a href={contact.gitHubLink}>
				<SkillIconsGithubDark height={45} width={45} />
			</a>
		</div>
	</div>
</section>
