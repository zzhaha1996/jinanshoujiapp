<template>
    <div class="box">
       <div class='box-top'>
            <span class="left top-left">2013-20-29</span>
            <span class="right top-right">已结案</span>
       </div>
       <ul class="box-bottom">
           <li v-for='item in chufalist' :key="item.index" class="bottom-li">
               <span class="left bottom-left">{{item.cname}}</span>
               <span class='right bottom-right'>{{item.ccontent}}</span>
           </li>
       </ul>
    </div>
</template>
<script>
    export default {
        name: "ENTHuanjingchufa"
      ,data(){
        return{
            chufalist:[
                {cname:'主要处罚行为:',ccontent:'违反放射性环境管理制度'},
                {cname:'罚款金额:',ccontent:'10'},
                {cname:'行政命令种类:',ccontent:'责令停止违法行为'},
                {cname:'处罚种类:',ccontent:'罚款；没收违法所得，没收非法财务'},
                {cname:'处罚依据:',ccontent:'《放射性同位素与射线装置安全和防护条例》第五十二条的规定'},
                {cname:'处罚立体所属级别:',ccontent:'省级'},
                {cname:'立案号:',ccontent:'鲁环立审[2013]12号'},
                {cname:'决定书文号:',ccontent:'鲁环罚字〔2013〕12号'},
                {cname:'备注:',ccontent:'xxxxx'}, 
            ]

        }
      },methods:{

      },created(){

      },mounted(){

      },destroyed(){

      }
    }
</script>
<style scoped>
ul li{
  list-style: none;
}
*{
  margin:0;
  padding:0;
  }
   .box{
       border-radius: 5px;
       border: 1px solid #cccccc;

   }
   .box-top{
       border-bottom: 1px solid #D2D2D2;
   }
   .ritht{
       float: right;
   }
   .left{
       float: left;
   }
   .top-right{
     display: block;
     color: #80C269;
     text-align: right;
     margin-bottom: 3px;
     margin-top: 3px;
     margin-right: 5px;
   }
   .top-left{
     color: #999999;
     margin-left: 5px;
   }
   .bottom-li{
     margin: 8px 5px
   }
   .bottom-left{
     font-weight: 700;
       display: block;
       text-align: left;
        color: #666666;
   }
   .bottom-right{
     display: block;
     text-align: left;
     color: #666666;
   }
</style>

