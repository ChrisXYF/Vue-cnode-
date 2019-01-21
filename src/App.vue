<template> 
  <div id="app">
    <mHeader></mHeader>
    <router-view name='main'></router-view>
    <router-view name='sideBar'></router-view>
  </div>
</template>

<script>
import mHeader from './components/mHeader'

export default {
  name: 'app',
  components:{
   mHeader
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px; 
}
body{
  background-color: rgb(90, 103, 128);
}
</style>
