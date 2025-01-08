<script>
import { fade } from 'svelte/transition';

import webImg from '$lib/assets/web3.png';
import skeletonUIImg from '$lib/assets/skeletonUI.jpg';
import typescriptImg from '$lib/assets/typescript.png';
import sveltekitImg from '$lib/assets/sveltekit.png';
import reactImg from '$lib/assets/react.png';
import phpImg from '$lib/assets/php.png';
import tailwindImg from '$lib/assets/tailwind.png';
import bootstrapImg from '$lib/assets/bootstrap.png';
import gitImg from '$lib/assets/git.png';
import pythonImg from '$lib/assets/python.png';
import javaImg from '$lib/assets/java.png';
import chaliceImg from '$lib/assets/chalice.png';
import litestarImg from '$lib/assets/litestar.png';
import dockerImg from '$lib/assets/docker.png';
import awsImg from '$lib/assets/aws.png';
import sqlAlchemyImg from '$lib/assets/sqlAlchemy.png';
import typesenseImg from '$lib/assets/typesense.png';

export let arrowImg;
export let checkmarkImg;

const proficiency ={
	intermediate: "Intermediate",
	proficient: "Proficient",
	expert: "Expert"
}

const languages = [
		{
			iconSrc: webImg, 
			skill: "HTML CSS JS",
			ref:'#',
			proficiencyLevel: proficiency.proficient,
		},
		{
			iconSrc: pythonImg,
			skill: "Python",
			ref:'https://www.python.org/',
			proficiencyLevel: proficiency.proficient
		},
		{
			iconSrc: sveltekitImg,
			skill: "Svelte",
			ref:'https://svelte.dev/',
			proficiencyLevel: proficiency.proficient
		},
		{
			iconSrc: phpImg,
			skill: "PHP",
			ref:'https://react.dev/',
			proficiencyLevel: proficiency.intermediate
		},
		{
			iconSrc: javaImg,
			skill: "Java",
			ref:'https://www.java.com/en/',
			proficiencyLevel: proficiency.intermediate
		},
		{
			iconSrc: typescriptImg,
			skill: "TypeScript",
			ref:'https://www.typescriptlang.org/',
			proficiencyLevel: proficiency.intermediate
		},

		{
			iconSrc: dockerImg,
			skill: "Docker",
			ref:'https://www.docker.com/',
			proficiencyLevel: proficiency.intermediate
		},
		{
			iconSrc: checkmarkImg,
			skill: "Alembic",
			ref:'https://alembic.sqlalchemy.org/en/latest/',
			proficiencyLevel: proficiency.intermediate
		},
		{
			iconSrc: gitImg,
			skill: "Version Control",
			ref:'https://svelte.dev/',
			proficiencyLevel: proficiency.proficient
		},
	];


const frameworks = [
		{
			iconSrc: litestarImg,
			skill: "Litestar",
			ref:'https://litestar.dev/',
			proficiencyLevel: proficiency.proficient
		},
		{
			iconSrc: chaliceImg,
			skill: "AWS Chalice",
			ref:'https://aws.github.io/chalice/',
			proficiencyLevel: proficiency.proficient
		},
		{
			iconSrc: awsImg,
			skill: "AWS services",
			ref:'https://svelte.dev/',
			proficiencyLevel: proficiency.intermediate
		},
		{
			iconSrc: typesenseImg,
			skill: "Typesense",
			ref:'https://typesense.org/',
			proficiencyLevel: proficiency.proficient
		},
		{
			iconSrc: sveltekitImg,
			skill: "Sveltekit",
			ref:'https://svelte.dev/',
			proficiencyLevel: proficiency.proficient
		},
		{
			iconSrc: bootstrapImg,
			skill: "Bootstrap",
			ref:'https://getbootstrap.com/',
			proficiencyLevel: proficiency.intermediate
		},
		{
			iconSrc: tailwindImg,
			skill: "Tailwind",
			ref:'https://tailwindcss.com/',
			proficiencyLevel: proficiency.intermediate
		},
		{
			iconSrc: skeletonUIImg,
			skill: "Skeleton UI",
			ref:'https://www.skeleton.dev/',
			proficiencyLevel: proficiency.intermediate
		},
		{
			iconSrc: sqlAlchemyImg,
			skill: "Sqlalchemy + Advanced",
			ref:'https://svelte.dev/',
			proficiencyLevel: proficiency.intermediate
		},
	
]

</script>

<section id="experience"  transition:fade={{ duration: 500, delay: 0 }}>
 
	<h1 class="title">Experience</h1>
	<div class="experience-details-container">
		<div class="about-containers">
			<div class="details-container">
				<h2 class="experience-sub-title">Languages & Tools</h2>
				<div style="margin:0 auto;" class="experience-card">
				
					<div class="article-container">
						{#each languages as experience}
							<article>
								<img src={experience.iconSrc} alt="Experience icon" class="icon border rounded-full border-black" />
								<div>
									<a href="{experience.ref}" class="text-blue-900 no-underline skill-name">{experience.skill}</a>
									<p>{experience.proficiencyLevel}</p>
								</div>
							</article>
						{/each}
				 
 
					</div>
				</div>
			</div>
		 
			<div class="details-container">
				<h2 class="experience-sub-title">Library, Framework & SDK</h2>
				 <div style="margin:0 auto;" class="experience-card">
					<div class="article-container">
			
				    {#each frameworks as framework}
					<article>
						<img src={framework.iconSrc} alt="Experience icon" class="icon border rounded-full border-black" />
						<div>
							<a href="{framework.ref}" class="text-blue-900 no-underline skill-name">{framework.skill}</a>
							<p>{framework.proficiencyLevel}</p>
						</div>
					</article>

					{/each}
					</div>
				 </div>
			</div>
		</div>
	</div>
<a href="#projects">	<img src={arrowImg} alt="Arrow icon" class="icon arrow" /></a>
</section>


<style>
	.experience-details-container .details-container{
		min-height: 350px ;
	}

	.article-container{
		justify-content: left;
	}
</style>