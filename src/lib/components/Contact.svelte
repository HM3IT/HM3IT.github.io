<script>

  export let emailImg;
  export let linkedinImg;
</script>

<section id="contact">
	<p class="section__text__p1">Get in Touch</p>
	<h1 class="title">Contact Me</h1>
	<div class="contact-info-upper-container">
		<div class="contact-info-container">
			<img src={emailImg} alt="Email icon" class="icon contact-icon email-icon" />
			<p><a href="mailto:heinmin2maw.it@gmail.com">heinmin2maw.it@gmail.com</a></p>
		</div>
		<div class="contact-info-container">
			<img src={linkedinImg} alt="LinkedIn icon" class="icon contact-icon" />
			<p><a href="https://www.linkedin.com/in/hein-min-min-maw/">LinkedIn</a></p>
		</div>
	</div>
</section>