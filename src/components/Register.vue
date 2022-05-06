<template>
  <div class="container">
    <div class="main">
        <!-- 整个注册盒子 -->
      <div class="loginbox">
          <!-- 左侧的注册盒子 -->
          <div class="loginbox-in">
          <div class="userbox"> 
           <span class="iconfont">&#xe715;</span> 
           <input  class="user" id="user"  v-model="name" placeholder="用户名">
           </div>
          <br>
          <div class="pwdbox">
            <span class="iconfont">&#xe73a;</span>
           <input  class="pwd"  id="password" v-model="pwd" type="password"  placeholder="密码">
           </div>
          <br>
          <div class="pwdbox">
            <span class="iconfont">&#xe73a;</span>
           <input  class="pwd"  id="re_password"  v-model="repwd" type="password"  placeholder="确认密码">
           </div>
           
           <br>
           <button type="primary"  class="register_btn" @click="register">注册</button>
		   <router-view></router-view>
     </div>
 
        <!-- 右侧的注册盒子 -->
         <div class="background">
            
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  
  data:function (){
    return{
      name:'',
      pwd:'',
      repwd:'',
      user_list:[
      { 
        username:'admin',
        password:'123'
      },

      ]
    }
  },
  methods:{
    
    register(){  
      var flag=1;
      //如果用户名已存在，则需要换一个用户名
      this.user_list.forEach((item) => {
         if(item.username==this.name){
           alert('用户已存在,请换一个用户名');
           flag=0;
         }
        }
      )
      //如果用户名不存在，则继续判断
      if(flag){
        //判断两次输入的密码是否一致，如果密码不一致，则需要重新输入
        if(this.pwd!=this.repwd){
        alert('两次输入的密码不一致,请重新输入');
        }
        //如果密码也一直，则存到用户列表里面
        else {
          var item ={};
          //获取到用户名
          item.username=this.name;
          //获取到密码
          item.password=this.pwd;
          //存储到用户列表
          this.user_list.push(item);
          alert('注册成功');
            this.user_list.forEach((item) => {
               console.log( item.username);
         })
        
          this.$router.push({
            path: '/Login',
            query: {
              list: this.user_list,}
          })
        }
      }
      
    }
  }
}
</script>

<style scoped>

.loginbox{
	display: flex;
	position: absolute;
	width: 50rem;
	height: 25rem;
	top: 40%;
	left: 50%;
	transform: translate(-50%,-50%);
	box-shadow:0 12px 16px 0  rgba(0,0,0,0.24), 0 17px 50px 0 #ffffff;
}

.loginbox-in{
	background-color: #FFFFFF;
	width: 15rem;
}

.userbox{
	margin-top: 7.5rem;
	height: 1.875rem;
	width: 14.375rem;
	display: flex;
	margin-left: 1.5625rem;
}

.pwdbox{
	height: 1.875rem;
	width: 14.0625rem;
	display: flex;
	margin-left: 1.5625rem;
}

.background{
	width: 35.625rem;
	background-image: url(../img/code.png);
	background-size: cover;
	font-family: sans-serif;
}

.title{
	margin-top: 23.125rem;
	margin-left: 3.125rem;
	font-weight: bold;
	font-size: 0.9375rem;
	color: #FFFFFF;
}

.title:hover{
	font-size: 1.3125rem;
	transition: all 0.4s ease-in-out;
	cursor: pointer;
}

.user-text{
	position: left;
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

.log-box{
	font-size: 0.75rem;
	display: flex;
	justify-content: space-between;
	width: 11.875rem;
	margin-left: 1.875rem;
	color: #4E655D;
	margin-top: -0.3125rem;
	align-items: center;
}

.login_btn{
	background-color:#695fd0;
	border: none;
	margin-left: 3rem;
	color: #FAFAFA;
	padding: 0.3125rem 1.375rem;
	text-align: center;
	text-decoration: none;
	font-size: 0.8125rem;
	border-radius: 1.25rem;
	outline: none;
}

.login_btn:hover{
	box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
	cursor: pointer;
	 background-color: #f25022;
	  transition: all 0.2s ease-in;
}

.warn{
	margin-top: 3.75rem;
	margin-right: 7.5rem;
	margin-left: 5.625rem;
	margin-bottom: 0.3125rem;
	font-weight: bold;
	font-size: 1.0625rem;
}

.register_btn{
    background-color: #695fd0; /* Green */
    border: none;
	margin-left: 120px;
    color: #FAFAFA;
    padding: 7px 35px;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    border-radius: 20px;
    outline:none;
}
.register_btn:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    cursor: pointer;
     background-color: #f25022;
    transition: all 0.2s ease-in;
}

@font-face {
  font-family: 'iconfont';
  src: url('./font/iconfont.ttf') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-people:before {
  content: "\e715";
}

.icon-unlock:before {
  content: "\e73a";
}
</style>