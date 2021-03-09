<script>
  export let caption;
  export let url;
  export let urlPost;
  export let isVideo;
</script>

<div class="m-1 mb-2 p-1 bg-gray-300 rounded-lg ">
  <a href={urlPost} target="_blank">
    <img  class="hover-grey rounded rounded-b-none" src={url} alt={caption} />
    <p class="text-xs p-1 bg-white">{caption}</p>
  </a>
</div>

<style>
  .hover-grey {
    transition: filter 0.8s linear;
  }
  .hover-grey:hover {
    filter: brightness(0.5);
  }
</style>
