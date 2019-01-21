import Vue from 'vue'
import Router from 'vue-router'
import Textlist from '@/components/Textlist'
import about from '@/components/about'
import info from '@/components/Writerinf'
import postcontent from '@/components/Article'
import side from '@/components/Sidebar'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
      	main:Textlist
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        main:about
      }
    },
    {
      path: '/user/:name',
      name: 'writerinfo',
      components: {
        main:info
      },
    },
    {
      path: '/topic/:id&auther=:name',
      name: 'mesContent',
      components: {
        main: postcontent,
        sideBar: side
      }
    }
  ]
})