<script>
  const thanksUrl = [window.location.href, 'thanks'].join('/');
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="flex flex-col items-center">
  <div class="w-full max-w-md bg-gray-300 shadow-lg rounded overflow-hidden">
    <div class="text-white bg-yellow-900 p-8">
      <h1 class="text-3xl text-center">Contact</h1>
    </div>
    <form class="p-6" action="https://getsimpleform.com/messages?form_api_token=fa56f1ca5d0edb82618b16f3189d0799" method="post">
      <input type='hidden' name='redirect_to' value='{thanksUrl}' />
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
          placeholder="Your Email" />
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
          placeholder="Hey Frank!" />
      </div>
      <div class="flex justify-center">
        <button
          class="shadow bg-teal-600 hover:bg-teal-500 focus:shadow-outline
          focus:outline-none text-white py-2 px-4 rounded"
          type="submit">
          <i class="py-2 pr-2 text-white fas fa-sign-in-alt fa-lg" />
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>
