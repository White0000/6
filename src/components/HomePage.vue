<template>
  <div class="container">
    <div class="main">
		<div class="addinfo">
    <div>
	<input  class="name" id="name"   v-model="name" placeholder="请输入名字">
	</div>
	<div>
    <input  class="stuid" id="stu_id"  v-model="stu_id" placeholder="请输入id">
	</div>
	<div>
    <input  class="gender" id="gender" v-model="gender" placeholder="请输入性别">
	</div>
    <button class="register_btn" @click="add()">增加卡片</button><br><br>
	</div>
	<div class="bts">
	<button class="register_btn" @click="all()">显示全部</button>
    <button class="register_btn" @click="danshu(stu_list)">分类1</button>
	<button class="register_btn" @click="shuangshu(stu_list)">分类2</button>
	</div>
    <br>
  <br>
  <div class="content" >
	  <div class="offLineTable" style="width: 900px; height: 400px;">
	      <happy-scroll color="rgba(6,6,13,0.3)" size="10" resize>
	        <div class="cont">
    <div class="info"><div  v-if="flag_danshu==1"><Studentinfo-com id="1" class="list" v-for="(stu,index1) in new_list_danshu" :key="index1" :card_item="stu" ></Studentinfo-com></div>
	<div v-else-if="flag_shuangshu==1"><Studentinfo-com id="2" class="list" v-for="(stu,index2) in new_list_shuangshu" :key="index2" :card_item="stu"  ></Studentinfo-com></div>
    <div v-else-if="flag_all==1"><Studentinfo-com id="3" class="list" v-for="(stu,index3) in stu_list" :key="index3" :card_item="stu"></Studentinfo-com></div> 
    </div>
	</div>
	    </happy-scroll>
	</div>
	</div>
	<div class="exit_btn">
    <button class="register_btn" @click="exit_login">退出登陆</button>
	</div>
    </div>
   
  </div>
</template>

<script>
import StudentinfoCom from './Studentinfo.vue';
import { HappyScroll } from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
export default {
  
  name: "Homepageinfo",

  components: {
    StudentinfoCom,//调用组件
	'happy-scroll': HappyScroll
  },
  
  data:function (){
    return{
     message:'已登陆',
     flag_all:1,
     flag_danshu:0,
     flag_shuangshu:0,
     name:'',
     stu_id:'',
     gender:'',
     stu_list:[{
    "_id" : 1,
    "name" : "wym",
    "stuId" : 1234567.1,
    "gender" : 1
},
{
    "_id" :2,
    "name" : "wym",
    "stuId" : 123456.2,
    "gender" : 1
},
{
    "_id" : 3,
    "name" : "wym",
    "stuId" : 123456.3,
    "gender" : 1
},
{
    "_id" : 4,
    "name" : "wym",
    "stuId" : 123456.0,
    "gender" : 1
},
{
    "_id" : 5,
    "name" : "wym",
    "stuId" : 123456.4,
    "gender" : 1
},
{
    "_id" : 6,
    "name" : "wym",
    "stuId" : 123456.5,
    "gender" : 0
},
{
    "_id" : 7,
    "name" : "wym",
    "stuId" : 123456.6,
    "gender" : 0
},
{
    "_id" : 8,
    "name" : "wym",
    "stuId" : 123456.0,
    "gender" : 0
},
{
    "_id" : 9,
    "name" : "wym",
    "stuId" : 123456.7,
    "gender" : 0
},
{
    "_id" :10,
    "name" : "wym",
    "stuId" : 123456.8,
    "gender" : 0
}],
new_list_danshu:[],
new_list_shuangshu:[],
new_list:[],
    }
  },

  

  methods:{
      exit_login(){
          alert("您已退出登录")
          
          this.$router.push({
            path: '/',
          }
        )
      },
    add:function(){
    if(this.name==''||this.stu_id==''||this.gender==''){
      alert('请完善信息');
      }
      else{
        var item ={};
        item.stuId=this.stu_id;
        item.name=this.name;
        item.gender=this.gender;
        this.stu_list.push(item);
        alert('添加成功');
      }
    },
    danshu (stu_list) {
      this.new_list_danshu=[];
       stu_list.forEach((item) => {
         if(item.stuId%2!=0)
         this.new_list_danshu.push(item);//符合条件则加进用来存储单数信息的json数组
         }
      )
      // alert(this.new_list[1]);
      this.flag_all=0; //显示全部
      this.flag_danshu=1;//显示单数
      this.flag_shuangshu=0;//显示双数
    },
    shuangshu (stu_list) {
      this.new_list_shuangshu=[];
       stu_list.forEach((item) => {
         if(item.stuId%2==0)
         this.new_list_shuangshu.push(item);//符合条件则加进用来存储单数信息的json数组
         }
      )
      // alert(this.new_list[1]);
      this.flag_all=0; //显示全部
      this.flag_danshu=0;//显示单数
      this.flag_shuangshu=1;//显示双数
    },
    all () {
      //this.new_list=stu_list;
      this.flag_all=1; //显示全部
      this.flag_danshu=0;//显示单数
      this.flag_shuangshu=0;//显示双数
    },

  }
}
</script>

<style scoped>

.addinfo{
	align-items: center;
	margin-top: 1.25rem;
	margin-left: 50rem;
}	
	
.bts{
	display: flex;
	align-items: center;
	margin-left: 55px;
	
}

input{
	outline-style: none;
	border: 0;
	border-bottom: 0.0625rem solid #E9E9E9;
	background-color: transparent;
	height: 1.25rem;
	font-family: sans-serif;
	font-size: 0.9375rem;
	color: #695fd0;
	font-weight: bold;
}
input:focus{
	border-bottom: 0.125rem solid #695fd0;
	background-color: transparent;
	transition: all 0.2s ease-in;
	font-family: sans-serif;
	font-size: 0.9375rem;
	color: #695fd0;
	font-weight: bold;
}

input:hover{
	border-bottom: 0.125rem solid #695fd0;
	background-color: transparent;
	transition: all 0.2s ease-in;
	font-family: sans-serif;
	font-size: 0.9375rem;
	color: #695fd0;
	font-weight: bold;
}

input:-webkit-autofill{
	box-shadow: 0 0 0px 1000px  #89AB9E inset !important;
	-webkit-text-fill-color: #695fd0;
}

input:-webkit-autofill::first-line {
	font-size: 15px;
	font-weight:bold;
}

.content{
	display: flex;
	height: 400px;
	width: 900px;
	margin-left: 60px;
	overflow: auto;
}

.exit_btn{
	margin-left: 50rem;
}
.register_btn{
    background-color: #695fd0; /* Green */
    border: none;
    color: #FAFAFA;
    padding: 7px 35px;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    border-radius: 20px;
    outline:none;
    margin-top:10px;
	margin-left: 20px;
}
.register_btn:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    cursor: pointer;
     background-color: #f25022;
    transition: all 0.2s ease-in;
}
.list{
   
  width: 250px;
  height: 80px;
  padding:10px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
  border-radius: 6px;
  margin: 1.5rem;
  margin:10px;
  display:inline-block;
} 

.main{
    position:absolute;
    width:1000px;
    height:700px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    box-shadow: 0 12px 16px 0  rgba(0,0,0,0.24), 0 17px 50px 0 #4E655D;
}

</style>