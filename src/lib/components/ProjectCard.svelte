<script lang="ts">
  import type { Project } from "$lib/data/projects";
  import websiteIcon from "$lib/icons/website.svg";
  import robloxIcon from "$lib/icons/roblox.svg";
  import githubIcon from "$lib/icons/github.svg";
	import { openProject } from "../../stores";

  export let project: Project;
  
  const projectIconMap = {
    roblox: robloxIcon,
    github: githubIcon,
    website: websiteIcon,
  }

  function handleClick() {
    const projectModal = document.getElementById("project_modal")
    if (projectModal) {
      projectModal.showModal()
    }

    openProject.set(project)
  }
</script>

<button on:click={handleClick} class="cursor-pointer">
  <div class="relative block max-w-sm w-full aspect-video rounded-xl ring-white/20 ring-1 overflow-hidden transition duration-300 hover:duration-300 hover:ring-primary hover:ring-2 hover:bg-fixed">
    <img src={project.bannerSrc} alt="Project thumbnail" class="w-full h-full duration-500 hover:duration-500 hover:scale-105" />
    <span class="absolute bottom-0 left-0 right-0 bg-black/50 p-2 pl-4 pr-4 text-2xl text-white font-medium flex items-center justify-between pointer-events-none">
      <p class="text-xl">{project.displayName}</p><img src={projectIconMap[project.platform]} alt="{project.platform}" class="h-8" />
    </span>
  </div>
</button>