<template lang="html">
  <div id='FilmInfo'>
    <div id="detailWrapper">
    <h2>{{film.title}}</h2>
      <div class="film-info">
        <p><span></span> {{film.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'film-info',
  props: ['film']
}
</script>
<style lang="css" scoped>


h2 {
  color: black;
  text-decoration: underline;
  text-decoration-color: fuchsia;
  margin: 10px 0 20px;
  padding-top: 2em;
}

p span {
  font-weight: bold;
}

body {
  image: url('https://images.app.goo.gl/CntZFhAMnCup3r7q8');
}
</style>
