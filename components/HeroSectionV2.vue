<template>
  <section id="home" ref="heroSection" class="relative flex h-screen min-h-[700px] w-full flex-col justify-end pb-24 px-6 md:px-12 bg-background-dark overflow-hidden">
    <div class="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="relative z-10 w-full max-w-[1600px] mx-auto" ref="heroContent">
      <div class="mb-12 border-l border-white/20 pl-6 py-2 hero-meta opacity-0">
        <p class="font-mono text-sm uppercase tracking-[0.2em] text-primary mb-2">Portfolio 2024</p>
        <p class="font-mono text-xs text-white/50 uppercase tracking-widest">UI/UX • Interaction • Branding</p>
      </div>
      <h1 class="text-[12vw] leading-[0.8] font-bold tracking-tighter text-white mix-blend-normal">
        <span class="block hero-line overflow-hidden"><span class="block text-swap-fill">DIGITAL</span></span>
        <span class="block hero-line overflow-hidden"><span class="block text-transparent text-swap-outline" style="-webkit-text-stroke: 1px rgba(255,255,255,0.8);">NOIR</span></span>
        <span class="block hero-line overflow-hidden"><span class="block text-swap-fill">CRAFT</span></span>
      </h1>
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
  tl.to('.hero-meta', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out'
  })

  tl.from('.hero-line > span', {
    y: 200,
    duration: 1.5,
    stagger: 0.1,
    ease: 'power4.out'
  }, "-=0.5")

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