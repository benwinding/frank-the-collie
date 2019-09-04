<script>
  export let link;
  export let imgUrl;
  export let title;
  export let price;
  export let description;
</script>

<style>
  .hover-grey {
    transition: filter 0.8s linear;
  }
  .hover-grey:hover {
    filter: brightness(0.5);
  }
</style>

<div class="p-1 bg-gray-300 rounded-lg h-full">
  <a
    class="flex flex-col items-stretch"
    href={link}
    target="_blank">
    <img class="hover-grey rounded rounded-b-none" src={imgUrl} alt={title} />
    <div class="flex justify-between">
      <div class="flex flex-col items-start">
        <p class="text-xs p-1 uppercase font-bold">{title}</p>
      </div>
      <div class="flex flex-col items-end">
        <p class="italic">${price}<span class="text-xs ml-1">AUD</span></p>
        <p class="text-xs text-red-500 italic text-right">sold out</p>
      </div>
    </div>
      <p class="text-xs p-1 italic">{description}</p>
  </a>
</div>
