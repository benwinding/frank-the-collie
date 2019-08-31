<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<div class="flex justify-center">
  <div class="flex flex-col">
    <img src="https://i.imgur.com/cWPBCGg.png" alt="Frank posed" width="150" />
    <h2 class="font-mono text-center font-bold text-3xl">Frank</h2>
  </div>
</div>

<Nav {segment} />

<main>
  <slot />
</main>
