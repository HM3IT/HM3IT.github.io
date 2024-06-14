<script lang="ts">
  import { onMount } from 'svelte';
  export let profile1Img;
  export let linkedinImg;
  export let gitImg;
  export let Typewriter;

  let welcomeText: HTMLHeadingElement;

  onMount(() => {
		// isDarkTheme = loadThemePreference();

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
	});
</script>

 

<section id="profile">
	<div class="section-pic-container">
		<img src={profile1Img} alt="test" />
	</div>
	<div id="profile-text-div" class="section-text">
	 
		<h2 id="type-writer" class="title transition duration-500 font-mono text-md sm:text-xl md:text-2xl lg:text-3xl  p-4 ont-extralight whitespace-nowrap" bind:this={welcomeText}>
			&nbsp;
		</h2>
		<p class="section-text-p2">Full-stack Developer</p>
		<div class="btn-container">
			<button
				class="btn btn-color-2"
				on:click={() => {
					window.open('./assets/resume-example.pdf');
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
			<img src={linkedinImg} alt="My LinkedIn profile" class="icon" />
			<img src={gitImg} alt="My Github profile" class="icon" />
		</div>
	</div>
</section>