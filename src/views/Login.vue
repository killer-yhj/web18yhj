<template>
  <div id="app">
    <div class="box1">
        <h1>商场后台管理系统<span class="span1">单店版</span></h1>
        <div class="box2">
          <input type="text" placeholder="账号" v-model="admin"><br>
          <input type="password" placeholder="密码" v-model="password"><br>
          <el-button class="but" :plain="true" @click="dl">登录</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
          admin:'',
          password:'',
          zh:'admin',
          mm:'123'
      }
    },
    methods: {
      dl(){
        if(this.admin==""||this.password==""){
           this.$message({
               showClose: true,
               message: '账号或密码不能为空！',
               type: 'warning' 
           })
        }else if(this.admin!=this.zh||this.password!=this.mm){
          this.$message({
               showClose: true,
               message: '账号或密码不正确！',
                type: 'error'
           })
        }else{
          this.$router.push({
            path:'/home'
          })
        }
      }
    },
}
</script>

<style scoped>
*{
  margin: 0 auto;
}
  #app{
    background-color: #1ab394;
    width: 100%;
    height: 447px;
    padding-top: 130px;
  }
  .box1{
    background-color: white;
    width: 460px;
    height: 280px;
    text-align: center;
    padding-top: 50px;
  }
  .span1{
    font-size: 13px;
    color:white;
    background-color:  #00aeff;
    margin-left: 20px;
    border-radius: 30px;
    padding: 5px 10px;
  }
  .box2{
    margin-top: 50px;
  }
  input{
    margin-bottom: 20px;
    outline: none;
    width: 300px;
    height: 30px;
    text-indent: 10px;
    border: 1px solid #666666;
    border-radius: 5px;
   font-weight: 300;
  }
  .but{
    width: 300px;
    height: 40px;
    background-color: #1ab394;
    border: 1px solid #1ab394;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    color: white;
  }
  .but:hover{
    border: 1px solid #0f7762;
  }
</style>
