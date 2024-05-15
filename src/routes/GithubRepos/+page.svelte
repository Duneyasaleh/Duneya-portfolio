<script>
    import { onMount } from 'svelte';

    const GithubAPI = 'https://api.github.com/users';
    const username = 'Duneyasaleh';
    const RepoAPI = '/repos';
    const ApiURL = `${GithubAPI}/${username}${RepoAPI}`;

    onMount(async () => {
        try {
            const response = await fetch(ApiURL);
            const repos = await response.json();
            
            repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
            
            const container = document.getElementById('repos-container');
            repos.forEach((repo) => {
                const repository = document.createElement('div');
                repository.className = 'repository';
                repository.innerHTML = `
                    <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
                    <img scr="${repo.owner.avatar_url}" with="50" height="50">
                    <p>${repo.owner.login}</p>

                `;
                container.appendChild(repository);
            });
        } catch (error) {
            console.error('Error fetching repos:', error);
        }
    });

    function search() {
        const input = document.getElementById('searchInput');
        const filter = input.value.toUpperCase();
        const repos = document.querySelectorAll('.repository');

        repos.forEach((repo) => {
            const title = repo.querySelector('h2').innerText.toUpperCase();
            if (title.indexOf(filter) > -1) {
                repo.style.display = '';
            } else {
                repo.style.display = 'none';
            }
        });
    }
</script>

<main>
    <h1>My GitHub Repositories</h1>

    <div id="repos-container"></div>
    
</main>
