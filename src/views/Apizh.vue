<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>API接口账户列表</li>
      </ul>
    </div>
    <p class="p1">API接口账户列表</p>
    <div class="box2">
      <el-button type="success" class="but1">+添加API接口信息</el-button>
      <el-button>独立密码修改</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="appid" width="180"></el-table-column>
      <el-table-column prop="address" label="是否禁用"></el-table-column>
      <el-table-column label="操作">
          <img src="../../QQ图片20201113104856.png" class="tu2">
      </el-table-column>
    </el-table>
    <div class="box2-3">
      <span class="span4">每页显示</span>
      <input type="text" class="tex" />
      <span class="span4">条，然后输入回车</span>
      <span class="span5">共40条</span>
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
            name: '8811537465527445',
            address: '否'
          }, {
            date: '1',
            name: '8811537465527445',
            address: '否'
          }, {
            date: '1',
            name: '8811537465527445',
            address: '否'
          }, {
          date: '1',
            name: '8811537465527445',
            address: '否'
          }]
        }
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
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.but1 {
  margin-left: 30px;
  margin-right: 20px;
}
.tu2{
    width: 12%;
    cursor: pointer;
}
.box2-3 {
  width: 100%;
  height: 50px;
  margin-left: -1px;
  margin-top: 30px;
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
}
.span5 {
  color: #777;
  font-size: 15px;
  margin-left: 460px;
}
</style>