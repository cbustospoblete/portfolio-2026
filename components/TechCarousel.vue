<template>
  <section class="py-20 bg-background-dark border-t border-white/5 overflow-hidden">
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
      <h3 class="text-2xl font-medium text-white/80 text-center">Technologies I work with</h3>
    </div>
    
    <div class="relative w-full overflow-hidden">
      <div class="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background-dark to-transparent"></div>
      <div class="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background-dark to-transparent"></div>
      
      <div class="flex items-center gap-16 animate-infinite-scroll w-max hover:[animation-play-state:paused]">
        <!-- Original Set -->
        <div v-for="tech in technologies" :key="tech.name" class="flex flex-col items-center gap-4 group opacity-50 hover:opacity-100 transition-opacity duration-300">
          <div class="w-16 h-16 p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:bg-white/10 transition-all" v-html="tech.icon"></div>
          <span class="text-sm font-mono text-white/60 group-hover:text-primary transition-colors">{{ tech.name }}</span>
        </div>
        
        <!-- Duplicate Set for Infinite Scroll -->
        <div v-for="tech in technologies" :key="`${tech.name}-dup`" class="flex flex-col items-center gap-4 group opacity-50 hover:opacity-100 transition-opacity duration-300">
          <div class="w-16 h-16 p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:bg-white/10 transition-all" v-html="tech.icon"></div>
          <span class="text-sm font-mono text-white/60 group-hover:text-primary transition-colors">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  {
    name: 'Laravel',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><path d="M7.29961 17.6963L3.1378 18.257L3.71501 19.3486L20.8493 20.892L21.3789 19.9577L19.2612 11.2307L18.491 11.0221L17.5765 15.3533L10.3318 13.9103L12.5458 5.72807L11.7756 5.5195L7.29961 17.6963Z" fill="#F05340"/><path d="M7.29961 17.6963L11.7756 5.5195L12.5458 5.72807L10.3318 13.9103L17.5765 15.3533L18.491 11.0221L19.2612 11.2307L21.3789 19.9577L20.8493 20.892L3.71501 19.3486L3.1378 18.257L7.29961 17.6963Z" stroke="#F05340" stroke-width="0.2"/></svg>`
  },
  {
    name: 'Vue.js',
    icon: `<svg viewBox="0 0 128 128" class="w-full h-full"><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6l38.4,66l38.4-66H78.8z"/></svg>`
  },
  {
    name: 'Nuxt',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-[#00DC82]"><path d="M12 2L2 22h20L12 2z"/><path d="M2 22l10-20 10 20M12 12l5 10H7l5-10z"/></svg>`
  },
  {
    name: 'Tailwind',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#38bdf8]"><path d="M12.0002 6.58579C12.3838 5.43285 13.1497 4.54226 14.1863 4.08639C15.2229 3.63052 16.4253 3.64917 17.4475 4.13745C18.4697 4.62573 19.2081 5.53424 19.4586 6.61376C19.7092 7.69328 19.4457 8.83403 18.7402 9.72265L17.2002 11.6427L12.0002 6.58579Z" fill="currentColor"/><path d="M5.2002 13.6427L6.7402 11.7226C7.44572 10.834 7.70919 9.69328 7.45865 8.61376C7.2081 7.53424 6.46972 6.62573 5.44749 6.13745C4.42526 5.64917 3.2229 5.63052 2.18629 6.08639C1.14969 6.54226 0.383794 7.43285 0.000196725 8.58579L5.2002 13.6427Z" fill="currentColor"/><path d="M18.7998 10.3574L17.2598 12.2774C16.5543 13.166 16.2908 14.3068 16.5414 15.3863C16.7919 16.4658 17.5303 17.3743 18.5525 17.8626C19.5747 18.3509 20.7771 18.3695 21.8137 17.9137C22.8503 17.4578 23.6162 16.5672 23.9998 15.4143L18.7998 10.3574Z" fill="currentColor"/><path d="M12 17.4143C11.6164 18.5672 10.8505 19.4578 9.8139 19.9137C8.77729 20.3695 7.57493 20.3509 6.5527 19.8626C5.53047 19.3743 4.79209 18.4658 4.54154 17.3863C4.291 16.3068 4.55447 15.166 5.25999 14.2774L6.79999 12.3574L12 17.4143Z" fill="currentColor"/></svg>`
  },
  {
    name: 'HTML5',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#E34F26]"><path d="M3 2H21L19.5 19L12 22L4.5 19L3 2Z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18V6M12 18L17 16.5L18 8H7.5L8.5 12H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: 'CSS3',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#1572B6]"><path d="M3 2H21L19.5 19L12 22L4.5 19L3 2Z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18V6M12 18L17 16.5L18 8H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 8H12M8.5 12H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: 'JavaScript',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#F7DF1E]"><rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fill-opacity="0.1"/><path d="M16 8V16H12V8M8 12H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: 'TypeScript',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#3178C6]"><rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fill-opacity="0.1"/><path d="M16 16V12H12M12 12V16M12 12H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 8H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: 'Node.js',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#339933]"><path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12L21 7M12 12V22M12 12L3 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: 'PHP',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#777BB4]"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 15C8 15 8 11 10 11C12 11 12 15 12 15M14 15C14 15 14 11 16 11C18 11 18 15 18 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: 'MySQL',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#4479A1]"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17V7M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: 'Git',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#F05032]"><path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12V22M12 12L3 7M12 12L21 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  }
]
</script>

<style scoped>
@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 40s linear infinite;
}
</style>