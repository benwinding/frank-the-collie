<script>
  import { onMount } from "svelte";
  import InstaCard from "../components/InstaCard.svelte";
  import axios from "axios";

  let images = [];
  const base = process.env.BASE_PATH || __SAPPER__.baseUrl || "/";

  async function getData() {
    console.log("accessing instagram api:");
    const urlInstaJson = `/${base}/insta-feed/frankthecollie.json`;
    const urlNoDoubleSlashes = urlInstaJson.replace(/[/]+/g, "/");
    const res = await axios.get(urlNoDoubleSlashes);
    const json = res.data;
    console.log("accessing instagram api:", { json });
    images = json.GraphImages.map(item => getImageDesc(item)).filter(i => !i.isVideo);
  }

  function getImageDesc(item) {
    const isVideo = item.is_video;
    const edges = item.edge_media_to_caption.edges;
    const urlThumb = `/${base}/insta-feed/${item.shortcode}.jpg`;
    const urlThumbNoDoubleSlashes = urlThumb.replace(/[/]+/g, "/");
    return {
      url: urlThumbNoDoubleSlashes,
      isVideo: isVideo,
      caption: edges.length && edges[0].node.text,
      urlPost: `https://www.instagram.com/p/${item.shortcode}/`
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
  <a
    class="flex flex-row items-center"
    target="_blank"
    href="https://www.instagram.com/frankthecollie/">
    <img src="images/frankstagram.png" width="30" alt="frank logo" />
    <span class="italic pl-2">Instagram Feed</span>
  </a>
</div>

{#if images.length < 1}
  <div class="flex flex-col items-center py-20">
    <div class="flex flex-col items-center">
      <img src="images/loading.gif" width="100" alt="loading" />
      <h2 class="p-4 text-xl italic">Loading...</h2>
    </div>
  </div>
{:else}
  <div class="masonry">
    {#each images as { url, caption, urlPost, isVideo }, i}
      <div class="masonry-item">
        <InstaCard {url} {caption} {urlPost} {isVideo} />
      </div>
    {/each}
  </div>
{/if}

<style>
  .masonry {
    columns: 1;
    column-gap: 0.5rem;
  }
  .masonry-item {
    margin-bottom: 0.5rem;
    break-inside: avoid;
  }

  @media (min-width: 640px) {
    .masonry {
      columns: 2;
    }
  }
  @media (min-width: 768px) {
    .masonry {
      columns: 3;
    }
  }
  @media (min-width: 1024px) {
    .masonry {
      columns: 4;
    }
  }
</style>