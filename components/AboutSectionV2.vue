<template>
  <section id="about" ref="aboutSection" class="relative py-32 px-6 md:px-12 bg-background-dark border-t border-white/5">
    <div class="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="hidden lg:block lg:col-span-2">
        <span class="font-mono text-xs text-white/30">(01)</span>
      </div>
      <div class="col-span-1 lg:col-span-5 flex flex-col justify-between h-full about-content">
        <div>
          <h2 class="text-4xl md:text-5xl font-medium leading-tight mb-12 split-text-reveal overflow-hidden">
            <span class="block reveal-line">Creating digital</span>
            <span class="block reveal-line"><span class="italic text-primary">silence</span> <span>in a</span></span>
            <span class="block reveal-line">noisy world.</span>
          </h2>
          <div class="space-y-8 text-slate-400 font-light text-lg leading-relaxed max-w-md reveal-text">
            <p>
              I don't just design interfaces; I curate experiences. My work is a study in reduction—removing the unnecessary until only the essential, impactful core remains.
            </p>
            <p>
              Based in San Francisco, I merge technical precision with artistic direction to help brands speak clearly.
            </p>
          </div>
        </div>
        <div class="mt-16 pt-8 border-t border-white/10 flex gap-12 reveal-stats">
          <div>
            <span class="block text-2xl font-bold text-white">06</span>
            <span class="text-xs font-mono uppercase text-white/40">Years Exp</span>
          </div>
          <div>
            <span class="block text-2xl font-bold text-white">42</span>
            <span class="text-xs font-mono uppercase text-white/40">Projects</span>
          </div>
          <div>
            <span class="block text-2xl font-bold text-white">12</span>
            <span class="text-xs font-mono uppercase text-white/40">Honors</span>
          </div>
        </div>
      </div>
      <div class="col-span-1 lg:col-span-5 relative group mt-12 lg:mt-0 about-image">
        <div class="relative aspect-[3/4] w-full overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-out">
          <img 
            alt="Professional portrait of a male designer in a minimal studio setting" 
            class="w-full h-full object-cover scale-110 transition-transform duration-[1.5s]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8peH-Fbkz_AhlcZ5KgZQfH6WB23TDmqyA2qHpcG3_lQy9pCmMkfhCk3DstXhMvmZSAM5WUrYxIpVJsFabdznEmPJm2SuYovgXC8g2bS2k8oUqq3-DwAY7z3lLwDh2j8YaeQoSi12ZXlbaKPWWj4D2h-D7D_tIZYg_ZOzvMdAHecAxEXM1AJnEDXDyKaH7EE2VgZCukg8YcbshjorE9xT1kGP61Ws5-1tG6IcCLTpvVJyrq9V4G95n-F78SnjTtlXz9j4KsLlhF98"
          />
          <div class="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div class="absolute -bottom-6 -right-6 font-mono text-xs text-primary uppercase tracking-widest bg-background-dark px-4 py-2 border border-primary/30">
          Senior Designer
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
const aboutSection = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection.value,
      start: "top 70%",
      end: "bottom bottom",
      toggleActions: "play none none reverse"
    }
  })

  // Text Reveal
  tl.from(".reveal-line", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
  })

  // Paragraphs Reveal
  tl.from(".reveal-text p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.5")

  // Stats Reveal
  tl.from(".reveal-stats > div", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.3")

  // Image Reveal
  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: aboutSection.value,
      start: "top 60%",
      scrub: 1,
      end: "bottom bottom"
    },
    y: 100,
    opacity: 0
  })

  // Image Parallax Scale
  gsap.to(".about-image img", {
    scrollTrigger: {
      trigger: aboutSection.value,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    },
    scale: 1
  })
})
</script>