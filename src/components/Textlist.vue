<template>
      <div class="maincontent">
        <div v-if="loading" class="loading">
            <p>loading...</p>
        </div>
        <div v-else class="textslist">
          <ul>
              <li v-for="post in posts">
                 <router-link :to="{ name: 'writerinfo', params: { name:post.author.loginname }}" :title="post.author_id">
                     <img :src="post.author.avatar_url" :title="post.author.loginname"/>
                 </router-link>
                 <span><span id="replyNu">{{ post.reply_count }}</span>/{{ post.visit_count }}</span>
              <router-link :to="{ name: 'mesContent', params: { id: post.id,name:post.author.loginname }}" :title="post.title">
                     {{post.title}}
                 </router-link>
                 <span class="last_reply">
						{{ post.last_reply_at | formatDate}}
					</span>
              </li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
     name:'Textlist',
     data () {
	    return {
	      posts:{},
	      loading:false
	    }
      },
      methods: {
          getData(){
              this.$http({
                  url: 'https://cnodejs.org/api/v1/topics',
                  method: 'get',
                  params: {
                      page: 1,
                      limit: 30
                  }
              }).then((response)=>{
                  if(response.data.success===true){
                     this.posts=response.data.data;
                     this.loading=false;
                  }
              }).catch((error)=>{
                  alert('error');
              })
          }
      },
      beforeMount(){
          this.loading=true,
          this.getData();
      }
}
//rem是css3的的属性，相对于根元素进行大小变化
</script>
<style scoped>
.loading p{
    color: black;
    font-size: 35px;
    width: 200px;
    margin: 200px auto;
    animation: waiting 1s infinite alternate-reverse;
}
@keyframes waiting{
    from{
       transform: translateY(0);
    }
    to{
        transform: translateY(30px);
    }
}
.textslist {           
		background-color: white;
		padding: 0.5rem;             
		margin: 0.5rem 3rem;
	}
	.textslist li {
		list-style: none;
		margin-bottom: 14px;
		border-bottom: 1px solid #E7E7E7;
		line-height: 30px;
	}
	.textslist ul li img {
		width: 1.5rem;
		height: 1.5rem;
	}
	.textslist li span {
		display: inline-block;
		text-align: center;
		width: 70px;
		font-size: 12px;
		margin: 0 10px;
	}
	.textslist a {
		text-decoration: none;
		color: inherit;
	    white-space: nowrap;
	    display: inline-block;
	    vertical-align: middle;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    max-width: 70%;
	}
	.textslist a:visited {
		color:#858585;
	}	
	.textslist .last_reply {
		float: right;
   		font-size: 0.7rem;
   	    margin-top: 0.3rem;
	}
    #replyNu{
        color: purple;
        display: inline;
    }
</style>
