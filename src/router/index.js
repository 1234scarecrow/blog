import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

// 配置路由字典
const routes = [
  // 懒加载的路由地址
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  // 默认 首页 路由地址
  {
    path:"/",
    component:Index,
    meta:{
      title:"首页-1234稻草人"
    }
  },
  // 笔记 路由地址
  {
    path:"/note",
    component:()=>import("../views/Note.vue"),
    meta:{
      title:"收藏-1234稻草人"
    }
  },
  // 收藏 路由地址
  {
    path:"/collect",
    component:()=>import("../views/Collect.vue"),
    meta:{
      title:"收藏-1234稻草人"
    }
  },
  // 随笔 路由地址
  {
    path:"/jotting",
    component:()=>import("../views/Jotting.vue"),
    meta:{
      title:"随笔-1234稻草人"
    }
  },
  // 我 路由地址
  {
    path:"/self",
    component:()=>import("../views/Self.vue"),
    meta:{
      title:"me-1234稻草人"
    }
  },
  // md笔记 路由地址
  {
    path:"/note_md",
    component:()=>import("../views/Markdown.vue"),
    meta:{
      title:"MD语法-1234稻草人"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 使用全局的导航守卫, 在进入每个路由组件前  修改单页面的标题
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title=to.meta.title
  }else{
    document.title="1234稻草人的 blog"
  }
  next()  // 放行, 执行后续的路由
})

export default router
