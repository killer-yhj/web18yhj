<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>公众号设置</li>
      </ul>
    </div>
    <div class="box2">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公众号设置" name="first" style="height:650px">
          <p class="p3">
            <span class="span1">App Key</span>
            <el-input v-model="input" class="inp1" placeholder="wxd3c98c697cc40add"></el-input>
          </p>
          <p class="p2">
            <span class="span1">App Secret</span>
            <el-input
              v-model="input"
              class="inp1"
              placeholder="v54wscXDoENwRsiI44ELCkhN25awUd1fBybFrlrUF01"
            ></el-input>
          </p>
          <p class="p2">
            <span class="span1">App Token</span>
            <el-input v-model="input" class="inp1" placeholder="livenot12"></el-input>
          </p>
          <p class="p2">
            <span class="span3">活动说明</span>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="你好！欢迎来到单店商城后台管理系统！"
              class="inp2"
              v-model="textarea"
            ></el-input>
          </p>
          <p class="p2">
            <span class="span2">微信二维码</span>
            <img src="../../QQ图片20201119134023.png" class="tu1" />
          </p>
          <el-button class="but2" type="success">修改</el-button>
          <el-button>重置</el-button>
        </el-tab-pane>
        <el-tab-pane label="自定义菜单" name="second" style="height:420px">
          <div class="box3">
            <el-button type="success" class="but3">+添加自定义菜单</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="ID" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="菜单名称"></el-table-column>
            <el-table-column prop="address" label="操作" show-overflow-tooltip>
              <img src="../../QQ图片20201114090728.png" class="tu3" />
              <img src="../../QQ图片20201113104856.png" class="tu3" />
              <img src="../../QQ图片20201113104901.png" class="tu3" />
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button>同步到微信菜单</el-button>
            <el-button>批量删除</el-button>
            <span class="span4">每页显示</span>
            <input type="text" class="tex" />
            <span class="span4">条，然后输入回车</span>
            <span class="span5">共40条</span>
            <div class="block bl1">
              <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="自定义回复" name="third" style="height:420px">
          <div class="box3">
            <el-button type="success" class="but3">+添加自定义回复</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="ID" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="菜单名称"></el-table-column>
            <el-table-column prop="gjz" label="关键字"></el-table-column>
            <el-table-column prop="address" label="操作" show-overflow-tooltip>
              <img src="../../QQ图片20201114090728.png" class="tu3" />
              <img src="../../QQ图片20201113104856.png" class="tu3" />
              <img src="../../QQ图片20201113104901.png" class="tu3" />
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button>同步到微信菜单</el-button>
            <el-button>批量删除</el-button>
            <span class="span4">每页显示</span>
            <input type="text" class="tex" />
            <span class="span4">条，然后输入回车</span>
            <span class="span5">共40条</span>
            <div class="block bl1">
              <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="默认回复" name="fourth" style="height:420px">
          <p class="p2">
            <span class="span1">消息类型</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </p>
          <p class="p2">
            <span class="span6">*标题</span>
              <el-input v-model="input" class="inp1" placeholder="livenot12"></el-input>
          </p>
          <p class="p2">
             <span class="span7">内容</span>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              class="inp2"
              v-model="textarea"
            ></el-input>
          </p>
            <el-button class="but4" type="success">修改</el-button>
          <el-button>重置</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
       options: [{
          value: '选项1',
          label: '带图文链接信息'
        }, {
          value: '选项2',
          label: '内容加关键字提示消息'
        }, {
          value: '选项3',
          label: '仅有内容消息'
        }],
      tableData: [
        {
          date: "1",
          name: "欢迎您",
          gjz: "heelo"
        },
        {
          date: "1",
          name: "欢迎您",
          gjz: "heelo"
        },
        {
          date: "1",
          name: "欢迎您",
          gjz: "heelo"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  background-color: rgba(240, 244, 246, 1);
}
.el-tabs--top {
  margin-bottom: -14px;
}
.inp1 {
  width: 300px;
}
.span1 {
  color: #777;
  font-size: 15px;
  margin-left: 40px;
  margin-right: 20px;
  margin-top: 30px;
}
.span2 {
  color: #777;
  font-size: 15px;
  margin-left: 45px;
  margin-right: 20px;
  margin-top: 30px;
}
.span6 {
  color: #777;
  font-size: 15px;
  margin-left: 60px;
  margin-right: 20px;
  margin-top: 30px;
}
.span7 {
  color: #777;
  font-size: 15px;
  margin-left: 65px;
  margin-right: 20px;
  margin-top: 30px;
}
.span3 {
  color: #777;
  font-size: 15px;
  margin-left: 60px;
  margin-right: 20px;
  margin-top: 30px;
}
.p2 {
  margin-top: 20px;
}
.p3 {
  margin-top: 20px;
  margin-left: 20px;
}
.inp2 {
  width: 300px;
}
.app >>> .el-textarea__inner {
  height: 80px;
}
.tu1 {
  position: absolute;
  width: 200px;
}
.but2 {
  margin-top: 200px;
  margin-left: 450px;
  margin-right: 20px;
}
.but4{
   margin-left: 450px;
  margin-right: 20px;
  margin-top: 40px;
}
.box3 {
  width: 100%;
  display: flex;
  align-items: center;
}
.but3 {
  margin-left: 30px;
  margin-bottom: 15px;
}
.span4 {
  font-size: 14px;
  color: #777;
  margin-right: 10px;
  margin-left: 10px;
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
.span5 {
  font-size: 15px;
  color: #777;
  margin-left: 210px;
}
.tu3 {
  width: 10%;
  margin-right: 10px;
}
</style>