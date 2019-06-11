<template>
    <div class="container">
        <ul class="clearfix container-ul">
            <li v-for="item in zhifamingxilist" :key="item.index">
                <span>{{item.cname}}</span>
                <span>{{item.ccontent}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Two',
    data(){
        return{
            zhifamingxilist:[
                {cname:'执法部门:',ccontent:'开发区环保局'},
                {cname:'执法人员:',ccontent:'雷振坤；韩坤；李钊'},
                {cname:'检察结论:',ccontent:'未发现违法行为'},
                {cname:'生产状态:',ccontent:'正常生产'},
                {cname:'排污情况:',ccontent:'正常排放'},
                {cname:'企业负责人:',ccontent:'白怀磊'},
                {cname:'治理设施状态:',ccontent:'--'},
                {cname:'改进状态:',ccontent:'无'},
            ]
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul li{
    list-style: none;
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
   .container-ul>li{
       width: 50%;
       height: 22px;
       float: left;
       font-size: 12px
   }
    .container-ul>li>span:nth-child(1){
        font-weight: 700;
        color: #999999
    }
    .container-ul>li>span:nth-child(2){
        color: #999999
    }
</style>
