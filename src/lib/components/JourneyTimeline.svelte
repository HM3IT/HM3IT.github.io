<script lang="ts">
	import { slide } from 'svelte/transition';
	import JourneyChapter2019 from './JourneyChapter2019.svelte';
	import JourneyChapterBeginning from './JourneyChapterBeginning.svelte';
	import JourneyChapter2020 from './JourneyChapter2020.svelte';
	import JourneyChapter2021 from './JourneyChapter2021.svelte';
	import JourneyChapter2023 from './JourneyChapter2023.svelte';
	import type { JourneyNode } from '$lib/data/journey';

	export let nodes: JourneyNode[] = [];
	let expandedId: string | null = null;

	function toggle(node: JourneyNode) {
		if (!node.expandable) return;
		expandedId = expandedId === node.id ? null : node.id;
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
			>
				<div class="node-dot-wrap" aria-hidden="true">
					<span class="node-dot"></span>
				</div>

				{#if node.expandable}
					<button
						class="node-card node-card--button"
						type="button"
						on:click={() => toggle(node)}
						aria-expanded={expandedId === node.id}
						aria-controls={`chapter-${node.id}`}
					>
						<span class="node-year">{node.year}</span>
						<strong>{node.title}</strong>
						<span class="node-summary">{node.summary}</span>
						<span class="node-action">{expandedId === node.id ? 'close chapter ↑' : 'explore chapter ↘'}</span>
					</button>
				{:else}
					<article class="node-card node-card--preview" aria-label={`${node.year}: ${node.title}`}>
						<span class="node-year">{node.year}</span>
						<strong>{node.title}</strong>
						<span class="node-summary">{node.summary}</span>
						<span class="node-coming">chapter coming next</span>
					</article>
				{/if}

				{#if expandedId === node.id && node.id === 'strong-finish'}
					<div class="node-expansion" id={`chapter-${node.id}`} transition:slide={{ duration: 480 }}>
						<JourneyChapter2019 />
					</div>
				{:else if expandedId === node.id && node.id === 'the-beginning'}
					<div class="node-expansion" id={`chapter-${node.id}`} transition:slide={{ duration: 480 }}>
						<JourneyChapterBeginning />
					</div>
				{:else if expandedId === node.id && node.id === 'everything-stopped'}
					<div class="node-expansion" id={`chapter-${node.id}`} transition:slide={{ duration: 480 }}>
						<JourneyChapter2020 />
					</div>
				{:else if expandedId === node.id && node.id === 'starting-again'}
					<div class="node-expansion" id={`chapter-${node.id}`} transition:slide={{ duration: 480 }}>
						<JourneyChapter2021 />
					</div>
				{:else if expandedId === node.id && node.id === 'first-real-work'}
					<div class="node-expansion" id={`chapter-${node.id}`} transition:slide={{ duration: 480 }}>
						<JourneyChapter2023 />
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
