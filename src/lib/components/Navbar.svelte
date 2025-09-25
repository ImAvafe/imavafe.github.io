<script lang="ts">
  import { page } from "$app/stores";

  export let title: string = "Title";
  export let items: {
    label: string;
    href: string;
  }[] = [];
</script>

<div class="navbar px-4 bg-base-100 outline-2 dark:outline-neutral">
  <div class="w-full flex flex-wrap gap-2 justify-between">
    <a href="/" class="no-underline"><h2 class="mb-0 mt-0 text-primary">{title}</h2></a>
    <ul class="list-none flex flex-row flex-wrap gap-2 mt-0 mb-0 px-0">
      {#each items as item}
        <li class="p-0 mt-0 mb-0"><a href={item.href} class="btn btn-{($page.url.pathname == `/${item.href}`.replace(/^\//, "")) && "primary" || "neutral"} font-semibold font-mono">{item.label}</a></li>
      {/each}
    </ul>
  </div>
</div>