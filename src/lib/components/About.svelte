<script>
	export let aboutImg;
	export let expImg;
	export let arrowImg;
	export let eduImg;
</script>

<section id="about">
	<p class="section-text-p1">Get To Know More</p>
	<h1 class="title">About Me</h1>
	<div class="section-container">
		<div id="about-img-div" class="section-pic-container">
			<img src={aboutImg} alt="test" class="main-profile-img" />
		</div>
		<div class="about-details-container ">
			<div class="about-containers">
				<div class="details-container">
					<img src={expImg} alt="Experience icon" class="icon" />
					<div>
						<h3 class="font-semibold" >Experience</h3>
						<p>Full-stack Developer (1+ years) </p>
					</div>
				</div>
				<div class="details-container">
					<img src={eduImg} alt="Education icon" class="icon" />
					<div>
						<h3 class="font-semibold" >Education</h3>
						<p>B.Sc. Bachelor Degree</p>
					</div>
				</div>
			</div>
			<div class="text-container">
				<p id="about-me" class="text-justify leading-normal" style="text-indent: 5rem;">
					I’m a software engineer, having graduated from Info Myanmar University in November 2024. 
					I have experience in AI projects and full-stack development, working with frameworks like SvelteKit, Litestar, and Chalice. 
					I’ve also worked with AWS services (boto3, S3, SNS, SQS) and Typesense. 
					I’ve built e-commerce websites and developed AI-driven applications, such as a medical app that converts user audio into SOAP reports and 
					a blog post app using crawlers and LLM. I’m interested in applying AI in e-commerce and hotel booking projects. 
					I enjoy working remotely, meeting deadlines, and keeping communication clear. 
					Currently, I’m working as a Mid-level Full-Stack Developer at <a href="https://hexcode.tech/" class="text-indigo-600">Hexcode Technologies</a>
				</p>
			</div>
		</div>
	</div>
	<a href="#experience">
		<img src={arrowImg} alt="Arrow icon" class="icon arrow" />
	</a>
</section>
 