<script lang="ts">
  export let title: string;
  export let description: string;
  export let date: string;
  export let icon: string;
  export let href: string;
</script>

<a href={href} class="not-prose no-underline">
  <div class="flex flex-row gap-6 p-4 outline-2 outline-zinc-900 hover:outline-primary transition-colors">
    <img src={icon} alt="Article icon." class="w-40 aspect-square">
    <article class="flex flex-col gap-2 ">
      <h1 class="mt-0 mb-0 text-2xl text-zinc-300 font-bold">{title}</h1>
      <p class="mb-0 mt-0">{description}</p>
      <p class="font-bold mt-0 mb-0">{date}</p>
    </article>
  </div>
</a>
