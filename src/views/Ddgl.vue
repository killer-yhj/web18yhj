<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>订单</li>
        <li>>></li>
        <li>订单管理</li>
      </ul>
    </div>
    <p class="p1">订单列表</p>
    <div class="box2">
      <el-select v-model="value" class="xlk" placeholder="订单状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value" class="xlk" placeholder="支付状态">
        <el-option v-for="item in zfzt" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-select v-model="value" class="xlk" placeholder="配送状态">
        <el-option v-for="item in pszt" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-select v-model="value" class="xlk" placeholder="配送方式">
        <el-option v-for="item in psfs" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <br />
      <span class="span1">订单编号:</span>
      <el-input v-model="input" class="inp1"></el-input>
      <span class="span1">查询时间：</span>
      <div class="block">
        <el-date-picker v-model="value1" type="date" class="inp2" placeholder="yyyy-MM-dd"></el-date-picker>——
      </div>
      <div class="block1">
        <el-date-picker v-model="value1" type="date" class="inp2" placeholder="yyyy-MM-dd"></el-date-picker>
         <el-button class="but1" type="success">查询</el-button>
      </div>
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
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="订单编号"
      width="160">
    </el-table-column>
    <el-table-column
      prop="address"
      label="买家用户名"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="djje"
      label="订单金额"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="xdrq"
      label="下单日期"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="ddzt"
      label="订单状态"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="zfzt"
      label="支付状态"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="pszt"
      label="配送状态"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="cz"
      label="操作"
      show-overflow-tooltip
      width="200">
      <img src="../../QQ图片20201114090728.png" class="tu1">
      <img src="../../QQ图片20201113104901.png" class="tu1">
      <img src="../../QQ图片20201113104856.png" class="tu1">
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
          label: "订单状态"
        },
        {
          value: "选项2",
          label: "未确定"
        },
        {
          value: "选项3",
          label: "已确认"
        },
        {
          value: "选项4",
          label: "已取消"
        },
        {
          value: "选项5",
          label: "已完成"
        }
      ],
      zfzt: [
        {
          value: "选项1",
          label: "支付状态"
        },
        {
          value: "选项2",
          label: "未支付"
        },
        {
          value: "选项3",
          label: "已支付"
        },
        {
          value: "选项4",
          label: "已退款"
        }
      ],
      pszt: [
        {
          value: "选项1",
          label: "配送状态"
        },
        {
          value: "选项2",
          label: "未发货"
        },
        {
          value: "选项3",
          label: "已发货"
        },
        {
          value: "选项4",
          label: "已退货"
        }
      ],
      psfs: [
        {
          value: "选项1",
          label: "配送方式"
        },
        {
          value: "选项2",
          label: "普通快递"
        },
        {
          value: "选项3",
          label: "顺风快递"
        }
      ],
        tableData: [{
          date: '1688',
          name: '1533019644791',
          address: 'test1',
          djje:'6398',
          xdrq:'2018-07-31 14:47:24',
          ddzt:'未确认',
          zfzt:'未支付',
          zffs:'网上支付',
          pszt:'未发货',
          psfs:'普通快递'
        }, {
         date: '1688',
          name: '1533019644791',
          address: 'test1',
          djje:'6398',
          xdrq:'2018-07-31 14:47:24',
          ddzt:'未确认',
          zfzt:'未支付',
          zffs:'网上支付',
          pszt:'未发货',
          psfs:'普通快递'
        }, {
           date: '1688',
          name: '1533019644791',
          address: 'test1',
          djje:'6398',
          xdrq:'2018-07-31 14:47:24',
          ddzt:'未确认',
          zfzt:'未支付',
          zffs:'网上支付',
          pszt:'未发货',
          psfs:'普通快递'
        }, {
           date: '1688',
          name: '1533019644791',
          address: 'test1',
          djje:'6398',
          xdrq:'2018-07-31 14:47:24',
          ddzt:'未确认',
          zfzt:'未支付',
          zffs:'网上支付',
          pszt:'未发货',
          psfs:'普通快递'
        }, {
         date: '1688',
          name: '1533019644791',
          address: 'test1',
          djje:'6398',
          xdrq:'2018-07-31 14:47:24',
          ddzt:'未确认',
          zfzt:'未支付',
          zffs:'网上支付',
          pszt:'未发货',
          psfs:'普通快递'
        }, {
          date: '1688',
          name: '1533019644791',
          address: 'test1',
          djje:'6398',
          xdrq:'2018-07-31 14:47:24',
          ddzt:'未确认',
          zfzt:'未支付',
          zffs:'网上支付',
          pszt:'未发货',
          psfs:'普通快递'
        }, {
          date: '1688',
          name: '1533019644791',
          address: 'test1',
          djje:'6398',
          xdrq:'2018-07-31 14:47:24',
          ddzt:'未确认',
          zfzt:'未支付',
          zffs:'网上支付',
          pszt:'未发货',
          psfs:'普通快递'
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
    width: 20%;
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