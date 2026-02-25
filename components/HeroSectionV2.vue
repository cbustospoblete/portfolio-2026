<template>
  <section id="home" ref="heroSection" class="relative flex min-h-screen w-full flex-col justify-center px-6 md:px-12 bg-background-dark overflow-hidden pt-20">
    <div class="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
    
    <div class="relative z-10 w-full max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 items-center" ref="heroContent">
      <!-- Left Column: Text -->
      <div class="order-2 lg:order-1 flex flex-col justify-center">
        <div class="mb-8 border-l border-white/20 pl-6 py-2 hero-meta opacity-0">
          <p class="font-mono text-sm uppercase tracking-[0.2em] text-primary mb-2">Carlos Bustos • 2026</p>
          <p class="font-mono text-xs text-white/50 uppercase tracking-widest">Laravel • Vue • Full Stack</p>
        </div>
        
        <h1 class="text-[10vw] lg:text-[8vw] leading-[0.8] font-bold tracking-tighter text-white mix-blend-normal mb-8">
          <span class="block hero-line overflow-hidden"><span class="block text-swap-fill">FULL</span></span>
          <span class="block hero-line overflow-hidden"><span class="block text-transparent text-swap-outline" style="-webkit-text-stroke: 1px rgba(255,255,255,0.8);">STACK</span></span>
          <span class="block hero-line overflow-hidden"><span class="block text-swap-fill">DEV</span></span>
        </h1>

        <div class="flex flex-wrap gap-6 hero-cta opacity-0">
          <button @click="scrollTo('#projects')" class="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300">
            View Work
          </button>
          <button @click="scrollTo('#contact')" class="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </div>

      <!-- Right Column: Image -->
      <div class="order-1 lg:order-2 flex justify-center lg:justify-end hero-image opacity-0">
        <div class="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] group cursor-pointer" @click="scrollTo('#about')">
          <div class="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
          <div class="relative w-full h-full rounded-full overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
            <img src="~/assets/img/yo-animado-github.jpg" alt="Carlos Bustos" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
          </div>
          
          <!-- Floating Badge -->
          <div class="absolute -bottom-4 -right-4 bg-background-dark border border-white/10 p-4 rounded-full animate-bounce-slow">
            <span class="material-symbols-outlined text-primary text-3xl">code</span>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-12 right-12 flex items-center gap-4 hero-scroll opacity-0">
      <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 rotate-90 origin-right translate-x-full">Scroll</span>
      <div class="h-16 w-[1px] bg-white/20 overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-primary animate-rain"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
const heroSection = ref(null)
const heroContent = ref(null)

const scrollTo = (id) => {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection.value,
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse"
    }
  })

  // Initial Animation
  tl.to('.hero-image', {
    opacity: 1,
    duration: 1.5,
    ease: 'power2.out'
  })

  tl.to('.hero-meta', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out'
  }, "-=1")

  tl.from('.hero-line > span', {
    y: 200,
    duration: 1.5,
    stagger: 0.1,
    ease: 'power4.out'
  }, "-=0.5")

  tl.to('.hero-cta', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  }, "-=1")

  tl.to('.hero-scroll', {
    opacity: 1,
    duration: 1,
    delay: 0.5
  }, "-=1")

  // Scroll Parallax
  gsap.to(heroContent.value, {
    scrollTrigger: {
      trigger: heroSection.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 100,
    opacity: 0.5
  })

  // Rain animation for scroll indicator
  gsap.to('.animate-rain', {
    y: '200%',
    duration: 1.5,
    repeat: -1,
    ease: 'none'
  })

  // Swap text fill/outline animation loop
  const swapTl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 2
  })

  swapTl.to('.text-swap-fill', {
    color: 'transparent',
    webkitTextStroke: '1px rgba(255,255,255,0.8)',
    duration: 1,
    ease: 'power2.inOut'
  }, 0)

  swapTl.to('.text-swap-outline', {
    color: 'white',
    webkitTextStroke: '0px rgba(255,255,255,0)',
    duration: 1,
    ease: 'power2.inOut'
  }, 0)
})
</script>

<style scoped>
/* No extra styles needed as Tailwind covers most, and GSAP handles the rain animation */
</style>