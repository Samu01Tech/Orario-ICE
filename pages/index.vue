<template>
  <section class="section">
    <div class="content">
      <b-collapse v-for="(g, index) in lezioni.giorni" :key="index" class="card block" animation="slide" :open="isOpen == index" @open="isOpen = index">
            <template #trigger="props">
              <div
                  class="card-header"
                  role="button"
              >
                  <p class="card-header-title">
                      {{g.giorno}}
                  </p>
                  <p class="card-header-title" v-if="g.n == getUnits()">
                      Oggi
                  </p>
                  <a class="card-header-icon">
                      <b-icon
                          :icon="props.open ? 'menu-up' : 'menu-down'">
                      </b-icon>
                  </a>
              </div>
          </template>
          <div>
                    <h1 class="title">{{g.giorno}}</h1>
        <h2 v-for="m in g.materie" :key="m.titolo" class="subtitle">
          {{m.titolo}}
        </h2>     
          </div>

      </b-collapse>
    </div>
  </section>
</template>

<script>
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
    const lezioneoggi = await $content('data/lezioni').fetch()
    const follow = await $content('data/follow').fetch()

    return {
      follow,
      lezioni,
      lezioneoggi
    }
  },
  data(){
    return{
      isOpen: 6,
    }
  }
}
</script>
