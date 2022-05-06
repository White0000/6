<template>
	<div class="container">
	  <div class="main">
		  <div class="loginbox">
			<div class="loginbox-in">
			<div class="userbox">
					<span class="iconfont">&#xe715;</span>
					<input class="user" id="user" v-model="name" placeholder="用户名"/>
			</div>
			
				<br>
				<div class="pwdbox">
				  <span class="iconfont">&#xe73a;</span>
				 <input  class="pwd" id ="password" type="password"  v-model="pwd" placeholder="密码">
				 </div>
				
				<br>
				<div class="log-box">
				<button type="primary"  class="login_btn" @click="login()">Login</button>
				
				</div>
				<br>
				<div class="warn">@bh</div>
				<button type="primary"  class="register_btn" @click="register()">若无账号点击注册</button>
					<router-view></router-view>
				</div>
			<div class="background">
				</div>
			</div>
		</div>
	</div>
	</div>
    
</template>

<script>
	
export default {
  name: "Login",
  
  data:function (){
    return{
      name:'',
      pwd:'',
      user_list:[
      { 
        id:'1',
        username:'admin',
        password:'123'
      },
      ]
     
    }
  },
    
  methods:{
   
    register(){this.$router.push("Register")},

    getParams: function () {
             var routerParams = this.$route.query.list;
             this.user_list = routerParams;
     },
    login(){
        var flag=0;
        //如果是有参数传递
        if(!this.$route.query.list){
        this.user_list.forEach((item) => {
         if(item.username==this.name){
           if(item.password==this.pwd){
            flag=1;//用户存在，并且密码正确
          }
         }
        }
      )
      if(flag==1){
        //可以跳转到主页
        this.$router.push("HomePage");
      }
      else{
        alert("用户名或密码错误，请重新输入");
      }
      }
      else{
        // 取到路由带过来的参数
        var routerParams = this.$route.query.list;
        this.user_list = routerParams;
        this.user_list.forEach((item) => {
         if(item.username==this.name){
           if(item.password==this.pwd){
            flag=1;//用户存在，并且密码正确
           }
         }
        }
      )
      if(flag==1){
        //可以跳转到主页
        // this.$router.push("Homepage");
        this.$router.push({
            path: '"HomePage',
          }
        )
      }
      else{
        alert("用户名或密码错误，请重新输入");}
      }
    },

  },
   
   
}

</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loginbox{
	display: flex;
	position: absolute;
	width: 50rem;
	height: 25rem;
	top: 45%;
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
	background-color: transparent;
	border: none;
	text-decoration: none;
	font-size: 12px;
	 color:#4E655D;
	font-size:12px;
	text-decoration:underline;
	display: flex;
	margin-left:60px;
	outline:none;
}

.register_btn:hover{
    font-weight:bold;
    cursor: pointer;
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
