<script>

  export let emailImg;
  export let linkedinImg;
</script>

<section id="contact">
	<p class="section-text-p1">Get in Touch</p>
	<h1 class="title">Contact Me</h1>
	<div class="contact-info-upper-container">
			<div class="contact-info-container mr-10">
			<img src={emailImg} alt="Email icon" class="icon contact-icon email-icon" />
			<p><a href="mailto:heinmin2maw.it@gmail.com">Email</a></p>
		</div>
		<div class="contact-info-container">
			<img src={linkedinImg} alt="LinkedIn icon" class="icon contact-icon" />
			<p><a href="https://www.linkedin.com/in/hein-min-min-maw/">LinkedIn</a></p>
		</div>
	</div>
</section>