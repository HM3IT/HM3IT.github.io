<script lang="ts">
	import { fade } from 'svelte/transition';

	const base = '/images/journey/2021';
</script>

<div class="chapter chapter--starting-again" in:fade={{ duration: 320 }}>
	<header class="chapter-intro">
		<p class="chapter-kicker">CHAPTER 04 · 2021–22</p>
		<h3>I stopped waiting.</h3>
		<p>
			TUM was still closed. So in February 2021, I changed university, moved to Yangon, and started rebuilding my life around a completely different routine.
		</p>
	</header>

	<section class="starting-decision">
		<div class="starting-decision__copy">
			<p class="story-label">THE DECISION</p>
			<h4>Starting again meant leaving one path behind.</h4>
			<p>
				I enrolled at IMU instead of waiting for TUM to reopen. Looking back, it is still one of the decisions I feel most certain about.
			</p>
		</div>

		<figure class="story-photo imu-enrollment">
			<img src={`${base}/imu-enrollment.jpg`} alt="Enrollment photo from IMU in 2021" loading="lazy" />
			<figcaption>IMU. A different university, and a new start.</figcaption>
		</figure>
	</section>

	<section class="yangon-move">
		<div class="yangon-move__heading">
			<p class="story-label">YANGON</p>
			<h4>The room was not even finished yet.</h4>
			<p>
				The apartment was very close to the university, which was enough for us to choose it anyway.
			</p>
			<p>
				The problem was that the room was still being worked on when I moved in.
			</p>
			<p class="pull-quote">So we ended up sleeping outside the room. 🤣</p>
		</div>

		<div class="apartment-pair">
			<figure class="story-video apartment-media">
				<video autoplay muted loop playsinline preload="metadata" aria-label="A short video showing the location around the unfinished Yangon apartment">
					<source src={`${base}/yangon-unfinished-apartment.mp4`} type="video/mp4" />
				</video>
				<figcaption>The location — close enough to the university that we picked it anyway.</figcaption>
			</figure>

			<figure class="story-photo apartment-media">
				<img src={`${base}/yangon-unfinished-apartment.jpg`} alt="The unfinished apartment room in Yangon" loading="lazy" />
				<figcaption>The room itself was still being finished.</figcaption>
			</figure>
		</div>
	</section>

	<section class="independent-life">
		<div class="independent-life__copy">
			<p class="story-label">LIVING ON MY OWN</p>
			<h4>No gym.<br />No equipment.</h4>
			<p>
				This period was probably my physical prime. I trained at home consistently with whatever I could use around me.
			</p>
			<p>
				Pull-ups on a door. Push-ups with bricks. Nothing fancy.
			</p>
		</div>

		<figure class="story-video workout-composite">
			<video autoplay muted loop playsinline preload="metadata" aria-label="A six-panel collection of home workout clips from the Yangon period">
				<source src={`${base}/home-workout-combine.mp4`} type="video/mp4" />
			</video>
		</figure>
	</section>

	<section class="yearly-meals">
		<div class="yearly-meals__heading">
			<p class="story-label">THE NUTRITION PLAN :&gt;</p>
			<h4>I trained seriously.<br />I understood nutrition… less seriously.</h4>
			<p>
				I was trying to save money, so I kept rotating basically the same few meals for months.
			</p>
		</div>

		<div class="meal-grid" aria-label="The meals I kept repeating during the Yangon period">
			<figure class="story-photo">
				<img src={`${base}/meal-vegetable-onion-01.jpg.jpg`} alt="Vegetable and red onion meal" loading="lazy" />
			</figure>
			<figure class="story-photo">
				<img src={`${base}/meal-vegetable-onion-02.jpg.jpg`} alt="Another vegetable and red onion meal" loading="lazy" />
			</figure>
			<figure class="story-photo">
				<img src={`${base}/meal-egg-pepper-tomato-01.jpg`} alt="Egg, green pepper, and tomato meal" loading="lazy" />
			</figure>
			<figure class="story-photo">
				<img src={`${base}/meal-egg-pepper-tomato-02.jpg`} alt="Another egg, green pepper, and tomato meal" loading="lazy" />
			</figure>
			<figure class="story-photo">
				<img src={`${base}/meal-potato-onion-01.jpg`} alt="Potato and red onion meal" loading="lazy" />
			</figure>
			<figure class="story-photo">
				<img src={`${base}/meal-potato-onion-02.jpg`} alt="Another potato and red onion meal" loading="lazy" />
			</figure>
		</div>

		<p class="meal-repeat">Three meals. Again. And again. And again. 😂</p>
	</section>

	<section class="starting-again-closing">
		<p class="story-label">LOOKING BACK</p>
		<p class="starting-again-closing__line">I had started moving again.</p>
		<p>
			A new university. A new city. Living more independently. Building routines from whatever I had around me.
		</p>
		<p>
			It was not a polished restart. But it was a restart.
		</p>
	</section>

	<footer class="chapter-outro">
		<p>A couple of years later, university and work would start colliding for real.</p>
		<span>END OF CHAPTER</span>
	</footer>
</div>
