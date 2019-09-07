<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 0.5em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .hover-opacity {
    transition: opacity 0.8s linear;
  }
  .hover-opacity:hover {
    opacity: 1;
  }
</style>

<div class="flex justify-center">
  <a class="hover-grey" href=".">
    <img
      class="p-2"
      src="images/logo.png"
      alt="Frank posed"
      width="150" />
    <h2 class="font-mono text-center font-bold text-3xl">Frank</h2>
  </a>
</div>

<Nav {segment} />

<main>
  <slot />
</main>

<div class="flex flex-col items-center p-5">
  <a
    class="flex flex-row items-center opacity-50 hover-opacity"
    href="https://benwinding.com"
    target="_blank">
    <span class="pr-3">Website by Ben Winding</span>
    <img
      class="rounded-full"
      width="30"
      src="https://benwinding.com/images/pic.jpg"
      alt="benwinding logo" />
  </a>
</div>
