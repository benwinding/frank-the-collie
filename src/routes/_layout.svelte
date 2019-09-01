<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 0.5em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<div class="flex justify-center">
  <div class="flex flex-col">
    <a href="/">
      <img
        class="p-2"
        src="https://i.imgur.com/cWPBCGg.png"
        alt="Frank posed"
        width="150" />
      <h2 class="font-mono text-center font-bold text-3xl">Frank</h2>
    </a>
  </div>
</div>

<Nav {segment} />

<main>
  <slot />
</main>
