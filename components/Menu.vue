<template>
  <header 
    id="main-header"
    :class="[
      'fixed top-0 left-0 right-0 z-[60] flex items-center justify-between transition-all duration-500 ease-out',
      isScrolled ? 'px-6 py-4 md:px-12 md:py-4 bg-background-dark/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-primary/10' : 'px-6 py-6 md:px-12 md:py-8 bg-transparent'
    ]"
  >
    <div class="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary via-purple-500 to-primary transition-all duration-300" :style="{ width: scrollProgress + '%' }"></div>

    <div class="flex items-center gap-2 group cursor-pointer">
      <span class="text-xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors">JD</span>
    </div>
    
    <div class="hidden md:flex items-center gap-12">
      <nav class="flex items-center gap-8">
        <a 
          v-for="(section, index) in sections" 
          :key="index"
          :href="section.href"
          :class="[
            'text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 relative',
            activeSection === section.id ? 'text-primary font-bold scale-110' : 'text-white/60 hover:text-white'
          ]"
        >
          {{ section.label }}
          <span 
            v-if="activeSection === section.id"
            class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
          ></span>
        </a>
      </nav>
    </div>

    <button class="md:hidden text-white p-2">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
const isScrolled = ref(false)
const scrollProgress = ref(0)
const activeSection = ref('home')

const sections = [
  { id: 'home', href: '#home', label: 'Index' },
  { id: 'about', href: '#about', label: 'Profile' },
  { id: 'projects', href: '#projects', label: 'Works' },
  { id: 'contact', href: '#contact', label: 'Contact' }
]

onMounted(() => {
  // Header state change on scroll
  const checkScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  checkScroll() // Initial check
  
  ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    onUpdate: (self) => {
      isScrolled.value = self.scroll() > 50
    }
  })

  // Global scroll progress bar
  gsap.to(scrollProgress, {
    value: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
      onUpdate: (self) => {
        scrollProgress.value = self.progress * 100
      }
    }
  })

  // Active section highlighting
  sections.forEach(section => {
    ScrollTrigger.create({
      trigger: section.href,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => activeSection.value = section.id,
      onEnterBack: () => activeSection.value = section.id
    })
  })
})
</script>
