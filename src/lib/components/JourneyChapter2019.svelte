<script lang="ts">
	import { fade } from 'svelte/transition';

	const base = '/images/journey/2019';
</script>

<div class="chapter" transition:fade={{ duration: 320 }}>
	<header class="chapter-intro">
		<p class="chapter-kicker">CHAPTER 01 · 2019</p>
		<h3>Four distinctions.<br />English was the scary part.</h3>
		<p>
			I was pretty confident I could get four distinctions. English? Yeah… not so much. :&gt;
		</p>
	</header>

	<section class="story-beat story-beat--text">
		<p class="story-label">THE NIGHT BEFORE</p>
		<div class="story-copy story-copy--large">
			<p>Some of my friends were doing something very useful before our final exam:</p>
			<p class="pull-quote">debating why exams exist. :&gt;</p>
			<p>
				Somehow that became a prediction session for the English essay. One friend thought it would be about weather, seasons, the earth… something like that.
			</p>
			<p>His evidence?</p>
			<p class="pull-quote">It was raining that night.</p>
			<p>
				For some reason, I listened. I practised around those topics. The next day, the question was <em>“The Heart of the Earth.”</em>
			</p>
			<p>I wrote about trees.</p>
			<p class="story-reflection">
				Looking back, if I had not practised that night, English might have become the subject that changed the whole result. So… thanks, rain. :&gt;
			</p>
		</div>
	</section>

	<section class="story-beat story-beat--split">
		<div>
			<p class="story-label">BEHIND THE RESULT</p>
			<h4>Three years away from home.</h4>
			<p>
				My twin sister and I stayed at the VEC hostel in Mandalay through the last years of school. My mom was in Taunggyi.
			</p>
			<p>
				She would travel all that distance for family meetings — sometimes for around an hour with us. Grades are easy to put on paper. That part is harder to show.
			</p>
		</div>

		<div class="memory-grid" aria-label="Photos from the VEC years">
			<figure class="story-photo story-photo--wide">
				<img src={`${base}/vec-friends-vacation-02.jpg`} alt="A lively group photo from a VEC school vacation" loading="lazy" />
				<figcaption>Not inside the hostel — phones were not really part of that life. This is one of the memories I still have with VEC friends.</figcaption>
			</figure>

			<figure class="story-photo">
				<img src={`${base}/vec-friends-vacation-01.jpg`} alt="A casual VEC friends vacation photo" loading="lazy" />
				<figcaption>School vacation, away from the strict hostel routine.</figcaption>
			</figure>

			<figure class="story-photo">
				<img src={`${base}/twin-sister-2019.jpg`} alt="A family photo from 2019" loading="lazy" />
				<figcaption>2019, around the end of our high-school years.</figcaption>
			</figure>
		</div>
	</section>

	<section class="artifact-beat">
		<div class="artifact-heading">
			<p class="story-label">ON PAPER</p>
			<h4>The result looked much simpler than the year felt.</h4>
			<p>
				Four distinctions, and a ranking I did not expect to become part of the story.
			</p>
		</div>

		<div class="artifact-grid">
			<figure class="artifact-card">
				<img src={`${base}/mandalay-ranking-top-7.jpg`} alt="Mandalay regional ranking announcement from 2019" loading="lazy" />
				<figcaption>
					<span>ARCHIVE · 2019</span>
					<strong>#7 in Mandalay</strong>
				</figcaption>
			</figure>

			<figure class="artifact-card artifact-card--tilted">
				<img src={`${base}/graduation-certificate.jpg`} alt="Graduation certificate from 2019" loading="lazy" />
				<figcaption>
					<span>ARCHIVE · 2019</span>
					<strong>Graduation certificate</strong>
				</figcaption>
			</figure>
		</div>
	</section>

	<section class="trip-beat">
		<div class="trip-heading">
			<p class="story-label">THEN SOMETHING UNEXPECTED</p>
			<h4>I thought I had missed the school trip.</h4>
			<p>
				Then I found out my result still qualified me through the regional ranking. My twin sister made it too. Suddenly I was leaving Myanmar for the first time.
			</p>
		</div>

		<div class="route" aria-label="Trip route: Mandalay, Singapore, Bali, Cambodia">
			<span>Mandalay</span><i></i><span>Singapore</span><i></i><span>Bali</span><i></i><span>Cambodia</span>
		</div>

		<div class="photo-editorial">
			<figure class="story-photo photo-slot--hero">
				<img src={`${base}/vec-singapore-trip-group.jpg`} alt="VEC trip group photo in Singapore" loading="lazy" />
				<figcaption>Singapore. First trip outside Myanmar.</figcaption>
			</figure>

			<figure class="story-photo photo-slot--small photo-slot--offset">
				<img src={`${base}/zani-hostel-group.jpg`} alt="Zani Hostel group photo during the trip" loading="lazy" />
				<figcaption>Zani Hostel group.</figcaption>
			</figure>

			<figure class="story-photo photo-slot--wide">
				<img src={`${base}/flight-last-day.jpg`} alt="Group photo from the last day of the trip" loading="lazy" />
				<figcaption>Last day. The trip was ending.</figcaption>
			</figure>
		</div>
	</section>

	<section class="story-beat story-beat--closing">
		<p class="story-label">UNIVERSAL STUDIOS</p>
		<h4>I hate heights.</h4>

		<div class="universal-gallery">
			<figure class="story-photo">
				<img src={`${base}/universal-studios-solo-01.jpg`} alt="A 2019 Universal Studios travel photo" loading="lazy" />
			</figure>
			<figure class="story-photo story-photo--lower">
				<img src={`${base}/universal-studios-solo-02.jpg`} alt="Another 2019 Universal Studios travel photo" loading="lazy" />
			</figure>
		</div>

		<div class="story-copy">
			<p>Mountain edges? No.</p>
			<p>Roller coasters? Also no.</p>
			<p>But I tried one with my friends anyway.</p>
			<p>
				There was another ride after that — higher, violet if I remember correctly. My friends went. I didn’t. I ended up walking around by myself for most of the day.
			</p>
			<p class="story-reflection">At the time, I was fine with it.</p>
			<p class="pull-quote">Looking back? I wish I had gone with them.</p>
		</div>
	</section>

	<footer class="chapter-outro">
		<p>I didn’t know it then, but a few months later university would start changing everything again.</p>
		<span>continue the journey ↓</span>
	</footer>
</div>
