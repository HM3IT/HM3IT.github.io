<script>
 
  export let contact ={
	linkedinImgSrc: '',
	linkedinLink:'',
	emailImgSrc: '',
	emailLink: '',
  }
</script>

<section id="contact">
	<p class="section-text-p1">Get in Touch</p>
	<h1 class="title">Contact Me</h1>
	<div class="contact-info-upper-container">
			<div class="contact-info-container mr-10">
			<img src={contact.emailImgSrc} alt="Email icon" class="icon contact-icon email-icon" />
			<p><a href="mailto:{contact.emailLink}">Email</a></p>
		</div>
		<div class="contact-info-container">
			<img src={contact.linkedinImgSrc} alt="LinkedIn icon" class="icon contact-icon" />
			<p><a href="{contact.linkedinLink}">LinkedIn</a></p>
		</div>
	</div>
</section>