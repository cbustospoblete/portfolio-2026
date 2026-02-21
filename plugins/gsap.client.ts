import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
    
    // Configurar valores por defecto globales si es necesario
    ScrollTrigger.defaults({
      markers: false
    })

    // Exponer gsap y ScrollTrigger para usar en componentes
    return {
      provide: {
        gsap,
        ScrollTrigger
      }
    }
  }
})