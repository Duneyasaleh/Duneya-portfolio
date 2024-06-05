<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
  
    let posts = [];
    let accessToken = '2362751767257227'; // Vervang dit door je echte access token
    let userId = 'USER_ID'; // Vervang dit door de Instagram user ID
  
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${accessToken}`
        );
        posts = response.data.data;
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };
  
    onMount(() => {
      fetchInstagramPosts();
    });
  </script>
  
  <style>
    .instagram-posts {
      display: flex;
      flex-wrap: wrap;
    }
  
    .post {
      margin: 10px;
      width: 200px;
    }
  
    img {
      width: 100%;
      height: auto;
    }
  </style>
  
  <div class="instagram-posts">
    {#each posts as post}
      <div class="post">
        <a href={post.permalink} target="_blank">
          {#if post.media_type === 'IMAGE'}
            <img src={post.media_url} alt={post.caption} />
          {:else if post.media_type === 'VIDEO'}
            <video controls>
              <source src={post.media_url} type="video/mp4" />
            </video>
          {/if}
          <p>{post.caption}</p>
        </a>
      </div>
    {/each}
  </div>
  