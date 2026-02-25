<template>
  <footer class="bg-background-dark border-t border-white/5 py-12 relative overflow-hidden">
    <!-- Decorative background element -->
    <div class="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    
    <div class="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        
        <!-- Left Side: Brand & Message -->
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold text-white mb-2">Carlos Bustos</h2>
          <p class="text-slate-400 max-w-md font-light">
Thanks for stopping by my portfolio. I’m constantly seeking new challenges and opportunities to build innovative solutions.          </p>
        </div>

        <!-- Right Side: Social Links -->
        <div class="flex gap-6">
          <a :href="config.public.githubUrl" target="_blank" rel="noopener noreferrer" 
             class="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
            <svg class="w-6 h-6 text-white group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a :href="config.public.linkedinUrl" target="_blank" rel="noopener noreferrer" 
             class="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 transition-all duration-300">
            <svg class="w-6 h-6 text-white group-hover:text-[#0077b5] transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <!-- Email / Contact Action -->
          <a href="mailto:cbustos.poblete@gmail.com" class="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300" title="Send me an email">
             <span class="material-symbols-outlined text-white group-hover:text-green-400 transition-colors">mail</span>
          </a>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-mono">
        <p>&copy; {{ new Date().getFullYear() }} Carlos Bustos. All rights reserved.</p>
        <p class="mt-2 md:mt-0">Designed and developed with ❤️ using Vue/Nuxt</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig()
</script>