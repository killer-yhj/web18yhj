<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>商品</li>
        <li>>></li>
        <li>热销商品</li>
      </ul>
    </div>
    <p class="p1">订单列表</p>
    <div class="box2">
      <span class="span1">查询时间：</span>
      <div class="block">
        <el-date-picker v-model="value1" type="date" class="inp2" placeholder="yyyy-MM-dd"></el-date-picker>
      </div>
      <span>——</span>
      <div class="block">
        <el-date-picker v-model="value1" type="date" class="inp2" placeholder="yyyy-MM-dd"></el-date-picker>
      </div>
      <template>
        <el-select v-model="value" placeholder="根目录">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </template>
       <el-button type="success" size="small" class="but1">查询</el-button>
    </div>
    <div class="box3">
        <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="商品名称"
        width="500">
      </el-table-column>
      <el-table-column
        prop="name"
        label="分类名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="address"
        label="销量"
        width="200">
      </el-table-column>
    </el-table>
  </template>
    </div>
    <div style="margin-top: 20px">
        <span class="span4">每页显示</span>
        <input type="text" class="tex" />
        <span class="span4">条，然后输入回车</span>
        <span class="span5">共40条</span>
        <div class="block bl1">
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
            date: 'Apple iPad Air 2 平板电脑',
            name: '平板电脑',
            address: '5'
          }, {
             date: 'Apple iPad Air 2 平板电脑',
            name: '平板电脑',
            address: '5'
          }, {
             date: 'Apple iPad Air 2 平板电脑',
            name: '平板电脑',
            address: '5'
          }, {
            date: 'Apple iPad Air 2 平板电脑',
            name: '平板电脑',
            address: '5'
          }, {
            date: 'Apple iPad Air 2 平板电脑',
            name: '平板电脑',
            address: '5'
          }, {
            date: 'Apple iPad Air 2 平板电脑',
            name: '平板电脑',
            address: '5'
          }, {
            date: 'Apple iPad Air 2 平板电脑',
            name: '平板电脑',
            address: '5'
          }, {
            date: 'Apple iPad Air 2 平板电脑',
            name: '平板电脑',
            address: '5'
          }],
        options: [{
          value: '选项1',
          label: '根目录'
        }, {
          value: '选项2',
          label: '数码'
        }, {
          value: '选项3',
          label: ' >手机'
        }, {
          value: '选项4',
          label: ' >三星'
        }, {
          value: '选项5',
          label: ' >苹果'
        },{
          value: '选项6',
          label: ' >华为'
        },{
          value: '选项7',
          label: ' >笔记本'
        },{
          value: '选项8',
          label: ' >联想'
        },{
          value: '选项9',
          label: ' >电脑整机'
        },{
          value: '选项10',
          label: ' >平板电脑'
        },{
          value: '选项11',
          label: ' >台式机'
        },{
          value: '选项12',
          label: ' >办公'
        },{
          value: '选项13',
          label: ' >文具'
        }
        ,{
          value: '选项5',
          label: ' >打印机'
        }],
        value: ''
      }
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
.block {
  float: left;
}
.inp2{
    margin-right: 20px;
}
.but1{
    margin-left: 60px;
    width: 100px;
}
.box3{
    padding: 10px 20px;
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
  margin-top: 0px;
}
.span6 {
  color: aquamarine;
  margin-right: 10px;
}
.span5{
    font-size: 14px;
    color: #777;
    margin-left: 460px;
}
</style>