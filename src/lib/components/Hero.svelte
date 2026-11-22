<script lang="ts">
	import { onMount } from 'svelte';

	let scrollY = 0;

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	$: heroOpacity = Math.max(0.28, 1 - scrollY / 850);
	$: threadTransform = `translate3d(0, ${Math.min(scrollY * 0.08, 80)}px, 0) scale(${1 + Math.min(scrollY, 800) * 0.00008})`;
</script>

<section class="hero" aria-labelledby="hero-title">
	<nav class="site-nav" aria-label="Primary navigation">
		<a class="brand" href="#top" aria-label="Hein Min Min Maw — home">HM3IT</a>
		<div class="nav-links">
			<a href="#journey">Journey</a>
			<a href="https://github.com/HM3IT" target="_blank" rel="noreferrer">GitHub</a>
		</div>
	</nav>

	<div class="hero-thread" aria-hidden="true" style={`transform: ${threadTransform}`}>
		<svg viewBox="0 0 1000 820" preserveAspectRatio="none">
			<defs>
				<filter id="heroGlow" x="-80%" y="-80%" width="260%" height="260%">
					<feGaussianBlur stdDeviation="5" result="blur" />
					<feMerge>
						<feMergeNode in="blur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			<path
				d="M 1030 90 C 830 55, 760 210, 815 325 C 880 460, 690 470, 555 450 C 390 425, 360 545, 255 600 C 150 655, 45 610, -40 760"
				class="thread-shadow"
			/>
			<path
				d="M 1030 90 C 830 55, 760 210, 815 325 C 880 460, 690 470, 555 450 C 390 425, 360 545, 255 600 C 150 655, 45 610, -40 760"
				class="thread-line"
				filter="url(#heroGlow)"
			/>
			<circle cx="555" cy="450" r="7" class="thread-dot" filter="url(#heroGlow)" />
		</svg>
	</div>

	<div class="hero-copy" id="top" style={`opacity: ${heroOpacity}`}>
		<p class="eyebrow">HEIN MIN MIN MAW</p>
		<h1 id="hero-title">Software engineer.<br />AI engineer.<br />Technical lead.</h1>
		<p class="hero-statement">
			This is a record of the things I’ve built, learned, failed at, enjoyed, and somehow ended up doing along the way.
		</p>
		<a class="scroll-cue" href="#journey">
			<span>follow the journey</span>
			<span aria-hidden="true">↓</span>
		</a>
	</div>

	<div class="hero-now" aria-hidden="true">
		<span class="now-dot"></span>
		<span>today</span>
	</div>
</section>
