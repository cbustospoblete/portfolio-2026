<template>
  <section id="about" ref="aboutSection" class="relative py-24 px-6 md:px-12 bg-background-dark overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="relative group about-image-container" ref="imageContainer">
        <div class="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"></div>
        <div class="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-xl overflow-hidden grain-overlay grayscale hover:grayscale-0 transition-all duration-700">
          <img
            class="w-full h-full object-cover scale-110"
            alt="Professional portrait of a male designer in a minimal studio setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8peH-Fbkz_AhlcZ5KgZQfH6WB23TDmqyA2qHpcG3_lQy9pCmMkfhCk3DstXhMvmZSAM5WUrYxIpVJsFabdznEmPJm2SuYovgXC8g2bS2k8oUqq3-DwAY7z3lLwDh2j8YaeQoSi12ZXlbaKPWWj4D2h-D7D_tIZYg_ZOzvMdAHecAxEXM1AJnEDXDyKaH7EE2VgZCukg8YcbshjorE9xT1kGP61Ws5-1tG6IcCLTpvVJyrq9V4G95n-F78SnjTtlXz9j4KsLlhF98"
          />
          <div class="absolute bottom-6 left-6 z-20">
            <p class="text-white text-xs font-mono mb-1 opacity-70">LOC: SAN FRANCISCO, CA</p>
            <p class="text-white text-xs font-mono opacity-70">EST: 2018</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center about-content" ref="contentContainer">
        <div class="flex items-center gap-4 mb-8 reveal-text">
          <span class="h-[1px] w-12 bg-primary"></span>
          <h2 class="text-primary text-sm font-bold tracking-[0.2em] uppercase">About Me</h2>
        </div>
        <h3 class="reveal-text text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          I combine <span class="text-primary">strategy</span>, design, and technology to solve problems and create brands.
        </h3>
        <div class="space-y-6 text-slate-400 font-light text-lg leading-relaxed reveal-text">
          <p>
            With over 6 years of experience in the digital space, I specialize in crafting intuitive, user-centric interfaces that don't just look good but perform exceptionally.
          </p>
          <p>
            My approach is deeply rooted in understanding the 'why' before addressing the 'how'. Whether it's a complex fintech dashboard or an immersive brand experience, I bring a meticulous attention to detail and a passion for motion and interaction.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 reveal-stats">
          <div>
            <h4 class="text-white text-2xl font-bold mb-1 count-up">50+</h4>
            <p class="text-slate-500 text-sm uppercase tracking-wider">Projects Completed</p>
          </div>
          <div>
            <h4 class="text-white text-2xl font-bold mb-1 count-up">12</h4>
            <p class="text-slate-500 text-sm uppercase tracking-wider">Design Awards</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
const aboutSection = ref(null)
const imageContainer = ref(null)
const contentContainer = ref(null)

onMounted(() => {
  // Image Reveal Effect
  gsap.from(imageContainer.value, {
    scrollTrigger: {
      trigger: aboutSection.value,
      start: 'top 80%',
      end: 'top 50%',
      scrub: 1
    },
    x: -100,
    opacity: 0,
    rotate: -5
  })

  // Text Reveal Stagger
  gsap.from('.reveal-text', {
    scrollTrigger: {
      trigger: contentContainer.value,
      start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
  
  // Stats Pop up
  gsap.from('.reveal-stats', {
     scrollTrigger: {
      trigger: contentContainer.value,
      start: 'top 70%'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)'
  })
})
</script>
