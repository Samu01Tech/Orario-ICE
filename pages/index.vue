<template>
  <section class="section">
    <ul>
      <li v-for="g in lezioni.giorni" :key="g.giorno">
        <h1 class="title">{{g.giorno}}</h1>
        <h2 v-for="m in g.materie" :key="m.titolo" class="subtitle">
          {{m.titolo}}
        </h2>
      </li>
    </ul>
        <ul class="Follow">
  <li v-for="f in follow.people" :key="f.name" class="Follow-listItem">
    <a :href="`https://twitter.com/${f.twitter}`">{{ f.name }}</a>
    <small v-for="tag in f.tags" :key="tag" class="Follow-tag">
      {{ tag }}
    </small>
  </li>
</ul>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const lezioni = await $content('data/lezioni').fetch()
    const follow = await $content('data/follow').fetch()

    return {
      follow,
      lezioni
    }
  },
  
}
</script>
