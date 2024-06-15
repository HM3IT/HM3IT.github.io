<script>
 export let pjr1Img;
 export let pjr2Img;
 export let pjr3Img;
 export let arrowImg;
</script>

<section id="projects">
	<p class="section-ext-p1">Browse My Recent</p>
	<h1 class="title">Projects</h1>
	<div class="experience-details-container">
		<div class="about-containers">
			<div class="details-container color-container">
				<div class="article-container">
					<img src={pjr1Img} alt="Project 1" class="project-img" />
				</div>
				<h2 class="experience-sub-title project-title">Project One</h2>
				<div class="btn-container">
					<button
						class="btn btn-color-2 project-btn"
						on:click={() => {
							window.location.href = 'https://github.com/';
						}}
					>
						Github
					</button>
					<button
						class="btn btn-color-2 project-btn"
						on:click={() => {
							window.location.href = 'https://github.com/';
						}}
					>
						Live Demo
					</button>
				</div>
			</div>
			<div class="details-container color-container">
				<div class="article-container">
					<img src={pjr2Img} alt="Project 2" class="project-img" />
				</div>
				<h2 class="experience-sub-title project-title">Project Two</h2>
				<div class="btn-container">
					<button
						class="btn btn-color-2 project-btn"
						on:click={() => {
							window.location.href = 'https://github.com/';
						}}
					>
						Github
					</button>
					<button
						class="btn btn-color-2 project-btn"
						on:click={() => {
							window.location.href = 'https://github.com/';
						}}
					>
						Live Demo
					</button>
				</div>
			</div>
			<div class="details-container color-container">
				<div class="article-container">
					<img src={pjr3Img} alt="Project 3" class="project-img" />
				</div>
				<h2 class="experience-sub-title project-title">Project Three</h2>
				<div class="btn-container">
					<button
						class="btn btn-color-2 project-btn"
						on:click={() => {
							window.location.href = 'https://github.com/';
						}}
					>
						Github
					</button>
					<button
						class="btn btn-color-2 project-btn"
						on:click={() => {
							window.location.href = 'https://github.com/';
						}}
					>
						Live Demo
					</button>
				</div>
			</div>
		</div>
	</div>
<a href="#contact">	<img src={arrowImg} alt="Arrow icon" class="icon arrow" /></a>

</section>