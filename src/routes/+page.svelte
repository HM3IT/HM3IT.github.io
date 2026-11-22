<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import JourneyTimeline from '$lib/components/JourneyTimeline.svelte';
	import { journey } from '$lib/data/journey';
</script>

<svelte:head>
	<title>Hein Min Min Maw — Journey</title>
	<meta
		name="description"
		content="A personal record of the things Hein Min Min Maw has built, learned, failed at, enjoyed, and figured out along the way."
	/>
	<meta name="theme-color" content="#070707" />
</svelte:head>

<Hero />
<JourneyTimeline nodes={journey} />
