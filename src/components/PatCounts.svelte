<script>
  import axios from "axios";
  import { onMount } from "svelte";

  export let frankLogoUrl = "images/logo.png";
  export let count = 0;
  async function getPatsCount() {
    const hitCountTarget =
      "https://benwinding.github.io/frank-the-collie/pat-counter";
    const res = await axios.get(
      "https://hitcounter.pythonanywhere.com/nocount",
      {
        params: {
          url: hitCountTarget
        }
      }
    );
    count = res.data;
  }

  export async function incrementPatsCount() {
    frankLogoUrl = "images/logo-winked.png";
    const hitCountTarget =
      "https://benwinding.github.io/frank-the-collie/pat-counter";
    const res = await axios.get("https://hitcounter.pythonanywhere.com/count", {
      params: {
        url: hitCountTarget
      }
    });
    count = res.data;
    setTimeout(() => {
      frankLogoUrl = "images/logo.png";
    }, 1000);
  }

  onMount(async () => {
    getPatsCount();
  });
</script>

<div class="pl-32 flex flex-row items-start cursor-pointer" on:click={incrementPatsCount}>
  <div class="flex flex-col items-center">
    <div>
      <img class="p-2" src={frankLogoUrl} alt="Frank posed" width="150" />
    </div>
    <h2 class="font-mono text-center font-bold text-3xl">Frank</h2>
  </div>
  <div class="pt-16 -ml-5 flex flex-row items-start">
    <div class="text-gray-500 text-3xl pr-1">🡗</div>
    <div>
      <div class="text-gray-600 uppercase text-sm">Click to pat Frank</div>
      <div class="text-gray-500 text-xs">Pats given: {count}</div>
    </div>
  </div>
</div>
