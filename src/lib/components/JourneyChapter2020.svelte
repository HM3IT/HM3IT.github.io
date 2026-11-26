<script lang="ts">
	import { fade } from 'svelte/transition';

	const base = '/images/journey/2020';
</script>

<div class="chapter chapter--stopped" in:fade={{ duration: 320 }}>
	<header class="chapter-intro">
		<p class="chapter-kicker">CHAPTER 03 · 2020</p>
		<h3>Everything stopped.<br />Programming didn’t.</h3>
		<p>
			University was just starting to feel normal. Then COVID arrived, the campus closed, and the year changed direction completely.
		</p>
	</header>

	<section class="stopped-before">
		<div class="stopped-heading">
			<p class="story-label">BEFORE EVERYTHING CHANGED</p>
			<h4>University still felt normal.</h4>
			<p>
				Trips, hiking, going out with friends — I was still discovering what university life could be.
			</p>
		</div>

		<div class="hiking-pair" aria-label="TUM hiking memories from 2020">
			<figure class="story-photo">
				<img src={`${base}/tum-hiking-01-2020.jpg`} alt="A hiking memory with TUM friends in 2020" loading="lazy" />
			</figure>
			<figure class="story-photo">
				<img src={`${base}/tum-hiking-02-2020.jpg`} alt="Another hiking memory with TUM friends in 2020" loading="lazy" />
			</figure>
		</div>
	</section>

	<section class="exam-night">
		<div class="exam-night__copy">
			<p class="story-label">THE MATH EXAM</p>
			<h4>I did the responsible thing.</h4>
			<div class="story-copy story-copy--large">
				<p>I had a Math exam the next day.</p>
				<p>
					So I put my phone away, ignored everything, and studied all night so I would not get distracted.
				</p>
				<p class="pull-quote">Completely locked in. :&gt;</p>
			</div>
		</div>

		<figure class="story-photo exam-night__photo">
			<img src={`${base}/exam-night.jpg`} alt="Books representing a late-night Math exam study session" loading="lazy" />
			<figcaption>The night before the exam.</figcaption>
		</figure>

		<div class="exam-reveal">
			<div class="story-copy story-copy--large">
				<p>Morning came.</p>
				<p>I finally checked my phone.</p>
				<p class="exam-reveal__line">University had already been closed because of COVID.</p>
				<p>The announcement had been made the night before.</p>
				<p>
					So while everyone else was finding out university was closing…
				</p>
				<p class="pull-quote">I was still fighting for my life with Math. :&gt;</p>
			</div>

			<figure class="story-photo meme-card">
				<img src={`${base}/jackie-chan-meme.jpg`} alt="Jackie Chan confused meme used as the reaction to finding out university was closed" loading="lazy" />
			</figure>
		</div>
	</section>

	<section class="stopped-home">
		<div class="stopped-home__copy">
			<p class="story-label">HOME</p>
			<h4>A difficult year.<br />And strangely, a closer one.</h4>
			<p>
				COVID was difficult for everyone. For us, it also meant spending much more time together as a family.
			</p>
			<p>
				We argued, had different opinions, and slowly learned more about each other than we usually did when everyone was busy or apart.
			</p>
		</div>

		<figure class="story-video stopped-portrait-video">
			<video autoplay muted loop playsinline preload="metadata" aria-label="A family playing a physical Monopoly board game together during the COVID period">
				<source src={`${base}/monopoly.mp4`} type="video/mp4" />
			</video>
			<figcaption>A small memory from that period: playing Monopoly together at home.</figcaption>
		</figure>
	</section>

	<section class="stopped-programming">
		<div class="stopped-programming__heading">
			<p class="story-label">BUT ONE THING KEPT MOVING</p>
			<h4>Morning to night,<br />I learned programming.</h4>
		</div>

		<div class="programming-2020-grid">
			<figure class="story-photo programming-2020-selfie">
				<img src={`${base}/programming-2020-01.jpg`} alt="A 2020 selfie while coding on a laptop" loading="lazy" />
				<figcaption>A lot of 2020 looked something like this.</figcaption>
			</figure>

			<figure class="story-photo programming-meme">
				<img src={`${base}/programming-meme.jpg`} alt="Programming meme: it doesn't work, why; it works, why" loading="lazy" />
				<figcaption>Programming, summarized pretty accurately.</figcaption>
			</figure>
		</div>
	</section>

	<section class="nasa-beat">
		<div class="nasa-beat__copy">
			<p class="story-label">CONFIDENCE LEVEL: QUESTIONABLE</p>
			<p class="nasa-quote">At some point, I apparently thought I could hack NASA with Java. :L</p>
			<p>
				I even recorded it. So unfortunately, there is evidence.
			</p>
		</div>

		<figure class="story-video stopped-portrait-video nasa-video">
			<video autoplay muted loop playsinline preload="metadata" aria-label="An old recording of an early Java experiment jokingly described as trying to hack NASA">
				<source src={`${base}/nasa-babe.mp4`} type="video/mp4" />
			</video>
			<figcaption>Early Java experimentation. NASA survived.</figcaption>
		</figure>
	</section>

	<section class="stopped-closing">
		<p class="story-label">LOOKING BACK</p>
		<p class="stopped-closing__line">University stopped.<br />Programming didn’t.</p>
		<p>
			2020 interrupted the path I thought I was on. But it also gave me the time to keep learning until programming became a much bigger part of my life.
		</p>
	</section>

	<footer class="chapter-outro">
		<p>Eventually I stopped waiting for TUM to reopen and made another decision.</p>
		<span>END OF CHAPTER</span>
	</footer>
</div>
