<template>
  <div>
    <Hero/>
    <nuxt class="NuxtRenderer"/>
  </div>
</template>
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