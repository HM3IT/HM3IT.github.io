<script lang="ts">
	import type { Project } from '$lib/types/app';
	import { onMount } from 'svelte';

	import fedfunlImg from '$lib/assets/projects/fedfunl.png';
	import swparseImg from '$lib/assets/projects/swparse.png';
	import ezmednoteImg from '$lib/assets/projects/ezmednote.png';
	import onlineResumeImg from '$lib/assets/projects/onlineResume.png';
	import textNetworkImg from '$lib/assets/projects/textNetwork.png';
	import orderingSystemImg from '$lib/assets/projects/orderingSystem.png';
	import techHiveImg from '$lib/assets/projects/techHive.png';
	import keyboardEcomImg from '$lib/assets/projects/keyboardEcom.png';
	import agentricAIImg from '$lib/assets/projects/agentricAI.jpg';

	export let arrowImg;

	let showModal = false;
	let selectedProject: Project | null = null;
	function openModal(project: Project) {
		selectedProject = project;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedProject = null;
	}

	const projects: Project[] = [
		{
			title: 'EZMednote',
			demoLink: '',
			repoLink: '',
			img: ezmednoteImg,
			description: `EZMednote is an AI-powered system that generates structured healthcare SOAP (Subjective, Objective, Assessment, Plan) reports from voice recordings or real-time consultations. It integrates Whisper for transcription, Mistral-Dolphin and Ollama for language modeling, and GLiner for entity recognition. The app highlights entities with intuitive legends, provides transcripts alongside audio segments, and ensures high reliability and transparency. 
    Commitment: Designed to reduce manual workload and errors while increasing efficiency for healthcare providers. 
    Achievements: Significantly improved report accuracy and cut documentation time for medical professionals.`,
			isPrivateApp: true,
			devYear: 2024
		},
		{
			title: 'Fedfunl (U.S. GOV Contracting Portal)',
			demoLink: 'https://fedfunl.com/',
			repoLink: '#',
			img: fedfunlImg,
			description: `Fedfunl delivers real-time updates on U.S. government agency awards and protest activities. Built with AWS and Typesense, it leverages advanced crawlers for automated collection, validation, and indexing of contracting data. 
    Commitment: Provides highly customized filters (by department, agency, award amount, or protester details) and sub-second query response times. 
    Achievements: Developed a scalable, high-performance infrastructure capable of handling millions of records, with flexible tuning for cost and performance optimization.`,
			isPrivateApp: false,
			devYear: 2024
		},
		{
			title: 'Swparse (Parser)',
			demoLink: '',
			repoLink: 'https://github.com/skywarditsolutions/swparse',
			img: swparseImg,
			description: `Swparse is a multi-format parsing engine supporting PDFs (including complex layouts), Excel files, and images. It outputs data in Markdown, HTML, or JSON and supports natural-language field queries for structured extraction. 
    Commitment: Provides specialized modes like plain-text, table-only, and sheet-index-based extraction, with asynchronous multi-file handling powered by queues. 
    Achievements: Demonstrated higher accuracy and faster performance than Nougat, while remaining fully compatible with Llamaparse for seamless integration into enterprise workflows.`,
			isPrivateApp: false,
			devYear: 2024
		},
		{
			title: 'Text Network Analysis',
			demoLink: 'projects/graph',
			repoLink: '',
			img: textNetworkImg,
			description: `A visualization and analysis tool for mapping relationships between terms and entities in text corpora. It supports interactive graph exploration, clustering, and keyword importance detection. 
    Commitment: Built for researchers to uncover hidden patterns and semantic structures in large-scale documents. 
    Achievements: Improved clarity in analyzing academic and organizational datasets by transforming raw text into interpretable network graphs.`,
			isPrivateApp: false,
			devYear: 2024
		},
		{
			title: 'SMART Cafe Bar (Internal Ordering System)',
			demoLink: '#',
			repoLink: 'https://github.com/HM3IT/ordering_system',
			img: orderingSystemImg,
			description: `A full-stack ordering platform for internal use at a café/bar, designed to streamline staff order processing and inventory tracking. 
    Commitment: Focused on simplifying day-to-day operations with a responsive web UI and reliable backend. 
    Achievements: Reduced order handling errors and improved speed of service in internal pilot deployments.`,
			isPrivateApp: false,
			devYear: 2023
		},
		{
			title: 'Online Resume Builder',
			demoLink: 'https://heinmin2maw.pythonanywhere.com',
			repoLink: 'https://github.com/HM3IT/online-resume-builder',
			img: onlineResumeImg,
			description: `A web-based platform that enables users to design, edit, and export professional resumes directly in the browser. 
    Commitment: Provides templates, customization options, and simple export workflows to empower job seekers. 
    Achievements: Helped students and professionals quickly build resumes with polished layouts, increasing job application readiness.`,
			isPrivateApp: false,
			devYear: 2024
		},
		{
			title: 'Tech Hive (E-commerce website)',
			demoLink: '#',
			repoLink: 'https://github.com/HM3IT/tech-hive-backend',
			img: techHiveImg,
			description: `An e-commerce solution built with a modular backend for product management, order tracking, and secure checkout. 
    Commitment: Designed for scalability, with a clean and user-friendly front-end experience. 
    Achievements: Demonstrated reliable order processing and backend integration, laying the foundation for further scaling.`,
			isPrivateApp: false,
			devYear: 2023
		},
		{
			title: 'Keyboard Hero (E-commerce website)',
			demoLink: '#',
			repoLink: 'https://github.com/HM3IT/Keyboard-E-commerce-website',
			img: keyboardEcomImg,
			description: `A specialized e-commerce platform focused on custom mechanical keyboards. 
    Commitment: Created with an emphasis on niche product showcases, variant handling, and smooth checkout workflows. 
    Achievements: Delivered a stable shopping experience for enthusiasts, helping expand access to custom keyboard products.`,
			isPrivateApp: false,
			devYear: 2023
		},
		{
			title: 'AgentricAI',
			demoLink: 'https://www.zurich.com/campaigns/zic/agenticai-hyperchallenge',
			repoLink: '',
			img: agentricAIImg,
			description: `AgentricAI develops AI Digital Colleagues to automate repetitive insurance processes. By combining natural language models and workflow automation, it helps insurers accelerate claims handling and improve customer experiences. 
    Commitment: Built to enhance decision-making speed, reduce operational costs, and support human teams. 
    Achievements: Successfully showcased in a partnership with Zurich Insurance, demonstrating measurable improvements in claims efficiency.`,
			isPrivateApp: false,
			devYear: 2025
		}
	];
