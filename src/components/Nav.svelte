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
      <a
        class="p-1 md:p-3 flex items-center"
        class:active={segment === undefined}
        href=".">
        <svg
          id="i-home"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="mr-1 md:mr-3 ml-2"
          width="18"
          height="18"
          fill="none"
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2">
          <path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
        </svg>
        FEED
      </a>
    </li>
    <li>
      <a
        class="p-1 md:p-3 flex items-center"
        class:active={segment === 'about'}
        href="about">
        <svg
          id="i-home"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="mr-1 md:mr-3 ml-2"
          width="18"
          height="18"
          fill="none"
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2">
          <path d="M16 14 L16 23 M16 8 L16 10" />
          <circle cx="16" cy="16" r="14" />
        </svg>
        ABOUT
      </a>
    </li>
    <li>
      <a
        class="p-1 md:p-3 flex items-center"
        class:active={segment === 'contact'}
        href="contact">
        <svg
          id="i-home"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="mr-1 md:mr-3 ml-2"
          width="18"
          height="18"
          fill="none"
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2">
          <path
            d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28
            16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
        </svg>
        CONTACT
      </a>
    </li>
    <li>
      <a
        class="p-1 md:p-3 flex items-center"
        class:active={segment === 'shop'}
        href="shop">
        <svg
          id="i-home"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="mr-1 md:mr-3 ml-2"
          width="18"
          height="18"
          fill="none"
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2">
          <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
          <circle cx="25" cy="27" r="2" />
          <circle cx="12" cy="27" r="2" />
        </svg>
        SHOP
      </a>
    </li>
  </ul>
</nav>
