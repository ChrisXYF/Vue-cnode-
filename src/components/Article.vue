<template>
  <div class="ArticleSection">
    <div class="loading" v-if="loading">Loading...</div>
    <div class="article" v-else>
      <h1>{{post.title}}</h1>
      <ul>
        <li>• 分类:{{ postTab }}</li>
        <li>• {{ post.visit_count }}次访问</li>
        <li>• 发布于:{{ post.create_at | formatDate }}</li>
        <li>• 作者:
          <router-link
            :to="{ name:'writerinfo',params:{name:post.author.loginname }}">
			{{ post.author.loginname }}</router-link>
        </li>
      </ul>
      <div v-html="post.content" id="content"></div>
    </div>
    <div id="reply">
      <div v-for="(reply,index) in post.replies" class="replySec">
        <div class="replyUp">
          <router-link :to="{name: 'writerinfo',params:{name: reply.author.loginname}}">
            <img :src="reply.author.avatar_url">
          </router-link>
          <router-link
            :to="{name: 'writerinfo',params:{name: reply.author.loginname}}"
          >{{reply.author.loginname}}</router-link>
          <span>{{index + 1}}楼</span>
        </div>
        <section v-if="reply.ups.length > 0" class="thumbsClass">
          <span>❤</span>
          {{reply.ups.length}}
        </section>
        <p v-html="reply.content" class="replycontent"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      post: [],
      loading: false
    };
  },
  computed: {
    postTab() {
      var type = this.post.tab.toString();
      if ((type = "ask")) {
        return "问答";
      }
      if ((type = "share")) {
        return "分享";
      }
      if ((type = "job")) {
        return "招聘";
      }
      if ((type = "good")) {
        return "精华";
      }
    }
  },
  methods: {
    getData() {
      //获取文章信息
      this.$http({
        url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`, //ES6语法，引入组件内的 route object（路由信息对象）
        method: "get",
        params: {
          mdrender: true
        }
      })
        .then(response => {
          if (response.data.success === true) {
            this.post = response.data.data;
            this.loading = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.loading = true;
    this.getData();
  },
  watch: {
    //同一路由下，数据更新
    $route() {
      this.getData();
    }
  }
};
</script>

<style>
.ArticleSection {
  box-sizing: border-box;
  display: inline-block;
  width: 70%;
  padding: 0.8rem 0.4rem;
  margin-left: 3%;
}
.ArticleSection #content {
  padding: 2rem 1rem 2rem 1rem;
  line-height: 1.6;
  padding-bottom: 1rem;
  overflow: hidden;
}
.ArticleSection > h1 {
  font-size: 0.1rem;
}
.article {
  background: white;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-top: 10px;
}
.article h1 {
  font-size: 1.2rem;
  font-weight: 600;
}
.article ul li {
  display: inline-block;
  font-size: 0.8rem;
  color: #a8a3a3;
  padding-left: 5px;
}
.article li a {
  color: inherit;
  text-decoration: none;
}
.replySec {
  box-sizing: border-box;
  border-bottom: 1px solid #c0ccda;
  width: 100%;
  padding: 1rem;
  background: white;
}
#reply {
  display: flex;
  flex-direction: column;
}
.replyUp {
  display: inline-block;
  overflow: hidden;
}
.replyUp span {
  display: inline-block;
  vertical-align: top;
  margin-top: 4px;
  margin-left: 6px;
  font-size: 14px;
  color: #806767;
}
.thumbsClass {
  float: right;
  color: red;
}
.replyUp a {
  color: black;
  text-decoration: none;
  font-weight: 600;
}
.replyUp a:nth-of-type(2) {
  margin-left: -14px;
  vertical-align: super;
}
.replySec p {
  padding-left: 50px;
  clear: both;
  overflow: hidden;
}
.replySec img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
}

.replySec p img {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.article img {
  overflow: hidden;
  width: 100%;
}
</style>