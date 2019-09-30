<script>
  export let imgUrl;
  export let title;
  export let price;
  export let description;

  let isFullscreen = false;

  export function clickCard() {
    isFullscreen = !isFullscreen;
  }
</script>

<style>
  .hover-grey {
    transition: filter 0.8s linear;
  }
  .hover-grey:hover {
    filter: brightness(0.5);
  }
  .bg-gray-transparent {
    background-color: #333333a8;
  }
</style>

<div
  class={isFullscreen ? 'fixed inset-0 z-50 bg-gray-transparent p-10' : 'h-full'}
  on:click={clickCard}>
  <div class="p-1 bg-gray-300 rounded-lg" class:h-full={!isFullscreen}>
    <div
      class="flex flex-col relative"
      class:items-center={isFullscreen}
      class:items-stretch={!isFullscreen}>
      <svg
        id="i-fullscreen"
        class="absolute top-0 right-0 text-gray-600 z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2">
        <path
          d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28
          20 28" />
      </svg>
      <img
        class="rounded rounded-b-none"
        class:hover-grey={!isFullscreen}
        src={imgUrl}
        alt={title} />
      <div class="flex justify-between">
        <div class="flex flex-col items-start">
          <p class="text-xs p-1 uppercase font-bold">{title}</p>
        </div>
        <div class="flex flex-col items-end">
          <p class="italic">
            ${price}
            <span class="text-xs ml-1">AUD</span>
          </p>
          <p class="text-xs text-red-500 italic text-right">sold out</p>
        </div>
      </div>
      <p class="text-xs p-1 italic">{description}</p>
    </div>
  </div>
</div>
