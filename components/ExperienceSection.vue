<template>
  <section id="resume" ref="sectionRef" class="relative py-32 bg-background-dark overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="mb-20" ref="headerRef">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          <span class="text-primary">Resume</span> & Experience
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
      </div>

      <!-- Timeline Container -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical Line -->
        <div class="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] timeline-line-gradient md:-translate-x-1/2 h-full origin-top scale-y-0" ref="lineRef"></div>

        <!-- Experience Items -->
        <div class="space-y-16">
          <div v-for="(item, index) in experiences" :key="index" class="relative flex flex-col md:flex-row items-start group experience-item opacity-0 translate-y-8">
            
            <!-- Mobile Timeline Dot (Left) -->
            <div class="absolute left-[19px] top-0 w-5 h-5 rounded-full border-4 border-background-dark bg-primary md:hidden z-20"></div>

            <!-- Left Content (Date/Location for Desktop) -->
            <div class="md:w-1/2 md:pr-12 md:text-right md:pt-1 hidden md:block">
              <div :class="{'md:text-left md:pl-12 md:pr-0': index % 2 !== 0}">
                <span class="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-mono mb-2">
                  {{ item.year }}
                </span>
                <h4 class="text-white text-lg font-bold">{{ item.company }}</h4>
                <p class="text-slate-400 text-sm">{{ item.location }}</p>
              </div>
            </div>

            <!-- Center Dot (Desktop) -->
            <div class="absolute left-1/2 -translate-x-1/2 top-1 w-5 h-5 rounded-full border-4 border-background-dark bg-primary hidden md:block z-20 shadow-[0_0_15px_rgba(var(--color-primary),0.5)] transition-transform duration-300 group-hover:scale-125"></div>

            <!-- Right Content (Details for Desktop / All for Mobile) -->
            <div class="pl-16 md:pl-12 md:w-1/2 md:pt-0 w-full" :class="{'md:order-first md:text-right md:pr-12 md:pl-0': index % 2 !== 0}">
              
              <!-- Mobile Header (Visible only on mobile) -->
              <div class="md:hidden mb-2">
                <span class="inline-block py-1 px-2 rounded bg-white/5 text-primary text-xs font-mono mb-1">
                  {{ item.year }}
                </span>
                <h4 class="text-white text-lg font-bold">{{ item.company }}</h4>
                <p class="text-slate-400 text-sm mb-2">{{ item.location }}</p>
              </div>

              <!-- Card -->
              <div class="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 group-hover:bg-white/[0.07] group-hover:translate-x-2 md:group-hover:translate-x-0 md:group-hover:-translate-y-1">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  {{ item.role }}
                </h3>
                <ul class="space-y-3">
                  <li v-for="(point, i) in item.points" :key="i" class="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const sectionRef = ref(null)
const headerRef = ref(null)
const lineRef = ref(null)

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()

const experiences = [
  {
    year: '2023 - Present',
    company: 'TICO Ltda.',
    role: 'Full Stack Developer',
    location: 'Chile',
    points: [
      'Desarrollo e implementación de operaciones CRUD en un sistema de gestión de relaciones con clientes (CRM).',
      'Consumo de API Restful para integración de servicios externos.',
      'Creación de Landing Page de servicios optimizada para conversión.',
      'Control de versiones y flujo de trabajo colaborativo con GitHub.'
    ]
  },
  {
    year: '2022 - 2023',
    company: 'Universidad Mayor',
    role: 'Soporte e Infraestructura',
    location: 'Chile',
    points: [
      'Instalación y configuración de SWITCH Cisco / Hpe.',
      'Instalación de cableado estructurado y mantención de redes.',
      'Resolución de incidencias de conectividad y soporte técnico a usuarios.'
    ]
  },
  {
    year: '2021 - 2022',
    company: 'Universidad Mayor',
    role: 'Técnico de Redes',
    location: 'Chile',
    points: [
      'Instalación y configuración de equipos de red y telecomunicaciones.',
      'Mantenimiento preventivo y correctivo de infraestructura de red.',
      'Apoyo en la gestión de inventario tecnológico.'
    ]
  }
]

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      end: 'bottom bottom',
      toggleActions: 'play none none reverse'
    }
  })

  // Header Animation
  tl.from(headerRef.value, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  // Line Animation
  tl.to(lineRef.value, {
    scaleY: 1,
    duration: 1.5,
    ease: 'power3.inOut'
  }, "-=0.4")

  // Items Animation
  const items = document.querySelectorAll('.experience-item')
  items.forEach((item, index) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: index * 0.2
    })
  })
})
</script>

<style scoped>
/* Custom glow for the timeline line */
.timeline-line-gradient {
  background: linear-gradient(to bottom, transparent, theme('colors.primary'), transparent);
}
</style>