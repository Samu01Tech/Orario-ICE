<template>
  <div class="card NuxtMateria" v-bind:style="{'background-color': colore}">
      <div class="card-content  has-text-centered">
        <div class="columns">
          <div class="column">
            <h1 class="title has-text-white is-size-4-mobile">{{titolo}}</h1>
          </div>
          <div class="column">
            <h2 class="is-2 has-text-white is-size-4-mobile">{{ora}}</h2>
          </div>
        </div>
        <!-- <h2 class="subtitle">{{colore}}</h2> -->
        <footer class="columns">
          <div class="column">
            <a :href="link"><div class="button is-primary">Accedi alla lezione</div></a>
          </div>
          <input hidden v-model="codice">
          <div class="column">
            <b-button class="button is-outlined" icon-right="clipboard-outline" v-clipboard="codice" v-clipboard:success="onCopy" v-clipboard:error="onError">{{codice}}</b-button>
          </div>
        </footer>
      </div>
    </div>
</template>

<script>
export default {
    props: {
    titolo: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    colore: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    codice: {
      type: String,
      required: true
    },
    ora: {
      type: String,
      required: true
    },
  },
  methods: {
    onCopy: function (e) {
      if(!this.$device.isAndroid || !this.$device.isIos){
        this.$buefy.toast.open({
          message: "Codice \"" + e.text + "\" copiato",
          type: 'is-success',
          position: 'is-bottom',
        })
      }
    },
    onError: function (e) {
      this.$buefy.toast.open({
        message: "Impossbile copiare il codice",
        type: 'is-danger',
        position: 'is-bottom',
      })
    }
  }
}
</script>

<style>
.NuxtMateria {
  animation: 1s  appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>