<template>
  <div class="">
    <h1>Add Mood</h1>
    <h1>title</h1>
    <!-- 输入内容 -->
    <input type="text" placeholder="今天心情怎么样?" v-model="content">
    <span>{{content}}</span>
    <button @click="addMood">提交</button>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        content: "",
        mdate: new Date().toLocaleDateString()
      }
    },
    methods: {
      addMood() {
        let data={
          content:this.content,
          mdate:this.mdate
        }
        console.log(data);
        data=this.$serialize(data);
        this.$http.post("/addmood",data).then(res=>{
          if(res.data.code==200){
            alert("提交成功");
          }else{
            alert("提交失败"+res.data.msg)
          }
        })
      }
    }
  }
</script>
<style>
  *{
    color:blueviolet;
  }
</style>