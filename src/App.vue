<template lang="html">
<div id='view'>
  <div id='flexWrapper'>
    <header><h1>Studio Ghibli</h1></header>
    <body><img src="" alt="">

    </body>
  </div>
  <router-view id='view'/>
</div>

</div>
</template>

<script>

import Header from'@/components/Header'



export default {
  name: "app",
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>

h1 {
  text-decoration: underline;
  text-decoration-color: fuchsia;
}

#flexWrapper {
  display: flex;
  justify-content: center;
  border-bottom: 3px;
  border-bottom-color: fuchsia;

}



</style>
