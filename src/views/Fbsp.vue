<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>商品</li>
        <li>>></li>
        <li>发布商品</li>
      </ul>
    </div>
    <div class="box2">
      <p class="p1">
        您当前选择的商品类别是：
        <span class="span1">数码 > 手机 >三星</span>
      </p>
    </div>
    <div class="box3">
      <div class="box3-1">
        <p class="b3p">
          手机
          <span class="span4">>></span>
        </p>
        <p>服装</p>
        <p>数码配饰</p>
        <p>日用百货</p>
        <p>家居建材</p>
        <p>珠宝手表</p>
      </div>
      <div class="box3-2">
        <p class="b3p">
          数码
          <span class="span4">>></span>
        </p>
        <p>服装</p>
        <p>数码配饰</p>
        <p>日用百货</p>
        <p>家居建材</p>
      </div>
      <div class="box3-3">
        <p>三星</p>
        <p>苹果</p>
        <p>华为</p>
      </div>
    </div>
      <el-button type="primary" class="but">发布商品</el-button>
  </div>
</template>
<script>
export default {
  
};
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
.box2 {
  width: 95%;
  height: 40px;
  margin-top: 20px;
  margin-left: 25px;
  border: solid 1px rgba(248, 172, 89, 1);
  background: rgb(252, 208, 215);
}
.p1 {
  line-height: 40px;
  text-indent: 10px;
  font-size: 14px;
  color: rgba(248, 172, 89, 1);
  font-weight: 800;
}
.span1 {
  color: green;
  font-weight: 300;
}
.box3 {
  width: 100%;
  margin-top: 30px;
}
.box3-1 {
  width: 260px;
  height: 200px;
  float: left;
  border: solid 1px #777;
  margin-left: 25px;
  margin-right: 50px;
  padding: 10px 10px;
}
.box3-2 {
  width: 260px;
  height: 200px;
  float: left;
  border: solid 1px #777;
  margin-right: 50px;
  margin-left: 20px;
  padding: 10px 10px;
}
.box3-3 {
  width: 260px;
  height: 200px;
  float: left;
  border: solid 1px #777;
  margin-left: 20px;
  padding: 10px 10px;
}
.box3 p {
  font-weight: 100;
  font-size: 15px;
  margin-bottom: 15px;
}
.span4 {
  margin-left: 200px;
}
.but{
  margin-top: 50px;
  margin-left: 460px;
}
</style>