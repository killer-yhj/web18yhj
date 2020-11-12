<template>
    <div id="app">
        <div class="box1">
            <p class="p1">商品后台管理系统<span class="span1">单店版</span></p>
        </div>
        <div class="box2">
          <ul class="ul1">
              <li><img src="../../002.jpg" class="tu1"></li>
              <li>Test</li>
              <li class="el-icon-s-tools" @click="sh"></li>
              <li><el-button class="but" :plain="true" @click="exit">X 退出</el-button></li>
          </ul>
        </div>
        <div class="box3" v-if="show">
            <div class="box4">
                 <p>旧密码</p>
                 <input type="password">
                <p>新密码</p>
                 <input type="password">
                <p>确认新密码</p>
                <input type="password">
                <button>修改密码</button> <button @click="sh2">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{
            show:''
        }
    },
    methods: {
        sh(){
            this.show= !this.show;
        },
        sh2(){
            this.show= !this.show;
        },
        exit(){
            this.$message({
                showClose: true,
                 message: '退出成功！'
            }),
            this.$router.push({
                path:'/login'
            })
        }
    },
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    margin: 0 auto;
}
#app{
    background-color: white;
    padding: 8px 10px;
    height: 45px;
    border: 1px solid #eee;
    position: fixed;
    width: 100%;
    z-index: 1000;
}
.box1{
    width: 50%;
    float: left;
}
.p1{
    font-size: 28px;
    margin-left: 5px;
    font-weight: 600;
    line-height: 45px;
  }
  .span1{
     font-size: 13px;
    color:white;
    background-color:  #00aeff;
    margin-left: 10px;
    border-radius: 30px;
    padding: 4px 10px;
  }
  .box2{
    width: 25%;
    float: right;
     height: 45px;
  }
  .tu1{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
  }
  .ul1{
       display: flex;
        align-items: center;
  }
  .ul1 li{
      display: inline;
      list-style: none;
      cursor: pointer;
  }
  .box3{
     width: 305px;
    height: 500px;
    position: absolute;
    right: 0px;
    top: 63px;
    padding: 5px 8px;
    background-color: grey;
    z-index: 100;
    color: white;
  }
  .box4{
      margin-left: 50px;
      margin-top: 80px;
  }
  .box4 p{
      margin-bottom: 10px;
  }
  .box4 input{
      margin-bottom: 10px;
      width: 200px;
      height: 30px;
  }
  .box4 button{
      margin-right: 20px;
      cursor: pointer;
      padding: 3px 7px;
      width: 90px;
      height: 30px;
  }
  .box4 button:nth-of-type(1){
      background-color: #1ab394;
      border: 1px;
      outline: none;
      color: white;
      border-radius: 4px;
  }
  .box4 button:nth-of-type(2){
      background-color: white;
      border: 1px solid grey;
      outline: none;
      color: black;
      border-radius: 4px;
  }
  .but{
      border:0px;
  }
</style>