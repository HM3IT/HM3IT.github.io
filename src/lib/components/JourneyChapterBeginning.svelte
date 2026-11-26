<script lang="ts">
	import { fade } from 'svelte/transition';

	const base = '/images/journey/2019';
</script>

<div class="chapter chapter--beginning" in:fade={{ duration: 320 }}>
	<header class="chapter-intro">
		<p class="chapter-kicker">CHAPTER 02 · 2019</p>
		<h3>University started.<br />So did something else.</h3>
		<p>
			TUM, a new IT class, football, and a laptop running Java. At first, programming was just another subject.
		</p>
	</header>

	<section class="beginning-campus">
		<div class="beginning-campus__copy">
			<p class="story-label">THE BEGINNING</p>
			<h4>A new routine. New people.</h4>
			<p>
				I started at TUM in late 2019. University life was still new, and so was the group of people I would spend that first year with.
			</p>
		</div>

		<div class="beginning-campus__photos">
			<figure class="story-photo beginning-landscape">
				<img src={`${base}/tum-first-year.jpg`} alt="A first-year TUM photo from 2019" loading="lazy" />
				<figcaption>First year at TUM.</figcaption>
			</figure>

			<figure class="story-photo beginning-movie beginning-landscape--offset">
				<img src={`${base}/tum-first-year-movie.jpg`} alt="The first-year IT class going to the cinema together" loading="lazy" />
				<figcaption>Our first-year IT class went to see a movie together.</figcaption>
			</figure>
		</div>
	</section>

	<section class="beginning-football">
		<div class="beginning-section-heading">
			<p class="story-label">FOOTBALL WAS ALREADY THERE</p>
			<h4>University changed.<br />Football didn’t.</h4>
		</div>

		<div class="football-pair">
			<figure class="story-photo beginning-landscape">
				<img src={`${base}/tum-football-01.jpg`} alt="Playing football at TUM" loading="lazy" />
				<figcaption>TUM football.</figcaption>
			</figure>

			<figure class="story-photo beginning-landscape">
				<img src={`${base}/tum-football-02.jpg`} alt="Another football memory from TUM" loading="lazy" />
				<figcaption>Another part of first-year life.</figcaption>
			</figure>
		</div>

		<div class="football-flashback">
			<div class="football-flashback__copy">
				<p class="story-label">BEFORE TUM</p>
				<p>
					Football was not something university introduced to me. It had already been part of my life for years.
				</p>
			</div>
			<figure class="story-photo beginning-landscape">
				<img src={`${base}/u14-football.jpg`} alt="An earlier U-14 football team memory" loading="lazy" />
				<figcaption>U-14. A much earlier version of the same obsession.</figcaption>
			</figure>
		</div>
	</section>

	<section class="beginning-java">
		<div class="beginning-java__copy">
			<p class="story-label">THEN THERE WAS JAVA</p>
			<h4>Hello, World.</h4>
			<div class="story-copy">
				<p>Nothing dramatic.</p>
				<p>Just a laptop, Java, and one of the most basic programs you can write.</p>
				<p>At that point, programming was still something I was learning because it was part of IT.</p>
			</div>
		</div>

		<figure class="story-photo java-artifact">
			<img src={`${base}/java-helloworld.jpg`} alt="A laptop showing an early Java Hello World program" loading="lazy" />
			<figcaption>One of my earliest Java memories: Hello World.</figcaption>
		</figure>
	</section>

	<section class="programming-turn">
		<div class="programming-turn__visual">
			<figure class="story-photo programming-begin-photo">
				<img src={`${base}/programming-begin.jpg`} alt="A portrait photo representing the point where programming became more important to me" loading="lazy" />
			</figure>
		</div>

		<div class="programming-turn__copy">
			<p class="story-label">THE SHIFT</p>
			<p class="programming-turn__quote">This was the point where programming started becoming more than a subject.</p>
			<p>
				I did not know where it would lead yet. I just knew I wanted to keep going.
			</p>
		</div>
	</section>

	<footer class="chapter-outro">
		<p>Then 2020 arrived, and the version of university I had just started getting used to suddenly stopped.</p>
		<span>END OF CHAPTER</span>
	</footer>
</div>
