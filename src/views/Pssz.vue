<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>配送方式</li>
      </ul>
    </div>
    <p class="p1">配送方式列表</p>
    <div class="box2">
        <div class="box2-2-1">
            <el-button type="success" class="inp3">+添加文章</el-button>
        </div>
        <div class="box2-2-2">
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
              <el-table-column prop="name" label="名称" width="250"></el-table-column>
              <el-table-column prop="address" label="计算方式" show-overflow-tooltip></el-table-column>
              <el-table-column prop="pp" label="排列顺序" show-overflow-tooltip></el-table-column>
               <el-table-column prop="qy" label="是否启用" show-overflow-tooltip></el-table-column>
              <el-table-column prop="cz" label="操作" width="100" show-overflow-tooltip>
                <img src="../../QQ图片20201113104856.png" class="tu3" />
                <img src="../../QQ图片20201113104901.png" class="tu4" />
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="box2-3">
        <el-button class="but3">保持排序</el-button>
          <el-button class="but3">批量删除</el-button>
          <span class="span4">每页显示</span>
          <input type="text" class="tex" />
          <span class="span4">条，然后输入回车</span>
          <span class="span5">共40条</span>
          <div class="block">
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
 data() {
    return {
      tableData: [
        {
            id:"1",
          name: "普通快递",
          address: "统一价格：0",
          pp: "1",
          qy:'否'
        },
        {
            id:"1",
          name: "普通快递",
          address: "统一价格：0",
          pp: "1",
          qy:'否'
        },
        {
            id:"1",
          name: "普通快递",
          address: "统一价格：0",
          pp: "1",
          qy:'否'
        },
        {
            id:"1",
          name: "普通快递",
          address: "统一价格：0",
          pp: "1",
          qy:'否'
        },
        {
            id:"1",
          name: "普通快递",
          address: "统一价格：0",
          pp: "1",
          qy:'否'
        },
        {
            id:"1",
          name: "普通快递",
          address: "统一价格：0",
          pp: "1",
          qy:'否'
        },
        {
            id:"1",
          name: "普通快递",
          address: "统一价格：0",
          pp: "1",
          qy:'否'
        }
      ]
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
     shuaxin(){
      this.$router.go(0);
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
}
.box2-1 {
  width: 14%;
  padding-top: 10px;
  padding-left: 10px;
  border: solid 1px #777;
  height: 700px;
  float: left;
}
.span1 {
  color: grey;
  font-size: 20px;
  margin-bottom: 20px;
}
.box2-2 {
  float: left;
  width: 84.6%;
  height: 600px;
  padding-top: 10px;
  border: solid 1px #777;
}
.box2-2-1 {
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: solid 1px #777;
}
.app >>> .el-input__inner {
  margin-left: 10px;
  width: 120px;
  margin-right: 10px;
}
.span2 {
  font-size: 14px;
  color: grey;
  margin-left: 20px;
}
.app >>> .inp1 {
  width: 200px;
  margin-right: 0;
}
.span3 {
  font-size: 14px;
  color: grey;
  margin-left: -60px;
}
.inp2 {
  width: 100px;
  float: right;
  margin-right: 110px;
}
.inp3{
    margin-left: 30px;
}
.tu2 {
  width: 40%;
}
.tu3 {
  width: 40%;
  margin-right: 10px;
}
.tu4 {
  width: 40%;
}
.box2-3 {
  width: 100%;
  border: solid 1px #777;
  height: 99px;
  margin-top: 48px;
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
.span5 {
  font-size: 14px;
  color: #777;
  margin-right: 10px;
  margin-left: 180px;
}
.tex {
  height: 30px;
  width: 60px;
  outline: none;
  border: solid 1px #777;
}
.block{
  float: right;
  margin-top: 35px;
}
</style>