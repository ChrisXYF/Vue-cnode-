<template>
    <div class="myInfo">
         <div class="show" id="me">
          <img src="../assets/timg.jpg" alt="" width="150px"><br>
           <span>YuFengxxx</span>
          <p>
             When you think of giving up,think about why you held on so long.
          </p>
         </div>
         <div class="show" id="texts">
               <p>
                   这算是Vue初级小项目，主要掌握了下在Vue-cli下router的使用还有一些基本操做，用到了很多知识，比如:filter,axios……
                   希望继续努力，做出更复杂的项目.
               </p>
         </div>
    </div>
</template>
<script>
export default {
    name: 'about',
}
</script>
<style scoped>
.myInfo{
    color: black;
    width: 1000px;
    height: 600px;
    margin: 30px auto;
    background: white;
    box-shadow: 1px 1px 1px #ccc;
}
.show{
    float: left;
    height: 100%;
    text-align: center;
}
#me{
    width: 300px;
    border-right: 2px solid #ccc;
}
#me p{
    color: #ccc;
    text-indent: 2em
}
#me img{
    margin: 100px 0 20px 0;
}
#me span{
    color: black;
    font-weight: bold;
}
#texts{
    width:500px;
    text-align: center
}
#texts p{
    margin: 200px 100px;
    width: 500px;
    text-indent: 2em;
    text-align: left
}
</style>

