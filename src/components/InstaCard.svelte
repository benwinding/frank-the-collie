<script>
export let caption;
export let url;
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
  <img class="hover-grey rounded-lg" src={url} alt={caption} />
  <p class="text-sm">{caption}</p>
</div>