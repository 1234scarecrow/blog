<template>
  <footer>
		<p>
			©2020 1234scarecrow | 
			<a href="https://weibo.com/u/5449069760"><span class="iconfont">&#xe696;</span></a>
			<a href="https://www.zhihu.com/people/yimi-yang-guang-a-76/"><span class="iconfont">&#xe6ba;</span></a>
			<a href=""><span class="iconfont">&#xe799;</span></a>
		</p>
	</footer>
</template>

<script>
  // @ 是 /src 的别名

  export default {
    data: () => {
      return {

      }

    },
    components: {

    },
  }
</script>

<style>
  /* css reset */
  /* 内外边距清零 / 设置盒子模型 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 网页背景色 / 字体颜色 / 字体 */
  html {
    color: rgb(87, 87, 87);
    background-color: rgb(247, 247, 247);
    font-family: "Microsoft Yahei";
  }

  /* a标签样式 */
  a {
    color: rgb(87, 87, 87);
    text-decoration: none;
    transition: all 0.25s ease;
  }

  a:hover {
    color: rgb(0, 0, 0);
  }

  /* icon font 配置 */
  @font-face {
    font-family: 'iconfont';
    /* project id 1645799 */
    src: url('//at.alicdn.com/t/font_1645799_0afdmz3ta44v.eot');
    src: url('//at.alicdn.com/t/font_1645799_0afdmz3ta44v.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_1645799_0afdmz3ta44v.woff2') format('woff2'),
      url('//at.alicdn.com/t/font_1645799_0afdmz3ta44v.woff') format('woff'),
      url('//at.alicdn.com/t/font_1645799_0afdmz3ta44v.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_1645799_0afdmz3ta44v.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 24px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    /* -webkit-text-stroke-width: 0.2px; */
    -moz-osx-font-smoothing: grayscale;
  }

  /* 页面宽度布局 */
  footer {
    width: 1200px;
    margin: 0 auto 20px;
  }

  /* 脚部 */
  footer {
    line-height: 100px;
    height: 100px;
    text-align: center;
    font-size: 18px;
    border-top: solid 1px rgba(145, 138, 138, 0.4);
  }
  footer span{
    margin: 0 3px;
  }
</style>