<script>
 export let aboutImg;
 export let expImg;
 export let arrowImg;
 export let eduImg;

</script>
<style>
#about-me{
	text-align: justify;
	line-height: 1.5rem;
	text-indent: 5rem;
}
</style>

<section id="about">
	<p class="section__text__p1">Get To Know More</p>
	<h1 class="title">About Me</h1>
	<div class="section-container">
		<div class="section__pic-container">
			<img src={aboutImg} alt="test" class="about-pic" />
		</div>
		<div class="about-details-container">
			<div class="about-containers">
				<div class="details-container">
					<img src={expImg} alt="Experience icon" class="icon" />
					<h3>Experience</h3>
					<p>1+ years <br />Full-stack Development</p>
				</div>
				<div class="details-container">
					<img src={eduImg} alt="Education icon" class="icon" />
					<h3>Education</h3>
					<p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
				</div>
			</div>
			<div class="text-container">
				<p id="about-me">
					I am Hein Min Min Maw and currently I am pursuing my BSc in Software Engineering from Edinburgh Napier University. I have experience coding with a variety of programming languages, including JavaScript, Svelte, Java, and Python. My proficiency with frameworks includes Sveltekit, Litestar, and Chalice, with hands-on experience in OOP design patterns,  Typesense and utilization of AWS services such as boto3, s3, sns, and sqs via both management console and CLI.
					I have also experience in data analysis and building e-commerce website. Notable projects include automating data analysis for sales and profit margin calculation
			   During my work at Hexcode Technologies, I've improved my skills in full-stack development, specializing in building responsive websites, and AI-powered applications. For example,  an Medical app, which converts user audio into insightful medical reports using the power of AI and a blog post app that use crawler and chat gpt to create blog posts.
			   I am particularly interested in leveraging AI technology and working on E-commerce and hotel booking applications. With experience in remote work environments, I excel in meeting deadlines and maintaining open communication channels to ensure project success. As a junior full-stack developer, I am committed to delivering robust solutions that exceed expectations, whether in-office or remotely.
				</p>
			</div>
		</div>
	</div>
	<img src={arrowImg} alt="Arrow icon" class="icon arrow" />
</section>