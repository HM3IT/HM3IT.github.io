<script>
	$: menuOpen = false;
	function toggleMenu() {
		menuOpen = !menuOpen;
		console.log('Triggereed ', menuOpen);
		updateMenuClasses();
	}

	function updateMenuClasses() {
		const menu = document.querySelector('.hamburger-links');
		const icon = document.querySelector('.hamburger-icon');
		if (menu != null && icon != null) {
			menu.classList.toggle('open', menuOpen);
			icon.classList.toggle('open', menuOpen);
		}
	}
	function onMouseLeaveHandler() {
		if (menuOpen) {
			console.log('Enter');
			setTimeout(() => {
				menuOpen = false;
				console.log('Triggereed ', menuOpen);
				updateMenuClasses();
			}, 600);
		} else {
			menuOpen = true;
			console.log('Triggereed ', menuOpen);
			updateMenuClasses();
		}
	}
</script>

<nav id="desktop-nav">
	<div class="logo">HM3IT</div>
	<div>
		<ul class="nav-links">
			<li><a href="#about">About</a></li>
			<li><a href="#experience">Experience</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</div>
</nav>
<nav id="hamburger-nav">
	<div class="logo">HM3IT</div>
	<div class="hamburger-menu">
		<button class="hamburger-button" on:click={toggleMenu}>
			<div class="hamburger-icon">
			 
				{#if !menuOpen}
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4 18L20 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
						<path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
						<path d="M4 6L20 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				{:else}
					<svg
						height="100px"
						width="100px"
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<g>
							<path
								style="fill:#FFC61B;"
								d="M497.498,512H14.502C6.494,512,0,505.507,0,497.498V14.502C0,6.493,6.494,0,14.502,0h482.996
			C505.506,0,512,6.493,512,14.502v385.151c0,8.009-6.494,14.502-14.502,14.502s-14.502-6.493-14.502-14.502V29.004H29.004v453.992
			h468.494c8.008,0,14.502,6.493,14.502,14.502S505.506,512,497.498,512z"
							/>
							<path
								style="fill:#FFC61B;"
								d="M427.065,441.568H84.934c-8.008,0-14.502-6.493-14.502-14.502V154.242
			c0-8.009,6.494-14.502,14.502-14.502s14.502,6.493,14.502,14.502v258.323h313.127V99.436H84.934
			c-8.008,0-14.502-6.493-14.502-14.502s6.494-14.502,14.502-14.502h342.131c8.008,0,14.502,6.493,14.502,14.502v342.132
			C441.567,435.076,435.074,441.568,427.065,441.568z"
							/>
						</g>
						<polygon
							style="fill:#FEE187;"
							points="369.824,190.372 321.628,142.175 255.999,207.803 190.371,142.175 142.176,190.372 
		207.803,255.999 142.176,321.628 190.371,369.824 255.999,304.195 321.628,369.824 369.824,321.628 304.195,255.999 "
						/>
						<path
							style="fill:#FFC61B;"
							d="M321.628,384.326c-3.846,0-7.534-1.529-10.254-4.248l-55.374-55.374l-55.374,55.374
		c-2.721,2.719-6.408,4.248-10.254,4.248s-7.534-1.529-10.254-4.248l-48.194-48.196c-5.663-5.663-5.663-14.846,0-20.509
		l55.374-55.374l-55.374-55.374c-5.663-5.663-5.663-14.844,0-20.509l48.194-48.196c2.721-2.719,6.408-4.248,10.254-4.248
		c3.846,0,7.534,1.529,10.254,4.248l55.374,55.374l55.374-55.374c2.721-2.719,6.408-4.248,10.254-4.248s7.534,1.529,10.254,4.248
		l48.194,48.196c5.663,5.663,5.663,14.846,0,20.509l-55.374,55.374l55.374,55.374c5.663,5.663,5.663,14.844,0,20.509l-48.194,48.196
		C329.163,382.797,325.475,384.326,321.628,384.326z M255.999,289.693c3.712,0,7.422,1.417,10.254,4.248l55.374,55.374l27.687-27.687
		l-55.374-55.374c-5.663-5.663-5.663-14.846,0-20.509l55.374-55.374l-27.687-27.687l-55.374,55.374
		c-5.664,5.663-14.844,5.663-20.51,0l-55.374-55.374l-27.687,27.687l55.374,55.374c5.663,5.663,5.663,14.846,0,20.509l-55.374,55.374
		l27.687,27.687l55.374-55.374C248.577,291.11,252.288,289.693,255.999,289.693z"
						/>
					</svg>
				{/if}
			</div>
		</button>

		<div class="hamburger-links" on:mouseleave={onMouseLeaveHandler}>
			{#if menuOpen}
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			{/if}
		</div>
	</div>
</nav>
