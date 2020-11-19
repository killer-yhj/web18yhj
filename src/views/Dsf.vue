<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>第三方登录设置</li>
      </ul>
    </div>
    <p class="p1">第三方登录设置</p>
    <div class="box2">
      <div class="box2-1">
        <p>
          <span class="span1">QQ登录</span>
          <el-radio v-model="radio" class="rad" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
          <span class="span2">(为了安全起见，填写完成提交后，密钥不可见)</span>
        </p>
        <p>
            <span class="span1">*App Key</span>
            <el-input v-model="input" class="inp1" placeholder="323432"></el-input>
            <span class="span1">App Secret</span>
            <el-input v-model="input"  class="inp1" placeholder=""></el-input>
        </p>
      </div>
       <div class="box2-1">
        <p>
          <span class="span1">新浪微博登陆</span>
          <el-radio v-model="radio" class="rad" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
          <span class="span2">(为了安全起见，填写完成提交后，密钥不可见)</span>
        </p>
        <p>
            <span class="span1">*App Key</span>
            <el-input v-model="input" class="inp1" placeholder="323432"></el-input>
            <span class="span1">App Secret</span>
            <el-input v-model="input"  class="inp1" placeholder=""></el-input>
        </p>
      </div>
       <div class="box2-1">
        <p>
          <span class="span1">微信登录</span>
          <el-radio v-model="radio" class="rad" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
          <span class="span2">(为了安全起见，填写完成提交后，密钥不可见)</span>
        </p>
        <p>
            <span class="span1">*App Key</span>
            <el-input v-model="input" class="inp1" placeholder="wx797f3f026a9fbe5b"></el-input>
            <span class="span1">App Secret</span>
            <el-input v-model="input"  class="inp1" placeholder=""></el-input>
        </p>
      </div>
    </div>
    <el-button class="but2" type="success">修改</el-button>
       <el-button>重置</el-button>
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
}
.box2-1{
    margin-top: 20px;
    border-bottom: dashed 1px;
    width: 90%;
    margin-left: 50px;
    
}
.span1{
        color: #777;
        font-size: 15px;
        margin-right: 20px;
        margin-left: 30px;
        
}
.span2{
    color: #999;
    font-size: 15px;
}
.rad{
    margin-left: 30px;
    margin-bottom: 30px;
}
.inp1{
    width: 240px;
    margin-right: 100px;
    margin-bottom: 20px;
}
.but2{
    margin-top: 30px;
    margin-left: 450px;
    margin-right: 20px;
}
</style>