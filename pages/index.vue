<template>
  <section class="section">
    <div class="content">
      <Message></Message>
      <div class="columns">
        <div class="column is-hidden-touch"></div>
        <div class="column is-three-quarters is-full-touch">
          <div class="columns">
            <div class="column">
              <h1 class="title is-uppercase has-text-centered">
                  <hr class="has-background-grey-lighter">
                  Orario lezioni
                  <hr class="has-background-grey-lighter">
              </h1>
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
                    <div class="card-header-title is-size-3">
                      {{ g.giorno }}
                    </div>
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
            <div class="column is-narrow">
              <QuickLinks></QuickLinks>
            </div>
          </div>
        </div>
        <div class="column is-hidden-touch"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Materia from "@/components/Materia.vue";
import Message from "@/components/Message.vue";
import QuickLinks from "@/components/Quicklinks.vue";
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
    Materia,
    QuickLinks
  }
};
</script>
