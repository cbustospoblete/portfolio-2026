<template>
  <div class="flex flex-wrap items-center gap-4">
    <a :href="config.public.githubUrl"
       target="_blank" rel="noopener"
       class="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/90 hover:bg-white/5 hover:border-white/30 transition">
      <span class="material-symbols-outlined text-[18px]">open_in_new</span>
      <span class="text-sm font-medium">GitHub</span>
    </a>
    <a :href="config.public.linkedinUrl"
       target="_blank" rel="noopener"
       class="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition">
      <span class="material-symbols-outlined text-[18px]">link</span>
      <span class="text-sm font-bold">LinkedIn</span>
    </a>
  </div>
  </template>
  
  <script setup>
  const config = useRuntimeConfig()
  </script>
