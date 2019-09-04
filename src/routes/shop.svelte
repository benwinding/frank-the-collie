<script>
  import ShopCard from "../components/ShopCard.svelte";
  const data = [
    {
      title: "Ivory t-shirt",
      description: "Set youself apart with this radical t-shirt",
      imgUrl: "shop/shirt2.jpeg",
      price: "330.00",
    },
    {
      title: "Dark Long-Shirt",
      description: "Make a bold statement about what you represent",
      imgUrl: "shop/shirt3.jpeg",
      price: "460.00",
    },
    {
      title: "Classic Mug",
      description: "There's only one cup you need, and this is it!",
      imgUrl: "shop/mug1.png",
      price: "145.00",
    },
    {
      title: "Retro Cooler",
      description: "Never have a warm drink again, this cooler cools",
      imgUrl: "shop/esky1.png",
      price: "890.00",
    },
    {
      title: "Chestnut Shoe (Right)",
      description: "One of your shoes needs replacing, this it the one ^",
      imgUrl: "shop/shoe1.png",
      price: "640.00",
    },
    {
      title: "Frank's Toy of Choice",
      description: "The official toy of 'Frank', built to last... minutes",
      imgUrl: "shop/toy1.png",
      price: "1,250.00",
    }
  ];
</script>

<style>

</style>

<div class="flex flex-wrap justify-center">
  {#each data as { title, imgUrl, description , price}, i}
    <div class="w-1/2 md:w-1/4 mb-2">
      <div class="m-1 h-full">
        <ShopCard {title} {imgUrl} {description} {price} />
      </div>
    </div>
  {/each}
</div>
