<script lang="ts">
	import { tick } from 'svelte';
	import JourneyChapter2019 from './JourneyChapter2019.svelte';
	import JourneyChapterBeginning from './JourneyChapterBeginning.svelte';
	import JourneyChapter2020 from './JourneyChapter2020.svelte';
	import JourneyChapter2021 from './JourneyChapter2021.svelte';
	import JourneyChapter2023 from './JourneyChapter2023.svelte';
	import type { JourneyNode } from '$lib/data/journey';

	export let nodes: JourneyNode[] = [];
	let expandedId: string | null = null;
	let navigationId = 0;

	// Chapters can be many screens tall. Remove the previous chapter before
	// scrolling, so the browser does not chase a collapsing slide transition.
	async function navigateTo(node: JourneyNode, focusNext = false) {
		const previousId = expandedId;
		const closing = previousId === node.id;

		expandedId = closing || !node.expandable ? null : node.id;
		const requestId = ++navigationId;

		// The close button is already in view; don't move the reader.
		if (closing) return;

		await tick();
		if (requestId !== navigationId) return;

		const target = document.getElementById(`journey-node-${node.id}`);
		if (!target) return;

		// The "Next" button disappears when its chapter closes; place keyboard
		// focus on the new chapter's card before moving the viewport.
		if (focusNext) {
			target.querySelector<HTMLElement>('.node-card')?.focus({ preventScroll: true });
		}

		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const changingChapters = previousId !== null && previousId !== node.id;

		target.scrollIntoView({
			// A long animated scroll over several screenfuls is disorienting.
			behavior: reducedMotion || changingChapters ? ('instant' as ScrollBehavior) : 'smooth',
			block: 'start',
			inline: 'nearest'
		});
	}
</script>

<section class="journey-section" id="journey" aria-labelledby="journey-title">
	<header class="journey-heading">
		<p class="eyebrow">THE JOURNEY</p>
		<h2 id="journey-title">Not every year<br />moves forward.</h2>
		<p>
			Some points are achievements. Some are mistakes, detours, difficult years, or things I still have not figured out.
		</p>
	</header>

	<div class="journey-rail">
		<div class="rail-line" aria-hidden="true"></div>

		{#each nodes as node, index}
			<div
				class:node-left={node.side === 'left'}
				class:node-right={node.side === 'right'}
				class:node-muted={expandedId !== null && expandedId !== node.id}
				class:node-active={expandedId === node.id}
				class="journey-node"
				id={`journey-node-${node.id}`}
			>
				<div class="node-dot-wrap" aria-hidden="true">
					<span class="node-dot"></span>
				</div>

				{#if node.expandable}
					<button
						class="node-card node-card--button"
						type="button"
						on:click={() => navigateTo(node)}
						aria-expanded={expandedId === node.id}
						aria-controls={`chapter-${node.id}`}
					>
						<span class="node-year">{node.year}</span>
						<strong>{node.title}</strong>
						<span class="node-summary">{node.summary}</span>
						<span class="node-action">{expandedId === node.id ? 'close chapter ↑' : 'explore chapter ↘'}</span>
					</button>
				{:else}
					<article class="node-card node-card--preview" tabindex="-1" aria-label={`${node.year}: ${node.title}`}>
						<span class="node-year">{node.year}</span>
						<strong>{node.title}</strong>
						<span class="node-summary">{node.summary}</span>
						<span class="node-coming">chapter coming next</span>
					</article>
				{/if}

				{#if expandedId === node.id && node.id === 'strong-finish'}
					<div class="node-expansion" id={`chapter-${node.id}`}>
						<JourneyChapter2019 />
					</div>
				{:else if expandedId === node.id && node.id === 'the-beginning'}
					<div class="node-expansion" id={`chapter-${node.id}`}>
						<JourneyChapterBeginning />
					</div>
				{:else if expandedId === node.id && node.id === 'everything-stopped'}
					<div class="node-expansion" id={`chapter-${node.id}`}>
						<JourneyChapter2020 />
					</div>
				{:else if expandedId === node.id && node.id === 'starting-again'}
					<div class="node-expansion" id={`chapter-${node.id}`}>
						<JourneyChapter2021 />
					</div>
				{:else if expandedId === node.id && node.id === 'first-real-work'}
					<div class="node-expansion" id={`chapter-${node.id}`}>
						<JourneyChapter2023 />
					</div>
				{/if}

				{#if expandedId === node.id && index < nodes.length - 1}
					<div class="chapter-next">
						<button
							type="button"
							class="chapter-next__button"
							on:click={() => navigateTo(nodes[index + 1], true)}
							aria-label={`Continue to ${nodes[index + 1].year}: ${nodes[index + 1].title}`}
						>
							<span class="chapter-next__kicker">NEXT ON THE JOURNEY</span>
							<span class="chapter-next__title">{nodes[index + 1].year} · {nodes[index + 1].title}</span>
							<span class="chapter-next__arrow" aria-hidden="true">↘</span>
						</button>
					</div>
				{/if}
			</div>

			{#if index === 4 && expandedId === null}
				<p class="prototype-note">The first five chapters are interactive. The remaining nodes still show the journey backbone.</p>
			{/if}
		{/each}
	</div>

	<footer class="journey-future">
		<span class="future-dot" aria-hidden="true"></span>
		<div class="future-line" aria-hidden="true"></div>
		<p class="future-year">TODAY</p>
		<p class="future-copy">still figuring it out.</p>
	</footer>
</section>
