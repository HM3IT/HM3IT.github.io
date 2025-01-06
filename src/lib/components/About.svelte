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
					Working in the field of IT and have hand on experience with AI proejcts. My proficiency
					with frameworks includes Sveltekit, Litestar, and Chalice, with hands-on experience in OOP
					design patterns, Typesense and utilization of AWS services such as boto3, s3, sns, and sqs
					via both management console and CLI. I have also experience in data analysis and building
					e-commerce website. I've improved my skills in full-stack development and AI-powered
					applications. For example, an Medical app, which converts user audio into insightful
					medical reports using the power of AI and a blog post app that use crawler and chat gpt to
					create blog posts. I am particularly interested in leveraging AI technology and working on
					E-commerce and hotel booking applications. With experience in remote work environments, I
					excel in meeting deadlines and maintaining open communication channels to ensure project
					success. As a full-stack developer, I am committed to delivering robust solutions
					that exceed expectations, whether in-office or remotely. Currently, I am working at 
					<a href="https://hexcode.tech/" class="text-indigo-600">Hexcode Technologies</a> 
					as a Mid-level full-stack developer.
				</p>
			</div>
		</div>
	</div>
	<a href="#experience">
		<img src={arrowImg} alt="Arrow icon" class="icon arrow" />
	</a>
</section>
 