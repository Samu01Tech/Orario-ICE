<template>
  <section class="section">
    <div class="content">
      
      <b-collapse v-for="(g, index) in lezioni.giorni" :key="index" class="card block" animation="slide" :open="isOpen == index" @open="isOpen = index">
            <div :id="g.giorno"></div>
            <template #trigger="props"><a :href="'#' + g.giorno" >
              <span class="tag is-size-6 is-warning is-flex is-justify-content-center" >
                Oggi
              </span>
              <header class="card-header" role="button" >
                  <div class="card-header-title is-size-3">{{g.giorno}}</div>
                  <p class="card-header-icon">
                      <b-icon
                          :icon="props.open ? 'menu-up' : 'menu-down'">
                      </b-icon>
                  </p>
              </header>
              
              <footer class="card-footer" v-if="isOpen != index">
              <div v-for="m in g.materie" :key="m.titolo">
                <span class="tag ml-4 my-2" v-bind:style="{'background-color': m.colore, 'color': '#FFFFFF'}">{{m.tag}}</span>
              </div>
              </footer>
          </a></template>
          <div class="card-content" >
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

    return {
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