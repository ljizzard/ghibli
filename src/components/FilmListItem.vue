<template lang="html">
  <li v-on:click='handleClick'>{{film.title}}</li>
</template>

<script>
import FilmImage from'@/components/FilmImage';
import {eventBus} from '@/main.js';

export default {
  name: 'list-item',
  props: ['film'],
  components:{
    FilmImage
  },
  methods:{
    handleClick(){
      eventBus.$emit('film-selected', this.film)
    }
  }
}
</script>

<style lang="css" scoped>

li:hover {
  color: orange;
}
</style>
