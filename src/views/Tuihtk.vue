<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>订单</li>
        <li>>></li>
        <li>退货/退款订单</li>
      </ul>
    </div>
    <p class="p1">订单列表</p>
    <div class="box2">
      <el-select v-model="value" class="xlk" placeholder="全部">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="box3">
        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="ID"
      width="40">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="退单流水号"
      width="130">
    </el-table-column>
    <el-table-column
      prop="address"
      label="订单编号"
      show-overflow-tooltip
       width="130"
      >
    </el-table-column>
     <el-table-column
      prop="hym"
      label="会员名"
      width="65"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="xdrq"
      label="下单日期"
      show-overflow-tooltip
      width="170">
    </el-table-column>
     <el-table-column
      prop="tklx"
      label="退款类型"
      show-overflow-tooltip
      width="130">
    </el-table-column>
     <el-table-column
      prop="sqrq"
      label="申请日期"
      width="170"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="zt"
      label="状态"
      width="65"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="cz"
      label="操作"
      show-overflow-tooltip
      width="85">
        <img src="../../QQ图片20201113104856.png" class="tu1">
      <img src="../../QQ图片20201113104901.png" class="tu1">
    </el-table-column>
  </el-table>
    </div>
    <div class="box2-3">
          <el-button class="but3">批量删除</el-button>
          <span class="span4">每页显示</span>
          <input type="text" class="tex" />
          <span class="span4">条，然后输入回车</span>
            <span class="span5">共40条</span>
          <div class=" blc3">
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "待审核"
        },
        {
          value: "选项3",
          label: "已审核"
        },
        {
          value: "选项4",
          label: "已退回"
        },
        {
          value: "选项5",
          label: "代发货"
        },
        {
          value: "选项6",
          label: "已收货"
        },
        {
          value: "选项7",
          label: "已退款"
        },
        {
          value: "选项8",
          label: "已完成"
        }
      ],
        tableData: [{
          date: '1',
          name: '1533019644791',
          address: '1533019644791',
          hym:'test1',
          xdrq:'2018-07-31 14:47:24',
          tklx:'未发货,申请退货',
          sqrq:'2017-03-01 09:51:17',
          zt:'已完成',
        }, {
         date: '1',
          name: '1533019644791',
          address: '1533019644791',
          hym:'test1',
          xdrq:'2018-07-31 14:47:24',
          tklx:'未发货,申请退货',
          sqrq:'2017-03-01 09:51:17',
          zt:'已完成',
        }, {
           date: '1',
          name: '1533019644791',
          address: '1533019644791',
          hym:'test1',
          xdrq:'2018-07-31 14:47:24',
          tklx:'未发货,申请退货',
          sqrq:'2017-03-01 09:51:17',
          zt:'已完成',
        }, {
           date: '1',
          name: '1533019644791',
          address: '1533019644791',
          hym:'test1',
          xdrq:'2018-07-31 14:47:24',
          tklx:'未发货,申请退货',
          sqrq:'2017-03-01 09:51:17',
          zt:'已完成',
        }, {
         date: '1',
          name: '1533019644791',
          address: '1533019644791',
          hym:'test1',
          xdrq:'2018-07-31 14:47:24',
          tklx:'未发货,申请退货',
          sqrq:'2017-03-01 09:51:17',
          zt:'已完成',
        }, {
          date: '1',
          name: '1533019644791',
          address: '1533019644791',
          hym:'test1',
          xdrq:'2018-07-31 14:47:24',
          tklx:'未发货,申请退货',
          sqrq:'2017-03-01 09:51:17',
          zt:'已完成',
        }, {
          date: '1',
          name: '1533019644791',
          address: '1533019644791',
          hym:'test1',
          xdrq:'2018-07-31 14:47:24',
          tklx:'未发货,申请退货',
          sqrq:'2017-03-01 09:51:17',
          zt:'已完成',
        }],
        multipleSelection: []
      }
    },
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
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}
.xlk {
  width: 130px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.inp1 {
  width: 140px;
}
.span1 {
  margin-left: 10px;
  margin-right: 10px;
  color: #777;
  font-size: 15px;
}
.block {
  float: right;
margin-right: 440px;
}
.block1{
    float:right;
    margin-top: -40px;
    margin-right: 110px;
}
.inp2 {
  margin-right: 20px;
}
.box3{
    width: 100%;
}
.tu1{
    width: 32%;
    margin-right: 10px;
    cursor: pointer;
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
.blc3{
  float: right;
  margin-top: 33px;
}
.span5{
    color: #777;
  font-size: 15px;
  margin-left:  340px;
}
</style>