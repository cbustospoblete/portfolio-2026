<template>
  <section id="contact" ref="contactSection" class="relative py-24 px-6 md:px-12 bg-background-dark overflow-hidden">
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="max-w-3xl mx-auto relative z-10">
      <div class="text-center mb-16 contact-header">
        <p class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Contact</p>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Let's create something extraordinary.</h2>
        <p class="text-slate-400 text-lg">Have a project in mind? Drop me a line.</p>
      </div>
      
      <form class="space-y-8 glass-panel p-8 md:p-12 rounded-2xl contact-form opacity-0">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="relative group form-group">
            <input class="peer block w-full border-0 border-b border-slate-700 bg-transparent py-2.5 px-0 text-white focus:border-primary focus:ring-0 focus:outline-none transition-colors" id="name" placeholder=" " type="text"/>
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary" for="name">Your Name</label>
          </div>
          <div class="relative group form-group">
            <input class="peer block w-full border-0 border-b border-slate-700 bg-transparent py-2.5 px-0 text-white focus:border-primary focus:ring-0 focus:outline-none transition-colors" id="email" placeholder=" " type="email"/>
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary" for="email">Email Address</label>
          </div>
        </div>
        <div class="relative group form-group">
          <input class="peer block w-full border-0 border-b border-slate-700 bg-transparent py-2.5 px-0 text-white focus:border-primary focus:ring-0 focus:outline-none transition-colors" id="subject" placeholder=" " type="text"/>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary" for="subject">Subject</label>
        </div>
        <div class="relative group form-group">
          <textarea class="peer block w-full border-0 border-b border-slate-700 bg-transparent py-2.5 px-0 text-white focus:border-primary focus:ring-0 focus:outline-none transition-colors resize-none" id="message" placeholder=" " rows="4"></textarea>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary" for="message">Tell me about your project</label>
        </div>
        <div class="pt-4 flex justify-center form-group">
          <button class="group relative flex w-full md:w-auto min-w-[200px] items-center justify-center gap-3 overflow-hidden rounded-md bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:bg-primary-glow" type="button">
            <span>Send Message</span>
            <span class="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">send</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
const contactSection = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactSection.value,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  })

  tl.from(".contact-header > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  })
  
  tl.to(".contact-form", {
    opacity: 1,
    duration: 0.5
  }, "-=0.3")

  tl.from(".form-group", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.3")
})
</script>