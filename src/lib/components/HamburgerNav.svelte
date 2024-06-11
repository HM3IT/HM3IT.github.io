<script>
    let menuOpen = false;
    const toggleMenu = () => menuOpen = !menuOpen;
  </script>
  
  <nav id="hamburger-nav">
    <div class="logo">John Doe</div>
    <div class="hamburger-menu">
      <div class="hamburger-icon" on:click={toggleMenu}>
        <span>gg</span>
        <span>gg</span>
        <span>gg</span>
      </div>
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
  
  <style>
    /* Transfer relevant CSS from style.css and mediaqueries.css */
  </style>
  