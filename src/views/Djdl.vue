<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>单击登录设置</li>
      </ul>
    </div>
    <p class="p1">单击登录设置</p>
    <div class="box2">
      <p class="p2">
        <span class="span1">是否开启单点认证</span>
        <el-radio v-model="radio" label="1">是</el-radio>
        <el-radio v-model="radio" label="2">否</el-radio>
      </p>
      <p class="p2">
        <span class="span2">认证地址</span>
        <el-input v-model="input" placeholder="" class="inp1"></el-input>
        <el-button type="danger">删除</el-button>
      </p>
      <p class="p3">
            <el-input v-model="input" placeholder="" class="inp1"></el-input>
            <el-button type="danger">删除</el-button>
      </p>
    <p class="p3">
            <el-input v-model="input" placeholder="" class="inp1"></el-input>
            <el-button type="danger">删除</el-button>
      </p>
      <p class="p4">
          <el-button type="warning">添加</el-button>
      </p>
       <el-button class="but2" type="success">修改</el-button>
       <el-button>重置</el-button>
    </div>
  </div>
</template>
<script>
export default {
    data () {
      return {
        radio: '1'
      };
    }
};
</script>
<style scoped>
.app {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.box1 {
  width: 99.9%;
  height: 80px;
  background-color: rgba(240, 244, 246, 1);
  display: flex;
  align-items: center;
  border: solid 1px rgb(202, 198, 198);
}
.ul1 li {
  display: inline;
  list-style: none;
  color: grey;
  font-size: 14px;
  margin-right: 10px;
}
.ul1 li:nth-of-type(1) {
  font-size: 18px;
  color: rgba(4, 4, 252, 0.726);
}
.p1 {
  font-size: 14px;
  text-indent: 20px;
  background: rgba(240, 244, 246, 1);
  height: 40px;
  line-height: 40px;
  border: solid 1px rgb(202, 198, 198);
}
.box2 {
  width: 100%;
  margin-left: 30px;
}
.p2 {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 50px;
}
.p3{
      margin-top: 20px;
  margin-bottom: 10px;
    margin-left: 190px;
}
.p4{
    margin-left: 190px;
    margin-top: 20px;
}
.span1 {
  font-size: 15px;
  color: #777;
  margin-right: 20px;
}
.span2 {
  font-size: 15px;
  color: #777;
  margin-right: 20px;
  margin-left: 60px;
}
.inp1{
    width: 300px;
    margin-right: 20px;
}
.but2{
    margin-top: 30px;
    margin-left: 350px;
    margin-right: 20px;
}
</style>