<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>支付插件</li>
      </ul>
    </div>
    <p class="p1">支付插件列表</p>
    <div class="box2">
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="ID"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
       >
      </el-table-column>
      <el-table-column
        prop="address"
        label="排序">
      </el-table-column>
       <el-table-column
        label="操作">
        <img src="../../QQ图片20201113104856.png" class="tu1">
      </el-table-column>
    </el-table>
    </div>
    <el-button class="but1">保存排序</el-button>
  </div>
</template>
<script>
export default {
     data() {
        return {
          tableData: [{
            date: '5',
            name: '1',
            address: '2'
          }, {
            date: '3',
            name: '支付宝即时交易',
            address: '3'
          }, {
            date: '6',
            name: '微信公众号支付',
            address: '4'
          }, {
            date: '7',
            name: '支付宝移动端网页支付',
            address: '10'
          }, {
            date: '8',
            name: '单笔转账到支付宝账户',
            address: '10'
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
.tu1{
    width: 12%;
    cursor: pointer;
}
.but1{
    margin-top: 20px;
    margin-left: 20px;
}
</style>