<script>
  export let profile1Img;
  export let linkedinImg;
  export let gitImg;
</script>

<section id="profile">
	<div class="section__pic-container">
		<img src={profile1Img} alt="test" />
	</div>
	<div class="section__text">
		<p class="section__text__p1">Hello, I'm</p>
		<h1 class="title">Hein Min Min Maw</h1>
		<p class="section__text__p2">Full-stack Developer</p>
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