<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>基本设置</li>
      </ul>
    </div>
    <p class="p1">基本设置</p>
    <div class="box2">
      <p class="p2">
        <span class="span1">*网站名称</span>
        <el-input v-model="input" class="inp1" placeholder="单店版商城后台管理系统"></el-input>
        <span class="span2"></span>
      </p>
      <p class="p2">
        <span class="span1">*网站域名</span>
        <el-input v-model="input" class="inp1" placeholder="youzhifang.net"></el-input>
        <span class="span2"></span>
      </p>
      <p class="p3">
        <span class="span1">根域名</span>
        <el-input v-model="input" class="inp1" placeholder="youzhifang.net"></el-input>
        <span class="span2">如域名为www.youzhifang.net，则填写youzhifang.net</span>
      </p>
      <p class="p4">
        <span class="span3">使用相对路径</span>
        <el-radio v-model="radio" class="rad" label="1">是</el-radio>
        <el-radio v-model="radio" label="2">否</el-radio>
        <span class="span2">如域名为www.youzhifang.net，则填写youzhifang.net</span>
      </p>
      <p class="p5">
        <span class="span1">*访问后缀</span>
        <el-select v-model="value" placeholder=".htm">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </p>
      <p class="p4">
        <span class="span1">*前台本地化</span>
        <el-input v-model="input" class="inp1" placeholder="zh_CN"></el-input>
        <span class="span2"></span>
      </p>
      <p class="p4">
        <span class="span1">*后台本地化</span>
        <el-input v-model="input" class="inp1" placeholder="zh_CN"></el-input>
        <span class="span2"></span>
      </p>
        <p class="p4">
        <span class="span4">静态页自动同步FTP</span>
        <el-radio v-model="og" class label="2">是</el-radio>
        <el-radio v-model="og" label="1">否</el-radio>
      </p>
        <p class="p4">
        <span class="span5">资源自动同步FTP</span>
        <el-radio v-model="od" class label="2">是</el-radio>
        <el-radio v-model="od" label="1">否</el-radio>
      </p>
    </div>
    <el-button class="but1" type="success">修改</el-button>
      <el-button>重置</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      og:"1",
      od:"1",
      options: [{
          value: '选项1',
          label: '.htm'
        }, {
          value: '选项2',
          label: '.htmlj'
        }],
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
.el-select{
    margin-left: 30px;
}
.rad{
    margin-left: 20x;
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
.p3 {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 71px;
}
.p4 {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 34px;
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
.span3{
    font-size: 15px;
  color: #777;
  margin-left: -10px;
  margin-right: 20px;
}
.span4{
    font-size: 15px;
  color: #777;
  margin-left: -30px;
  margin-right: 20px;
}
.span5{
    font-size: 15px;
  color: #777;
  margin-left: -15px;
  margin-right: 20px;
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
  margin-right: 403px;
  margin-top: 20px;
}
.tu1 {
  width: 80%;
}
.inp2 {
  width: 512px;
  margin-left: 126px;
}
.but1 {
  margin-left: 400px;
  margin-right: 20px;
  margin-top: 20px;
}
</style>