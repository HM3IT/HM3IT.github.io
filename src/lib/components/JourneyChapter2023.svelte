<script lang="ts">
	import { fade } from 'svelte/transition';

	const base = '/images/journey/2023';
</script>

<div class="chapter chapter--first-work" transition:fade={{ duration: 320 }}>
	<header class="chapter-intro">
		<p class="chapter-kicker">CHAPTER 05 · 2023</p>
		<h3>I wanted Marketing.<br />I got Operations.</h3>
		<p>
			This was the year I first stepped into working life. I wanted experience. I was not completely sure what that meant yet. :&gt;
		</p>
	</header>

	<section class="first-work-career">
		<div class="first-work-heading">
			<p class="story-label">JUNE · CAREERCONYAT</p>
			<h4>My first internship wasn't the one I applied for.</h4>
			<div class="first-work-prose">
				<p>
					While studying for my Diploma, I applied to Careerconyat. I was interested in Marketing and wanted to understand how that team worked.
				</p>
				<p>
					The problem? Marketing was popular. After the interviews, they selected only three candidates. I wasn't one of them.
				</p>
				<p class="first-work-emphasis">So I ended up in Operations instead. :&gt;</p>
				<p>
					At first, I honestly wondered what I was going to learn there.
				</p>
			</div>
		</div>

		<div class="first-work-career-photos">
			<figure class="story-photo first-work-photo-wide">
				<img src={`${base}/careerconyat-operatoin-team.jpg`} alt="Working with the Careerconyat operations team around a table with laptops" loading="lazy" />
				<figcaption>My Operations team. The people I worked with and learned from.</figcaption>
			</figure>
			<figure class="story-photo">
				<img src={`${base}/careerconyat-internship.jpg`} alt="A group memory with people from the Careerconyat internship" loading="lazy" />
				<figcaption>More than just an internship.</figcaption>
			</figure>
		</div>
	</section>

	<section class="first-work-organization">
		<div class="first-work-heading">
			<p class="story-label">WHAT OPERATIONS ACTUALLY TAUGHT ME</p>
			<h4>Oh. So that's how a company works.</h4>
			<div class="first-work-prose">
				<p>
					Before Careerconyat, I barely understood the difference between Marketing and Operations. After joining, it became much clearer.
				</p>
				<p>
					Marketing gave us the strategy and wording. In Operations, we helped carry it out: publishing job posts, following the plan, and looking at how the posts performed.
				</p>
				<p>
					And I could see how that work connected with Business, Customer Service, and HR. There were different teams doing different things, but all contributing to the same organization.
				</p>
			</div>
		</div>

		<div class="organization-flow" aria-label="How the teams worked together">
			<div class="organization-flow__main">
				<span>MARKETING</span>
				<strong>Strategy + wording</strong>
			</div>
			<div class="organization-flow__arrow" aria-hidden="true">↓</div>
			<div class="organization-flow__main">
				<span>OPERATIONS · MY TEAM</span>
				<strong>Post + execute + observe</strong>
			</div>
			<p>Working alongside Business, Customer Service, and HR.</p>
		</div>

		<div class="first-work-friends">
			<figure class="story-photo">
				<img src={`${base}/careerconyat-team.jpg`} alt="Careerconyat colleagues and friends sitting together at a table" loading="lazy" />
				<figcaption>Some of the people who made this experience memorable.</figcaption>
			</figure>
			<div class="first-work-prose">
				<p class="story-label">THE PEOPLE</p>
				<p>
					I worked with three teammates and met many other people there. Everyone was supportive. It almost felt like a group of people volunteering because they genuinely wanted to build something together.
				</p>
				<p>
					Some of them were young but already so good at presentations and communicating ideas. I remember being impressed.
				</p>
				<p>
					I was glad to know them and become friends. We didn't really stay in touch after I moved to Bangkok, but I still remember that part of the internship.
				</p>
			</div>
		</div>
	</section>

	<section class="first-work-iot">
		<div class="first-work-heading">
			<p class="story-label">SEPTEMBER · DIPLOMA PROJECT SHOWCASE</p>
			<h4>Something I built. An award I didn't expect to forget.</h4>
			<div class="first-work-prose">
				<p>
					University was still running alongside all this. For my Diploma project showcase, I built an <em>Automatic Room Temperature Regulator</em>.
				</p>
				<p>
					The idea was simple: use room temperature to control when an air conditioner turns on and off, helping save electricity.
				</p>
				<p>
					And the project received an <strong>Excellence Award</strong>.
				</p>
			</div>
		</div>

		<div class="iot-feature">
			<figure class="story-photo">
				<img src={`${base}/iot-showcase-02.jpg`} alt="At the IMU project showcase beside the Automatic Room Temperature Regulator display" loading="lazy" />
				<figcaption>With my project at the showcase.</figcaption>
			</figure>
			<figure class="story-photo">
				<img src={`${base}/iot-project-showcase-01.jpg`} alt="Visitors and students examining the project at the university showcase" loading="lazy" />
				<figcaption>Showing the project to other students.</figcaption>
			</figure>
		</div>

		<div class="iot-closeups">
			<figure class="story-photo">
				<img src={`${base}/iot-project-device-closeup-01.jpg`} alt="Close-up of electronics and sensor components from the temperature regulator project" loading="lazy" />
				<figcaption>The sensor and wiring.</figcaption>
			</figure>
			<figure class="story-photo">
				<img src={`${base}/iot-project-device-closeup-02.jpg`} alt="Arduino Uno and breadboard wiring used in the temperature regulator project" loading="lazy" />
				<figcaption>The Arduino side of the build.</figcaption>
			</figure>
		</div>

		<div class="iot-award">
			<div class="iot-award__copy">
				<p class="story-label">EXCELLENCE AWARD · 2023</p>
				<p class="iot-award__statement">A small project. A real moment of pride.</p>
				<p>
					I like having the actual photos and award from this day. They remind me that this wasn't just another assignment I submitted and forgot about.
				</p>
			</div>
			<div class="iot-award__photos">
				<figure class="story-photo">
					<img src={`${base}/award-ceremony.jpg`} alt="Receiving recognition on stage at the university project event" loading="lazy" />
					<figcaption>At the award ceremony.</figcaption>
				</figure>
				<figure class="story-photo first-work-award-artifact">
					<img src={`${base}/execellent-award.jpg`} alt="The university Excellence Award envelope" loading="lazy" />
					<figcaption>The Excellence Award, kept in the archive.</figcaption>
				</figure>
			</div>
		</div>
	</section>

	<section class="first-work-hexcode">
		<div class="first-work-heading">
			<p class="story-label">LATER IN 2023 · HEXCODE</p>
			<h4>From internship to real developer work.</h4>
			<div class="first-work-prose">
				<p>
					I left Careerconyat and joined Hexcode, this time as a full-stack developer intern.
				</p>
				<p>
					One of the first big challenges was a hackathon project called <strong>EZMednote</strong>. We were a team of four, including our boss, who was a programmer himself.
				</p>
				<p>
					The idea was to take consultation audio and help turn it into structured medical notes — a SOAP report. Our boss handled the AI work, including generating the report. I worked on the full-stack application.
				</p>
			</div>
		</div>

		<figure class="story-photo ezmednote-shot">
			<img src={`${base}/hexcode-first-work.png`} alt="EZMednote application showing a consultation transcript beside a generated SOAP note report" loading="lazy" />
			<figcaption>EZMednote. The application we built for the hackathon.</figcaption>
		</figure>

		<div class="hackathon-survival">
			<p class="story-label">DEVELOPMENT ENVIRONMENT: YANGON</p>
			<h4>We had a fan.<br />The computer got it.</h4>
			<div class="first-work-prose">
				<p>
					There is one part of that hackathon I still find funny.
				</p>
				<p>
					I was working from Yangon. It was hot, and electricity cuts were a regular problem because of the situation in Myanmar.
				</p>
				<p>
					We were running an AI model, and the computer was getting hot too. So I used a power generator to run a fan.
				</p>
				<p>But who got the fan?</p>
			</div>

			<div class="hackathon-survival__punchline">
				<span>THE COMPUTER</span>
				<strong>Not the human. :&gt;</strong>
			</div>
			<p class="hackathon-survival__aside">
				The model needed cooling. Apparently, I could survive the heat. What a good life. :&gt;
			</p>
		</div>

		<div class="hackathon-outcome">
			<p class="story-label">THE RESULT</p>
			<p>We didn't win the hackathon.</p>
			<p>
				But it was my first taste of what developing software in a small team actually felt like: sharing responsibilities, solving problems, and getting the application to work under less-than-perfect conditions.
			</p>
		</div>
	</section>

	<section class="first-work-salary">
		<div class="first-work-salary__copy">
			<p class="story-label">MY FIRST SALARY</p>
			<h4>Not quite the celebration I imagined.</h4>
			<div class="first-work-prose">
				<p>
					When I became a junior developer, I was excited to tell my mom about my salary.
				</p>
				<p>
					She felt the amount was small. We ended up arguing, which was not exactly how I imagined sharing that news.
				</p>
				<p>
					For me, the job was about experience first, not how much I could earn immediately. Looking back, I understand her side better too. She had years of experience running businesses and saw money very differently from me.
				</p>
				<p>
					Still, I bought myself something with that first salary.
				</p>
				<p class="first-work-emphasis">A mechanical keyboard. :&gt;</p>
				<p>
					I love collecting them. And now, somehow, I have four.
				</p>
			</div>
		</div>
		<figure class="story-photo first-salary-keyboard">
			<img src={`${base}/first-salary-keyboard.jpg`} alt="The mechanical keyboard bought with my first developer salary" loading="lazy" />
			<figcaption>My first-salary purchase. A very predictable decision, actually.</figcaption>
		</figure>
	</section>

	<section class="first-work-bsc">
		<div class="first-work-bsc__copy">
			<p class="story-label">STILL A STUDENT</p>
			<h4>For a while, I thought about stopping university.</h4>
			<div class="first-work-prose">
				<p>
					I was studying and starting my career at the same time. I wondered if the Diploma would be enough and whether continuing the BSc was worth the cost.
				</p>
				<p>
					My parents encouraged me to continue. My father called and told me not to worry about the money. My mom wanted me to finish too.
				</p>
				<p>
					So I decided to keep going.
				</p>
			</div>
		</div>
		<figure class="story-photo first-work-university">
			<img src={`${base}/university-2023.jpg`} alt="University classmates and teachers gathered for a photo in 2023" loading="lazy" />
			<figcaption>Still part of university life, even while work was beginning.</figcaption>
		</figure>
	</section>

	<footer class="chapter-outro">
		<p>I had started earning money from writing code. I still had plenty to learn.</p>
		<span>continue the journey ↓</span>
	</footer>
</div>
