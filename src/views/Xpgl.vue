<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>商品</li>
        <li>>></li>
        <li>商品管理</li>
      </ul>
    </div>
    <p class="p1">分类列表</p>

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
.p1{
    font-size: 14px;
    text-indent: 20px;
    background: rgba(240, 244, 246, 1);
    height: 40px;
    line-height: 40px;
    border: solid 1px rgb(202, 198, 198);
}
</style>