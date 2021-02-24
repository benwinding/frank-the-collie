<script>
  import { onMount } from "svelte";
  import InstaCard from "../components/InstaCard.svelte";
  import axios from 'axios';

  let ACCESS_TOKEN = "IGQVJXSm5ldG5KYklDUHU1VVNDdkZAnV0FDTU9MdzlzSjFTcXpKekExLWgzYmVsTDhGY1JuTzZAOd2ZAMUkFHTDNQd284VDAxamdtdGR6blFSR0YwaFhMSWU2eGNWUkRZAX3M4a1FtQzJMTU1pSDJZAR0hwMQZDZD";
  let urlProfile = `https://graph.instagram.com/me/media?access_token=${ACCESS_TOKEN}&fields=media_url,media_type,caption,permalink`;
  let col1 = [];
  let col2 = [];
  let col3 = [];

  async function getData() {
    console.log('accessing instagram api:');
    const res = await axios.get(urlProfile);
    const json = res.data;
    console.log('accessing instagram api:', {res});
    const images = json.data.map(item => getImageDesc(item));
    for (let i = 0; i < images.length; i += 3) {
      col1 = [...col1, images[i + 0]].filter(v => !!v);
      col2 = [...col2, images[i + 1]].filter(v => !!v);
      col3 = [...col3, images[i + 2]].filter(v => !!v);
    }
    console.log({ json, col1, col2, col3 });
  }

  function getImageDesc(item) {
    return {
      url: item.media_url,
      caption: item.caption,
      urlPost: item.permalink
    };
  }

  onMount(async () => {
    getData();
	});
</script>

<svelte:head>
  <title>Frank the collie</title>
</svelte:head>

<div class="flex flex-row justify-center items-center pb-4">
  <a class="flex flex-row items-center" target="_blank" href="https://www.instagram.com/frankthecollie/">
    <img src="images/frankstagram.png" width="30" alt="frank logo" />
    <span class="italic pl-2">Instagram Feed</span>
  </a>
</div>

{#if col1.length < 1 }
  <div class="flex flex-col items-center py-20">
    <div class="flex flex-col items-center">
      <img src="images/loading.gif" width="100" alt="loading" />
      <h2 class="p-4 text-xl italic">Loading...</h2>
    </div>
  </div>
{:else}
  <div class="flex mb-4">
    <div class="w-1/3">
      {#each col1 as { url, caption, urlPost }, i}
        <InstaCard {url} {caption} {urlPost} />
      {/each}
    </div>
    <div class="w-1/3">
      {#each col2 as { url, caption, urlPost }, i}
        <InstaCard {url} {caption} {urlPost} />
      {/each}
    </div>
    <div class="w-1/3">
      {#each col3 as { url, caption, urlPost }, i}
        <InstaCard {url} {caption} {urlPost} />
      {/each}
    </div>
  </div>
{/if}
