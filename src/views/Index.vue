<template>
  <div class="">
    <Header></Header>
    <div class="banner">
      <!-- <p>有人说</p>
      <p>男孩儿的桌面</p>
      <p>就是可乐 泡面 搅在一起乱七八糟的线</p>
      <img src="img/bannerBg1.png" alt=""> -->
      <img src="../assets/img/bannerBg11.png" alt="banner1">
      <img src="../assets/img/bannerBg22.png" alt="banner2">
    </div>
    <main>
      <div class="content">
        <!-- 笔记 -->
        <div>
          <h1>笔记</h1>
          <!-- <p>
            <a href="notes/markdown.html">Markdown 基本语法</a>
            <span>2020-2-20</span>
          </p> -->
          <p v-for="note in notes" :key=note.nid>
            <a href="#">{{note.title}}</a>
            <span>{{note.pub_time}}</span>
          </p>
          <!-- <p>
            <a href="notes/markdown.html">{{info.data[0].tname}}</a>
          </p> -->
        </div>
        <!-- 随笔 -->
        <div>
          <h1>随笔</h1>
          <p v-for="jotting in jottings" :key=jotting.jid>
            <a href="">{{jotting.title}}</a>
            <span>{{jotting.pub_time}}</span>
          </p>
          <!-- <p>
            <a href="">Iconfont-阿里巴巴矢量图标库的使用</a>
          </p>
          <p>
            <a href="">Iconfont-阿里巴巴矢量图标库的使用</a>
          </p>
          <p>
            <a href="">Iconfont-阿里巴巴矢量图标库的使用</a>
          </p>
          <p>
            <a href=""></a>
            <span></span>
          </p> -->
        </div>
        <!-- 收藏 -->
        <div>
          <h1>收藏</h1>
          <p v-for="collect in collects" :key=collect.cid>
            <a :href="collect.curl" :key=collect.cid>{{collect.title}}</a>
          </p>
        </div>
      </div>
      <div class="selfIntr">
        <div class="label">
          <span class="iconfont">&#xe706;</span>
          <span>
            <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
          </span>
          <span>
            <a href="https://www.runoob.com/css/css-tutorial.html" target="_blank">CSS 3</a>
          </span>
          <span>
            <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>
          </span>
          <span>
            <a href="https://www.w3school.com.cn/" target="_blank">前端</a>
          </span>
          <span>
            <a href="https://500px.me/" target="_blank">摄影</a>
          </span>
          <span>
            <a href="http://www.zfrontier.com/board/2" target="_blank">外设</a>
          </span>

          <span>
            <a href="http://www.zfrontier.com/board/3" target="_blank">桌面</a>
          </span>
        </div>
        <div class="self">
          <img src="../assets/img/logo2.png" alt="">
          <div>
            <p>生活嘛</p>
            <p>总有一些想要记住的东西</p>
            <p>不妨记下来 拍下来 留在这儿</p>
          </div>
        </div>
        <div class="contact">
          <a href="https://weibo.com/u/5449069760" target="_blank" alt="新浪微博">
            <span class="iconfont">&#xe696;</span>
          </a>
          <a href="https://www.zhihu.com/people/yimi-yang-guang-a-76/" target="_blank" alt="知乎">
            <span class="iconfont">&#xe6ba;</span>
          </a>
          <a href="https://weibo.com/u/5449069760" alt="Github" target="_blank">
            <span class="iconfont">&#xe799;</span>
          </a>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  // @ 是 /src 的别名
  export default {
    data: () => {
      return {
        collects: [
          { cid: 0, title: "", curl: "" }
        ],
        notes: [
          { nid: 0, title: "", pub_time: "" }
        ],
        jottings: [
          { jid: 0, title: "", pub_time: "" }
        ]
      }

    },
    mounted() {
      // 当前组件挂在完成后, 异步请求API接口数据
      this.$http.get("/collect")
        .then(res => {
          console.log(res)
          console.log(res.data.data)
          this.collects = res.data.data
        }),
        this.$http.get("/note")
          .then(res => {
            console.log(res)
            console.log(res.data.data)
            this.notes = res.data.data
          }),
        this.$http.get("/jotting")
          .then(res => {
            console.log(res.data.data)
            this.jottings = res.data.data
          })
    },
    components: {
      Header,
      Footer
    },
  }
</script>

<style>

</style>