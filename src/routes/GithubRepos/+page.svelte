<script>
    import { onMount } from 'svelte';

    const GithubAPI = 'https://api.github.com/users';
    const username = 'Duneyasaleh';
    const RepoAPI = '/repos';
    const ApiURL = `${GithubAPI}/${username}${RepoAPI}`;

    let repos = [];

    onMount(async () => {
        try {
            const response = await fetch(ApiURL);
            repos = await response.json();
            
            repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        } catch (error) {
            console.error('Error fetching repos:', error);
        }
    });

    function search() {
        const input = document.getElementById('searchInput');
        const filter = input.value.toUpperCase();
        const repoElements = document.querySelectorAll('.repository');

        repoElements.forEach((repoElement) => {
            const title = repoElement.querySelector('h2').innerText.toUpperCase();
            if (title.indexOf(filter) > -1) {
                repoElement.style.display = '';
            } else {
                repoElement.style.display = 'none';
            }
        });
    }
</script>

<section>
    <h1>My GitHub Repositories</h1>
    <div>
        <input type="text" id="searchInput" placeholder="Search repositories...">
        <button on:click={search}>Search</button>
    </div>
    <div id="repos-container">
        {#each repos as repo}
            <div class="repository">
                <h2><a href={repo.html_url} target="_blank">{repo.name}</a></h2>
                <img src={repo.owner.avatar_url} width="50" height="50">
                <p>{repo.owner.login}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    section{
        padding: 1em;
    }
    h1{
      font-size: 3em;
      background-color: black;
      color: transparent;
      text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.5);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
    }
    input{
        margin: 1em;
        padding: 2em;
        width: 50%;
        border-radius: 3em;
    }
    button{
        padding: 2em;
        background: linear-gradient(180deg, #d96995bf 3.12%, rgba(207, 61, 119, 0.75) 51.56%, rgba(222, 127, 164, 0.75) 100%);
        color: white;
        border: var(--primary-color);
        border-radius: 3em;
    }
    .repository {
        margin: 1em ;
        padding: 1em;
        border: 1px solid #ccc;
        box-shadow: inset 0px 0px 10px rgba(255, 192, 203, 0.918);
        border-radius: 3em;
    }

</style>
