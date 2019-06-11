<template>
    <div class="box">
        <ul class="box-two clearfix">
            <li>执法部门</li>
            <li>任务类别</li>
            <li>检查开始时间</li>
            <li>检查结束时间</li>
        </ul>
        <ul class="box-three">
            <li v-for="item in zhifajilulist" :key="item.index" class="box-three-li">
                <span>{{item.cname}}</span>
                <span>{{item.ctype}}</span>
                <span>{{item.cstart}}</span>
                <span>{{item.cend}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'One',
    data(){
        return{
             zhifajilulist:[
                 {
                   cname:'开发区环保局',ctype:'--',cstart:'2017-09027',cend:'2017-0927'
                 },
                  {
                   cname:'经济开发区环保局',ctype:'--',cstart:'2017-09027',cend:'2017-0927'
                 },
                 {
                   cname:'开发区环保局',ctype:'--',cstart:'2017-09027',cend:'2017-0927'
                 },
                 {
                   cname:'经济开发区环保局',ctype:'--',cstart:'2017-09027',cend:'2017-0927'
                 },
                 {
                   cname:'开发区环保局',ctype:'--',cstart:'2017-09027',cend:'2017-0927'
                 },
                 {
                   cname:'经济开发区环保局',ctype:'--',cstart:'2017-09027',cend:'2017-0927'
                 },
                 {
                   cname:'开发区环保局',ctype:'--',cstart:'2017-09027',cend:'2017-0927'
                 },
                 {
                   cname:'经济开发区环保局',ctype:'--',cstart:'2017-09027',cend:'2017-0927'
                 }
             ]
        }
    }
}
</script>
<style scoped>
   *{
       margin:0;
       padding: 0;
   }
   .clearfix::after{
       display: block;
       clear: both;
       content: "";
       visibility: hidden;
       height: 0;
   }
   .clearfix{
       zoom: 1;
   }
   ul li {
       list-style: none;
   }
   .box-two{
       background-color: #ECECEC;
   }
   .box-two>li{
       display: block;
       float: left;
       border: 1px solid #cccccc;
       height: 22px;
       font-size: 12px;
       text-align: center;
       color: #999999;
       
   }
   .box-two>li:nth-child(1){
       width:30%;
   }
   .box-two>li:nth-child(2){
       width: 18%;
   }
    .box-two>li:nth-child(3){
        width: 24%;
    }
     .box-two>li:nth-child(4){
         width: 24%;
     }

     .box-three-li{
         width: 100%;
         height: 22px;
     }
     .box-three-li>span{
         display: block;
         float: left;
         font-size: 12px;
     }
     .box-three-li>span:nth-child(1){
          width:30%;
     }
     .box-three-li>span:nth-child(2){
          width:18%;
     }
     .box-three-li>span:nth-child(3){
          width:24%;
     }
     .box-three-li>span:nth-child(4){
          width:24%;
     }

</style>
