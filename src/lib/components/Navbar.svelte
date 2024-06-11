<script>
    let menuOpen = false;
    const toggleMenu = () => menuOpen = !menuOpen;

// function toggleMenu() {
// 		const menu = document.querySelector('.menu-links');
// 		const icon = document.querySelector('.hamburger-icon');
// 		if (menu != null && icon != null) {
// 			menu.classList.toggle('open');
// 			icon.classList.toggle('open');
// 		}
// 	}
</script>

<nav id="desktop-nav">
	<div class="logo">John Doe</div>
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
	<div class="logo">John Doe</div>
	<div class="hamburger-menu">
		<div class="hamburger-icon">
			<span>TEst 1</span>
			<span>test</span>
			<span>tst </span>
		</div>
		<!-- <div class="menu-links">
			<li><a href="#about" on:click={() => toggleMenu()}>About</a></li>
			<li><a href="#experience" on:click={() => toggleMenu()}>Experience</a></li>
			<li><a href="#projects" on:click={() => toggleMenu()}>Projects</a></li>
			<li><a href="#contact" on:click={() => toggleMenu()}>Contact</a></li>
		</div> -->
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