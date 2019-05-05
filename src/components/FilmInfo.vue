<template lang="html">
  <div id='FilmInfo'>
    <h2>{{film.title}}</h2>
    <div class="film-info">
      <p><span>Description</span>: {{film.description}}</p>
      <p><span>Image</span>: {{film.url}}</p>
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

a {
  color: black;
  text-decoration: none;
  font-style: italic;
  font-weight: bold;
  font-size: 2em;
}
.film-details {
  color: yellow;
  font-variant: small-caps;
}
#filmDetail {
  box-sizing: border-box;
  height: 50vh;
  width: 25vw;
  padding: 10px;
  border: 1px solid yellow;
  margin-right:10px;
}

#detailWrapper {
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  border-radius: 3px;
}

#flexWrapper {
  display: flex;
  justify-content: space-between;
}

#left, #right {
  width: 45%;
}

#right img {
  width: 100%;
}

#left p:first-child {
  margin-top: 0;
}

h2 {
  color: black;
  margin: 10px 0 20px;
  padding: 0;
}

p span {
  font-weight: bold;
}

</style>



<style lang="css" scoped>
</style>
