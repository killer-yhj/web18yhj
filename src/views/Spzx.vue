<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>商品</li>
        <li>>></li>
        <li>商品咨询</li>
      </ul>
    </div>
    <p class="p1">商品咨询</p>
    <div class="box2">
      <span class="span1">咨询人：</span>
      <el-input v-model="input" class="inp1"></el-input>
      <span class="span1">咨询商品：</span>
      <el-input v-model="input" class="inp1"></el-input>
      <span class="span1">咨询时间：</span>
      <div class="block">
        <el-date-picker v-model="value1" type="date" class="inp2" placeholder="yyyy-MM-dd"></el-date-picker>
      </div>
      <span>——</span>
      <div class="block">
        <el-date-picker v-model="value1" type="date" class="inp2" placeholder="yyyy-MM-dd"></el-date-picker>
      </div>
       <el-button type="success" size="small" class="but1">成功按钮</el-button>
    </div>
    <div class="box3">
            <template>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column prop="name" width="200" label="咨询时间"></el-table-column>
        <el-table-column prop="pplx" width="400" label="咨询商品"></el-table-column>
         <el-table-column prop="zxr" label="咨询人"></el-table-column>
        <el-table-column prop="plsx"  width="150" label="操作">
            <img src="../../QQ图片20201114090728.png" class="tu1">
            <img src="../../QQ图片20201113104901.png" class="tu2">
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button class="but2">批量删除</el-button>
        <span class="span4">每页显示</span>
        <input type="text" class="tex" />
        <span class="span4">条，然后输入回车</span>
        <span class="span5">共40条</span>
        <div class="block bl1">
          <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </div>
      </div>
    </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          pplx: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          zxr:"test1"
        },
        {
           id: "27",
          name: "2018-07-27 18:31:39",
          pplx: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          zxr:"test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          pplx: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          zxr:"test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          pplx: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          zxr:"test1"
        },
        {
         id: "27",
          name: "2018-07-27 18:31:39",
          pplx: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          zxr:"test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          pplx: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          zxr:"test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          pplx: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          zxr:"test1"
        }
      ],
      multipleSelection: []
    };
  }
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
.p1 {
  font-size: 14px;
  text-indent: 20px;
  background: rgba(240, 244, 246, 1);
  height: 40px;
  line-height: 40px;
  border: solid 1px rgb(202, 198, 198);
}
.box2 {
  width: 99.8%;
  height: 80px;
  border: solid 1px #777;
  display: flex;
  align-items: center;
}
.inp1 {
  width: 140px;
  margin-left: 5px;
}
.span1 {
  margin-left: 10px;
  margin-right: 10px;
  color: #777;
  font-size: 15px;
}
.block{
    float: left;
}
.inp2{
    width: 140px;
}
.but1{
    margin-left: 50px;
}
.box3{
    width: 100%;
}
.but2 {
  margin-left: 20px;
}
.but2 {
  margin-left: 20px;
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
.bl1 {
  float: right;
  margin-top: 5px;
}
.span6 {
  color: aquamarine;
  margin-right: 10px;
}
.span5{
    font-size: 14px;
    color: #777;
    margin-left: 360px;
}
.tu1{
    width: 30%;
    margin-right: 10px
}
.tu2{
    width: 30%;
}
</style>