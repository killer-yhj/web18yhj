<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>商品</li>
        <li>>></li>
        <li>类型管理</li>
      </ul>
    </div>
    <p class="p1">类型管理</p>
    <div class="box2">
      <el-button size="small" class="but1" type="success">+ 添加类型</el-button>
    </div>
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
        <el-table-column prop="name" label="类型名称"></el-table-column>
        <el-table-column prop="pplx" label="商品类型模板前缀"></el-table-column>
        <el-table-column prop="plsx" label="商品类型模板前缀"></el-table-column>
        <el-table-column label="属性列表" width="200">
          <span class="span6">[分类字段]</span>
          <span class="span6">[商品字段]</span>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button class="but2">保存排序</el-button>
        <el-button>批量删除</el-button>
        <span class="span4">每页显示</span>
        <input type="text" class="tex" />
        <span class="span4">条，然后输入回车</span>
        <div class="block">
          <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "27",
          name: "生活电器",
          pplx: "分类",
          plsx: "商品"
        },
        {
          id: "27",
          name: "生活电器",
          pplx: "分类",
          plsx: "商品"
        },
        {
          id: "27",
          name: "生活电器",
          pplx: "分类",
          plsx: "商品"
        },
        {
          id: "27",
          name: "生活电器",
          pplx: "分类",
          plsx: "商品"
        },
        {
          id: "27",
          name: "生活电器",
          pplx: "分类",
          plsx: "商品"
        },
        {
          id: "27",
          name: "生活电器",
          pplx: "分类",
          plsx: "商品"
        },
        {
          id: "27",
          name: "生活电器",
          pplx: "分类",
          plsx: "商品"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
  display: flex;
  align-items: center;
  border: solid 1px #777;
}
.but1 {
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
.block {
  float: right;
  margin-top: 0px;
}
.span6 {
  color: aquamarine;
  margin-right: 10px;
}
</style>