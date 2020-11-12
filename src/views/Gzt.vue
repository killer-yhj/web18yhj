<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>工作台</li>
      </ul>
    </div>
    <div class="box2">
      <div class="box2-1">
        <p class="el-icon-coin" style="color:#fff"></p>
        <p>0</p>
        <p>今日营销额</p>
      </div>
      <div class="box2-2">
        <p class="el-icon-edit-outline" style="color:#fff"></p>
        <p>0</p>
        <p>今日订单数</p>
      </div>
      <div class="box2-3">
        <p class="el-icon-shopping-bag-2" style="color:#fff"></p>
        <p>50</p>
        <p>出售商品数</p>
      </div>
      <div class="box2-4">
        <p class="el-icon-user" style="color:#fff"></p>
        <p>599</p>
        <p>总会员数</p>
      </div>
    </div>
    <div class="box3">
      <div class="box3-1">
        <div class="box3-1-1">
          <p class="p1">待处理</p>
          <ul class="ul2">
            <li class="el-icon-truck"></li>
            <li class="el-icon-bank-card"></li>
            <li class="el-icon-s-shop"></li>
            <li class="el-icon-s-home"></li>
            <li class="el-icon-chat-dot-square"></li>
          </ul>
          <ul class="ul3">
            <li>代发货</li>
            <li>待付款</li>
            <li>退货/退款</li>
            <li>退货/退款</li>
            <li>商品咨询</li>
          </ul>
          <ul class="ul4">
            <li>1057</li>
            <li>1022</li>
            <li>13</li>
            <li>1</li>
            <li>68</li>
          </ul>
        </div>
        <div class="box3-1-2">
          <p class="p1">常用菜单</p>
          <img src="../../QQ图片20201111141711.png" class="tu1" />
          <ul class="ul5">
            <li>商品分布</li>
            <li>首页轮播图</li>
            <li>优惠券</li>
            <li>在线客服</li>
            <li>文章发布</li>
          </ul>
        </div>
      </div>
      <div class="box3-2">
             <p class="p1">热销商品
               <ul class="ul6">
                    <li>月</li>
                    <li>年</li>
                    <li>总</li>
               </ul>
             </p>
              <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="商品名称"
        width="306">
      </el-table-column>
      <el-table-column
        prop="name"
        label="分类"
        width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        label="销量"
        width="80">
      </el-table-column>
    </el-table>
  </template>
      </div>
    </div>
    <div class="box4">
         <p class="p1">销售额统计
           <ul class="ul7">
                    <li>月</li>
                    <li>年</li>
          </ul>
          <img src="../../QQ图片20201112092206.jpg" class="tu2">
         </p>
    </div>
    <div class="box5">
      <div class="box5-1">
          <p class="p3">生成索引</p>
          <p class="p4">系统初始时必须生成索引。生成后可加快商品的搜索速度，减小访问数据库的压力。 索引只需要生成一次即可。</p>
      </div>
      <div class="box5-2">
          <p class="p5"><img src="../../QQ图片20201112135558.png" class="tu3"></p>
          <div class="p6">
            <p class="p7"><span class="span1">当前系统版本: </span><span class="span2"> jspgou 单店版 5.0版</span></p>
            <p class="p7"><span class="span1">最近登录时间:  </span><span class="span2"> 2018-07-29 15:18:30</span></p>
            <span class="span1">内存: </span><span class="span2">已用 508MB </span>
            <span class="span3">剩余 78MB</span><span class="span4">最大3531MB</span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     data() {
        return {
          tableData: [{
            date: '恋爱女王节妈咪版系列复古的灵感挑战你的高腰牛仔裤',
            name: '女装',
            address: '3'
          }, {
            date: '【低价疯抢】Apple iPhone 6 32G',
            name: '三星',
            address: '1'
          }, {
            date: 'Apple iPad Air 2 平板电脑',
            name: '平板电脑',
            address: '1'
          }]
        }
      }
};
</script>
<style scoped>
.app {
  background: rgb(235, 228, 228);
  width: 100%;
  height: 100%;
}
.box1 {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 60px;
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
.box2 {
  height: 100px;
  display: flex;
  align-items: center;
}
.box2-1 {
  background-color: rgb(3, 182, 3);
  width: 230px;
  height: 100px;
}
.box2-1 p:nth-of-type(1) {
  float: left;
  font-size: 40px;
  margin-top: 20px;
  margin-left: 20px;
}
.box2-1 p:nth-of-type(2) {
  float: right;
  font-size: 35px;
  margin-right: 20px;
  margin-top: 10px;
  color: white;
}
.box2-1 p:nth-of-type(3) {
  float: right;
  margin-top: 60px;
  margin-right: -20px;
  font-size: 18px;
  color: white;
}

.box2-2 {
  background-color: rgba(254, 201, 43, 1);
  width: 230px;
  height: 100px;
  margin-left: 40px;
}
.box2-2 p:nth-of-type(1) {
  float: left;
  font-size: 40px;
  margin-top: 20px;
  margin-left: 20px;
}
.box2-2 p:nth-of-type(2) {
  float: right;
  font-size: 35px;
  margin-right: 20px;
  margin-top: 10px;
  color: white;
}
.box2-2 p:nth-of-type(3) {
  float: right;
  margin-top: 60px;
  margin-right: -20px;
  font-size: 18px;
  color: white;
}

.box2-3 {
  background-color: rgba(45, 163, 251, 1);
  width: 230px;
  height: 100px;
  margin-left: 40px;
}
.box2-3 p:nth-of-type(1) {
  float: left;
  font-size: 40px;
  margin-top: 20px;
  margin-left: 20px;
}
.box2-3 p:nth-of-type(2) {
  float: right;
  font-size: 35px;
  margin-right: 20px;
  margin-top: 10px;
  color: white;
}
.box2-3 p:nth-of-type(3) {
  float: right;
  margin-top: 60px;
  margin-right: -40px;
  font-size: 18px;
  color: white;
}

.box2-4 {
  background-color: rgba(193, 114, 216, 1);
  width: 230px;
  height: 100px;
  margin-left: 40px;
}
.box2-4 p:nth-of-type(1) {
  float: left;
  font-size: 40px;
  margin-top: 20px;
  margin-left: 20px;
}
.box2-4 p:nth-of-type(2) {
  float: right;
  font-size: 35px;
  margin-right: 20px;
  margin-top: 10px;
  color: white;
}
.box2-4 p:nth-of-type(3) {
  float: right;
  margin-top: 60px;
  margin-right: -60px;
  font-size: 18px;
  color: white;
}

.box3 {
  height: 350px;
  width: 100%;
  margin-top: 20px;
}
.box3-1 {
  float: left;
  width: 45%;
  height: 100%;
}
.box3-2 {
  float: right;
  width: 45%;
  height: 100%;
  background: white;
}
.box3-1-1 {
  height: 45%;
  width: 100%;
  background: white;
}
.box3-1-2 {
  margin-top: 30px;
  height: 45%;
  width: 100%;
  background: white;
}
.p1 {
  height: 30px;
  line-height: 30px;
  text-indent: 10px;
  border-bottom: solid 1px #666666;
  font-size: 15px;
  padding: 5px 0px;
}
.ul2 {
  margin-top: 25px;
  margin-left: 40px;
}
.ul2 li {
  display: inline;
  list-style: none;
  color: grey;
  font-size: 30px;
  margin-right: 50px;
}
.ul2 li:nth-of-type(4) {
  margin-left: 15px;
}
.ul2 li:nth-of-type(5) {
  margin-left: 10px;
}
.ul3 {
  margin-left: 35px;
}
.ul3 li {
  display: inline;
  list-style: none;
  font-size: 12px;
  color: grey;
  margin-right: 40px;
}
.ul3 li:nth-of-type(2){
  margin-left: 5px;
}
.ul4 {
  margin-left: 35px;
  margin-top: 6px;
}
.ul4 li {
  display: inline;
  list-style: none;
  margin-right: 42px;
}
.ul4 li:nth-of-type(3) {
  margin-left: 10px;
}
.ul4 li:nth-of-type(4) {
  margin-left: 40px;
}
.ul4 li:nth-of-type(5) {
  margin-left: 35px;
}
.tu1 {
  width: 95%;
  margin-left: 4px;
  margin-top: 20px;
}
.ul5{
    margin-left: 12px;
}
.ul5 li{
    display: inline;
    list-style: none;
    font-size: 13px;
    color: grey;
    margin-right: 30px;
}
.ul5 li:nth-of-type(2){
    margin-left: 4px;
}
.ul5 li:nth-of-type(3){
    margin-left: 12px;
}
.ul5 li:nth-of-type(4){
    margin-left: 20px;
}
.ul5 li:nth-of-type(5){
    margin-left: 10px;
}
.ul6{
  float: right;
  margin-right: 10px;
}
.ul6 li{
  display: inline;
  list-style: none;
  font-size: 14px;
  padding: 3px 12px;
  border: solid 1px #777;
  cursor: pointer;
}
.ul6 li:nth-of-type(1){
  background: #0f7762;
  color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.ul6 li:nth-of-type(3){
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.ul6 li:nth-of-type(1):hover{
  background: rgba(212, 210, 210, 0.699);
}
.ul6 li:nth-of-type(2):hover{
  background: #0f7762;
  color: white;
}
.ul6 li:nth-of-type(3):hover{
  background: #0f7762;
    color: white;
}
.el-table tr{
  background: grey;
}
.box4{
  width: 100%;
  height: 380px;
  background: white;
  margin-top: 20px;
}
.ul7{
  float: right;
  margin-right: 10px;
}
.ul7 li{
  display: inline;
  list-style: none;
  font-size: 14px;
  padding: 3px 12px;
  border: solid 1px #777;
  cursor: pointer;
}
.ul7 li:nth-of-type(1){
  background: #0f7762;
  color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.ul7 li:nth-of-type(2){
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.ul7 li:nth-of-type(1):hover{
  background: rgba(212, 210, 210, 0.699);
}
.ul7 li:nth-of-type(2):hover{
  background: #0f7762;
  color: white;
}
.tu2{
  width: 100%;
  margin-top: 20px;
}
.box5{
  margin-top: 20px;
}
.box5-1{
  width: 45%;
  height: 110px;
  background: white;
  float: left;
}
.box5-2{
  width: 45%;
  height: 110px;
  background: white;
  float: right;
}
.p3{
     color: white;
    background: #3a8ee6;
    width: 65px;
    padding: 5px 10px;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 3px;
    cursor: pointer;
}
.p3:hover{
  background: blue;
}
.p4{
  font-size: 12px;
  margin-left: 20px;
  margin-top: 10px;
}
.p5{
  float: left;
}
.p6{
  float: left;
  margin-top: 10px;
  margin-left: -30px;
}
.tu3{
      width: 60%;
    margin-top: 10px;
}
.span1{
  font-size: 14px;
  color: grey;
}
.span2{
  font-size: 14px;
}
.p7{
  margin-bottom: 10px;
}
.span3{
  font-size: 14px;
   color: yellowgreen;
   margin-left: 10px;
}
.span4{
  font-size: 14px;
  color:chocolate;
   margin-left: 10px;
}
</style>