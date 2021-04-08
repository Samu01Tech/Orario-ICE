<template>
  <div>
      <h1 class="title is-uppercase has-text-centered">
          <hr class="has-background-grey-lighter">
          Quick Links
          <hr class="has-background-grey-lighter">
      </h1>
    <b-button
      class="button is-success is-fullwidth block is-medium"
      tag="a"
      href="https://exameet.com/course/view.php?id=9"
      >🧲 Exameet</b-button>
    <b-button
      class="button is-danger is-fullwidth block is-medium"
      tag="a"
      href="https://webapps.unitn.it/gestionecorsi/"
      >👨‍🏫 Gestione Corsi Moodle</b-button>
    <b-button
      class="button is-primary is-fullwidth block is-medium" 
      tag="a"
      href="https://www.esse3.unitn.it/Home.do"
      >👤 Esse3</b-button>
  </div>
</template>

<style>
.NuxtLinks {
  animation: 1s appear;
  margin: auto;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}

/*
user
magnet
chalkboard-teacher
*/
</style>

