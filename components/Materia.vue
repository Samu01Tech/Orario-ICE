<template>
    <section class="section">
      <div class="content">
        <div class="columns has-text-centered">
          <div class="column">
            <h2 class="subtitle">{{titolo}}</h2>
          </div>
          <div class="column">
            <h2 class="tag is-primary">{{tag}}</h2>
          </div>
        </div>
        <!-- <h2 class="subtitle">{{colore}}</h2> -->
        <div class="columns has-text-centered">
          <div class="column">
            <h2 class="is-2">{{ora}}</h2>
            <a :href="link"><div class="button is-primary">Accedi alla lezione</div></a>
          </div>
          <div class="column">
            <h3 class="is-3">Codice:</h3>
            <h2 class="is-2">{{codice}}</h2>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
//getElementById("span_trav_emer_med_insur").style.backgroundColor = colore;
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
  }
}
</script>

