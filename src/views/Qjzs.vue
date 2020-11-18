<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>全局设置</li>
      </ul>
    </div>
    <p class="p1">全局设置</p>
    <div class="box2">
      <p class="p2">
        <span class="span1">部署路径</span>
        <el-input v-model="input" class="inp1" placeholder></el-input>
        <span class="span2">如部署在根目录下，请留空</span>
      </p>
      <p class="p3">
        <span class="span1">端口</span>
        <el-input v-model="input" class="inp1" placeholder="80"></el-input>
        <span class="span2">可以留空，默认端口为80</span>
      </p>
      <p class="p2">
        <span class="span1">激活积分</span>
        <el-input v-model="input" class="inp1" placeholder="10"></el-input>
        <span class="span2">可以留空，默认端口为10</span>
      </p>
      <p class="p4">
        <span class="span1">库存预加载</span>
        <el-input v-model="input" class="inp1" placeholder="100"></el-input>
        <span class="span2"></span>
      </p>
      <p class="p5">
        <span class="span1">*默认图片</span>
        <el-input v-model="input" class="inp1" placeholder="/r/gou/u/no_picture.gif"></el-input>
        <span class="span2">图片不存在时显示</span>
      </p>
      <div class="p2">
        <span class="span1">用户协议</span>
        <p class="p6">
          <img src="../../shu.png" class="tu1" />
        </p>
      </div>
      <el-input
        class="inp2"
        type="textarea"
        placeholder="请输入内容"
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
.p3 {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 80px;
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
}
.tu1 {
  width: 80%;
}
.inp2 {
  width: 512px;
  margin-left: 126px;
}
.but1{
    margin-left: -230px;
    margin-right: 20px;
}
</style>