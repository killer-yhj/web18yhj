<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>界面</li>
        <li>>></li>
        <li>栏目</li>
      </ul>
    </div>
    <p class="p1">分类列表</p>
    <div class="box2">
      <el-button type="success" class="but1">+ 添加单页栏目</el-button>
      <el-button type="success" class="but1">+ 添加文章栏目</el-button>
      <el-button type="success" class="but1">+ 添加链接栏目</el-button>
    </div>
    <div class="box3">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="ID" width="60">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="栏目名称"></el-table-column>
        <el-table-column prop="yhdj" label="栏目类型" show-overflow-tooltip></el-table-column>
        <el-table-column prop="jf" label="访问路径" show-overflow-tooltip></el-table-column>
        <el-table-column prop="mb" label="栏目页模板" show-overflow-tooltip></el-table-column>
        <el-table-column prop="nrmb" label="内容页模板" show-overflow-tooltip></el-table-column>
        <el-table-column prop="xs" label="是否显示" show-overflow-tooltip></el-table-column>
        <el-table-column prop="px" label="排序" show-overflow-tooltip></el-table-column>
        <el-table-column prop="cz" label="操作" show-overflow-tooltip width="100">
          <img src="../../QQ图片20201113104856.png" class="tu1" />
          <img src="../../QQ图片20201113104901.png" class="tu1" />
        </el-table-column>
      </el-table>
    </div>
    <div class="box2-3">
      <el-button class="but3">保存排序</el-button>
      <el-button class="but3">批量删除</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "新手入门",
          yhdj: "文章栏目",
          jf: "xsrm",
          mb: "/channel/网站公告栏目.html",
          nrmb: "/article/网站公告内容.html",
          xs: "是",
          px: "10"
        },
        {
          date: "2",
          name: "网站公告",
          yhdj: "单页栏目",
          jf: "wzgg",
          mb: "/channel/网站公告栏目.html",
          nrmb: "/article/网站公告内容.html",
          xs: "是",
          px: "10"
        },
        {
          date: "3",
          name: "新闻中心",
          yhdj: "文章栏目",
          jf: "newss",
          xs: "是",
          px: "10"
        },
        {
          date: "4",
          name: "热门促销",
          yhdj: "链接栏目",
          jf: "链接栏目",
          mb: "/channel/网站公告栏目.html",
          xs: "是",
          px: "10"
        },
        {
          date: "5",
          name: "支付方式",
          yhdj: "文章栏目",
          jf: "ps",
          xs: "是",
          px: "10"
        },
        {
          date: "6",
          name: "配送范围及时间",
          yhdj: "文章栏目",
          jf: "zffs",
          xs: "是",
          px: "10"
        },
        {
          date: "7",
          name: "公司简介",
          yhdj: "单页栏目",
          jf: "链接栏目",
          mb: "/channel/网站公告栏目.html",
          xs: "是",
          px: "10"
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
.block1 {
  float: right;
  margin-top: -40px;
  margin-right: 110px;
}
.inp2 {
  margin-right: 20px;
}
.box3 {
  width: 100%;
}
.tu1 {
  width: 35%;
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
.blc3 {
  float: right;
  margin-top: 33px;
}
.span5 {
  color: #777;
  font-size: 15px;
  margin-left: 340px;
}
.but1 {
  margin-left: 20px;
}
</style>