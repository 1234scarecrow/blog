<template>
  <!-- 网页头 -->
	<header>
		<div class="headerContent">
			<!--  -->
			<!-- <img src="https://s2.ax1x.com/2020/02/18/3k33EF.png" alt="logo.png" /> -->
			<a href="index.html">
        <img src="../assets/img/logo1.png" alt="">
      </a>
			<ul>
				<li>
					<a href="">笔记</a>
				</li>
				<li>
					<a href="">收藏</a>
				</li>
				<li>
					<a href="">随笔</a>
				</li>
				<li>
					<a href="">我</a>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
  // @ 是 /src 的别名
  export default{
    data:()=>{
      return{
      
      }

    },
    components:{
    },
  }
</script>

<style>
  /* css reset */
/* 内外边距清零 / 设置盒子模型 */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 网页背景色 / 字体颜色 / 字体 */
html{
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
  font-family: 'iconfont';  /* project id 1645799 */
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
header{
  width: 100%;
  margin-bottom: 20px;
}

.headerContent{
  width: 1200px;
  margin: 0 auto 20px;
}

/* 头部样式 */
header{
  box-shadow: #00000066 0 0 10px;
}
.headerContent{
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}
.headerContent a:first-child{
  height: 80px;
}
.headerContent ul {
  height: 80px;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.headerContent li {
  line-height: 80px;
  text-align: center;
  font-size: 2rem;
  width: 100px;
}
.headerContent img {
  height: 80px;
}
</style>