<template>
  <div>
    <Hero/>
    <nuxt class="NuxtRenderer"/>
  </div>
</template>
<script>
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