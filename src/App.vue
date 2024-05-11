<template>
  <v-app>
    <div v-if="!loadedFirstTime" class="loading-page">
      <v-icon class="custon-logo-icon mt-6" icon="$logo-peniel-full-icon" color="white" size="160"></v-icon>
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return { 
      loadedFirstTime: false
    }
  },

  mounted() {
    this.firstTimeLoad()
  },

  methods: {
    firstTimeLoad() {
      
      setTimeout( ()=> {
        const loadComponent = document.querySelector('.loading-page')
        console.log('dale', loadComponent )
        loadComponent?.classList.add('mist-animation')
      }, 2000)

      setTimeout( ()=> {
        this.loadedFirstTime = true
      }, 4000)
    }
  }
}
  //
</script>
<style lang="scss" scoped>
.loading-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131313;
  z-index: 2;
  position: absolute;
}
.custon-logo-icon ::v-deep {
   animation: rotateLogo 2s ease-out;

   svg {
    max-height: 200px;
   }

  path {
    fill: white !important;
  }
}

.mist-animation {
  animation: mist 2s ease-out !important;
}

@keyframes rotateLogo {
  100% {transform: rotate(360deg);}
}

@keyframes mist {
  100% {opacity: 0;}
}
</style>
