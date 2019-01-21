<template>
    <div class="postsmation">
        <div v-if="loading" class="loading">
            <p>loading...</p>
        </div>
       <div class="postsmation" v-else>
	    	<section>
				<img :src="posts.avatar_url" :title="posts.loginname"/>
				<span>{{posts.loginname}}</span>
				<p>{{posts.score}} 积分</p>
				<p>注册时间：{{ posts.create_at | formatDate }}</p>
	    	</section>
			<div class="replies">
				<p>回复的主题</p>
				<ul>
                    <!-- 记得router-link里name要用' ' -->
					<li v-for="item in posts.recent_replies">
						<router-link :to="{ name: 'mesContent', params: { id: item.id,name:item.author.loginname }}" :title="item.title">
							{{item.title}}
						</router-link>
					</li>
				</ul>
			</div>
			<div class="topics">
				<p>创建的主题</p>
				<ul>
					<li v-for="item in posts.recent_topics">
						<router-link :to="{ name: 'mesContent', params: { id: item.id,name:item.author.loginname }}" :title="item.title">
							{{item.title}}
						</router-link>
					</li>
				</ul>
			</div>
		</div>

    </div>
</template>
<script>
export default {
    name: 'writerinf',
    data(){
        return{
            loading: false,
            posts:[]
        }
    },
    methods:{
        getData(){
            this.$http({
                url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`, //ES6
                method: 'get'
            }).then((response)=>{
                    if(response.data.success === true ){
                           this.posts=response.data.data;
                           this.loading=false
                    }
                }
            ).catch(
                (error)=>{
                    alert('error');
                }
            )
        }
    },
    beforeMount(){
        this.loading= true;
        this.getData();
	},
}
</script>
<style scoped>
.postsmation {
		background: white;
		width: 75%;
		margin: 10px auto;
	}
	.postsmation section {
		padding: 12px;
	}
	.postsmation img {
		width: 5rem;
	}
	.postsmation li {
		list-style:none;
	}
	.postsmation .replies,
	.postsmation .topics {
	    font-size: 0.72rem;
	    border-top: 10px #DDDDDD solid;
	}
	.postsmation > div > p {
		padding: 12px 0 12px 12px;
	    background-color: rgba(212, 205, 205, 0.17);
  		font-size: 0.75rem;		
	}
	.postsmation > div >ul > li {
		padding: 4px 0 4px 12px;
		white-space: nowrap;
	    font-size: 0.72rem;
		text-overflow: ellipsis;
		overflow: hidden;
	    line-height: 30px;
        vertical-align: middle;	
	}
	.postsmation > div >ul > li > a {
		color: #094E99;
		text-decoration: none;
	}
</style>

