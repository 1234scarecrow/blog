<template>
  <div class="">
    <h1>Add Note</h1>
    <h1>title</h1>
    <!-- 输入标题 -->
    <input type="text" placeholder="请输入标题" v-model="title">
    <span>{{title}}</span>
    <h1>content</h1>
    <!-- 输入内容 -->
    <textarea name="" id="" cols="30" rows="10" placeholder="请输入内容" v-model="content"></textarea>
    <span>{{content}}</span>
    <h1>pubtime</h1>
    <input type="text">
    <button @click="addNote">提交</button>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        title: "",
        content: "",
        pubtime: new Date().toLocaleDateString()
      }
    },
    methods: {
      addNote() {
        let data = {
          title: this.title,
          content: this.content,
          pub_time:this.pubtime
        }
        // console.log(data)
				//把需要提交给服务器的数据进行序列化，转换为 k=v&k=v&.. 形式
				data = this.$serialize(data)
        this.$http.post("/addnote",data).then(res=>{
          if(res.data.code==200){
            alert("提交成功")
            // this.router.push("/note")  // 跳转到note列表
          }else{
            alert("提交失败"+res.data.msg)
          }
        })
      }
    }
  }
</script>
<style>
  * {
    color: blue;
  }
</style>