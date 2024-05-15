<script>
    import Nav from "../lib/organisms/Nav.svelte";
    import Footer from '../lib/organisms/Footer.svelte';
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
	}


</style>
