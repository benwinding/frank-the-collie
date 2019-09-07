<script>
  import { onMount } from "svelte";
  let isSending = false;
  let thanksUrl = "";
  let defaultEmail = "";
  let defaultMessage = "";
  onMount(() => {
    thanksUrl = [window.location.href, "thanks"].join("/");
    const query = new URLSearchParams(window.location.search);
    defaultEmail = query.get("email");
    defaultMessage = query.get("message");
  });
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="flex flex-col items-center">
  <div class="w-full max-w-md bg-gray-300 shadow-lg rounded overflow-hidden">
    <div class="text-white bg-yellow-900 p-8">
      <h1 class="text-3xl text-center">Contact</h1>
    </div>
    <form
      class="p-6"
      action="https://getsimpleform.com/messages?form_api_token=4902df5177b7f540a160b9c35d1cd971"
      method="post"
      on:submit={() => (isSending = true)}>
      <input type="hidden" name="redirect_to" value={thanksUrl} />
      <div class="w-full mb-6 px-2">
        <p class="pb-4">Throw me a bone, or book me for a photo shoot :)</p>
        <label
          class="block uppercase tracking-wider text-gray-700 text-xs font-bold
          mb-2"
          for="email">
          Your Email
        </label>
        <input
          required
          name="email"
          type="email"
          class="appearance-none block w-full bg-gray-400 text-gray-700 border
          rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Your Email"
          value={defaultEmail} />
      </div>
      <div class="w-full mb-6 px-2">
        <label
          class="block uppercase tracking-wider text-gray-700 text-xs font-bold
          mb-2"
          for="message">
          Message
        </label>
        <textarea
          required
          name="message"
          type="text"
          class="appearance-none block w-full bg-gray-400 text-gray-700 border
          rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Hey Frank!"
          value={defaultMessage} />
      </div>
      <div class="flex justify-center">
        {#if isSending}
          <button
            class="shadow bg-gray-500 focus:shadow-outline pointer-events-none
            focus:outline-none text-white py-2 px-4 rounded flex items-center">
            Sending...
            <svg
              id="i-reload"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="ml-3 spin-this"
              width="20"
              height="20"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2">
              <path
                d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3
                25 6 27 9 M20 10 L27 9 28 2" />
            </svg>
          </button>
        {:else}
          <button
            class="shadow bg-teal-600 hover:bg-teal-500 focus:shadow-outline
            focus:outline-none text-white py-2 px-4 rounded flex items-center"
            type="submit">
            Send Message
            <svg
              id="i-checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="ml-3"
              width="20"
              height="20"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2">
              <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
            </svg>
          </button>
        {/if}
      </div>
    </form>
  </div>
</div>
