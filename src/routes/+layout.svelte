<script>
    import {Nav, Footer} from '$lib/index.js';
  
</script>


<div class="app">
	<Nav />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--background-color-light);
	}




</style>
