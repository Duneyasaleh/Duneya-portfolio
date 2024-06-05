  
    <article id="Skills" class="logo" aria-live="polite" aria-label="Scrolling list of skills">
      <div class="logos-slide" role="list">
        <div class="skills" role="listitem">HTML</div>
        <div class="skills" role="listitem">CSS</div>
        <div class="skills" role="listitem">JS</div>
        <div class="skills" role="listitem">PHP</div>
        <div class="skills" role="listitem">LARAVEL</div>
        <div class="skills" role="listitem">REACT</div>
        <div class="skills" role="listitem">SVELTE</div>
        <div class="skills" role="listitem">ADOBE</div>
        <div class="skills" role="listitem">NEXTJS</div>
        <div class="skills" role="listitem">FIGMA</div>
        <div class="skills" role="listitem">NODEJS</div>
        <div class="skills" role="listitem">EXPRESS</div>
      </div>
    <div class="logos-slide">
      <div class="skills">HTML</div>
      <div class="skills">CSS</div>
      <div class="skills">JS</div>  
     <div class="skills">PHP</div>
     <div class="skills">LARAVEL</div>
      <div class="skills">REACT</div>
      <div class="skills">SVELTE</div>
      <div class="skills">ADOBE</div>
      <div class="skills">NEXTJS</div>
      <div class="skills">FIGMA</div>
      <div class="skills">NODEJS</div>
      <div class="skills">EXPRESS</div>
    </div>
    <div class="logos-slide">
      <div class="skills">HTML</div>
      <div class="skills">CSS</div>
      <div class="skills">JS</div>
     <div class="skills">PHP</div>
     <div class="skills">LARAVEL</div>
      <div class="skills">REACT</div>
      <div class="skills">SVELTE</div>
      <div class="skills">ADOBE</div>
      <div class="skills">NEXTJS</div>
      <div class="skills">FIGMA</div>
      <div class="skills">NODEJS</div>
      <div class="skills">EXPRESS</div>
    </div>
    </article>
  <style>
    @keyframes slide {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
  
    .logo {
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.logos-slide {
  display: flex;
  white-space: nowrap;
  animation: 50s slide infinite linear;
}

.logo:hover .logos-slide {
  animation-play-state: paused;
}
.skills {
  color: white;
  background: var(--linear-gradient-color) ;
  border-radius: 17em;
  padding: 1rem;
  margin-right: .5rem;
  width: 8em;
  box-shadow: -5px 5px 15px;
  text-align: center;
  font-size: 2em;
}
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
  </style>
  