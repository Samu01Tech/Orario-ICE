<template>
  <div>
    <Hero/>
    <nuxt class="NuxtRenderer"/>
  </div>
</template>
<script>
async function A(){
const workbox = await window.$workbox;
if (workbox) {
  workbox.addEventListener('installed', (event) => {
    // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
    if (event.isUpdate) {
      this.$buefy.snackbar.open({
                    message: 'Ricarica per aggiornare',
                    type: 'is-warning',
                    position: 'is-top',
                    indefinite: true,
                })  
      }
  });
}
}
</script>
<style>
.NuxtRenderer {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>