<template>
  <section class="section">
    <div class="content">
      <b-collapse v-for="(g, index) in lezioni.giorni" :key="index" class="card block" animation="slide" :open="isOpen == index" @open="isOpen = index">
            <template #trigger="props">
              <header
                  class="card-header"
                  role="button"
              >
                  <p class="card-header-title">
                      {{g.giorno}}
                  </p>
                  <!-- <b-taglist v-for="m in g.materie" :key="m.titolo">
                    <b-tag class="is-primary">{{m.tag}}</b-tag>
                  </b-taglist>    -->
                  <!-- <p class="card-header-title" v-if="g.n == getUnits()">
                      Oggi
                  </p> -->
                  <p class="card-header-icon">
                      <b-icon
                          :icon="props.open ? 'menu-up' : 'menu-down'">
                      </b-icon>
                  </p>
              </header>
          </template>
          <div class="card-content">
            <div v-for="m in g.materie" :key="m.titolo" class="card block materie">
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
  </section>
</template>

<script>
import Materia from '@/components/Materia.vue'
export default {
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
  async asyncData ({ $content }) {
    const lezioni = await $content('data/lezioni').fetch()
    const follow = await $content('data/follow').fetch()

    return {
      follow,
      lezioni
    }
  },
  data(){
    return{
      isOpen: 6,
    }
  },
  components: {
    Materia
  }
}
</script>