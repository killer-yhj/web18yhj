<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>商品</li>
        <li>>></li>
        <li>分类管理</li>
      </ul>
    </div>
    <p class="p1">分类列表</p>
    <div class="box2">
      <div class="box2-1">
        <span class="el-icon-refresh span1">刷新</span>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="box2-2">
        <div class="box2-2-1">
          <p>
            商品名称：
            <span class="span5">所有分类</span>
          </p>
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
              <el-table-column prop="name" label="分类名称" width="250"></el-table-column>
              <el-table-column prop="address" label="访问路径" show-overflow-tooltip></el-table-column>
              <el-table-column prop="pp" label="商品类型" show-overflow-tooltip></el-table-column>
              <el-table-column prop="jg" label="排序" show-overflow-tooltip>
                <el-input v-model="input" class="inpp"></el-input>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="box2-3">
          <el-button class="but3">批量删除</el-button>
          <el-button class="but3">保存排序</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      data: [
        {
          label: "所有分类",
          children: [
            {
              label: "数码",
              children: [
                {
                  label: "手机",
                  children: [
                    {
                      label: "三星"
                    },
                    {
                      label: "苹果"
                    },
                    {
                      label: "华为"
                    }
                  ]
                },
                {
                  label: "笔记本",
                  children: [
                    {
                      label: "联想"
                    }
                  ]
                },
                {
                  label: "电脑整机",
                  children: [
                    {
                      label: "平板电脑"
                    },
                    {
                      label: "台式机"
                    }
                  ]
                },
                {
                  label: "办公",
                  children: [
                    {
                      label: "文具"
                    },
                    {
                      label: "打印机"
                    }
                  ]
                },
                {
                  label: "摄像摄影",
                  children: [
                    {
                      label: "相机"
                    },
                    {
                      label: "单反"
                    }
                  ]
                }
              ]
            },
            {
              label: "服装",
              children: [
                {
                  label: "女装",
                  children: [
                    {
                      label: "浪漫裙装"
                    },
                    {
                      label: "精品上装"
                    }
                  ]
                },
                {
                  label: "男装",
                  children: [
                    {
                      label: "男士外套"
                    },
                    {
                      label: "男士裤装"
                    }
                  ]
                },
                {
                  label: "童装",
                  children: [
                    {
                      label: "亲子装"
                    },
                    {
                      label: "套装"
                    }
                  ]
                },
                {
                  label: "内衣"
                },
                {
                  label: "套装"
                }
              ]
            },
            {
              label: "鞋包配饰",
              children: [{}]
            },
            {
              label: "日用百货",
              children: [{}]
            },
            {
              label: "家居建材",
              children: [{}]
            },
            {
              label: "珠宝手表",
              children: [{}]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      options: [
        {
          value: "选项1",
          label: "在售"
        },
        {
          value: "选项2",
          label: "下架"
        }
      ],
      tableData: [
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pp: "数码"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pp: "数码"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pp: "数码"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pp: "数码"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pp: "数码"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pp: "数码"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pp: "数码"
        }
      ]
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
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
  width: 100%;
}
.box2-1 {
  width: 14%;
  padding-top: 10px;
  padding-left: 10px;
  border: solid 1px #777;
  height: 708px;
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
  align-items: center;
  height: 60px;
  border-bottom: solid 1px #777;
}
.box2-2-1 {
  line-height: 60px;
}
.box2-2-1 p {
  margin-left: 20px;
  font-size: 15px;
  font-weight: 100;
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
.inp3 {
  width: 70px;
  float: right;
  margin-top: -40px;
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
  height: 106px;
  margin-top: 35px;
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
.block {
  float: right;
  margin-top: 40px;
}
.span5 {
  color: aquamarine;
}
.inpp{
    margin-left: -20px;
}
</style>