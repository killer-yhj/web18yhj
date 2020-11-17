<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>商品</li>
        <li>>></li>
        <li>商品管理</li>
      </ul>
    </div>
    <p class="p1">分类列表</p>
    <div class="box2">
      <div class="box2-1">
        <span class="el-icon-refresh span1" @click="shuaxin">刷新</span>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="box2-2">
        <div class="box2-2-1">
          <el-row>
            <template>
              <el-select v-model="value" placeholder="在售">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
            <el-button size="small">推荐</el-button>
            <el-button size="small">热卖</el-button>
            <el-button size="small">调价</el-button>
            <el-button size="small">商品</el-button>
            <span class="span2">商品名称：</span>
            <el-input v-model="input" class="inp1"></el-input>
            <span class="span3">品牌：</span>
            <el-input v-model="input" class="inp2"></el-input>
            <el-button type="success" class="inp3">查询</el-button>
          </el-row>
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
              <el-table-column label="图片">
                <template>
                  <img src="../../u8391.jpg" class="tu2" />
                </template>
              </el-table-column>
              <el-table-column prop="name" label="商品名称" width="250"></el-table-column>
              <el-table-column prop="address" label="分类" show-overflow-tooltip></el-table-column>
              <el-table-column prop="pp" label="品牌" show-overflow-tooltip></el-table-column>
              <el-table-column prop="jg" label="价格" show-overflow-tooltip></el-table-column>
              <el-table-column prop="kc" label="库存" show-overflow-tooltip></el-table-column>
              <el-table-column prop="cz" label="操作" width="100" show-overflow-tooltip>
                <img src="../../QQ图片20201113104856.png" class="tu3" />
                <img src="../../QQ图片20201113104901.png" class="tu4" />
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="box2-3">
          <el-button class="but3">批量删除</el-button>
          <span class="span4">每页显示</span>
          <input type="text" class="tex" />
          <span class="span4">条，然后输入回车</span>
          <div class="block">
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
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
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pp: "品牌",
          jg: "3100",
          kc: "5"
        },
        {
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pp: "品牌",
          jg: "3100",
          kc: "5"
        },
        {
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pp: "品牌",
          jg: "3100",
          kc: "5"
        },
        {
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pp: "品牌",
          jg: "3100",
          kc: "5"
        },
        {
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pp: "品牌",
          jg: "3100",
          kc: "5"
        },
        {
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pp: "品牌",
          jg: "3100",
          kc: "5"
        },
        {
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pp: "品牌",
          jg: "3100",
          kc: "5"
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
.tex {
  height: 30px;
  width: 60px;
  outline: none;
  border: solid 1px #777;
}
.block{
  float: right;
  margin-top: 40px;
}
</style>