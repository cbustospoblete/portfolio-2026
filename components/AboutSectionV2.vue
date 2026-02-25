<template>
  <section id="about" ref="aboutSection" class="relative py-32 px-6 md:px-12 bg-background-dark border-t border-white/5">
    <div class="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="hidden lg:block lg:col-span-2">
        <span class="font-mono text-xs text-white/30">(01)</span>
      </div>
      <div class="col-span-1 lg:col-span-5 flex flex-col justify-between h-full about-content">
        <div>
          <h2 class="text-4xl md:text-5xl font-medium leading-tight mb-8 split-text-reveal overflow-hidden">
            <span class="block reveal-line">About</span>
            <span class="block w-12 h-1 bg-primary mt-2"></span>
          </h2>
          <div class="space-y-6 text-slate-400 font-light text-lg leading-relaxed reveal-text">
            <p>
              I am currently looking to advance my career as a Full Stack Junior Developer. Although I am early in my programming journey, I am deeply passionate about technology and highly motivated to learn and grow in this field. I have had the opportunity to work with various technologies and tools, which have allowed me to develop skills in both frontend and backend development. My recent experience includes working on a CRM system at TICO Ltda., where I developed CRUD operations, landing pages, and consumed RESTful APIs.
            </p>
          </div>
          
          <div class="mt-8 flex flex-wrap gap-4 items-center">
            <a href="/CurriculumVitae.pdf" download="CurriculumVitae.pdf" class="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#16a34a] text-white font-medium hover:bg-[#15803d] transition-colors shadow-lg shadow-green-900/20">
              <span>Download Resume</span>
            </a>
            <SocialLinks />
          </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stats">
          <div v-for="tech in techStack" :key="tech.name" class="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
            <div class="flex items-center gap-4 mb-3">
              <div class="w-10 h-10 flex items-center justify-center" v-html="tech.icon"></div>
              <h3 class="text-xl font-bold text-white">{{ tech.name }}</h3>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed">
              {{ tech.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-1 lg:col-span-5 relative group mt-12 lg:mt-0 about-image">
        <!-- Abstract Code Visualizer -->
        <div class="relative w-full aspect-square max-w-md mx-auto lg:ml-auto bg-[#0f172a] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 group-hover:border-primary/30 transition-colors duration-500">
          <!-- Window Header -->
          <div class="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div class="ml-4 text-xs font-mono text-slate-500">developer.json</div>
          </div>
          
          <!-- Code Content -->
          <div class="p-6 font-mono text-sm leading-relaxed overflow-hidden">
            <div class="text-slate-400">
              <span class="text-purple-400">const</span> <span class="text-blue-400">developer</span> = {
            </div>
            <div class="pl-4 text-slate-300">
              <span class="text-sky-300">name</span>: <span class="text-green-400">'Carlos Bustos'</span>,
            </div>
            <div class="pl-4 text-slate-300">
              <span class="text-sky-300">role</span>: <span class="text-green-400">'Full Stack Developer'</span>,
            </div>
            <div class="pl-4 text-slate-300">
              <span class="text-sky-300">passion</span>: <span class="text-green-400">'Building scalable apps'</span>,
            </div>
            <div class="pl-4 text-slate-300">
              <span class="text-sky-300">stack</span>: [
            </div>
            <div class="pl-8 text-slate-300">
              <span class="text-green-400">'Laravel'</span>,
            </div>
            <div class="pl-8 text-slate-300">
              <span class="text-green-400">'Vue.js'</span>,
            </div>
            <div class="pl-8 text-slate-300">
              <span class="text-green-400">'Nuxt'</span>,
            </div>
            <div class="pl-8 text-slate-300">
              <span class="text-green-400">'Tailwind CSS'</span>
            </div>
            <div class="pl-4 text-slate-300">
              ],
            </div>
            <div class="pl-4 text-slate-300">
              <span class="text-sky-300">hardWorker</span>: <span class="text-purple-400">true</span>,
            </div>
            <div class="pl-4 text-slate-300">
              <span class="text-sky-300">quickLearner</span>: <span class="text-purple-400">true</span>
            </div>
            <div class="text-slate-400">
              };
            </div>
            
            <!-- Cursor Animation -->
            <div class="mt-4 animate-pulse">
              <span class="text-purple-400">developer</span>.<span class="text-blue-400">init</span>();<span class="w-2 h-4 bg-primary inline-block ml-1 align-middle"></span>
            </div>
          </div>

          <!-- Background Glow -->
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SocialLinks from './SocialLinks.vue'

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
const aboutSection = ref(null)

const techStack = [
  {
    name: 'Laravel',
    description: 'I use Laravel, a robust PHP framework, to build secure and scalable web applications with elegant syntax and powerful tools for backend development.',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8"><path d="M7.29961 17.6963L3.1378 18.257L3.71501 19.3486L20.8493 20.892L21.3789 19.9577L19.2612 11.2307L18.491 11.0221L17.5765 15.3533L10.3318 13.9103L12.5458 5.72807L11.7756 5.5195L7.29961 17.6963Z" fill="#F05340"/><path d="M7.29961 17.6963L11.7756 5.5195L12.5458 5.72807L10.3318 13.9103L17.5765 15.3533L18.491 11.0221L19.2612 11.2307L21.3789 19.9577L20.8493 20.892L3.71501 19.3486L3.1378 18.257L7.29961 17.6963Z" stroke="#F05340" stroke-width="0.2"/></svg>` 
  },
  {
    name: 'Vue',
    description: 'I use Vue, a modern JavaScript and Typescript framework, while making dynamic and static websites and applications.',
    icon: `<svg viewBox="0 0 128 128" width="24" height="24"><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6l38.4,66l38.4-66H78.8z"/></svg>`
  },
  {
    name: 'NuxtJS',
    description: 'I use Nuxt, a powerful framework built on top of Vue, to create dynamic and static websites and applications with modern JavaScript and TypeScript',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#00DC82]"><path d="M12 2L2 22h20L12 2z"/><path d="M2 22l10-20 10 20M12 12l5 10H7l5-10z"/></svg>` 
  },
  {
    name: 'Tailwindcss',
    description: 'I use Tailwind CSS, a utility-first CSS framework, to craft responsive and highly customizable user interfaces with efficiency and precision',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#38bdf8]"><path d="M12.0002 6.58579C12.3838 5.43285 13.1497 4.54226 14.1863 4.08639C15.2229 3.63052 16.4253 3.64917 17.4475 4.13745C18.4697 4.62573 19.2081 5.53424 19.4586 6.61376C19.7092 7.69328 19.4457 8.83403 18.7402 9.72265L17.2002 11.6427L12.0002 6.58579Z" fill="currentColor"/><path d="M5.2002 13.6427L6.7402 11.7226C7.44572 10.834 7.70919 9.69328 7.45865 8.61376C7.2081 7.53424 6.46972 6.62573 5.44749 6.13745C4.42526 5.64917 3.2229 5.63052 2.18629 6.08639C1.14969 6.54226 0.383794 7.43285 0.000196725 8.58579L5.2002 13.6427Z" fill="currentColor"/><path d="M18.7998 10.3574L17.2598 12.2774C16.5543 13.166 16.2908 14.3068 16.5414 15.3863C16.7919 16.4658 17.5303 17.3743 18.5525 17.8626C19.5747 18.3509 20.7771 18.3695 21.8137 17.9137C22.8503 17.4578 23.6162 16.5672 23.9998 15.4143L18.7998 10.3574Z" fill="currentColor"/><path d="M12 17.4143C11.6164 18.5672 10.8505 19.4578 9.8139 19.9137C8.77729 20.3695 7.57493 20.3509 6.5527 19.8626C5.53047 19.3743 4.79209 18.4658 4.54154 17.3863C4.291 16.3068 4.55447 15.166 5.25999 14.2774L6.79999 12.3574L12 17.4143Z" fill="currentColor"/></svg>`
  }
]

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
