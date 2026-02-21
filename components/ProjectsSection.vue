<template>
  <section id="projects" ref="projectsSection" class="relative py-32 bg-background-dark overflow-hidden">
    <div class="absolute inset-0 bg-liquid-mesh opacity-30 pointer-events-none"></div>
    <div class="px-6 md:px-12 max-w-[1920px] mx-auto mb-12 flex items-center justify-between">
      <div class="project-header">
        <h2 class="text-7xl font-bold outline-text mb-4 opacity-70">
          SELECTED<sup class="text-2xl ml-2 font-light opacity-50">(4)</sup>
        </h2>
      </div>
      <div class="hidden md:flex gap-4 project-header">
        <span class="text-slate-500 text-xs tracking-widest uppercase rotate-90 origin-left translate-x-4">Scroll</span>
      </div>
    </div>

    <div ref="scrollContainer" class="flex gap-8 md:gap-16 px-6 md:px-12 pb-12 w-fit items-center will-change-transform">
      <!-- Card 1 -->
      <div class="scroll-card group relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] rounded-3xl overflow-hidden glass-panel hover-card-glow transition-all duration-700 cursor-pointer">
        <div class="project-title-overlay text-white">NEOBANK</div>
        <div class="absolute inset-0 z-10 p-8 flex flex-col justify-end">
          <div class="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div class="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span class="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 rounded-full backdrop-blur-md border border-primary/20">Fintech</span>
              <span class="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-white/70 bg-white/5 rounded-full backdrop-blur-md border border-white/10">Mobile App</span>
            </div>
            <h3 class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary-glow transition-colors">NeoBank Dashboard</h3>
            <div class="flex justify-between items-end mt-4">
              <p class="text-slate-300 text-lg max-w-md font-light opacity-80">Redefining the mobile banking experience for the next generation of investors.</p>
              <button class="size-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/20 group-hover:scale-110">
                <span class="material-symbols-outlined text-2xl">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90 z-10"></div>
          <img class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
               alt="Dashboard interface displaying financial data graphs on a dark screen"
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW4-txU8EnyHMeAQen89aY-FSPrd8CtEvWh3B9QGJkAXSCPNPN4U9MRpKZF2dViOFE_D2IK4dJkPTljI16Jrq6cA5UNP38aIMKYwx7iy_rZ7QWbIGyayxOftfMnDJ84z5rrCY3PpViCHWSuntD4Jte6to840fCtIuhavY4B2wz4rEkJ-bFhgwugFjOKOTVsEasVnxGaCL7jq_grgSLzeTTH99x8MnQhCe9l5wwQaKThBAg3yRlridC6WRgBwDQxNYG4PNGFVnPU_o" />
        </div>
      </div>

      <!-- Card 2 -->
      <div class="scroll-card group relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] rounded-3xl overflow-hidden glass-panel hover-card-glow transition-all duration-700 cursor-pointer">
        <div class="project-title-overlay text-white">VITALITY</div>
        <div class="absolute inset-0 z-10 p-8 flex flex-col justify-end">
          <div class="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div class="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span class="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 rounded-full backdrop-blur-md border border-primary/20">HealthTech</span>
              <span class="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-white/70 bg-white/5 rounded-full backdrop-blur-md border border-white/10">AI Integration</span>
            </div>
            <h3 class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary-glow transition-colors">Vitality AI</h3>
            <div class="flex justify-between items-end mt-4">
              <p class="text-slate-300 text-lg max-w-md font-light opacity-80">AI-powered health monitoring system with predictive analytics.</p>
              <button class="size-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/20 group-hover:scale-110">
                <span class="material-symbols-outlined text-2xl">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90 z-10"></div>
          <img class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
               alt="Clean minimalistic mobile application interface for health tracking"
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXomU9LErzuzwloFmM0v7Zcm3EBaQ2py6-HLdzWFXRdkb2OJHp_qI1HJxRqdA8DimEBnQT9atrH1S4JdEm8qnrnd_KxURv6965mCwYGq8hWpPk2i_G2PFk24EvHeHwJDFYmShPHQBAa65lZU5d6AqQTcItSxzT6NrVSBo2dq6nerbt0-RnkVdxBNcgnrZcFXYIYcKzZKsdmEW7v2vzN4_sI9H1-Ff886QSd7bTR1XvIlu16nQn3bgtQCl4QD3XKA1gblkl2DDKWbI" />
        </div>
      </div>

      <!-- Card 3 -->
      <div class="scroll-card group relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] rounded-3xl overflow-hidden glass-panel hover-card-glow transition-all duration-700 cursor-pointer">
        <div class="project-title-overlay text-white">METRICS</div>
        <div class="absolute inset-0 z-10 p-8 flex flex-col justify-end">
          <div class="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div class="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span class="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 rounded-full backdrop-blur-md border border-primary/20">SaaS</span>
              <span class="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-white/70 bg-white/5 rounded-full backdrop-blur-md border border-white/10">Web App</span>
            </div>
            <h3 class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary-glow transition-colors">Metrics Flow</h3>
            <div class="flex justify-between items-end mt-4">
              <p class="text-slate-300 text-lg max-w-md font-light opacity-80">Enterprise-grade analytics platform for marketing teams.</p>
              <button class="size-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/20 group-hover:scale-110">
                <span class="material-symbols-outlined text-2xl">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90 z-10"></div>
          <img class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
               alt="Modern e-commerce website layout displayed on a monitor"
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAToAmb6gZCExBSlMG2ElClwaWhbE702q0fTUNUmuOgayX_qI_4ajrKDu4zyPBldcftpgQyVlhwnvxm2KPfBG-P4wFtjSM7N37jOCQzlKWjVAcFqUbG91ruqj57kSyJjrEpl0pKIWzkJzRfs2w3hxU1IBT37CQ73Le5omYdlIvNAbKeWK9K6BOPPL29BVRQjoNLlgXK6qR3q2AchIUuO144WBvdXinVRLpKpetKBtKi2pgxegBqeRH2-3fv7YsPJNKTne69N0saS5k" />
        </div>
      </div>

      <!-- Card 4 -->
      <div class="scroll-card group relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] rounded-3xl overflow-hidden glass-panel hover-card-glow transition-all duration-700 cursor-pointer">
        <div class="project-title-overlay text-white">LUXE</div>
        <div class="absolute inset-0 z-10 p-8 flex flex-col justify-end">
          <div class="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div class="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span class="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 rounded-full backdrop-blur-md border border-primary/20">E-Commerce</span>
              <span class="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-white/70 bg-white/5 rounded-full backdrop-blur-md border border-white/10">Mobile</span>
            </div>
            <h3 class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary-glow transition-colors">Luxe Shop</h3>
            <div class="flex justify-between items-end mt-4">
              <p class="text-slate-300 text-lg max-w-md font-light opacity-80">Premium shopping experience with AR product preview.</p>
              <button class="size-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/20 group-hover:scale-110">
                <span class="material-symbols-outlined text-2xl">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90 z-10"></div>
          <img class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
               alt="Fashion app interface showing luxury clothing items"
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_9524w8O1hT1M4O2lDkZtCq-kM9qN2lF6oJ5pG7aH8rI3sV4bY9cE0dK1L2n3m4o5P6qR7s8t9u0v1w2x3y4z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
const projectsSection = ref(null)
const scrollContainer = ref(null)

onMounted(() => {
  // Horizontal Scroll Effect
    if (scrollContainer.value && projectsSection.value) {
      const getScrollAmount = () => {
        return -(scrollContainer.value.scrollWidth - window.innerWidth)
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsSection.value,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount()) + 1000}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      })

      tl.to(scrollContainer.value, {
        x: 0,
        duration: 0.5
      })

      tl.to(scrollContainer.value, {
        x: getScrollAmount,
        duration: 3,
        ease: "none"
      })

    // Header Animation
    gsap.from('.project-header', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: projectsSection.value,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })
    
    // Cards Animation (Staggered parallax inside horizontal scroll)
    const cards = scrollContainer.value.querySelectorAll('.scroll-card')
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.05,
        scrollTrigger: {
          trigger: projectsSection.value,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })
    })
  }
})
</script>