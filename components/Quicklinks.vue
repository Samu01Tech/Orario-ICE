<template>
  <div>
      <h1 class="title is-uppercase">
          Quick Links
      </h1>
    <b-button
      class="button is-success is-fullwidth block"
      tag="a"
      href="https://exameet.com/course/view.php?id=9"
      icon-left="clipboard-outline"
      >Exameet</b-button>
    <b-button
      class="button is-danger is-fullwidth block"
      tag="a"
      href="https://webapps.unitn.it/gestionecorsi/"
      icon-left="clipboard-outline"
      >Gestione Corsi</b-button>
    <b-button
      class="button is-primary is-fullwidth block" 
      tag="a"
      href="https://www.esse3.unitn.it/Home.do"
      icon-left="clipboard"
      >Esse3</b-button>
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

