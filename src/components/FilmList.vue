<template lang="html">
  <div v-if="films">
    <ul>
      <filmListItem v-for='(film, index) in films' :key='index' :film='film'/>
    </ul>
  </div>
</template>

<script>
import FilmListItem from './FilmListItem';

export default {
  name: 'film-list',
  components: {
    FilmListItem
  },
  props: ['films']
}
</script>

<style lang="css" scoped>
</style>
