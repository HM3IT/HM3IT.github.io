<script lang="ts">
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
						<h3 class="font-semibold">Experience</h3>
						<p>Full-stack Developer (2+ years)</p>
					</div>
				</div>
				<div class="details-container">
					<img src={eduImg} alt="Education icon" class="icon" />
					<div>
						<h3 class="font-semibold">Education</h3>
						<p>B.Sc. software Engineering</p>
					</div>
				</div>
			</div>
			<div id="about-me" class="text-container">
				<p  class="text-justify leading-normal" style="text-indent: 5rem;">
					I'm a software engineer with a degree from Info Myanmar University (Nov 2024) and hands-on
					experience in
					<strong>AI-driven applications</strong> and <strong>full-stack development</strong>. My
					technical toolkit includes frameworks like SvelteKit, Litestar, Chalice, cloud services
					such as AWS (boto3, S3, SNS, SQS), and search technologies like Typesense.
				</p>

				<p class="text-justify leading-normal" style="text-indent: 5rem;">
					I specialize in building <strong>AI-powered solutions</strong>. Notably, I was part of the
					<a
						href="https://www.zurich.com/campaigns/zic/agenticai-hyperchallenge"
						class="text-indigo-600">winning project at the Zurich Insurance HyperChallenge</a
					>
					with <em>AgentricAI</em> — a next-gen platform that deploys AI Digital Colleagues to automate
					insurance claim handling, streamline operations, and support faster, data-driven decision-making.
				</p>

				<p class="text-justify leading-normal">Beyond this, I've built:</p>
				<ul class="list-disc list-inside ml-8">
					<li>
						A medical app that converts patient and doctor conversation audio into structured SOAP
						reports.
					</li>
					<li>
						A Realtime Goverment blog app powered by crawlers and LLMs for intelligent content
						generation.
					</li>
					<li>E-commerce platforms with integrated AI features for customer experience.</li>
				</ul>

				<p class="text-justify leading-normal" style="text-indent: 5rem;">
					I'm particularly interested in applying AI to e-commerce and hotel booking systems,
					leveraging automation and user-centric design to <strong>improve efficiency, accelerate
					decision-making, and reduce processing time</strong> while enhancing customer satisfaction.
				</p>

				<p class="text-justify leading-normal" style="text-indent: 5rem;">
					Currently, I'm a <strong>Senior Full-Stack Developer</strong> at
					<a href="https://hexcode.tech/" class="text-indigo-600">Hexcode Technologies</a>, where I
					enjoy working remotely, meeting deadlines, and maintaining clear communication across
					teams.
				</p>
			</div>
		</div>
	</div>
	<a href="#experience">
		<img src={arrowImg} alt="Arrow icon" class="icon arrow" />
	</a>
</section>
