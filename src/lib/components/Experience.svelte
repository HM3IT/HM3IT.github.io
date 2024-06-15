<script>
import { fade } from 'svelte/transition';
export let checkmarkImg;
export let arrowImg;

</script>

<section id="experience"  transition:fade={{ duration: 500, delay: 0 }}>
 
	<h1 class="title">Experience</h1>
	<div class="experience-details-container">
		<div class="about-containers">
			<div class="details-container">
				<h2 class="experience-sub-title">Frontend Development</h2>
				<div class="article-container">
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>HTML & CSS</h3>
							<p>Experienced</p>
						</div>
					</article>

					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>JavaScript</h3>
							<p>Intermediate</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>TypeScript</h3>
							<p>Intermediate</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Svelte</h3>
							<p>Experienced</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>React</h3>
							<p>Beginner</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Sveltekit</h3>
							<p>Experienced</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Bootstrap</h3>
							<p>Intermediate</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Tailwind</h3>
							<p>Intermediate</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Skeleton UI</h3>
							<p>Intermediate</p>
						</div>
					</article>
				</div>
			</div>
		 
			<div class="details-container">
				<h2 class="experience-sub-title">Backend Development</h2>
				<div class="article-container">
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Python</h3>
							<p>Intermediate</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Chalice</h3>
							<p>Intermediate</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Litestar</h3>
							<p>Intermediate</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Sqlalchemy</h3>
							<p>Intermediate</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>AWS services</h3>
							<p>Beginner</p>
						</div>
					</article>
					<article>
						<img src={checkmarkImg} alt="Experience icon" class="icon" />
						<div>
							<h3>Git</h3>
							<p>Intermediate</p>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
<a href="#projects">	<img src={arrowImg} alt="Arrow icon" class="icon arrow" /></a>
</section>