</script>
 

<section id="projects">
	<div class="mx-auto max-w-8xl px-4">
		<p class="section-ext-p1 text-center">Browse My Progress</p>
		<h1 class="title text-center">Projects</h1>

		<!-- Horizontal Scroll Projects -->
		<div
			class="mt-4 grid grid-rows-2 grid-flow-col auto-cols-[340px] gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory py-4 pr-6"
			role="list"
			aria-label="Projects"
		>
			{#each projects as project}
				<article
					class="snap-start grid grid-rows-[auto_auto_minmax(3rem,1fr)_auto] min-w-[340px] max-w-[340px] rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
					role="listitem"
				>
					<div class="aspect-video overflow-hidden rounded-xl bg-gray-100">
						<img src={project.img} alt={project.title} class="h-full w-full object-cover" />
					</div>

					<h2 class="mt-2 text-lg font-semibold leading-tight line-clamp-2">{project.title}</h2>

					<p class="text-sm text-gray-600 line-clamp-2">
						{project.description || 'No public description yet.'}
					</p>

					<div class="mt-2 flex h-10 items-center gap-2">
						{#if project.isPrivateApp}
							<p class="font-semibold text-gray-700">Private Source Code</p>
						{:else}
							<button
								class="h-10 px-3 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 transition disabled:opacity-50"
								on:click={() => open(project.repoLink)}
								disabled={!project.repoLink || project.repoLink === '#'}
							>
								GitHub
							</button>
							<button
								class="h-10 px-3 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 transition disabled:opacity-50"
								on:click={() => open(project.demoLink)}
								disabled={!project.demoLink || project.demoLink === '#'}
							>
								Live Demo
							</button>
							<button
								class="h-10 px-3 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 transition"
								on:click={() => openModal(project)}
							>
								View Detail
							</button>
						{/if}
					</div>
				</article>
			{/each}
		</div>

		<!-- Popup Modal -->
		{#if showModal && selectedProject}
			<div class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
				<div
					class="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
				>
					<!-- Close button -->
					<button
						class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
						on:click={closeModal}
					>
						✕
					</button>

					<!-- Project Title -->
					<h2 class="text-2xl font-bold mb-2">{selectedProject.title}</h2>
					<p class="text-gray-600 mb-4">{selectedProject.description}</p>

					<!-- Extra images layout -->
					<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
						<div class="aspect-video rounded-lg overflow-hidden bg-gray-100">
							<img
								src={selectedProject.img}
								alt="Screenshot 1"
								class="w-full h-full object-cover"
							/>
						</div>
						<div class="aspect-video rounded-lg overflow-hidden bg-gray-100">
							<img
								src={selectedProject.img}
								alt="Screenshot 2"
								class="w-full h-full object-cover"
							/>
						</div>
						<div class="aspect-video rounded-lg overflow-hidden bg-gray-100">
							<img
								src={selectedProject.img}
								alt="Screenshot 3"
								class="w-full h-full object-cover"
							/>
						</div>
					</div>

					<!-- Links -->
					<div class="flex gap-3">
						{#if selectedProject.repoLink && selectedProject.repoLink !== '#'}
							<a
								href={selectedProject.repoLink}
								target="_blank rel=noreferrer"
								class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-sm"
							>
								GitHub
							</a>
						{/if}
						{#if selectedProject.demoLink && selectedProject.demoLink !== '#'}
							<a
								href={selectedProject.demoLink}
								target="_blank rel=noreferrer"
								class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-sm"
							>
								Live Demo
							</a>
						{/if}
					</div>
				</div>
			</div>
		{/if}

		<div class="mt-2 flex justify-center">
			<a href="#contact"><img src={arrowImg} alt="Arrow icon" class="icon arrow" /></a>
		</div>
	</div>
</section>
