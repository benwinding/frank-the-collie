<script>
  import * as moment from "moment";
  const birthDate = moment([2018, 10, 13]);
  const birthDateString = birthDate.format("LL");

  const todayDate = moment();
  const diffDuration = moment.duration(todayDate.diff(birthDate));
  const y = diffDuration.years();
  const m = diffDuration.months();
  const d = diffDuration.days();
  const ageArray = [];
  !!y ? ageArray.push(y + " years") : null;
  !!m ? ageArray.push(m + " months") : null;
	!!d ? ageArray.push(d + " days") : null;
	const ageString = ageArray.join(', ');
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="flex flex-col items-center">
  <div class="w-full max-w-md bg-gray-300 shadow-lg rounded overflow-hidden">
    <div class="text-white bg-yellow-900 p-8">
      <h1 class="text-3xl text-center">About Me</h1>
    </div>
    <div class="px-8 py-2">
      <p>
        I was born exactly {ageString} ago, on {birthDateString}. Which makes me
        a pretty good boy :)
      </p>
      <p>My room-mates are Ally and Benny</p>
      <img src="images/family.jpg" alt="my family" />
	  </div>
  </div>
</div>
