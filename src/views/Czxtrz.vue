<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>运营</li>
        <li>>></li>
        <li>首页海报</li>
      </ul>
    </div>
    <p class="p1">首页海报列表</p>
    <div class="box2">
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="内容"
        width="500">
      </el-table-column>
      <el-table-column
        prop="czsj"
        label="操作时间">
      </el-table-column>
    </el-table>
    </div>
    <div class="box2-3">
      <el-button class="but3">批量删除</el-button>
      <span class="span4">每页显示</span>
      <input type="text" class="tex" />
      <span class="span4">条，然后输入回车</span>
      <span class="span5">共123654条</span>
      <div class="blc3">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     data() {
        return {
          tableData: [{
            date: '1',
            name: 'login success',
            address: '1.修复关联了商品的规格修改报错，修复规格字段名称重复引起的款式问题。',
            czsj:'2017-11-13 13:43:07'
          }, {
           date: '1',
            name: 'login success',
            address: '1.修复关联了商品的规格修改报错，修复规格字段名称重复引起的款式问题。',
            czsj:'2017-11-13 13:43:07'
          }, {
           date: '1',
            name: 'login success',
            address: '1.修复关联了商品的规格修改报错，修复规格字段名称重复引起的款式问题。',
            czsj:'2017-11-13 13:43:07'
          }, {
           date: '1',
            name: 'login success',
            address: '1.修复关联了商品的规格修改报错，修复规格字段名称重复引起的款式问题。',
            czsj:'2017-11-13 13:43:07'
          }, {
           date: '1',
            name: 'login success',
            address: '1.修复关联了商品的规格修改报错，修复规格字段名称重复引起的款式问题。',
            czsj:'2017-11-13 13:43:07'
          }, {
           date: '1',
            name: 'login success',
            address: '1.修复关联了商品的规格修改报错，修复规格字段名称重复引起的款式问题。',
            czsj:'2017-11-13 13:43:07'
          }, {
           date: '1',
            name: 'login success',
            address: '1.修复关联了商品的规格修改报错，修复规格字段名称重复引起的款式问题。',
            czsj:'2017-11-13 13:43:07'
          }]
        }
      }
}
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
.box2-3 {
  width: 100%;

  height: 50px;
  margin-left: -1px;
}
.but3 {
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 10px;
}
.span4 {
  font-size: 14px;
  color: #777;
  margin-right: 10px;
  margin-left: 5px;
}
.tex {
  height: 30px;
  width: 60px;
  outline: none;
  border: solid 1px #777;
}
.blc3 {
  float: right;
  margin-top: -38px;
}
.span5 {
  color: #777;
  font-size: 15px;
  margin-left: 315px;
}
.but1 {
  margin-left: 20px;
}
</style>