<template>
  <div class="hello">
    <img src="../assets/cnode.svg" alt="" width="200px">
    <router-link :to="{name:'root'}">message</router-link>
    <span id="aboutme"><router-link :to="{name:'about'}">about me</router-link></span>
    
  </div>
</template>

<script>
export default {
  name: 'mHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 60px;
  background: #ccc;
}
img{
vertical-align:top;
margin-left: 15px;
}
a{
  text-decoration: none;
  font-size:30px;
  font-family:fantasy;
  line-height: 60px;
  margin-left: 10px;
}
#aboutme{
  float: right;
  margin-right: 20px;
  
}
#aboutme a{
  color: black
}
/* .hello img{

} */
</style>
