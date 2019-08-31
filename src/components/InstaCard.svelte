<script>
  export let caption;
  export let url;
  export let urlPost;
</script>

<style>
  .hover-grey {
    transition: filter 0.8s linear;
  }
  .hover-grey:hover {
    filter: brightness(0.5);
  }
</style>

<div class="m-1">
  <a href={urlPost} target="_blank">
    <img class="hover-grey rounded-lg" src={url} alt={caption} />
    <p class="text-sm">{caption}</p>
  </a>
</div>
