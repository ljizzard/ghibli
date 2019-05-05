<template lang="html">
<div id='view'>
  <div id='flexWrapper'>
    <header><h1>Studio Ghibli</h1></header>
  </div>
  <router-view id='view'/>
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

#flexWrapper {
  display: flex;
  justify-content: center;
  border-bottom: 3px;
  border-bottom-color: fuchsia;


}



</style>
