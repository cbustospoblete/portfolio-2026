<template>
  <section id="home" ref="heroSection" class="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-center bg-background-dark overflow-hidden">
    <div class="absolute inset-0 bg-mesh opacity-60"></div>
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4s]"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
    <div ref="heroContent" class="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
      <p class="hero-item text-primary font-medium tracking-[0.2em] text-sm mb-6 uppercase">Senior UI/UX Designer</p>
      <h1 class="hero-item text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 mix-blend-overlay opacity-90">
        CRAFTING <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">DIGITAL</span> <br />
        EXPERIENCES
      </h1>
      <p class="hero-item max-w-xl text-slate-400 text-lg md:text-xl leading-relaxed mb-12 font-light">
        Building the future of digital interaction through strategic design and immersive storytelling.
      </p>
      <div class="hero-item flex gap-6">
        <a href="#projects" class="group relative flex items-center justify-center h-12 px-8 bg-white text-black rounded-full font-bold text-sm tracking-wide overflow-hidden transition-transform hover:scale-105">
          <span class="relative z-10">View Work</span>
          <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </a>
        <a href="#contact" class="flex items-center justify-center h-12 px-8 border border-white/20 text-white rounded-full font-bold text-sm tracking-wide hover:bg-white/5 transition-colors">
          Contact Me
        </a>
      </div>
    </div>
    <div class="hero-item absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
      <span class="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll to explore</span>
      <span class="material-symbols-outlined text-white/50">keyboard_arrow_down</span>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
const heroSection = ref(null)
const heroContent = ref(null)

onMounted(() => {
  // Initial animation
  const tl = gsap.timeline()
  
  tl.from('.hero-item', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power4.out'
  })

  // Scroll Parallax Effect
  gsap.to(heroContent.value, {
    scrollTrigger: {
      trigger: heroSection.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 200,
    opacity: 0,
    scale: 0.9
  })
})
</script>
