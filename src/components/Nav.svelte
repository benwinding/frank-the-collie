<script>
  export let segment;
</script>

<style>
.active {
  border-bottom: 2px red solid;
}
</style>

<nav class="mb-2">
  <ul class="flex justify-center p-3">
    <li>
      <a class="p-3" class:active={segment === undefined} href=".">HOME</a>
    </li>
    <li>
      <a class="p-3" class:active={segment === 'about'} href="about">ABOUT</a>
    </li>
    <li>
      <a class="p-3" class:active={segment === 'contact'} href="contact">CONTACT</a>
    </li>
  </ul>
</nav>
