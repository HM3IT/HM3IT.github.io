<script>
    $: menuOpen = false;

function toggleMenu() {
	menuOpen = !menuOpen;
	console.log("Triggereed ", menuOpen)
	const menu = document.querySelector('.menu-links');
	const icon = document.querySelector('.hamburger-icon');
	if (menu != null && icon != null) {
		menu.classList.toggle('open');
		icon.classList.toggle('open');
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
				<span></span>
				<span></span>
				<span></span>
			</div>
		</button>

		{#if menuOpen}
		<div class="menu-links">
		  <li><a href="#about" on:click={toggleMenu}>About</a></li>
		  <li><a href="#experience" on:click={toggleMenu}>Experience</a></li>
		  <li><a href="#projects" on:click={toggleMenu}>Projects</a></li>
		  <li><a href="#contact" on:click={toggleMenu}>Contact</a></li>
		</div>
		{/if}
	</div>
</nav>