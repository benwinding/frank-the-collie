<script>
  import { onMount } from "svelte";

  let seconds = 5;

  onMount(async () => {
    const ref = setInterval(() => {
      seconds--;
      if (seconds <= 0) {
        clearInterval(ref);
        setTimeout(() => {
          window.location.href = "";
        });
      }
    }, 1000);
  });
</script>

<div class="flex flex-col items-center py-20">
  <div class="flex flex-col items-center">
    <img src="images/thanks.gif" width="300" alt="loading" />
    <h1 class="text-3xl text-center my-10">Thanks for the message!</h1>
    <div
      class="mt-3 rounded-full bg-gray-400 flex flex-row items-center
      justify-center"
      style="width: 100px; height: 100px;">
      <span class="text-4xl">{seconds}</span>
    </div>
  </div>
</div>
