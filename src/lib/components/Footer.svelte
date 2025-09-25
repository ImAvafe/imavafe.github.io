<script lang="ts">
  export let description: string = "lorem ipsum";
  export let links: {
    label: string;
    href: string;
  }[] = [];
</script>

<div class="px-4 py-4 outline-2 dark:outline-zinc-900">
  <div class="w-full flex flex-wrap justify-between">
    <p class="mt-0 mb-0">{description}</p>
    <ul class="list-none flex flex-row flex-wrap mt-0 mb-0 px-0">
      {#each links as link}
        <li class="p-0 mt-0 mb-0">
          <a href={link.href} class="semibold font-mono">{link.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>