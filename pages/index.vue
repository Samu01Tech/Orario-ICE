<template>
  <section class="section">
    <div class="content">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-three-quarters">
          <b-message
            title="Messaggi importanti"
            type="is-info"
            syze="is-medium"
            has-icon
            aria-close-label="Close message"
          >
            Il giorno 8/04/2021 la lezione di Calcolo delle Probabilità è
            anticipata alle ore 12:00
          </b-message>
          <b-collapse
            v-for="(g, index) in lezioni.giorni"
            :key="index"
            class="card block"
            animation="slide"
            :open="isOpen == index"
            @open="isOpen = index"
          >
            <template #trigger="props">
              <!-- <span class="tag is-size-6 is-success is-flex is-justify-content-center" v-if="g.n == getUnits()">
                Oggi
              </span> -->
              <header class="card-header" role="button">
                <div class="card-header-title is-size-3">{{ g.giorno }}</div>
                <p class="card-header-icon">
                  <b-icon :icon="props.open ? 'menu-up' : 'menu-down'">
                  </b-icon>
                </p>
              </header>

              <footer class="card-footer">
                <div v-for="m in g.materie" :key="m.titolo">
                  <span
                    class="tag ml-4 my-3"
                    v-bind:style="{
                      'background-color': m.colore,
                      color: '#FFFFFF'
                    }"
                    >{{ m.tag }}</span
                  >
                </div>
              </footer>
            </template>
            <div class="card-content">
              <div
                v-for="m in g.materie"
                :key="m.titolo"
                class="card block materie"
              >
                <Materia
                  :titolo="m.titolo"
                  :tag="m.tag"
                  :colore="m.colore"
                  :link="m.link"
                  :codice="m.codice"
                  :ora="m.ora"
                ></Materia>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Materia from "@/components/Materia.vue";
export default {
  /*
  methods:{
    getUnits: function() {
      let d = new Date()
      let n = d.getUTCDay()
      return n
    }
  },
  
  beforeMount(){
    this.getUnits()
  },
  */
  async asyncData({ $content }) {
    const lezioni = await $content("data/lezioni").fetch();

    return {
      lezioni
    };
  },
  data() {
    return {
      isOpen: 6
    };
  },
  components: {
    Materia
  }
};
</script>
