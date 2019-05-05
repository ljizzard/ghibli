<template lang="html">
  <div v-if='films' id="view">
    <FilmList :films='films'/>
    <FilmInfo v-if="selectedFilm" :film="selectedFilm"/>
  </div>
</template>

<script>
import FilmList from '@/components/FilmList';
import FilmInfo from '@/components/FilmInfo';
import {eventBus} from '@/main.js';

export default {
  name: 'main-view',
  components: {
    FilmList,
    FilmInfo
  },
  data(){
    return {
      films: [],
      selectedFilm: null
    }
  },
  mounted(){
    const promise =
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then (response => response.json())
    .then(filmData => this.films = filmData);


    eventBus.$on('film-selected',(film) => {
      this.selectedFilm = film;
    })
  },
}

</script>

<style lang="css" scoped>
</style>
