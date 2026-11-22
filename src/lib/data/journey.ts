export type JourneyNode = {
	id: string;
	year: string;
	title: string;
	summary: string;
	side: 'left' | 'right';
	tone: 'achievement' | 'turning-point' | 'difficult' | 'experiment' | 'reflection';
	expandable?: boolean;
};

export const journey: JourneyNode[] = [
	{
		id: 'strong-finish',
		year: '2019',
		title: 'A Strong Finish',
		summary:
			'Four distinctions. One subject I was terrified of failing. And a result that took me outside Myanmar for the first time.',
		side: 'left',
		tone: 'achievement',
		expandable: true
	},
	{
		id: 'the-beginning',
		year: '2019',
		title: 'The Beginning',
		summary: 'TUM, football, Java, and the point where programming became more than a subject.',
		side: 'right',
		tone: 'turning-point',
		expandable: true
	},
	{
		id: 'everything-stopped',
		year: '2020',
		title: 'Everything Stopped',
		summary: 'COVID interrupted university, changed home life, and gave me a very different kind of education.',
		side: 'left',
		tone: 'difficult'
	},
	{
		id: 'starting-again',
		year: '2021',
		title: 'Starting Again',
		summary: 'I stopped waiting, changed university, moved to Yangon, and started building a life on my own.',
		side: 'right',
		tone: 'turning-point'
	},
	{
		id: 'first-real-work',
		year: '2023',
		title: 'First Real Work',
		summary: 'Internships, my first developer role, and the beginning of understanding how real teams actually work.',
		side: 'left',
		tone: 'turning-point'
	},
	{
		id: 'moving-not-growing',
		year: '2024',
		title: 'Moving, But Not Growing',
		summary: 'Work moved. University moved. I moved to Bangkok. Personally, I did not feel like I was moving at all.',
		side: 'right',
		tone: 'difficult'
	},
	{
		id: 'build-fail-repeat',
		year: '2024–25',
		title: 'Build. Fail. Repeat.',
		summary: 'Crawlers, document parsers, AI experiments and quite a few things that did not survive.',
		side: 'left',
		tone: 'experiment'
	},
	{
		id: 'creator-detour',
		year: '2025',
		title: 'The Creator Detour',
		summary: 'Ten views became thousands, then a million. For a while, YouTube looked like a completely different future.',
		side: 'right',
		tone: 'experiment'
	},
	{
		id: 'crossroad',
		year: '2025',
		title: 'The Crossroad',
		summary: 'Content creator or engineer? I could not keep doing both without something breaking.',
		side: 'left',
		tone: 'reflection'
	},
	{
		id: 'technical-lead',
		year: '2025–26',
		title: 'Technical Lead',
		summary: 'AI, insurance, a hackathon, production systems, and suddenly being responsible for more than my own code.',
		side: 'right',
		tone: 'achievement'
	},
	{
		id: 'why-this-exists',
		year: '2026',
		title: 'Why This Exists',
		summary: 'Loss changed the way I think about memory, unfinished conversations, and leaving a record of a life.',
		side: 'left',
		tone: 'reflection'
	}
];
