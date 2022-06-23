<script>
  import { onMount } from "svelte";

  export let frankLogoUrl = "images/logo.png";
  export let count = 0;

  export async function incrementPatsCount() {
    frankLogoUrl = "images/logo-winked.png";
    setTimeout(() => {
      frankLogoUrl = "images/logo.png";
    }, 1000);
  }

  onMount(async () => {
    getPatsCount();
  });
</script>

<div
  class="flex flex-row items-start cursor-pointer"
  on:click={incrementPatsCount}>
  <div class="flex flex-col items-center">
    <div>
      <img class="p-2" src={frankLogoUrl} alt="Frank posed" width="150" />
    </div>
    <div class="text-gray-500 stretch-this">
      <svg
        id="i-arrow-top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="20"
        height="20"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="5">
        <path d="M6 10 L16 2 26 10 M16 2 L16 30" />
      </svg>
    </div>
    <h2 class="font-mono text-center font-bold text-3xl">Frank</h2>
    <div class="text-gray-500 text-xs flex flex-row items-center">
      <span class="wiggle-this text-lg">✋</span> 
      <span>Click to pat me ^</span>
    </div>
  </div>
</div>
