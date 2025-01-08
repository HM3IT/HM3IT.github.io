<script lang="ts">
	import type {Project} from '$lib/types/app';

	import fedfunlImg from '$lib/assets/projects/fedfunl.png';
	import swparseImg from '$lib/assets/projects/swparse.png';
	import ezmednoteImg from '$lib/assets/projects/ezmednote.png';
	import onlineResumeImg from '$lib/assets/projects/onlineResume.png';
	import textNetworkImg from '$lib/assets/projects/textNetwork.png';
	import orderingSystemImg from '$lib/assets/projects/orderingSystem.png';
	import techHiveImg from '$lib/assets/projects/techHive.png';
	import keyboardEcomImg from '$lib/assets/projects/keyboardEcom.png';


	export let arrowImg;

	const projects:Project[] =  [
		{
			title: "EZMednote",
			demoLink: "",
			repoLink: "",
			img: ezmednoteImg,
			description:"",
			isPrivateApp: true,
			devYear:2024
		},
		{
			title: "Fedfunl (U.S. GOV Contracting Portal)",
			demoLink: "https://fedfunl.com/",
			repoLink: "#",
			img: fedfunlImg,
			description:"",
			isPrivateApp: false,
			devYear:2024
		},
		{
			title: "Swparse (Parser)",
			demoLink: "",
			repoLink: "",
			img: swparseImg,
			description:"",
			isPrivateApp: true,
			devYear:2024
		},		
		{
			title: "Text Network Analysis",
			demoLink: "",
			repoLink: "",
			img: textNetworkImg,
			description:"",
			isPrivateApp: true,
			devYear:2024
		},
		{
			title: "SMART Cafe Bar (Internal Ordering System)",
			demoLink: "#",
			repoLink: "https://github.com/HM3IT/ordering_system",
			img: orderingSystemImg,
			description:"",
			isPrivateApp: false,
			devYear:2023
		},
		
		{
			title: "Online Resume Builder",
			demoLink: "https://heinmin2maw.pythonanywhere.com",
			repoLink: "https://github.com/HM3IT/online-resume-builder",
			img: onlineResumeImg,
			description:"",
			isPrivateApp: false,
			devYear:2024
		},
		{
			title: "Tech Hive (E-commerce website)",
			demoLink: "#",
			repoLink: "https://github.com/HM3IT/tech-hive-backend",
			img: techHiveImg,
			description:"",
			isPrivateApp: false,
			devYear:2023
		},
		{
			title: "Keyboard Hero (E-commerce website)",
			demoLink: "#",
			repoLink: "https://github.com/HM3IT/Keyboard-E-commerce-website",
			img: keyboardEcomImg,
			description:"",
			isPrivateApp: false,
			devYear:2023
		},
	]



</script>

<section id="projects">
	<p class="section-ext-p1">Browse My 2024 Progress</p>
	<h1 class="title">Projects</h1>
	<div class="experience-details-container">
		<div class="about-containers project-container">
			 {#each projects as project}
				<div class="details-container color-container project-card">
					<div class="project-img">
						<img src={project.img} alt="Project 1" />
					</div>
					<h2 class="experience-sub-title project-title">{project.title}</h2>
					{#if project.isPrivateApp}
						<p class="text-medium font-semibold">Private Source Code</p>
					{:else}
					<div class="btn-container">
						<button
							class="btn btn-color-2 project-btn"
							on:click={() => {
								window.location.href = project.repoLink;
							}}
						>
							GitHub
						</button>
						<button
							class="btn btn-color-2 project-btn"
							on:click={() => {
								window.location.href = project.demoLink;
							}}

							disabled ={project.isPrivateApp}
						>
							Live Demo
						</button>
						
					</div>
					{/if}
				</div>
			 {/each}
		</div>
	</div>
<a href="#contact">	<img src={arrowImg} alt="Arrow icon" class="icon arrow" /></a>

</section>