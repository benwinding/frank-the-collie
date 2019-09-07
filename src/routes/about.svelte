<script>
  import * as moment from "moment";

  const birthDate = moment([2018, 10, 13]);
  const todayDate = moment();

  function getAgeDuration() {
    const diffDuration = moment.duration(todayDate.diff(birthDate));
    return diffDuration;
  }

  function durationToString(duration) {
    const y = duration.years();
    const m = duration.months();
    const d = duration.days();
    const ageArray = [];
    !!y ? ageArray.push(y + " years") : null;
    !!m ? ageArray.push(m + " months") : null;
    !!d ? ageArray.push(d + " days") : null;
    const ageString = ageArray.join(", ");
    return ageString;
  }

  function getAgeString() {
    const ageDuration = getAgeDuration();
    const ageString = durationToString(ageDuration);
    return ageString;
  }

  function getBirthdayString() {
    const birthDateString = birthDate.format("LL");
    return birthDateString;
  }

  function getNextBirthdayString() {
    const nextBirthday = getNextBirthday();
    const durationNextBirthday = moment.duration(nextBirthday.diff(todayDate));
    const nextBirthdayString = durationToString(durationNextBirthday);
    return nextBirthdayString;
  }

  function getNextBirthday() {
    const ageDuration = getAgeDuration();
    const yearsOld = ageDuration.years() + 1;
    const nextBirthday = birthDate.clone().add(yearsOld, "year");
    return nextBirthday;
  }

  const stats = [
    { label: "Weight", value: "18.3 kg" },
    { label: "Highest Jump", value: "1.3 m (kitchen counter)" },
    { label: "Birthday", value: getBirthdayString() },
    { label: "Age", value: getAgeString() },
    { label: "Next Birthday", value: getNextBirthdayString() }
  ];
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
      <p>Hey There,</p>
      <p>I'm a freelancing border-collie currently working in Adelaide. My Talent's include:</p>
      <ul class="list-disc list-inside">
       <li>Running</li>
       <li>Fetching</li>
       <li>Getting pats</li>
      </ul>
      <p><a href="contact" class="text-blue-500 font-bold">Contact me</a> about any offers or problems you think I can help with.</p>
      <p>I live in a share house at the moment (with Benny and Ally), below is a photo of us.</p>
      <img src="images/family.jpg" alt="my family" />

      <h1 class="my-3 text-xl">Aditional Stats</h1>
      <div class="w-full">
        <div class="bg-white shadow-md rounded">
          <table class="text-left w-full border-collapse">
            <tbody>
              {#each stats as { label, value }, i}
                <tr class="hover:bg-grey-lighter">
                  <td
                    class="py-2 px-6 border-b border-grey-light font-bold
                    text-right">
                    {label}
                  </td>
                  <td class="py-2 px-6 border-b border-grey-light">{value}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
