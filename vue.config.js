// Vue.js脚手架项目的初始化配置文件
// 修改此文件需要手动重启
module.exports = {
  // 修改index.html中的BASE_URL变量的值
  // publicPath: "http://127.0.0.1:8081/",  // 默认值改为 "/"
  publicPath: "/",
  // 指定当前项目有哪些页面可供客户端访问
  pages: {
    index: {
      entry: "src/main.js", // 当前页面打包入口文件(必需)
      template:"public/index.html",  // 当前页面的模板文件
      title: "blog_vue",  // 当前页面的标题, 会影响打包变量htmlWebpackPlugin.options.title

    }
  }

}