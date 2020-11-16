<template>
  <div id="app">
    <Header></Header>
    <div class="cbl">
      <el-container style="height: 1120px; border: 1px solid #eee">
        <el-aside width="220px" style="background-color: #333">
          <el-menu class="ys">
            <el-submenu index="1">
              <template slot="title">工作台</template>
              <router-link tag="el-menu-item" to="gzt">工作台</router-link>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">商品</template>
              <router-link tag="el-menu-item" to="xpgl">商品管理</router-link>
              <router-link tag="el-menu-item" to="fbsp">发布商品</router-link>
              <router-link tag="el-menu-item" to="flgl">分类管理</router-link>
              <router-link tag="el-menu-item" to="ppgl">品牌管理</router-link>
              <router-link tag="el-menu-item" to="gggl">规格管理</router-link>
              <router-link tag="el-menu-item" to="lxgl">类型管理</router-link>
              <router-link tag="el-menu-item" to="spzx">商品咨询</router-link>
              <router-link tag="el-menu-item" to="sppj">商品评价</router-link>
              <router-link tag="el-menu-item" to="rxsp">热销商品</router-link>
              <router-link tag="el-menu-item" to="kcyj">库存预警</router-link>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">订单</template>
              <router-link tag="el-menu-item" to="ddgl">订单管理</router-link>
              <router-link tag="el-menu-item" to="dykd">打印快递单</router-link>
              <router-link tag="el-menu-item" to="fhxx">发货信息管理</router-link>
              <router-link tag="el-menu-item" to="thfk">退款/退货订单</router-link>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">运营</template>
                <router-link tag="el-menu-item" to="gly">管理员</router-link>
                <router-link tag="el-menu-item" to="jsgl">角色管理</router-link>
                <router-link tag="el-menu-item" to="ggbw">广告版位</router-link>
                <router-link tag="el-menu-item" to="gggl2">广告管理</router-link>
                <router-link tag="el-menu-item" to="yhj">优惠券</router-link>
                <router-link tag="el-menu-item" to="zxkf">在线客服</router-link>
                <router-link tag="el-menu-item" to="syhb">首页海报</router-link>
                <router-link tag="el-menu-item" to="czxtrz">操作系统日志</router-link>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">用户</template>
              <el-menu-item>用户管理</el-menu-item>
              <el-menu-item>用户等级</el-menu-item>
              <el-menu-item>数据字典</el-menu-item>
              <el-menu-item>字典类型</el-menu-item>
              <el-menu-item>站内信</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">界面</template>
              <el-menu-item>栏目</el-menu-item>
              <el-menu-item>文章</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">设置</template>
              <el-menu-item>全局设置</el-menu-item>
              <el-menu-item>基本设置</el-menu-item>
              <el-menu-item>邮箱设置</el-menu-item>
              <el-menu-item>单点登录设置</el-menu-item>
              <el-menu-item>第三方登录设置</el-menu-item>
              <el-menu-item>支付设置</el-menu-item>
              <el-menu-item>公众号设置</el-menu-item>
              <el-menu-item>配送设置</el-menu-item>
              <el-menu-item>API接口账号管理</el-menu-item>
              <el-menu-item>API接口信息</el-menu-item>
              <el-menu-item>API接口调用记录</el-menu-item>
              <el-menu-item>FTP管理</el-menu-item>
              <el-menu-item>物流公司</el-menu-item>
              <el-menu-item>区域管理</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">优职坊</template>
            </el-submenu>
          </el-menu>
        </el-aside>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-container>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  name: "home",
  components: {
    Header
  }
};
</script>
<style>
.el-menu-item {
  background: #333;
}
.ys {
  background: #333;
}
.el-aside {
  margin-top: 60px;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-submenu__title {
  color: white;
}
.el-menu-item {
  color: white;
}
</style>