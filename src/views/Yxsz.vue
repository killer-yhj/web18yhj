<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>邮箱设置</li>
      </ul>
    </div>
    <p class="p1">邮箱设置</p>
    <div class="box2">
      <p class="p2">
        <span class="span1">*邮件服务器</span>
        <el-input v-model="input" class="inp1" placeholder="smtp.qq.com"></el-input>
        <span class="span2">如：smtp.126.com</span>
      </p>
      <p class="p3">
        <span class="span1">*邮件编码</span>
        <el-input v-model="input" class="inp1" placeholder="UTF-8"></el-input>
        <span class="span2">一般使用UTF-8</span>
      </p>
      <p class="p2">
        <span class="span1">*邮件用户名</span>
        <el-input v-model="input" class="inp1" placeholder="2696522645@qq.com"></el-input>
        <span class="span2">如：example@126.com</span>
      </p>
      <p class="p4">
        <span class="span1">*发件人</span>
        <el-input v-model="input" class="inp1" placeholder="test1"></el-input>
        <span class="span2">如：百年老店</span>
      </p>
      <p class="p3">
        <span class="span1">*邮件密码</span>
        <el-input v-model="input" class="inp1" placeholder></el-input>
      </p>
      <p class="p7">
        <span class="span1">找回密码标题</span>
        <el-input v-model="input" class="inp1" placeholder="找回密码请求"></el-input>
        <span class="span2">支持的标签: uid username resetKey resetPwd</span>
      </p>
      <div class="p5">
        <span class="span1">找回密码内容</span>
        <p class="p6">
          <img src="../../shu.png" class="tu1" />
        </p>
      </div>
      <el-input
        class="inp2"
        type="textarea"
        placeholder="您好

${username}: 我们收到您的发出的找回密码请求。如果这不是您本人发出的请求，可以不予理会；如果您频繁收到这样的邮件，请尽快与管理员联系。

新密码为：${resetPwd} 点击此地址，新密码即可生效：${base}/reset_password.jspx?uid=${uid}&activationCode=${activationCode}"
        v-model="textarea2"
        style="height:260px"
      ></el-input>
       <p class="p5">
        <span class="span1">激活用户标题</span>
        <el-input v-model="input" class="inp1" placeholder="欢迎您注册商城用户"></el-input>
        <span class="span2">支持的标签: uid username resetKey resetPwd</span>
      </p>
      <div class="p2">
        <span class="span1">激活用户内容</span>
        <p class="p6">
          <img src="../../shu.png" class="tu1" />
        </p>
      </div>
      <el-input
        class="inp2"
        type="textarea"
        placeholder="您好

${username}: 我们收到您的发出的找回密码请求。如果这不是您本人发出的请求，可以不予理会；如果您频繁收到这样的邮件，请尽快与管理员联系。

新密码为：${resetPwd} 点击此地址，新密码即可生效：${base}/reset_password.jspx?uid=${uid}&activationCode=${activationCode}"
        v-model="textarea2"
        style="height:260px"
      ></el-input>
      <el-button class="but1" type="success">修改</el-button>
      <el-button>重置</el-button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.app {
  margin-top: 60px;
  width: 100%;
  height: 100%;
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
.p2 {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 50px;
}
.p7{
     margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 40px;
}
.p3 {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 65px;
}
.p4 {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 80px;
}
.inp1 {
  width: 300px;
  margin-left: 20px;
  margin-right: 20px;
}
.span1 {
  font-size: 15px;
  color: #777;
}
.span2 {
  font-size: 15px;
  color: #999;
}
.p5 {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 40px;
}
.p6 {
  padding: 5px;
  background-color: rgba(245, 245, 245, 1);
  width: 500px;
  float: right;
  border-top-left-radius: 6px;
  border: solid 1px #888;
  border-top-right-radius: 6px;
  margin-right: 383px;
}
.tu1 {
  width: 80%;
}
.inp2 {
  width: 512px;
  margin-left: 146px;
}
.but1 {
  margin-left: -230px;
  margin-right: 20px;
  margin-top: 20px;
}
</style>